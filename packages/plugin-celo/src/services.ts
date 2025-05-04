import {
    CrateCeloWallet,
    GetBalanceWallet
} from "./types";

const BASE_URL = "https://api.tatum.io/v3/arb/";

export const createTATUMService = (apiKey: string) => {

    const createCeloWallet = async (): Promise<CrateCeloWallet> => {
        if (!apiKey) {
            throw new Error("Invalid parameters no Tatum API");
        }

        try {
            const url = BASE_URL+"wallet"
            /*Crea la wallet */
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'x-api-key': apiKey
                }
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error?.message || response.statusText);
            }

            const data = await response.json();
            console.log(data.mnemonic);

            /*Siguientes llamados*/
            let xpub = data.xpub;
            let index= 0 ;// Reemplaza con el índice que necesites

            /*Se crea la wallet*/
            const urlCreateWllet = BASE_URL+"address/"+xpub+"/"+index
            const response2 = await fetch(urlCreateWllet, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'x-api-key': apiKey
                }
            });
            if (!response2.ok) {
                const error = await response2.json();
                throw new Error(error?.message || response.statusText);
            }

            const data2 = await response2.json();
            console.log(data2.address);

            /*Se crea la llave privada */

            const urlPrivateKey = BASE_URL+"wallet/priv"
            const parameters = {
                index: 0, // Reemplaza con el índice que necesites
                mnemonic: data.mnemonic
            };
            const response3 = await fetch(urlPrivateKey, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                    'x-api-key': apiKey
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

        } catch (error: any) {
            console.error("TATUM API Error:", error.message);
            throw error;
        }
    };

    // Método para verificar el balance de una wallet de Celo
    const getCeloWalletBalance = async (address: string): Promise<GetBalanceWallet> => {
        console.log(`Esta es la wallet de entrada ${address}`);
        if (!apiKey) {
            throw new Error("Invalid parameters no Tatum API");
        }

        try {
            const url = `${BASE_URL}account/balance/${address}`;
            console.log(`Esta es la URL : ${url}`);
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'x-api-key': apiKey
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
            }; // Devuelve el balance como número
        } catch (error: any) {
            throw new Error(`Error fetching balance: ${error.message}`);
        }
    };

    return { createCeloWallet, getCeloWalletBalance };
};


