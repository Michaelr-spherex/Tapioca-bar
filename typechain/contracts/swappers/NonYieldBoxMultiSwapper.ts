/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface NonYieldBoxMultiSwapperInterface extends utils.Interface {
  functions: {
    "getInputAmount(address[],uint256)": FunctionFragment;
    "getOutputAmount(address[],uint256)": FunctionFragment;
    "swap(address,address,uint256,address,address[],uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getInputAmount" | "getOutputAmount" | "swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getInputAmount",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutputAmount",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getInputAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutputAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export interface NonYieldBoxMultiSwapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NonYieldBoxMultiSwapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getInputAmount(
      path: PromiseOrValue<string>[],
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;

    getOutputAmount(
      path: PromiseOrValue<string>[],
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountMinOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      path: PromiseOrValue<string>[],
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getInputAmount(
    path: PromiseOrValue<string>[],
    amountOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOutputAmount(
    path: PromiseOrValue<string>[],
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swap(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountMinOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    path: PromiseOrValue<string>[],
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getInputAmount(
      path: PromiseOrValue<string>[],
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutputAmount(
      path: PromiseOrValue<string>[],
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountMinOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      path: PromiseOrValue<string>[],
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getInputAmount(
      path: PromiseOrValue<string>[],
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutputAmount(
      path: PromiseOrValue<string>[],
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountMinOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      path: PromiseOrValue<string>[],
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getInputAmount(
      path: PromiseOrValue<string>[],
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOutputAmount(
      path: PromiseOrValue<string>[],
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountMinOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      path: PromiseOrValue<string>[],
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
