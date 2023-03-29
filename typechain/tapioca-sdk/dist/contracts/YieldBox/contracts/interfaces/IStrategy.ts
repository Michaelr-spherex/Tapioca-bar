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
} from "../../../../../../common";

export interface IStrategyInterface extends utils.Interface {
  functions: {
    "cheapWithdrawable()": FunctionFragment;
    "contractAddress()": FunctionFragment;
    "currentBalance()": FunctionFragment;
    "deposited(uint256)": FunctionFragment;
    "description()": FunctionFragment;
    "name()": FunctionFragment;
    "tokenId()": FunctionFragment;
    "tokenType()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
    "withdrawable()": FunctionFragment;
    "yieldBox()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cheapWithdrawable"
      | "contractAddress"
      | "currentBalance"
      | "deposited"
      | "description"
      | "name"
      | "tokenId"
      | "tokenType"
      | "withdraw"
      | "withdrawable"
      | "yieldBox"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cheapWithdrawable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposited",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenId", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenType", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawable",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "yieldBox", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "cheapWithdrawable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposited", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenType", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldBox", data: BytesLike): Result;

  events: {};
}

export interface IStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStrategyInterface;

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
    cheapWithdrawable(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    contractAddress(
      overrides?: CallOverrides
    ): Promise<[string] & { contractAddress_: string }>;

    currentBalance(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    description(
      overrides?: CallOverrides
    ): Promise<[string] & { description_: string }>;

    name(overrides?: CallOverrides): Promise<[string] & { name_: string }>;

    tokenId(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { tokenId_: BigNumber }>;

    tokenType(
      overrides?: CallOverrides
    ): Promise<[number] & { tokenType_: number }>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawable(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    yieldBox(
      overrides?: CallOverrides
    ): Promise<[string] & { yieldBox_: string }>;
  };

  cheapWithdrawable(overrides?: CallOverrides): Promise<BigNumber>;

  contractAddress(overrides?: CallOverrides): Promise<string>;

  currentBalance(overrides?: CallOverrides): Promise<BigNumber>;

  deposited(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  description(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  tokenId(overrides?: CallOverrides): Promise<BigNumber>;

  tokenType(overrides?: CallOverrides): Promise<number>;

  withdraw(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

  yieldBox(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cheapWithdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    contractAddress(overrides?: CallOverrides): Promise<string>;

    currentBalance(overrides?: CallOverrides): Promise<BigNumber>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    description(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    tokenType(overrides?: CallOverrides): Promise<number>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    cheapWithdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    contractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    currentBalance(overrides?: CallOverrides): Promise<BigNumber>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    tokenType(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cheapWithdrawable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
