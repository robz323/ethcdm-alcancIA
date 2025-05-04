import { ActionExample } from "@elizaos/core";

export const createWalletCelo: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "¿Podrías ayudarme a crear una wallet?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Por su puesto¡ Recuerda que al crear tu wallet te dare información que no debes de compartir.",
                action: "CREATE_WALLET_CELO",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "¿Me podrias dar una wallet de Celo?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Por su puesto¡ Recuerda que al crear tu wallet te dare información que no debes de compartir.",
                action: "CREATE_WALLET_CELO",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Quisiera crear una cuenta, ¿podrías ayudarme?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Por su puesto¡ Recuerda que al crear tu wallet te dare información que no debes de compartir.",
                action: "CREATE_WALLET_CELO",
            },
        }
    ],
]

export const getBalance: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Cual es el balance de mi wallet {{address}}",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "💲 Tu balance es de : 7.7",
                action: "GET_WALLET_BALANCE",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Cual es el balance de esta wallet {{address}}",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "💲 Tu balance es de : 7.7",
                action: "GET_WALLET_BALANCE",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Cuanto tengo en mi Wallet?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Me podrías decir cual es tu wallet?",
            },
        },
        {
            user: "{{user1}}",
            content: {
                text: "{{address}}",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "💲 Tu balance es de :7.7",
                action: "GET_WALLET_BALANCE",
            },
        }
    ],
];