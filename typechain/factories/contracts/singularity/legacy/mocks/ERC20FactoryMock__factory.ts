/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC20FactoryMock,
  ERC20FactoryMockInterface,
} from "../../../../../contracts/singularity/legacy/mocks/ERC20FactoryMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_mintLimit",
        type: "uint256",
      },
    ],
    name: "deployToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "last",
    outputs: [
      {
        internalType: "contract ERC20Mock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576111c5908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c90816321b19c541461006c57506347799da81461003757600080fd5b3461006957806003193601126100695773ffffffffffffffffffffffffffffffffffffffff6020915416604051908152f35b80fd5b90503461014e57606036600319011261014e5760243560ff811680910361014a5761103d908183019183831067ffffffffffffffff84111761011d57918391606093610153843960043582526020820152604435604082015203019082f080156101105773ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff000000000000000000000000000000000000000082541617815580f35b50604051903d90823e3d90fd5b6024857f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b8280fd5b5080fdfe60c034620001ad57601f6200103d38819003918201601f19168301926001600160401b039290918385118386101762000197578160609284926040978852833981010312620001ad57805160208201519160ff8316809303620001ad57840151924660a052845160208101917f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218835246878301523060608301526060825260808201908282109082111762000197578652519020608052620000c3600454620001b2565b601f811162000166575b50600c6546616e746f6d60d01b01600455600554620000ec90620001b2565b601f811162000135575b5060066246544d60e81b0160055560035560ff19600654161760065560085551610e4d9081620001f0823960805181610d84015260a05181610d5d0152f35b600060058152601f60208220920160051c8201915b8281106200015a575050620000f6565b8181556001016200014a565b600060048152601f60208220920160051c8201915b8281106200018b575050620000cd565b8181556001016200017b565b634e487b7160e01b600052604160045260246000fd5b600080fd5b90600182811c92168015620001e4575b6020831014620001ce57565b634e487b7160e01b600052602260045260246000fd5b91607f1691620001c256fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde0314610ae857508163095ea7b314610a7657816318160ddd14610a5757816321442ec914610a2057816322ae81af14610a0257816323b872dd1461082e578163313ce5671461080c5781633644e515146107e857816370a08231146107b25781637c928fe91461062d5781637ecebe00146105f657816395d89b41146104f3578163996517cf146104d4578163a9059cbb146103fa578163d505accf14610120575063dd62ed3e146100d557600080fd5b3461011c578060031936011261011c57806020926100f1610c61565b6100f9610c7c565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b9050346103f65760e03660031901126103f65761013b610c61565b90610144610c7c565b9260443590606435926084359460ff86168096036103f2576001600160a01b038091169586156103af578542101561036c5786895260209560028752848a20988954996000198b146103595760018b01905585519184898401927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c984528b89860152169a8b606085015288608085015260a084015260c083015260c0825260e082019167ffffffffffffffff9181841083851117610346578388528151902091610120820190811184821017610346579260809261028860608f968d9895610100918d526002865201937f19010000000000000000000000000000000000000000000000000000000000008552610259610d58565b8c519485926102708c850198899251928391610c12565b8301918b8301528d820152038b810184520182610bda565b5190209087519182528482015260a4358782015260c435606082015282805260015afa1561033c578590885116036102fb5750907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259291848752600183528087208688528352818188205551908152a380f35b83606492519162461bcd60e51b8352820152601860248201527f45524332303a20496e76616c6964205369676e617475726500000000000000006044820152fd5b82513d89823e3d90fd5b60248d604189634e487b7160e01b835252fd5b60248c601188634e487b7160e01b835252fd5b606483602086519162461bcd60e51b8352820152600e60248201527f45524332303a20457870697265640000000000000000000000000000000000006044820152fd5b606483602086519162461bcd60e51b8352820152601860248201527f45524332303a204f776e65722063616e6e6f74206265203000000000000000006044820152fd5b8780fd5b8280fd5b50503461011c578060031936011261011c576020916001600160a01b0361041f610c61565b836024359384158015906104c9575b610466575b505192835216907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843392a35160018152f35b3381528087528181205461047c86821015610c92565b8484169086823303610491575b505050610433565b6104a5916104a0841515610cdd565b610d28565b338352828952838320558152206104bd848254610d4b565b90558338808086610489565b50838316331461042e565b50503461011c578160031936011261011c576020906008549051908152f35b919050346103f657826003193601126103f657805191836005549060019082821c9282811680156105ec575b60209586861082146105d957508488529081156105b7575060011461055e575b61055a8686610550828b0383610bda565b5191829182610c35565b0390f35b929550600583527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db05b8284106105a4575050508261055a9461055092820101943861053f565b8054868501880152928601928101610587565b60ff191687860152505050151560051b83010192506105508261055a3861053f565b836022602492634e487b7160e01b835252fd5b93607f169361051f565b50503461011c57602036600319011261011c57806020926001600160a01b0361061d610c61565b1681526002845220549051908152f35b919050346103f657602090816003193601126107ae57823592600854841161076d57338552600783528185205462015180810180911161075a57421061071957338552600783524282862055600354906106878583610d4b565b9182106106d75750917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9185936003553384528382528084206106cb868254610d4b565b9055519384523393a380f35b6064908484519162461bcd60e51b8352820152600d60248201527f4d696e74206f766572666c6f77000000000000000000000000000000000000006044820152fd5b82606492519162461bcd60e51b8352820152601460248201527f45524332304d6f636b3a20746f6f206561726c790000000000000000000000006044820152fd5b602486601184634e487b7160e01b835252fd5b82606492519162461bcd60e51b8352820152601960248201527f45524332304d6f636b3a20616d6f756e7420746f6f20626967000000000000006044820152fd5b8380fd5b50503461011c57602036600319011261011c57806020926001600160a01b036107d9610c61565b16815280845220549051908152f35b50503461011c578160031936011261011c57602090610805610d58565b9051908152f35b50503461011c578160031936011261011c5760209060ff600654169051908152f35b8284346109ff5760603660031901126109ff57610849610c61565b90610852610c7c565b604435918261089f575b5060208095507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9185519384526001600160a01b03809116941692a35160018152f35b6001600160a01b03958685169687835260209083825287842054906108c687831015610c92565b851692838a036108da575b5050505061085c565b89855260018352888520338652835288852054906000198203610956575b50509282602099828a946109358a8e996104a07fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9c9a1515610cdd565b928252528383205581522061094b858254610d4b565b9055918780806108d1565b8782106109bd575092602099858a946109358a8e9996610998827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9d9b610d28565b86865260018552898620338752855289862055965050509450955099819496506108f8565b606490848b519162461bcd60e51b8352820152601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f7700000000000000006044820152fd5b80fd5b50503461011c578160031936011261011c5760209051620151808152f35b50503461011c57602036600319011261011c57806020926001600160a01b03610a47610c61565b1681526007845220549051908152f35b50503461011c578160031936011261011c576020906003549051908152f35b50503461011c578060031936011261011c5760209181610a94610c61565b91602435918291338152600187526001600160a01b038282209516948582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b8385346109ff57806003193601126109ff57809380549160019083821c92828516948515610bd0575b6020958686108114610bbd57858952908115610b995750600114610b41575b61055a8787610550828c0383610bda565b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b828410610b86575050508261055a9461055092820101948680610b30565b8054868501880152928601928101610b68565b60ff19168887015250505050151560051b83010192506105508261055a8680610b30565b602484602285634e487b7160e01b835252fd5b93607f1693610b11565b90601f8019910116810190811067ffffffffffffffff821117610bfc57604052565b634e487b7160e01b600052604160045260246000fd5b60005b838110610c255750506000910152565b8181015183820152602001610c15565b60409160208252610c558151809281602086015260208686019101610c12565b601f01601f1916010190565b600435906001600160a01b0382168203610c7757565b600080fd5b602435906001600160a01b0382168203610c7757565b15610c9957565b606460405162461bcd60e51b815260206004820152601660248201527f45524332303a2062616c616e636520746f6f206c6f77000000000000000000006044820152fd5b15610ce457565b606460405162461bcd60e51b815260206004820152601660248201527f45524332303a206e6f207a65726f2061646472657373000000000000000000006044820152fd5b91908203918211610d3557565b634e487b7160e01b600052601160045260246000fd5b91908201809211610d3557565b6000467f000000000000000000000000000000000000000000000000000000000000000003610da657507f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101917f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218835246604083015230606083015260608252608082019082821067ffffffffffffffff831117610e03575060405251902090565b80634e487b7160e01b602492526041600452fdfea26469706673582212204b70bd5dee78a3246f502ef549795c6ff3e9c7324fd5ea2bf0eb0642da7b612464736f6c63430008120033a264697066735822122012245c88639a13c7ccbf9a0fc07585cc9d8b1b7fa9818c48f9cca0c8dccee54b64736f6c63430008120033";

type ERC20FactoryMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20FactoryMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20FactoryMock__factory extends ContractFactory {
  constructor(...args: ERC20FactoryMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20FactoryMock> {
    return super.deploy(overrides || {}) as Promise<ERC20FactoryMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20FactoryMock {
    return super.attach(address) as ERC20FactoryMock;
  }
  override connect(signer: Signer): ERC20FactoryMock__factory {
    return super.connect(signer) as ERC20FactoryMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20FactoryMockInterface {
    return new utils.Interface(_abi) as ERC20FactoryMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20FactoryMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20FactoryMock;
  }
}
