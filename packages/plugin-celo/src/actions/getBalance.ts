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
import { getBalance } from "../examples";
import { createTATUMService } from "../services";


export const getBalaceWalletCeloAction: Action = {
    name: "GET_WALLET_BALANCE",
    similes: [
        "BALANCE WALLET",
        "CUANTO TIENE",
        "DAME EL BALANCE",
        "CUANTO TENGO",
        "GET WALLET BALANCE",
        "CUANTO DINERO TENGO"
    ],
    description: "Obtiene el balance de una Wallet ",
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
            // Aquí deberías obtener la dirección de la wallet (ej. del estado o memoria)
            const walletAddress = message.content as { text:string } // Asumiendo que tienes la dirección guardada en la memoria
            const addressMatch = walletAddress.text.match(/0x[a-fA-F0-9]{40}/);
            if (!addressMatch) {
                throw new Error("Valid celo address not found in message");
            }
            const address = addressMatch[0];
            console.log(`Addres que esta entrando : ${address}`);

            if (!walletAddress) {
                 throw new Error("No wallet address provided.");
            }
            const CWData = await tatumService.getCeloWalletBalance(address);
            console.log(`CWData :${CWData.celo}`);
            elizaLogger.success(
                `Successfully fetched Consultar Balances`
            );
            if (callback) {
                callback({
                    text: `💲 Tu balance es de : ${CWData.celo} CELO`
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
    examples: getBalance as ActionExample[][],
} as Action;
