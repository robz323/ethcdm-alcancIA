"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimal = __importStar(require("protobufjs/minimal"));
const coin = __importStar(require("../../../../generated/cosmos/base/v1beta1/coin.original"));
const originalEncode = coin.DecCoin.encode;
coin.DecCoin.encode = function encode(message, writer = minimal.Writer.create()) {
    const { amount } = message;
    const parts = amount.includes('.')
        ? message.amount.split('.')
        : [message.amount, ''];
    message.amount = `${parts[0]}${parts[1].padEnd(18, '0')}`;
    return originalEncode.apply(this, [message, writer]);
};
const originalDecode = coin.DecCoin.decode;
coin.DecCoin.decode = function decode(input, length) {
    const message = originalDecode.apply(this, [input, length]);
    message.amount = (parseInt(message.amount) / 10 ** 18).toPrecision(18);
    return message;
};
__exportStar(require("../../../../generated/cosmos/base/v1beta1/coin.original"), exports);
