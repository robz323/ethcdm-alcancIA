"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const params_1 = require("./params");
function createBaseGenesisState() {
    return { $type: 'akash.gov.v1beta3.GenesisState', depositParams: undefined };
}
exports.GenesisState = {
    $type: 'akash.gov.v1beta3.GenesisState',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.depositParams !== undefined) {
            params_1.DepositParams.encode(message.depositParams, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.depositParams = params_1.DepositParams.decode(reader, reader.uint32());
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
            $type: exports.GenesisState.$type,
            depositParams: isSet(object.depositParams)
                ? params_1.DepositParams.fromJSON(object.depositParams)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.depositParams !== undefined) {
            obj.depositParams = params_1.DepositParams.toJSON(message.depositParams);
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.depositParams =
            object.depositParams !== undefined && object.depositParams !== null
                ? params_1.DepositParams.fromPartial(object.depositParams)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenesisState.$type, exports.GenesisState);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
