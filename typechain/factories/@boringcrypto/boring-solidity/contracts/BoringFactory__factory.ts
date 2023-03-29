/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BoringFactory,
  BoringFactoryInterface,
} from "../../../../@boringcrypto/boring-solidity/contracts/BoringFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    name: "LogDeploy",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "clonesOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
    ],
    name: "clonesOfCount",
    outputs: [
      {
        internalType: "uint256",
        name: "cloneCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "useCreate2",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "masterContractOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576105c4908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081631f54245b1461005a575080638fd4365414610055578063bafe4f14146100505763fba96be81461004b57600080fd5b6101c7565b61018c565b610132565b60603660031901126100e25761006e6100e9565b67ffffffffffffffff906024358281116100e557366023820112156100e55780600401359283116100e55736602484830101116100e5576044359384151585036100e2576100de6100c486866024860187610368565b6040516001600160a01b0390911681529081906020820190565b0390f35b80fd5b8380fd5b600435906001600160a01b03821682036100ff57565b600080fd5b805482101561011c5760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b346100ff5760403660031901126100ff5761014b6100e9565b602435906001600160a01b038091166000526001602052604060002080548310156100ff5760209261017c91610104565b9190546040519260031b1c168152f35b346100ff5760203660031901126100ff5760206001600160a01b03806101b06100e9565b166000526000825260406000205416604051908152f35b346100ff5760203660031901126100ff576001600160a01b036101e86100e9565b1660005260016020526020604060002054604051908152f35b1561020857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f426f72696e67466163746f72793a204e6f206d6173746572436f6e74726163746044820152fd5b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161029057604052565b610266565b92919267ffffffffffffffff918281116102905760405192601f8201601f19908116603f0116840190811184821017610290576040528294818452818301116100ff578281602093846000960137010152565b8054680100000000000000008110156102905761030a91600182018155610104565b819291549060031b916001600160a01b03809116831b921b1916179055565b60009103126100ff57565b90918060409360208452816020850152848401376000828201840152601f01601f1916010190565b6040513d6000823e3d90fd5b9061047f9493916104846001600160a01b03918281169461038a861515610201565b606082901b6bffffffffffffffffffffffff1916901561052e5760376103b1368988610295565b6020815191012091604051907f3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000825260148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526000f59788915b61046681610433856001600160a01b03166000526000602052604060002090565b906001600160a01b03167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b6001600160a01b03166000526001602052604060002090565b6102e8565b851692833b156100ff57604051917f4ddf47d4000000000000000000000000000000000000000000000000000000008352600083806104c7858560048401610334565b038134895af1928315610529577fd62166f3c2149208e51788b1401cc356bf5da1fc6c7886a32e18570f57d88b3b93610510575b5061050b60405192839283610334565b0390a3565b8061051d6105239261027c565b80610329565b386104fb565b61035c565b603790604051907f3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000825260148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526000f097889161041256fea26469706673582212205625deb4a53f6bc997abe9e069b4eb53d80d65d9b4a5d7c00d6270115ff9964e64736f6c63430008120033";

type BoringFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoringFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoringFactory__factory extends ContractFactory {
  constructor(...args: BoringFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BoringFactory> {
    return super.deploy(overrides || {}) as Promise<BoringFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoringFactory {
    return super.attach(address) as BoringFactory;
  }
  override connect(signer: Signer): BoringFactory__factory {
    return super.connect(signer) as BoringFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringFactoryInterface {
    return new utils.Interface(_abi) as BoringFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringFactory {
    return new Contract(address, _abi, signerOrProvider) as BoringFactory;
  }
}
