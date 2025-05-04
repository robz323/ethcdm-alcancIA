// src/actions/createCeloWallet.ts
import {
  elizaLogger
} from "@elizaos/core";

// src/enviroment.ts
import { z } from "zod";
var tatumEnvSchema = z.object({
  TATUM_API_KEY: z.string().min(1, "Tatum API key is required")
});
async function validateTatumConfig(runtime) {
  try {
    const config = {
      TATUM_API_KEY: runtime.getSetting("TATUM_API_KEY")
    };
    console.log("config Tatumss: ", config);
    return tatumEnvSchema.parse(config);
  } catch (error) {
    console.log("error::::", error);
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join("\n");
      throw new Error(
        `Tatum API configuration validation failed:
${errorMessages}`
      );
    }
    throw error;
  }
}

// src/examples.ts
var createWalletCelo = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "\xBFPodr\xEDas ayudarme a crear una wallet?"
      }
    },
    {
      user: "{{agent}}",
      content: {
        text: "Por su puesto\xA1 Recuerda que al crear tu wallet te dare informaci\xF3n que no debes de compartir.",
        action: "CREATE_WALLET_CELO"
      }
    }
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "\xBFMe podrias dar una wallet de Celo?"
      }
    },
    {
      user: "{{agent}}",
      content: {
        text: "Por su puesto\xA1 Recuerda que al crear tu wallet te dare informaci\xF3n que no debes de compartir.",
        action: "CREATE_WALLET_CELO"
      }
    }
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Quisiera crear una cuenta, \xBFpodr\xEDas ayudarme?"
      }
    },
    {
      user: "{{agent}}",
      content: {
        text: "Por su puesto\xA1 Recuerda que al crear tu wallet te dare informaci\xF3n que no debes de compartir.",
        action: "CREATE_WALLET_CELO"
      }
    }
  ]
];
var getBalance = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "Cual es el balance de mi wallet {{address}}"
      }
    },
    {
      user: "{{agent}}",
      content: {
        text: "\u{1F4B2} Tu balance es de : 7.7",
        action: "GET_WALLET_BALANCE"
      }
    }
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Cual es el balance de esta wallet {{address}}"
      }
    },
    {
      user: "{{agent}}",
      content: {
        text: "\u{1F4B2} Tu balance es de : 7.7",
        action: "GET_WALLET_BALANCE"
      }
    }
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Cuanto tengo en mi Wallet?"
      }
    },
    {
      user: "{{agent}}",
      content: {
        text: "Me podr\xEDas decir cual es tu wallet?"
      }
    },
    {
      user: "{{user1}}",
      content: {
        text: "{{address}}"
      }
    },
    {
      user: "{{agent}}",
      content: {
        text: "\u{1F4B2} Tu balance es de :7.7",
        action: "GET_WALLET_BALANCE"
      }
    }
  ]
];

