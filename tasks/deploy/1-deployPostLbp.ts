import * as TAP_TOKEN_CONFIG from '@tap-token/config';
import * as TAPIOCA_PERIPH_CONFIG from '@tapioca-periph/config';
import * as TAPIOCA_Z_CONFIG from '@tapiocaz/config';
import { TAPIOCA_PROJECTS_NAME } from '@tapioca-sdk/api/config';
import { TTapiocaDeployTaskArgs } from '@tapioca-sdk/ethers/hardhat/DeployerVM';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { loadGlobalContract } from 'tapioca-sdk';
import { TTapiocaDeployerVmPass } from 'tapioca-sdk/dist/ethers/hardhat/DeployerVM';
import { buildBBMediumRiskMC } from 'tasks/deployBuilds/buildBBMediumRiskMC';
import { buildPenrose } from 'tasks/deployBuilds/buildPenrose';
import { buildSGLMediumRiskMC } from 'tasks/deployBuilds/buildSGLMediumRiskMC';
import { buildSGLModules } from 'tasks/deployBuilds/buildSGLModules';
import { buildUSDO } from 'tasks/deployBuilds/buildUSDO';
import { buildUSDOModules } from 'tasks/deployBuilds/buildUSDOModules';
import { DEPLOYMENT_NAMES, DEPLOY_CONFIG } from './DEPLOY_CONFIG';
import { buildUSDOExtExec } from 'tasks/deployBuilds/buildUSDOExtExec';
import { buildUSDOFlashloanHelper } from 'tasks/deployBuilds/buildUSDOFlashloanHelper';
import { buildSimpleLeverageExecutor } from 'tasks/deployBuilds/buildSimpleLeverageExecutor';
import { buildERC20WithoutStrategy } from 'tasks/deployBuilds/buildERC20WithoutStrategy';

export const deployPostLbp__task = async (
    _taskArgs: TTapiocaDeployTaskArgs,
    hre: HardhatRuntimeEnvironment,
) => {
    await hre.SDK.DeployerVM.tapiocaDeployTask(
        _taskArgs,
        {
            hre,
            // Static simulation needs to be false, constructor relies on external call. We're using 0x00 replacement with DeployerVM, which creates a false positive for static simulation.
            staticSimulation: false,
        },
        tapiocaDeployTask,
        tapiocaPostDeployTask,
    );
};

async function tapiocaPostDeployTask(params: TTapiocaDeployerVmPass<object>) {
    const { hre, taskArgs, VM, chainInfo } = params;
    const { tag } = taskArgs;
}

async function tapiocaDeployTask(params: TTapiocaDeployerVmPass<object>) {
    const { hre, VM, tapiocaMulticallAddr, taskArgs, isTestnet, chainInfo } =
        params;
    const { tag } = taskArgs;
    const owner = tapiocaMulticallAddr;

    const {
        tapToken,
        yieldBox,
        cluster,
        pearlmit,
        zeroXSwapper,
        mtETH,
        tReth,
        tWSTETH,
    } = deployLoadDeployments({
        hre,
        tag,
    });

    if (
        chainInfo.name === 'arbitrum' ||
        chainInfo.name === 'arbitrum_sepolia'
    ) {
        // @ts-ignore
        (await buildBBModules(hre)).forEach((module) => VM.add(module));
        VM.add(
            await buildBBMediumRiskMC(hre, DEPLOYMENT_NAMES.BB_MEDIUM_RISK_MC),
        )
            .add(
                await buildBBMediumRiskMC(
                    hre,
                    DEPLOYMENT_NAMES.BB_MT_ETH_MARKET,
                ),
            )
            .add(
                await buildBBMediumRiskMC(
                    hre,
                    DEPLOYMENT_NAMES.BB_T_RETH_MARKET,
                ),
            )
            .add(
                await buildBBMediumRiskMC(
                    hre,
                    DEPLOYMENT_NAMES.BB_T_WST_ETH_MARKET,
                ),
            );
    }

    // @ts-ignore
    (await buildSGLModules(hre)).forEach((module) => VM.add(module));
    VM.add(
        await buildPenrose(hre, {
            yieldBox,
            cluster,
            tapToken,
            pearlmit,
            owner,
        }),
    )
        .add(
            await buildSGLMediumRiskMC(
                hre,
                DEPLOYMENT_NAMES.SGL_MEDIUM_RISK_MC,
            ),
        )
        .add(await buildSGLMediumRiskMC(hre, DEPLOYMENT_NAMES.SGL_S_DAI_MARKET))
        .add(
            await buildSGLMediumRiskMC(hre, DEPLOYMENT_NAMES.SGL_S_GLP_MARKET),
        );

    // @ts-ignore
    (await buildUSDOModules(hre)).forEach((module) => VM.add(module));

    /**
     * YB Assets
     */
    VM.add(
        await buildERC20WithoutStrategy(hre, {
            deploymentName: DEPLOYMENT_NAMES.YB_SDAI_ASSET_WITHOUT_STRATEGY,
            token: DEPLOY_CONFIG.POST_LBP[hre.SDK.eChainId]!.sDAI!,
            yieldBox,
        }),
    )
        .add(
            await buildERC20WithoutStrategy(hre, {
                deploymentName: DEPLOYMENT_NAMES.YB_SGLP_ASSET_WITHOUT_STRATEGY,
                token: DEPLOY_CONFIG.POST_LBP[hre.SDK.eChainId]!.sGLP!,
                yieldBox,
            }),
        )
        .add(
            await buildERC20WithoutStrategy(hre, {
                deploymentName:
                    DEPLOYMENT_NAMES.YB_MT_ETH_ASSET_WITHOUT_STRATEGY,
                token: mtETH,
                yieldBox,
            }),
        )
        .add(
            await buildERC20WithoutStrategy(hre, {
                deploymentName:
                    DEPLOYMENT_NAMES.YB_T_RETH_ASSET_WITHOUT_STRATEGY,
                token: tReth,
                yieldBox,
            }),
        )
        .add(
            await buildERC20WithoutStrategy(hre, {
                deploymentName:
                    DEPLOYMENT_NAMES.YB_T_WST_ETH_ASSET_WITHOUT_STRATEGY,
                token: tWSTETH,
                yieldBox,
            }),
        );

    /**
     * USDO
     */

    VM.add(await buildUSDOExtExec(hre, { cluster, owner }))
        .add(
            await buildSimpleLeverageExecutor(hre, {
                cluster,
                zeroXSwapper,
                tag,
            }),
        )
        .add(
            await buildUSDO(
                hre,
                {
                    initData: {
                        endpoint: chainInfo.address,
                        delegate: owner,
                        extExec: '0x',
                        cluster,
                        pearlmit,
                        yieldBox,
                    },
                    modules: {
                        marketReceiverModule: '0x',
                        optionReceiverModule: '0x',
                        usdoReceiverModule: '0x',
                        usdoSenderModule: '0x',
                    },
                },
                [
                    {
                        argPosition: 0,
                        keyName: 'extExec',
                        deploymentName: DEPLOYMENT_NAMES.USDO_EXT_EXEC,
                    },
                    {
                        argPosition: 1,
                        keyName: 'marketReceiverModule',
                        deploymentName:
                            DEPLOYMENT_NAMES.USDO_MARKET_RECEIVER_MODULE,
                    },
                    {
                        argPosition: 1,
                        keyName: 'optionReceiverModule',
                        deploymentName:
                            DEPLOYMENT_NAMES.USDO_OPTION_RECEIVER_MODULE,
                    },
                    {
                        argPosition: 1,
                        keyName: 'usdoReceiverModule',
                        deploymentName: DEPLOYMENT_NAMES.USDO_RECEIVER_MODULE,
                    },
                    {
                        argPosition: 1,
                        keyName: 'usdoSenderModule',
                        deploymentName: DEPLOYMENT_NAMES.USDO_SENDER_MODULE,
                    },
                ],
            ),
        )
        .add(
            await buildUSDOFlashloanHelper(hre, { usdo: '0x', owner }, [
                {
                    argPosition: 0,
                    deploymentName: DEPLOYMENT_NAMES.USDO,
                },
            ]),
        );
}

