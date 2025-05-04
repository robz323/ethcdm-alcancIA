"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositDeploymentAuthorization = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const typeRegistry_1 = require("../../../typeRegistry");
function createBaseDepositDeploymentAuthorization() {
    return {
        $type: 'akash.deployment.v1beta1.DepositDeploymentAuthorization',
        spendLimit: undefined,
    };
}
exports.DepositDeploymentAuthorization = {
    $type: 'akash.deployment.v1beta1.DepositDeploymentAuthorization',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.spendLimit !== undefined) {
            coin_1.Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositDeploymentAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.spendLimit = coin_1.Coin.decode(reader, reader.uint32());
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
            $type: exports.DepositDeploymentAuthorization.$type,
            spendLimit: isSet(object.spendLimit)
                ? coin_1.Coin.fromJSON(object.spendLimit)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spendLimit !== undefined) {
            obj.spendLimit = coin_1.Coin.toJSON(message.spendLimit);
        }
        return obj;
    },
    create(base) {
        return exports.DepositDeploymentAuthorization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDepositDeploymentAuthorization();
        message.spendLimit =
            object.spendLimit !== undefined && object.spendLimit !== null
                ? coin_1.Coin.fromPartial(object.spendLimit)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DepositDeploymentAuthorization.$type, exports.DepositDeploymentAuthorization);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
