// SPDX-License-Identifier: UNLICENSED

// YieldBox - TapiocaBar modified

// Copyright (c) 2021, 2022 BoringCrypto - All rights reserved
// Twitter: @Boring_Crypto

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;
import './interfaces/IWETH.sol';
import './interfaces/IStrategy.sol';
import './interfaces/IERC1155.sol';
import './interfaces/IERC1155TokenReceiver.sol';
import '@boringcrypto/boring-solidity/contracts/libraries/Base64.sol';
import '@boringcrypto/boring-solidity/contracts/libraries/BoringMath.sol';
import '@boringcrypto/boring-solidity/contracts/libraries/BoringAddress.sol';
import '@boringcrypto/boring-solidity/contracts/libraries/BoringERC20.sol';
import '@boringcrypto/boring-solidity/contracts/Domain.sol';
import '@boringcrypto/boring-solidity/contracts/BoringBatchable.sol';
import '@boringcrypto/boring-solidity/contracts/BoringOwnable.sol';

// An asset is a token + a strategy
struct Asset {
    uint96 standard;
    address contractAddress;
    IStrategy strategy;
    uint256 tokenId;
}

/// @title TapiocaBar
/// @author BoringCrypto, Keno
/// modifier by Tapioca
/// @notice TapiocaBar is a vault for tokens. The stored tokens can assigned to strategies.
/// Yield from this will go to the token depositors.
/// Any funds transfered directly onto TapiocaBar will be lost, use the deposit function instead.
contract TapiocaBar is Domain, BoringBatchable, IERC1155TokenReceiver, BoringOwnable {
    using BoringMath for uint256;
    using BoringAddress for address;
    using BoringERC20 for IERC20;
    using Base64 for bytes;

    // ************** //
    // *** EVENTS *** //
    // ************** //

    // TODO: Add events

    // EIP-1155 events
    event TransferSingle(address indexed _operator, address indexed _from, address indexed _to, uint256 _id, uint256 _value);
    event TransferBatch(address indexed _operator, address indexed _from, address indexed _to, uint256[] _ids, uint256[] _values);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
    event URI(string _value, uint256 indexed _id);

    // ******************************** //
    // *** CONSTANTS AND IMMUTABLES *** //
    // ******************************** //

    IERC20 private immutable wethToken;

    uint96 private constant EIP20 = 0;
    uint96 private constant EIP721 = 1;
    uint96 private constant EIP1155 = 2;

    // ***************** //
    // *** VARIABLES *** //
    // ***************** //

    // ids start at 1 so that id 0 means it's not yet registered
    mapping(uint96 => mapping(address => mapping(IStrategy => mapping(uint256 => uint256)))) public ids;
    Asset[] public assets;

    // Balance per asset per address/contract in shares
    mapping(uint256 => mapping(address => uint256)) public shares;

    // Total shares per asset
    mapping(uint256 => uint256) public totalShares;

    // Approved operators per user. If the operator is a master contract, it will also approve all clones.
    mapping(address => mapping(address => bool)) public isApprovedForAll;

    // ******************* //
    // *** CONSTRUCTOR *** //
    // ******************* //

    constructor(IERC20 wethToken_) public BoringOwnable() {
        wethToken = wethToken_;
        assets.push(Asset(EIP20, address(0), IStrategy(0), 0));
    }

    // ***************** //
    // *** MODIFIERS *** //
    // ***************** //

    /// Modifier to check if the msg.sender is allowed to use funds belonging to the 'from' address.
    /// If 'from' is msg.sender, it's allowed.
    /// If 'msg.sender' is an address (an operator) that is approved by 'from', it's allowed.
    modifier allowed(address from) {
        require(from == msg.sender && isApprovedForAll[from][msg.sender], 'TapiocaBar: Not approved');
        _;
    }

    // ************************** //
    // *** INTERNAL FUNCTIONS *** //
    // ************************** //

    /// @notice Calculates the base value in relationship to `elastic` and `total`.
    function _toShares(
        uint256 totalShares_,
        uint256 totalAmount,
        uint256 amount,
        bool roundUp
    ) internal pure returns (uint256 share) {
        // To prevent reseting the ratio due to withdrawal of all shares, we start with
        // 1 amount/1e8 shares already burned. This also starts with a 1 : 1e8 ratio which
        // functions like 8 decimal fixed point math. This prevents ratio attacks or inaccuracy
        // due to 'gifting' or rebasing tokens. (Up to a certain degree)
        totalAmount = totalAmount.add(1);
        totalShares_ = totalShares_.add(1e8);

        // Calculte the shares using te current amount to share ratio
        share = amount.mul(totalShares_) / totalAmount;

        // Default is to round down (Solidity), round up if required
        if (roundUp && share.mul(totalAmount) / totalShares_ < amount) {
            share = share.add(1);
        }
    }

    /// @notice Calculates the elastic value in relationship to `base` and `total`.
    function _toAmount(
        uint256 totalShares_,
        uint256 totalAmount,
        uint256 share,
        bool roundUp
    ) internal pure returns (uint256 amount) {
        // To prevent reseting the ratio due to withdrawal of all shares, we start with
        // 1 amount/1e8 shares already burned. This also starts with a 1 : 1e8 ratio which
        // functions like 8 decimal fixed point math. This prevents ratio attacks or inaccuracy
        // due to 'gifting' or rebasing tokens. (Up to a certain degree)
        totalAmount = totalAmount.add(1);
        totalShares_ = totalShares_.add(1e8);

        // Calculte the amount using te current amount to share ratio
        amount = share.mul(totalAmount) / totalShares_;

        // Default is to round down (Solidity), round up if required
        if (roundUp && amount.mul(totalShares_) / totalAmount < share) {
            amount = amount.add(1);
        }
    }

    /// @dev Returns the total balance of `token` this contracts holds,
    /// plus the total amount this contract thinks the strategy holds.
    function _tokenBalanceOf(Asset memory asset) internal view returns (uint256 amount) {
        if (asset.strategy == IStrategy(0)) {
            if (asset.standard == EIP20) {
                return IERC20(asset.contractAddress).safeBalanceOf(address(this));
            } else if (asset.standard == EIP1155) {
                return IERC1155(asset.contractAddress).balanceOf(address(this), asset.tokenId);
            }
        } else {
            return asset.strategy.currentBalance();
        }
    }

    // ************************ //
    // *** PUBLIC FUNCTIONS *** //
    // ************************ //

    function supportsInterface(bytes4 interfaceID) external pure returns (bool) {
        return
            interfaceID == 0x01ffc9a7 || // EIP-165
            interfaceID == 0xd9b67a26 || // EIP-1155
            interfaceID == 0x0e89341c; // EIP-1155 Metadata
    }

    /// @dev Helper function to represent an `amount` of `token` in shares.
    /// @param assetId The id of the asset.
    /// @param amount The `token` amount.
    /// @param roundUp If the result `share` should be rounded up.
    /// @return share The token amount represented in shares.
    function toShare(
        uint256 assetId,
        uint256 amount,
        bool roundUp
    ) external view returns (uint256 share) {
        share = _toShares(totalShares[assetId], _tokenBalanceOf(assets[assetId]), amount, roundUp);
    }

    /// @dev Helper function represent shares back into the `token` amount.
    /// @param assetId The id of the asset.
    /// @param share The amount of shares.
    /// @param roundUp If the result should be rounded up.
    /// @return amount The share amount back into native representation.
    function toAmount(
        uint256 assetId,
        uint256 share,
        bool roundUp
    ) external view returns (uint256 amount) {
        amount = _toAmount(totalShares[assetId], _tokenBalanceOf(assets[assetId]), share, roundUp);
    }

    function registerAsset(
        uint96 standard,
        address contractAddress,
        IStrategy strategy,
        uint256 tokenId
    ) public onlyOwner returns (uint256 assetId) {
        // Checks
        assetId = ids[standard][contractAddress][strategy][tokenId];
        if (assetId == 0) {
            // Only do these checks if a new asset needs to be created
            require(tokenId == 0 || standard != EIP20, 'TapiocaBar: No tokenId for ERC20');
            require(
                strategy == IStrategy(0) ||
                    (standard == strategy.standard() && contractAddress == strategy.contractAddress() && tokenId == strategy.tokenId()),
                'TapiocaBar: Strategy mismatch'
            );

            // Effects
            assetId = assets.length;
            assets.push(Asset(standard, contractAddress, strategy, tokenId));
            ids[standard][contractAddress][strategy][tokenId] = assetId;
        }
    }

    function deposit(
        uint256 _assetId,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) public returns (uint256 amountOut, uint256 shareOut) {
        return depositAsset(_assetId, from, to, amount, share);
    }

    function depositETH(uint256 _assetId, address to) public payable returns (uint256 amountOut, uint256 shareOut) {
        return depositETHAsset(_assetId, to);
    }

    /// @notice Deposit an amount of `token` represented in either `amount` or `share`.
    /// @param assetId The id of the asset.
    /// @param from which account to pull the tokens.
    /// @param to which account to push the tokens.
    /// @param amount Token amount in native representation to deposit.
    /// @param share Token amount represented in shares to deposit. Takes precedence over `amount`.
    /// @return amountOut The amount deposited.
    /// @return shareOut The deposited amount repesented in shares.
    function depositAsset(
        uint256 assetId,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) public allowed(from) returns (uint256 amountOut, uint256 shareOut) {
        // Checks
        require(to != address(0), 'TapiocaBar: to not set'); // To avoid a bad UI from burning funds

        // Effects
        Asset storage asset = assets[assetId];
        uint256 totalAmount = _tokenBalanceOf(asset);

        // If a new token gets added, the tokenSupply call checks that this is a deployed contract. Needed for security.
        // Prevents getting shares for a token that will be deployed with CREATE2 in the future or as the contract creation is
        // in the mempool
        if (totalAmount == 0) {
            if (asset.standard == EIP20) {
                require(asset.contractAddress.isContract(), 'TapiocaBar: Not a token');
            }
        }

        if (share == 0) {
            // value of the share may be lower than the amount due to rounding, that's ok
            share = _toShares(totalShares[assetId], totalAmount, amount, false);
        } else {
            // amount may be lower than the value of share due to rounding, in that case, add 1 to amount (Always round up)
            amount = _toAmount(totalShares[assetId], totalAmount, share, true);
        }

        shares[assetId][to] = shares[assetId][to].add(share);
        totalShares[assetId] = totalShares[assetId].add(share);

        // Interactions
        if (asset.standard == EIP20) {
            IERC20(asset.contractAddress).safeTransferFrom(
                from,
                asset.strategy == IStrategy(0) ? address(this) : address(asset.strategy),
                amount
            );
        } else if (asset.standard == EIP1155) {
            IERC1155(asset.contractAddress).safeTransferFrom(
                from,
                asset.strategy == IStrategy(0) ? address(this) : address(asset.strategy),
                asset.tokenId,
                amount,
                ''
            );
        }
        emit TransferSingle(msg.sender, address(0), to, assetId, share);
        amountOut = amount;
        shareOut = share;
    }

    function depositETHAsset(uint256 assetId, address to) public payable returns (uint256 amountOut, uint256 shareOut) {
        // Checks
        require(to != address(0), "TapiocaBar: 'to' not set"); // To avoid a bad UI from burning funds
        Asset storage asset = assets[assetId];
        require(asset.standard == EIP20 && IERC20(asset.contractAddress) == wethToken, 'TapiocaBar: not WETH');

        // Effects
        uint256 amount = msg.value;
        uint256 share = _toShares(totalShares[assetId], _tokenBalanceOf(asset), amount, false);

        shares[assetId][to] = shares[assetId][to].add(share);
        totalShares[assetId] = totalShares[assetId].add(share);

        // Interactions
        IWETH(address(wethToken)).deposit{value: amount}();
        if (asset.strategy != IStrategy(0)) {
            wethToken.safeTransfer(address(asset.strategy), amount);
        }
        emit TransferSingle(msg.sender, address(0), to, assetId, share);
        amountOut = amount;
        shareOut = share;
    }

    /// @notice Withdraws an amount of `token` from a user account.
    /// @param assetId The id of the asset.
    /// @param from which user to pull the tokens.
    /// @param to which user to push the tokens.
    /// @param amount of tokens. Either one of `amount` or `share` needs to be supplied.
    /// @param share Like above, but `share` takes precedence over `amount`.
    function withdraw(
        uint256 assetId,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) public allowed(from) returns (uint256 amountOut, uint256 shareOut) {
        // Checks
        require(to != address(0), 'TapiocaBar: to not set'); // To avoid a bad UI from burning funds

        // Effects
        Asset storage asset = assets[assetId];
        uint256 totalAmount = _tokenBalanceOf(asset);
        if (share == 0) {
            // value of the share paid could be lower than the amount paid due to rounding, in that case, add a share (Always round up)
            share = _toShares(totalShares[assetId], totalAmount, amount, true);
        } else {
            // amount may be lower than the value of share due to rounding, that's ok
            amount = _toAmount(totalShares[assetId], totalAmount, share, false);
        }

        shares[assetId][from] = shares[assetId][from].sub(share);
        totalShares[assetId] = totalShares[assetId].sub(share);

        // Interactions
        if (asset.strategy == IStrategy(0)) {
            if (asset.standard == EIP20) {
                IERC20(asset.contractAddress).safeTransfer(to, amount);
            } else if (asset.standard == EIP1155) {
                IERC1155(asset.contractAddress).safeTransferFrom(address(this), to, asset.tokenId, amount, '');
            }
        } else {
            asset.strategy.withdraw(amount, to);
        }

        emit TransferSingle(msg.sender, from, address(0), assetId, share);
        amountOut = amount;
        shareOut = share;
    }

    function withdrawETH(
        uint256 assetId,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) public allowed(from) returns (uint256 amountOut, uint256 shareOut) {
        // Checks
        require(to != address(0), 'TapiocaBar: to not set'); // To avoid a bad UI from burning funds
        Asset storage asset = assets[assetId];
        require(asset.standard == EIP20 && IERC20(asset.contractAddress) == wethToken, 'TapiocaBar: not WETH');

        // Effects
        uint256 totalAmount = _tokenBalanceOf(asset);
        if (share == 0) {
            // value of the share paid could be lower than the amount paid due to rounding, in that case, add a share (Always round up)
            share = _toShares(totalShares[assetId], totalAmount, amount, true);
        } else {
            // amount may be lower than the value of share due to rounding, that's ok
            amount = _toAmount(totalShares[assetId], totalAmount, share, false);
        }

        shares[assetId][from] = shares[assetId][from].sub(share);
        totalShares[assetId] = totalShares[assetId].sub(share);

        // Interactions
        if (asset.strategy == IStrategy(0)) {
            IWETH(address(wethToken)).withdraw(amount);
            // solhint-disable-next-line avoid-low-level-calls
            (bool success, ) = to.call{value: amount}('');
            require(success, 'TapiocaBar: ETH transfer failed');
        } else {
            asset.strategy.withdrawETH(amount, to);
        }

        emit TransferSingle(msg.sender, from, address(0), assetId, share);
        amountOut = amount;
        shareOut = share;
    }

    /// @notice Transfer shares from a user account to another one.
    /// @param assetId The id of the asset.
    /// @param from which user to pull the tokens.
    /// @param to which user to push the tokens.
    /// @param share The amount of `token` in shares.
    function transfer(
        uint256 assetId,
        address from,
        address to,
        uint256 share
    ) public allowed(from) {
        // Checks
        require(to != address(0), 'TapiocaBar: to not set'); // To avoid a bad UI from burning funds

        // Effects
        shares[assetId][from] = shares[assetId][from].sub(share);
        shares[assetId][to] = shares[assetId][to].add(share);

        emit TransferSingle(msg.sender, from, to, assetId, share);
    }

    function batchTransfer(
        address from,
        address to,
        uint256[] calldata assetIds_,
        uint256[] calldata shares_
    ) public allowed(from) {
        // Checks
        require(to != address(0), 'TapiocaBar: to not set'); // To avoid a bad UI from burning funds

        // Effects
        uint256 len = assetIds_.length;
        for (uint256 i = 0; i < len; i++) {
            uint256 assetId = assetIds_[i];
            uint256 share = shares_[i];
            shares[assetId][from] = shares[assetId][from].sub(share);
            shares[assetId][to] = shares[assetId][to].add(share);
        }

        emit TransferBatch(msg.sender, from, to, assetIds_, shares_);
    }

    /// @notice Transfer shares from a user account to multiple other ones.
    /// @param assetId The id of the asset.
    /// @param from which user to pull the tokens.
    /// @param tos The receivers of the tokens.
    /// @param share The amount of `token` in shares for each receiver in `tos`.
    function transferMultiple(
        uint256 assetId,
        address from,
        address[] calldata tos,
        uint256[] calldata share
    ) public allowed(from) {
        // Checks
        require(tos[0] != address(0), 'TapiocaBar: tos[0] not set'); // To avoid a bad UI from burning funds

        // Effects
        uint256 totalAmount;
        uint256 len = tos.length;
        for (uint256 i = 0; i < len; i++) {
            address to = tos[i];
            uint256 share_ = share[i];
            shares[assetId][to] = shares[assetId][to].add(share_);
            totalAmount = totalAmount.add(share_);
            emit TransferSingle(msg.sender, from, to, assetId, share_);
        }
        shares[assetId][from] = shares[assetId][from].sub(totalAmount);
    }

    /// The following safeTransfer functions are purely here to be EIP-1155 compliant. Using these in your protocol is NOT recommended as it opens
    /// up many attack vectors, such as reentrancy issues and denial of service?
    function safeTransferFrom(
        address from,
        address to,
        uint256 assetId,
        uint256 share,
        bytes calldata data
    ) external {
        transfer(assetId, from, to, share);

        if (to.isContract()) {
            require(
                IERC1155TokenReceiver(to).onERC1155Received(msg.sender, from, assetId, share, data) == 0xf23a6e61, /*bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)")) */
                'Wrong return value'
            );
        }
    }

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata assetIds_,
        uint256[] calldata shares_,
        bytes calldata data
    ) external {
        // Effects
        batchTransfer(from, to, assetIds_, shares_);

        if (to.isContract()) {
            require(
                IERC1155TokenReceiver(to).onERC1155BatchReceived(msg.sender, from, assetIds_, shares_, data) == 0xbc197c81, /* bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)")) */
                'Wrong return value'
            );
        }
    }

    function balanceOf(address owner, uint256 assetId) external view returns (uint256) {
        return shares[assetId][owner];
    }

    function balanceOfBatch(address[] calldata owners, uint256[] calldata ids_) external view returns (uint256[] memory balances) {
        uint256 len = owners.length;
        balances = new uint256[](len);
        for (uint256 i = 0; i < len; i++) {
            balances[i] = shares[ids_[i]][owners[i]];
        }
    }

    function setApprovalForAll(address operator, bool approved) external {
        // Checks
        require(operator != address(0), 'TapiocaBar: operator not set'); // Important for security

        // Effects
        isApprovedForAll[msg.sender][operator] = approved;

        emit ApprovalForAll(msg.sender, operator, approved);
    }

    // See https://eips.ethereum.org/EIPS/eip-191
    string private constant EIP191_PREFIX_FOR_EIP712_STRUCTURED_DATA = '\x19\x01';
    bytes32 private constant APPROVAL_SIGNATURE_HASH =
        keccak256('setApprovalForAllWithPermit(address user,address operator,bool approved,uint256 nonce)');

    /// @notice user nonces for masterContract approvals
    mapping(address => uint256) public nonces;

    // solhint-disable-next-line func-name-mixedcase
    function DOMAIN_SEPARATOR() public view returns (bytes32) {
        return _domainSeparator();
    }

    function setApprovalForAllWithPermit(
        address user,
        address operator,
        bool approved,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public {
        // Checks
        require(operator != address(0), 'TapiocaBar: operator not set'); // Important for security

        // Important for security - any address without masterContract has address(0) as masterContract
        // So approving address(0) would approve every address, leading to full loss of funds
        // Also, ecrecover returns address(0) on failure. So we check this:
        require(user != address(0), 'TapiocaBar: User cannot be 0');

        bytes32 digest = _getDigest(keccak256(abi.encode(APPROVAL_SIGNATURE_HASH, user, operator, approved, nonces[user]++)));
        address recoveredAddress = ecrecover(digest, v, r, s);
        require(recoveredAddress == user, 'TapiocaBar: Invalid Signature');

        // Effects
        isApprovedForAll[user][operator] = approved;
        emit ApprovalForAll(user, operator, approved);
    }

    function uri(uint256 assetId) external view returns (string memory) {
        // TODO: Support EIP1155
        // TODO: Add strategy info
        IERC20 token = IERC20(assets[assetId].contractAddress);
        return
            abi
                .encodePacked(
                    '{"name": "',
                    token.safeName(),
                    '", "symbol": "', // properties
                    token.safeSymbol(),
                    '", "decimals": ',
                    token.safeDecimals(),
                    '}'
                )
                .encode();
    }

    // ERC1155 bloat we have to include to be able to receive ERC1155 tokens.
    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes calldata
    ) external override returns (bytes4) {
        return 0xf23a6e61; //bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] calldata,
        uint256[] calldata,
        bytes calldata
    ) external override returns (bytes4) {
        return 0xbc197c81; //bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))
    }

    receive() external payable {}
}
