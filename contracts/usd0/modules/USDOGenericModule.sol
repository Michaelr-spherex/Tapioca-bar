// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

//LZ
import "tapioca-sdk/dist/contracts/libraries/LzLib.sol";

//TAPIOCA
import "tapioca-periph/contracts/interfaces/ISendFrom.sol";

import "./USDOCommon.sol";

contract USDOGenericModule is USDOCommon {
    using SafeERC20 for IERC20;

    constructor(
        address _lzEndpoint,
        IYieldBoxBase _yieldBox,
        ICluster _cluster
    ) BaseUSDOStorage(_lzEndpoint, _yieldBox, _cluster) {}

    function triggerApproveOrRevoke(
        uint16 lzDstChainId,
        ISendFrom.LzCallParams calldata lzCallParams,
        ICommonData.IApproval[] calldata approvals
    ) external payable {
        bytes memory lzPayload = abi.encode(PT_APPROVE, msg.sender, approvals);

        _checkGasLimit(
            lzDstChainId,
            PT_APPROVE,
            lzCallParams.adapterParams,
            NO_EXTRA_GAS
        );
        _lzSend(
            lzDstChainId,
            lzPayload,
            payable(msg.sender),
            lzCallParams.zroPaymentAddress,
            lzCallParams.adapterParams,
            msg.value
        );

        emit SendToChain(
            lzDstChainId,
            msg.sender,
            LzLib.addressToBytes32(msg.sender),
            0
        );
    }

    function executeApproval(
        address,
        uint16 lzSrcChainId,
        bytes memory,
        uint64,
        bytes memory _payload
    ) public {
        require(msg.sender == address(this), "USDO: caller not valid");
        (, address from, ICommonData.IApproval[] memory approvals) = abi.decode(
            _payload,
            (uint16, address, ICommonData.IApproval[])
        );

        if (approvals.length > 0) {
            _callApproval(approvals, PT_APPROVE);
        }

        emit ReceiveFromChain(lzSrcChainId, from, 0);
    }

    function triggerSendFrom(
        uint16 lzDstChainId,
        bytes calldata airdropAdapterParams,
        uint256 amount,
        ISendFrom.LzCallParams calldata sendFromData,
        ICommonData.IApproval[] calldata approvals
    ) external payable {
        (, , uint256 airdropAmount, ) = LzLib.decodeAdapterParams(
            airdropAdapterParams
        );

        (amount, ) = _removeDust(amount);
        bytes memory lzPayload = abi.encode(
            PT_SEND_FROM,
            msg.sender,
            _ld2sd(amount),
            sendFromData,
            lzEndpoint.getChainId(),
            approvals,
            airdropAmount
        );

        _checkGasLimit(
            lzDstChainId,
            PT_SEND_FROM,
            airdropAdapterParams,
            NO_EXTRA_GAS
        );
        _lzSend(
            lzDstChainId,
            lzPayload,
            payable(msg.sender),
            sendFromData.zroPaymentAddress,
            airdropAdapterParams,
            msg.value
        );

        emit SendToChain(
            lzDstChainId,
            msg.sender,
            LzLib.addressToBytes32(msg.sender),
            0
        );
    }

    /// @dev destination call for USDOGenericModule.triggerSendFrom
    function sendFromDestination(
        address,
        uint16,
        bytes memory,
        uint64,
        bytes memory _payload
    ) public {
        require(msg.sender == address(this), "USDO: caller not valid");
        (
            ,
            address from,
            uint64 amount,
            ISendFrom.LzCallParams memory callParams,
            uint16 lzDstChainId,
            ICommonData.IApproval[] memory approvals,
            uint256 airdropAmount
        ) = abi.decode(
                _payload,
                (
                    uint16,
                    address,
                    uint64,
                    ISendFrom.LzCallParams,
                    uint16,
                    ICommonData.IApproval[],
                    uint256
                )
            );

        if (approvals.length > 0) {
            _callApproval(approvals, PT_SEND_FROM);
        }

        ISendFrom(address(this)).sendFrom{value: airdropAmount}(
            from,
            lzDstChainId,
            LzLib.addressToBytes32(from),
            _sd2ld(amount),
            callParams
        );

        emit ReceiveFromChain(lzDstChainId, from, 0);
    }
}