// src/services.ts
var BASE_URL = "https://api.tatum.io/v3/arb/";
var createTATUMService = (apiKey) => {
  const createCeloWallet = async () => {
    if (!apiKey) {
      throw new Error("Invalid parameters no Tatum API");
    }
    try {
      const url = BASE_URL + "wallet";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "x-api-key": apiKey
        }
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.message || response.statusText);
      }
      const data = await response.json();
      console.log(data.mnemonic);
      let xpub = data.xpub;
      let index = 0;
      const urlCreateWllet = BASE_URL + "address/" + xpub + "/" + index;
      const response2 = await fetch(urlCreateWllet, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "x-api-key": apiKey
        }
      });
      if (!response2.ok) {
        const error = await response2.json();
        throw new Error(error?.message || response.statusText);
      }
      const data2 = await response2.json();
      console.log(data2.address);
      const urlPrivateKey = BASE_URL + "wallet/priv";
      const parameters = {
        index: 0,
        // Reemplaza con el índice que necesites
        mnemonic: data.mnemonic
      };
      const response3 = await fetch(urlPrivateKey, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "x-api-key": apiKey
        },
        body: JSON.stringify(parameters)
      });
      if (!response3.ok) {
        const error = await response3.json();
        throw new Error(error?.message || response3.statusText);
      }
      const data3 = await response3.json();
      console.log(data3.key);
      return {
        mnemonic: data.mnemonic,
        address: data2.address,
        key: data3.key
      };
    } catch (error) {
      console.error("TATUM API Error:", error.message);
      throw error;
    }
  };
  const getCeloWalletBalance = async (address) => {
    console.log(`Esta es la wallet de entrada ${address}`);
    if (!apiKey) {
      throw new Error("Invalid parameters no Tatum API");
    }
    try {
      const url = `${BASE_URL}account/balance/${address}`;
      console.log(`Esta es la URL : ${url}`);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "accept": "application/json",
          "x-api-key": apiKey
        }
      });
      console.log(`Respuesta--> : ${response}`);
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || response.statusText);
      }
      const data = await response.json();
      console.log(`Respuesta2--> : ${data.celo}`);
      return {
        celo: data.celo,
        cUsd: data.cUsd,
        cEur: data.cEur
      };
    } catch (error) {
      throw new Error(`Error fetching balance: ${error.message}`);
    }
  };
  return { createCeloWallet, getCeloWalletBalance };
};

// src/actions/createCeloWallet.ts
var createWalletCeloAction = {
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
  validate: async (runtime) => {
    await validateTatumConfig(runtime);
    return true;
  },
  handler: async (runtime, message, state, _options, callback) => {
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
          text: `\u270D Esta es tu frase semilla: [${CWData.mnemonic}]
\u{1F4B3} Aqu\xED tienes tu llave publica: ${CWData.address}
\u{1F6A8} Esta es tu llave privada: ${CWData.key} `
        });
        return true;
      }
    } catch (error) {
      elizaLogger.error("Error in TATUM plugin handler:", error);
      callback({
        text: `Error fetching TATUM Create Wallet: ${error.message}`,
        content: { error: error.message }
      });
      return false;
    }
  },
  examples: createWalletCelo
};

// src/actions/getBalance.ts
import {
  elizaLogger as elizaLogger2
} from "@elizaos/core";
var getBalaceWalletCeloAction = {
  name: "GET_WALLET_BALANCE",
  similes: [
    "BALANCE WALLET",
    "CUANTO TIENE",
    "DAME EL BALANCE",
    "CUANTO TENGO",
    "GET WALLET BALANCE",
    "CUANTO DINERO TENGO"
  ],
  description: "Obtiene el balance de una Wallet Celo",
  validate: async (runtime) => {
    await validateTatumConfig(runtime);
    return true;
  },
  handler: async (runtime, message, state, _options, callback) => {
    const config = await validateTatumConfig(runtime);
    const tatumService = createTATUMService(
      config.TATUM_API_KEY
    );
    try {
      const walletAddress = message.content;
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
      elizaLogger2.success(
        `Successfully fetched Consultar Balances`
      );
      if (callback) {
        callback({
          text: `\u{1F4B2} Tu balance es de : ${CWData.celo} CELO`
        });
        return true;
      }
    } catch (error) {
      elizaLogger2.error("Error in TATUM plugin handler:", error);
      callback({
        text: `Error fetching TATUM Create Wallet: ${error.message}`,
        content: { error: error.message }
      });
      return false;
    }
  },
  examples: getBalance
};

// src/index.ts
var celoPlugin = {
  name: "Celo Network",
  description: "Plugin para la red de Celo",
  //actions: [createCeloWallet, getBalance, sendCelo, sendTokenErc20],
  actions: [createWalletCeloAction, getBalaceWalletCeloAction],
  // evaluators analyze the situations and actions taken by the agent. they run after each agent action
  // allowing the agent to reflect on what happened and potentially trigger additional actions or modifications
  evaluators: [],
  // providers supply information and state to the agent's context, help agent access necessary data
  providers: []
};
var index_default = celoPlugin;
export {
  celoPlugin,
  index_default as default
};
//# sourceMappingURL=index.js.map