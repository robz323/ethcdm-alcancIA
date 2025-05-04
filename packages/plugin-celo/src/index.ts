import { Plugin } from "@elizaos/core";
import { createWalletCeloAction } from "./actions/createCeloWallet";
import { getBalaceWalletCeloAction } from "./actions/getBalance";
/*import { getBalance } from "./actions/getBalance";

import { sendCelo } from "./actions/sendCelo";
import { sendTokenErc20 } from "./actions/sendTokenErc20";*/

export const celoPlugin: Plugin = {
    name: "Celo Network",
    description: "Plugin para la red de Celo",
    //actions: [createCeloWallet, getBalance, sendCelo, sendTokenErc20],
    actions: [createWalletCeloAction,getBalaceWalletCeloAction],
    // evaluators analyze the situations and actions taken by the agent. they run after each agent action
    // allowing the agent to reflect on what happened and potentially trigger additional actions or modifications
    evaluators: [],
    // providers supply information and state to the agent's context, help agent access necessary data
    providers: [],
};
export default celoPlugin;