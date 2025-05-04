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
    return {
        $type: 'akash.market.v1beta2.Params',
        bidMinDeposit: undefined,
        orderMaxBids: 0,
    };
}
exports.Params = {
    $type: 'akash.market.v1beta2.Params',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidMinDeposit !== undefined) {
            coin_1.Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderMaxBids !== 0) {
            writer.uint32(16).uint32(message.orderMaxBids);
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
                    message.bidMinDeposit = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.orderMaxBids = reader.uint32();
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
            bidMinDeposit: isSet(object.bidMinDeposit)
                ? coin_1.Coin.fromJSON(object.bidMinDeposit)
                : undefined,
            orderMaxBids: isSet(object.orderMaxBids)
                ? globalThis.Number(object.orderMaxBids)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.bidMinDeposit !== undefined) {
            obj.bidMinDeposit = coin_1.Coin.toJSON(message.bidMinDeposit);
        }
        if (message.orderMaxBids !== 0) {
            obj.orderMaxBids = Math.round(message.orderMaxBids);
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.bidMinDeposit =
            object.bidMinDeposit !== undefined && object.bidMinDeposit !== null
                ? coin_1.Coin.fromPartial(object.bidMinDeposit)
                : undefined;
        message.orderMaxBids = (_a = object.orderMaxBids) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Params.$type, exports.Params);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
