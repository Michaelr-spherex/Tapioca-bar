# USDO



> USDO OFT contract





## Methods

### DEFAULT_PAYLOAD_SIZE_LIMIT

```solidity
function DEFAULT_PAYLOAD_SIZE_LIMIT() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```



*See {IERC20Permit-DOMAIN_SEPARATOR}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### NO_EXTRA_GAS

```solidity
function NO_EXTRA_GAS() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### PT_SEND

```solidity
function PT_SEND() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### PT_SEND_AND_CALL

```solidity
function PT_SEND_AND_CALL() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```



*See {IERC20-allowance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### allowedBurner

```solidity
function allowedBurner(uint256, address) external view returns (bool)
```

addresses allowed to burn USDO



#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### allowedMinter

```solidity
function allowedMinter(uint256, address) external view returns (bool)
```

addresses allowed to mint USDO



#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```



*See {IERC20-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### burn

```solidity
function burn(address _from, uint256 _amount) external nonpayable
```

burns USDO



#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | address to burn from |
| _amount | uint256 | the amount to burn |

### callOnOFTReceived

```solidity
function callOnOFTReceived(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes32 _from, address _to, uint256 _amount, bytes _payload, uint256 _gasForCall) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined |
| _srcAddress | bytes | undefined |
| _nonce | uint64 | undefined |
| _from | bytes32 | undefined |
| _to | address | undefined |
| _amount | uint256 | undefined |
| _payload | bytes | undefined |
| _gasForCall | uint256 | undefined |

### circulatingSupply

```solidity
function circulatingSupply() external view returns (uint256)
```



*returns the circulating amount of tokens on current chain*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### conservator

```solidity
function conservator() external view returns (address)
```

returns the Conservator address




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### creditedPackets

```solidity
function creditedPackets(uint16, bytes, uint64) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |
| _1 | bytes | undefined |
| _2 | uint64 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### decimals

```solidity
function decimals() external pure returns (uint8)
```

returns token&#39;s decimals




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### decreaseAllowance

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) external nonpayable returns (bool)
```



*Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| subtractedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### estimateSendAndCallFee

```solidity
function estimateSendAndCallFee(uint16 _dstChainId, bytes32 _toAddress, uint256 _amount, bytes _payload, uint64 _dstGasForCall, bool _useZro, bytes _adapterParams) external view returns (uint256 nativeFee, uint256 zroFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined |
| _toAddress | bytes32 | undefined |
| _amount | uint256 | undefined |
| _payload | bytes | undefined |
| _dstGasForCall | uint64 | undefined |
| _useZro | bool | undefined |
| _adapterParams | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| nativeFee | uint256 | undefined |
| zroFee | uint256 | undefined |

### estimateSendFee

```solidity
function estimateSendFee(uint16 _dstChainId, bytes32 _toAddress, uint256 _amount, bool _useZro, bytes _adapterParams) external view returns (uint256 nativeFee, uint256 zroFee)
```



*estimate send token `_tokenId` to (`_dstChainId`, `_toAddress`) _dstChainId - L0 defined chain id to send tokens too _toAddress - dynamic bytes array which contains the address to whom you are sending tokens to on the dstChain _amount - amount of the tokens to transfer _useZro - indicates to use zro to pay L0 fees _adapterParam - flexible bytes array to indicate messaging adapter services in L0*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined |
| _toAddress | bytes32 | undefined |
| _amount | uint256 | undefined |
| _useZro | bool | undefined |
| _adapterParams | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| nativeFee | uint256 | undefined |
| zroFee | uint256 | undefined |

### exerciseOption

```solidity
function exerciseOption(ITapiocaOptionsBrokerCrossChain.IExerciseOptionsData optionsData, ITapiocaOptionsBrokerCrossChain.IExerciseLZData lzData, ITapiocaOptionsBrokerCrossChain.IExerciseLZSendTapData tapSendData, ICommonData.IApproval[] approvals) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| optionsData | ITapiocaOptionsBrokerCrossChain.IExerciseOptionsData | undefined |
| lzData | ITapiocaOptionsBrokerCrossChain.IExerciseLZData | undefined |
| tapSendData | ITapiocaOptionsBrokerCrossChain.IExerciseLZSendTapData | undefined |
| approvals | ICommonData.IApproval[] | undefined |

### failedMessages

```solidity
function failedMessages(uint16, bytes, uint64) external view returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |
| _1 | bytes | undefined |
| _2 | uint64 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### flashFee

```solidity
function flashFee(address token, uint256 amount) external view returns (uint256)
```

returns the flash mint fee



#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | USDO address |
| amount | uint256 | the amount for which fee is computed |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### flashLoan

```solidity
function flashLoan(contract IERC3156FlashBorrower receiver, address token, uint256 amount, bytes data) external nonpayable returns (bool)
```

performs a USDO flashloan



#### Parameters

| Name | Type | Description |
|---|---|---|
| receiver | contract IERC3156FlashBorrower | the IERC3156FlashBorrower receiver |
| token | address | USDO address |
| amount | uint256 | the amount to flashloan |
| data | bytes | flashloan data |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | operation execution status |

### flashMintFee

```solidity
function flashMintFee() external view returns (uint256)
```

returns the flash mint fee




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### forceResumeReceive

```solidity
function forceResumeReceive(uint16 _srcChainId, bytes _srcAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined |
| _srcAddress | bytes | undefined |

### getConfig

```solidity
function getConfig(uint16 _version, uint16 _chainId, address, uint256 _configType) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined |
| _chainId | uint16 | undefined |
| _2 | address | undefined |
| _configType | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### getTrustedRemoteAddress

```solidity
function getTrustedRemoteAddress(uint16 _remoteChainId) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _remoteChainId | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### increaseAllowance

```solidity
function increaseAllowance(address spender, uint256 addedValue) external nonpayable returns (bool)
```



*Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| addedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### initMultiHopBuy

```solidity
function initMultiHopBuy(address from, uint256 collateralAmount, uint256 borrowAmount, IUSDOBase.ILeverageSwapData swapData, IUSDOBase.ILeverageLZData lzData, IUSDOBase.ILeverageExternalContractsData externalData, bytes airdropAdapterParams, ICommonData.IApproval[] approvals) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| collateralAmount | uint256 | undefined |
| borrowAmount | uint256 | undefined |
| swapData | IUSDOBase.ILeverageSwapData | undefined |
| lzData | IUSDOBase.ILeverageLZData | undefined |
| externalData | IUSDOBase.ILeverageExternalContractsData | undefined |
| airdropAdapterParams | bytes | undefined |
| approvals | ICommonData.IApproval[] | undefined |

### isTrustedRemote

```solidity
function isTrustedRemote(uint16 _srcChainId, bytes _srcAddress) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined |
| _srcAddress | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### leverageModule

```solidity
function leverageModule() external view returns (contract USDOLeverageModule)
```

returns the leverage module




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract USDOLeverageModule | undefined |

### lzEndpoint

```solidity
function lzEndpoint() external view returns (contract ILayerZeroEndpoint)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ILayerZeroEndpoint | undefined |

### lzReceive

```solidity
function lzReceive(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined |
| _srcAddress | bytes | undefined |
| _nonce | uint64 | undefined |
| _payload | bytes | undefined |

### marketModule

```solidity
function marketModule() external view returns (contract USDOMarketModule)
```

returns the market module




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract USDOMarketModule | undefined |

### maxFlashLoan

```solidity
function maxFlashLoan(address) external view returns (uint256)
```

returns the maximum amount of tokens available for a flash mint



#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### maxFlashMint

```solidity
function maxFlashMint() external view returns (uint256)
```

returns the maximum amount of USDO that can be minted through the EIP-3156 flow




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### minDstGasLookup

```solidity
function minDstGasLookup(uint16, uint16) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |
| _1 | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mint

```solidity
function mint(address _to, uint256 _amount) external nonpayable
```

mints USDO



#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | receiver address |
| _amount | uint256 | the amount to mint |

### name

```solidity
function name() external view returns (string)
```



*Returns the name of the token.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### nonblockingLzReceive

```solidity
function nonblockingLzReceive(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined |
| _srcAddress | bytes | undefined |
| _nonce | uint64 | undefined |
| _payload | bytes | undefined |

### nonces

```solidity
function nonces(address owner) external view returns (uint256)
```



*See {IERC20Permit-nonces}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### optionsModule

```solidity
function optionsModule() external view returns (contract USDOOptionsModule)
```

returns the options module




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract USDOOptionsModule | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### paused

```solidity
function paused() external view returns (bool)
```

returns the pause state of the contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### payloadSizeLimitLookup

```solidity
function payloadSizeLimitLookup(uint16) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### permit

```solidity
function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```



*See {IERC20Permit-permit}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |
| value | uint256 | undefined |
| deadline | uint256 | undefined |
| v | uint8 | undefined |
| r | bytes32 | undefined |
| s | bytes32 | undefined |

### precrime

```solidity
function precrime() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### removeAsset

```solidity
function removeAsset(address from, address to, uint16 lzDstChainId, address zroPaymentAddress, bytes adapterParams, ICommonData.ICommonExternalContracts externalData, IUSDOBase.IRemoveAndRepay removeAndRepayData, ICommonData.IApproval[] approvals) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| lzDstChainId | uint16 | undefined |
| zroPaymentAddress | address | undefined |
| adapterParams | bytes | undefined |
| externalData | ICommonData.ICommonExternalContracts | undefined |
| removeAndRepayData | IUSDOBase.IRemoveAndRepay | undefined |
| approvals | ICommonData.IApproval[] | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### rescueEth

```solidity
function rescueEth(uint256 amount, address to) external nonpayable
```

rescues unused ETH from the contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | the amount to rescue |
| to | address | the recipient |

### retryMessage

```solidity
function retryMessage(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined |
| _srcAddress | bytes | undefined |
| _nonce | uint64 | undefined |
| _payload | bytes | undefined |

### sendAndCall

```solidity
function sendAndCall(address _from, uint16 _dstChainId, bytes32 _toAddress, uint256 _amount, bytes _payload, uint64 _dstGasForCall, ICommonOFT.LzCallParams _callParams) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _dstChainId | uint16 | undefined |
| _toAddress | bytes32 | undefined |
| _amount | uint256 | undefined |
| _payload | bytes | undefined |
| _dstGasForCall | uint64 | undefined |
| _callParams | ICommonOFT.LzCallParams | undefined |

### sendAndLendOrRepay

```solidity
function sendAndLendOrRepay(address _from, address _to, uint16 lzDstChainId, address zroPaymentAddress, IUSDOBase.ILendOrRepayParams lendParams, ICommonData.IApproval[] approvals, ICommonData.IWithdrawParams withdrawParams, bytes adapterParams) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| lzDstChainId | uint16 | undefined |
| zroPaymentAddress | address | undefined |
| lendParams | IUSDOBase.ILendOrRepayParams | undefined |
| approvals | ICommonData.IApproval[] | undefined |
| withdrawParams | ICommonData.IWithdrawParams | undefined |
| adapterParams | bytes | undefined |

### sendForLeverage

```solidity
function sendForLeverage(uint256 amount, address leverageFor, IUSDOBase.ILeverageLZData lzData, IUSDOBase.ILeverageSwapData swapData, IUSDOBase.ILeverageExternalContractsData externalData) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |
| leverageFor | address | undefined |
| lzData | IUSDOBase.ILeverageLZData | undefined |
| swapData | IUSDOBase.ILeverageSwapData | undefined |
| externalData | IUSDOBase.ILeverageExternalContractsData | undefined |

### sendFrom

```solidity
function sendFrom(address _from, uint16 _dstChainId, bytes32 _toAddress, uint256 _amount, ICommonOFT.LzCallParams _callParams) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _dstChainId | uint16 | undefined |
| _toAddress | bytes32 | undefined |
| _amount | uint256 | undefined |
| _callParams | ICommonOFT.LzCallParams | undefined |

### setBurnerStatus

```solidity
function setBurnerStatus(address _for, bool _status) external nonpayable
```

sets/unsets address as burner

*can only be called by the owner*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _for | address | role receiver |
| _status | bool | true/false |

### setConfig

```solidity
function setConfig(uint16 _version, uint16 _chainId, uint256 _configType, bytes _config) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined |
| _chainId | uint16 | undefined |
| _configType | uint256 | undefined |
| _config | bytes | undefined |

### setConservator

```solidity
function setConservator(address _conservator) external nonpayable
```

set the Conservator address

*conservator can pause the contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _conservator | address | the new address |

### setFlashMintFee

```solidity
function setFlashMintFee(uint256 _val) external nonpayable
```

set the flashloan fee

*can only be called by the owner*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _val | uint256 | the new fee |

### setMaxFlashMintable

```solidity
function setMaxFlashMintable(uint256 _val) external nonpayable
```

set the max allowed USDO mintable through flashloan

*can only be called by the owner*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _val | uint256 | the new amount |

### setMinDstGas

```solidity
function setMinDstGas(uint16 _dstChainId, uint16 _packetType, uint256 _minGas) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined |
| _packetType | uint16 | undefined |
| _minGas | uint256 | undefined |

### setMinterStatus

```solidity
function setMinterStatus(address _for, bool _status) external nonpayable
```

sets/unsets address as minter

*can only be called by the owner*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _for | address | role receiver |
| _status | bool | true/false |

### setPayloadSizeLimit

```solidity
function setPayloadSizeLimit(uint16 _dstChainId, uint256 _size) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined |
| _size | uint256 | undefined |

### setPrecrime

```solidity
function setPrecrime(address _precrime) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _precrime | address | undefined |

### setReceiveVersion

```solidity
function setReceiveVersion(uint16 _version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined |

### setSendVersion

```solidity
function setSendVersion(uint16 _version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined |

### setTrustedRemote

```solidity
function setTrustedRemote(uint16 _srcChainId, bytes _path) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined |
| _path | bytes | undefined |

### setTrustedRemoteAddress

```solidity
function setTrustedRemoteAddress(uint16 _remoteChainId, bytes _remoteAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _remoteChainId | uint16 | undefined |
| _remoteAddress | bytes | undefined |

### setUseCustomAdapterParams

```solidity
function setUseCustomAdapterParams(bool _useCustomAdapterParams) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _useCustomAdapterParams | bool | undefined |

### sharedDecimals

```solidity
function sharedDecimals() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*Returns the symbol of the token, usually a shorter version of the name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### token

```solidity
function token() external view returns (address)
```



*returns the address of the ERC20 token*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {IERC20-totalSupply}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer

```solidity
function transfer(address to, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``&#39;s tokens of at least `amount`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### triggerSendFrom

```solidity
function triggerSendFrom(uint16 lzDstChainId, bytes airdropAdapterParams, address zroPaymentAddress, uint256 amount, ISendFrom.LzCallParams sendFromData, ICommonData.IApproval[] approvals) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| lzDstChainId | uint16 | undefined |
| airdropAdapterParams | bytes | undefined |
| zroPaymentAddress | address | undefined |
| amount | uint256 | undefined |
| sendFromData | ISendFrom.LzCallParams | undefined |
| approvals | ICommonData.IApproval[] | undefined |

### trustedRemoteLookup

```solidity
function trustedRemoteLookup(uint16) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### updatePause

```solidity
function updatePause(bool val) external nonpayable
```

updates the pause state of the contract

*can only be called by the conservator*

#### Parameters

| Name | Type | Description |
|---|---|---|
| val | bool | the new value |

### useCustomAdapterParams

```solidity
function useCustomAdapterParams() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### yieldBox

```solidity
function yieldBox() external view returns (contract IYieldBoxBase)
```

the YieldBox address.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IYieldBoxBase | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```



*Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### CallOFTReceivedSuccess

```solidity
event CallOFTReceivedSuccess(uint16 indexed _srcChainId, bytes _srcAddress, uint64 _nonce, bytes32 _hash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId `indexed` | uint16 | undefined |
| _srcAddress  | bytes | undefined |
| _nonce  | uint64 | undefined |
| _hash  | bytes32 | undefined |

### ConservatorUpdated

```solidity
event ConservatorUpdated(address indexed old, address indexed _new)
```

event emitted when conservator address is updated



#### Parameters

| Name | Type | Description |
|---|---|---|
| old `indexed` | address | undefined |
| _new `indexed` | address | undefined |

### FlashMintFeeUpdated

```solidity
event FlashMintFeeUpdated(uint256 _old, uint256 _new)
```

event emitted when flash mint fee is updated



#### Parameters

| Name | Type | Description |
|---|---|---|
| _old  | uint256 | undefined |
| _new  | uint256 | undefined |

### MaxFlashMintUpdated

```solidity
event MaxFlashMintUpdated(uint256 _old, uint256 _new)
```

event emitted when max flash mintable amount is updated



#### Parameters

| Name | Type | Description |
|---|---|---|
| _old  | uint256 | undefined |
| _new  | uint256 | undefined |

### MessageFailed

```solidity
event MessageFailed(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload, bytes _reason)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId  | uint16 | undefined |
| _srcAddress  | bytes | undefined |
| _nonce  | uint64 | undefined |
| _payload  | bytes | undefined |
| _reason  | bytes | undefined |

### NonContractAddress

```solidity
event NonContractAddress(address _address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _address  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### PausedUpdated

```solidity
event PausedUpdated(bool oldState, bool newState)
```

event emitted when pause state is updated



#### Parameters

| Name | Type | Description |
|---|---|---|
| oldState  | bool | undefined |
| newState  | bool | undefined |

### ReceiveFromChain

```solidity
event ReceiveFromChain(uint16 indexed _srcChainId, address indexed _to, uint256 _amount)
```



*Emitted when `_amount` tokens are received from `_srcChainId` into the `_toAddress` on the local chain. `_nonce` is the inbound nonce.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId `indexed` | uint16 | undefined |
| _to `indexed` | address | undefined |
| _amount  | uint256 | undefined |

### RetryMessageSuccess

```solidity
event RetryMessageSuccess(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes32 _payloadHash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId  | uint16 | undefined |
| _srcAddress  | bytes | undefined |
| _nonce  | uint64 | undefined |
| _payloadHash  | bytes32 | undefined |

### SendToChain

```solidity
event SendToChain(uint16 indexed _dstChainId, address indexed _from, bytes32 indexed _toAddress, uint256 _amount)
```



*Emitted when `_amount` tokens are moved from the `_sender` to (`_dstChainId`, `_toAddress`) `_nonce` is the outbound nonce*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId `indexed` | uint16 | undefined |
| _from `indexed` | address | undefined |
| _toAddress `indexed` | bytes32 | undefined |
| _amount  | uint256 | undefined |

### SetBurnerStatus

```solidity
event SetBurnerStatus(address indexed _for, bool _status)
```

event emitted when a new address is set or removed from burners array



#### Parameters

| Name | Type | Description |
|---|---|---|
| _for `indexed` | address | undefined |
| _status  | bool | undefined |

### SetMinDstGas

```solidity
event SetMinDstGas(uint16 _dstChainId, uint16 _type, uint256 _minDstGas)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId  | uint16 | undefined |
| _type  | uint16 | undefined |
| _minDstGas  | uint256 | undefined |

### SetMinterStatus

```solidity
event SetMinterStatus(address indexed _for, bool _status)
```

event emitted when a new address is set or removed from minters array



#### Parameters

| Name | Type | Description |
|---|---|---|
| _for `indexed` | address | undefined |
| _status  | bool | undefined |

### SetPrecrime

```solidity
event SetPrecrime(address precrime)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| precrime  | address | undefined |

### SetTrustedRemote

```solidity
event SetTrustedRemote(uint16 _remoteChainId, bytes _path)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _remoteChainId  | uint16 | undefined |
| _path  | bytes | undefined |

### SetTrustedRemoteAddress

```solidity
event SetTrustedRemoteAddress(uint16 _remoteChainId, bytes _remoteAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _remoteChainId  | uint16 | undefined |
| _remoteAddress  | bytes | undefined |

### SetUseCustomAdapterParams

```solidity
event SetUseCustomAdapterParams(bool _useCustomAdapterParams)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _useCustomAdapterParams  | bool | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```



*Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |



