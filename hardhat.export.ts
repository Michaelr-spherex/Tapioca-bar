import * as dotenv from 'dotenv';

import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import { HardhatUserConfig } from 'hardhat/config';
import 'hardhat-deploy';
import 'hardhat-contract-sizer';

dotenv.config();

const config: HardhatUserConfig & { dodoc?: any } = {
    solidity: {
        compilers: [
            {
                version: '0.6.12',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: '0.8.15',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100,
                    },
                },
            },
        ],
        overrides: {
            'contracts/mixologist/Mixologist.sol': {
                version: '0.8.15',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        },
    },
    namedAccounts: {
        deployer: 0,
    },
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            allowUnlimitedContractSize: true,
            accounts:
                process.env.PRIVATE_KEY !== undefined
                    ? [
                          {
                              privateKey: process.env.PRIVATE_KEY,
                              balance: '1000000000000000000000000',
                          },
                      ]
                    : [],
        },
        rinkeby: {
            gasMultiplier: 2,
            url:
                process.env.RINKEBY ??
                'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            chainId: 4,
            accounts:
                process.env.PRIVATE_KEY !== undefined
                    ? [process.env.PRIVATE_KEY]
                    : [],
            tags: ['testnet'],
        },
    },
    etherscan: {
        apiKey: {
            rinkeby: process.env.RINKEBY_KEY ?? '',
        },
    },
    typechain: {
        outDir: 'typechain',
        target: 'ethers-v5',
    },
    // gasReporter: {
    //     currency: 'USD',
    //     token: 'BOBA',
    //     coinmarketcap: process.env.COINMARKETCAP_API ?? '',
    // },
    mocha: {
        timeout: 4000000,
    },
    dodoc: {
        runOnCompile: true,
        freshOutput: true,
    },
    typechain: {
        outDir: 'typechain',
        target: 'ethers-v5',
    },
};

export default config;