export function deployLoadDeployments(params: {
    hre: HardhatRuntimeEnvironment;
    tag: string;
}) {
    const { hre, tag } = params;
    const tapToken = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapToken,
        hre.SDK.eChainId,
        TAP_TOKEN_CONFIG.DEPLOYMENT_NAMES.TAP_TOKEN,
        tag,
    ).address;
    const yieldBox = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapToken,
        hre.SDK.eChainId,
        TAP_TOKEN_CONFIG.DEPLOYMENT_NAMES.TAP_TOKEN,
        tag,
    ).address;
    const cluster = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapiocaPeriph,
        hre.SDK.eChainId,
        TAPIOCA_PERIPH_CONFIG.DEPLOYMENT_NAMES.CLUSTER,
        tag,
    ).address;
    const pearlmit = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapiocaPeriph,
        hre.SDK.eChainId,
        TAPIOCA_PERIPH_CONFIG.DEPLOYMENT_NAMES.PEARLMIT,
        tag,
    ).address;

    const zeroXSwapper = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapiocaPeriph,
        hre.SDK.eChainId,
        TAPIOCA_PERIPH_CONFIG.DEPLOYMENT_NAMES.ZERO_X_SWAPPER,
        params.tag,
    ).address;

    const mtETH = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapiocaZ,
        hre.SDK.eChainId,
        TAPIOCA_Z_CONFIG.DEPLOYMENT_NAMES.mtETH,
        params.tag,
    ).address;

    const tReth = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapiocaZ,
        hre.SDK.eChainId,
        TAPIOCA_Z_CONFIG.DEPLOYMENT_NAMES.tRETH,
        params.tag,
    ).address;

    const tWSTETH = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapiocaZ,
        hre.SDK.eChainId,
        TAPIOCA_Z_CONFIG.DEPLOYMENT_NAMES.tWSTETH,
        params.tag,
    ).address;

    const mtEthOracle = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapiocaPeriph,
        hre.SDK.eChainId,
        TAPIOCA_PERIPH_CONFIG.DEPLOYMENT_NAMES.ETH_SEER_DUAL_ORACLE,
        params.tag,
    ).address;

    const tRethOracle = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapiocaPeriph,
        hre.SDK.eChainId,
        TAPIOCA_PERIPH_CONFIG.DEPLOYMENT_NAMES.RETH_USD_SEER_CL_MULTI_ORACLE,
        params.tag,
    ).address;

    const tWstEthOracle = loadGlobalContract(
        hre,
        TAPIOCA_PROJECTS_NAME.TapiocaPeriph,
        hre.SDK.eChainId,
        TAPIOCA_PERIPH_CONFIG.DEPLOYMENT_NAMES.WSTETH_USD_SEER_CL_MULTI_ORACLE,
        params.tag,
    ).address;

    return {
        tapToken,
        yieldBox,
        cluster,
        pearlmit,
        zeroXSwapper,
        mtETH,
        tReth,
        tWSTETH,
        mtEthOracle,
        tRethOracle,
        tWstEthOracle,
    };
}
