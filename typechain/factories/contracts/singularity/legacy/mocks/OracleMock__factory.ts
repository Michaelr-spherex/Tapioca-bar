/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  OracleMock,
  OracleMockInterface,
} from "../../../../../contracts/singularity/legacy/mocks/OracleMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "__name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "__symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataParameter",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peekSpot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate_",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "setSuccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "success",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523462000333576200091b803803806200001d8162000338565b9283398101606082820312620003335781516001600160401b03908181116200033357826200004e91850162000374565b926020928382015183811162000333576040916200006e91840162000374565b910151936001918260ff19815416178355600095865581518481116200031f57600254928484811c9416801562000314575b8785101462000300578190601f94858111620002ac575b508790858311600114620002465789926200023a575b5050600019600383901b1c191690841b176002555b8051938411620002265760039586548481811c911680156200021b575b878210146200020757838111620001bf575b5085928511600114620001595793945084929190836200014d575b50501b9160001990841b1c19161790555b6040516105349081620003e78239f35b0151925038806200012c565b86815285812093958591601f198316915b88838310620001a457505050106200018b575b505050811b0190556200013d565b015160001983861b60f8161c191690553880806200017d565b8587015188559096019594850194879350908101906200016a565b8782528682208480880160051c820192898910620001fd575b0160051c019085905b828110620001f157505062000111565b838155018590620001e1565b92508192620001d8565b634e487b7160e01b82526022600452602482fd5b90607f1690620000ff565b634e487b7160e01b86526041600452602486fd5b015190503880620000cd565b60028a52888a208794509190601f1984168b5b8b8282106200029557505084116200027b575b505050811b01600255620000e2565b015160001960f88460031b161c191690553880806200026c565b8385015186558a9790950194938401930162000259565b909150600289528789208580850160051c8201928a8610620002f6575b918891869594930160051c01915b828110620002e7575050620000b7565b8b8155859450889101620002d7565b92508192620002c9565b634e487b7160e01b88526022600452602488fd5b93607f1693620000a0565b634e487b7160e01b87526041600452602487fd5b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200035e57604052565b634e487b7160e01b600052604160045260246000fd5b919080601f84011215620003335782516001600160401b0381116200035e57602090620003aa601f8201601f1916830162000338565b92818452828287010111620003335760005b818110620003d257508260009394955001015290565b8581018301518482018401528201620003bc56fe60806040818152600436101561001457600080fd5b600090813560e01c9283630b93381b1461024e575082632b39febd146101bb5782632c4e722e146101a057826360fe47b1146101865782637269ada11461016a5782637bcc7f811461013757826382215cb11461011b578263c699c4d6146100ff578263d39bbef0146100e4578263d568866c146100ad5750508063d6d7d525146100a85763eeb8a8d3146100a857600080fd5b6104d5565b346100e0576100dc906100bf36610486565b50506100c96102e7565b905191829160208352602083019061026f565b0390f35b5080fd5b346100e0576020916100f536610486565b5050549051908152f35b346100e0576100dc9061011136610486565b50506100c96103d2565b346100e057816003193601126100e0576100dc906100c96103d2565b5034610167576020366003190112610167576004358015158091036100e05760ff80196001541691161760015580f35b80fd5b346100e057816003193601126100e0576100dc906100c96102e7565b503461016757602036600319011261016757600435815580f35b346100e057816003193601126100e057602091549051908152f35b346100e057816003193601126100e0578051906020808301526003818301527f3078300000000000000000000000000000000000000000000000000000000000606083015260608252608082019282841067ffffffffffffffff85111761023a575082905260208252607f199061023560a082018261026f565b030190f35b80634e487b7160e01b602492526041600452fd5b9050346100e057816003193601126100e05760209060ff6001541615158152f35b919082519283825260005b84811061029b575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161027a565b90601f8019910116810190811067ffffffffffffffff8211176102d157604052565b634e487b7160e01b600052604160045260246000fd5b60405190600060025490600182811c908084169384156103c8575b60209485841081146103b457838852879493929181156103945750600114610335575b5050610333925003836102af565b565b9093915060026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace936000915b81831061037c57505061033393508201013880610325565b85548884018501529485019487945091830191610364565b91505061033394925060ff191682840152151560051b8201013880610325565b602485634e487b7160e01b81526022600452fd5b91607f1691610302565b60405190600060035490600182811c9080841693841561047c575b60209485841081146103b45783885287949392918115610394575060011461041d575050610333925003836102af565b9093915060036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b936000915b81831061046457505061033393508201013880610325565b8554888401850152948501948794509183019161044c565b91607f16916103ed565b9060206003198301126104d05760043567ffffffffffffffff928382116104d057806023830112156104d05781600401359384116104d057602484830101116104d0576024019190565b600080fd5b346104d0576104e336610486565b5050604060ff60015416600054825191151582526020820152f3fea264697066735822122075bde054b80713e249bddacee162d2a51f0c387291449a1c42d24674f06265bb64736f6c63430008120033";

type OracleMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleMock__factory extends ContractFactory {
  constructor(...args: OracleMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OracleMock> {
    return super.deploy(
      _name,
      _symbol,
      _rate,
      overrides || {}
    ) as Promise<OracleMock>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, _rate, overrides || {});
  }
  override attach(address: string): OracleMock {
    return super.attach(address) as OracleMock;
  }
  override connect(signer: Signer): OracleMock__factory {
    return super.connect(signer) as OracleMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleMockInterface {
    return new utils.Interface(_abi) as OracleMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleMock {
    return new Contract(address, _abi, signerOrProvider) as OracleMock;
  }
}
