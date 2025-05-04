"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const typeRegistry_1 = require("../../../typeRegistry");
function createBaseParams() {
    return { $type: 'akash.deployment.v1beta3.Params', minDeposits: [] };
}
exports.Params = {
    $type: 'akash.deployment.v1beta3.Params',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.minDeposits) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.minDeposits.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.Params.$type,
            minDeposits: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.minDeposits)
                ? object.minDeposits.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.minDeposits) === null || _a === void 0 ? void 0 : _a.length) {
            obj.minDeposits = message.minDeposits.map((e) => coin_1.Coin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.minDeposits =
            ((_a = object.minDeposits) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Params.$type, exports.Params);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
