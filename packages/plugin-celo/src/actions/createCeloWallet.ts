import {
    elizaLogger,
    Action,
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
} from "@elizaos/core";
import { validateTatumConfig } from "../enviroment";
import { createWalletCelo } from "../examples";
import { createTATUMService } from "../services";


export const createWalletCeloAction: Action = {
    name: "CREATE_WALLET_CELO",
    similes: [
        "CREAR WALLET",
        "GENERAR WALLET",
        "DAME UNA WALLET",
        "CREA UNA CUENTA",
        "NECESITO UNA CUENTA",
        "NECESITO UNA WALLET"
    ],
    description: "Create a Wallet Celo",
    validate: async (runtime: IAgentRuntime) => {
        await validateTatumConfig(runtime);
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {

        const config = await validateTatumConfig(runtime);
        const tatumService = createTATUMService(
            config.TATUM_API_KEY
        );

        try {
            const CWData = await tatumService.createCeloWallet();
            elizaLogger.success(
                `Successfully fetched CWData`
            );
            if (callback) {
                callback({
                    text: `✍ Esta es tu frase semilla: [${CWData.mnemonic}]
💳 Aquí tienes tu llave publica: ${CWData.address}
🚨 Esta es tu llave privada: ${CWData.key} `
                });
                return true;
            }
        } catch (error:any) {
            elizaLogger.error("Error in TATUM plugin handler:", error);
            callback({
                text: `Error fetching TATUM Create Wallet: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: createWalletCelo as ActionExample[][],
} as Action;
