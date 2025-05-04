"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
function createBaseParams() {
    return { $type: 'akash.staking.v1beta3.Params', minCommissionRate: '' };
}
exports.Params = {
    $type: 'akash.staking.v1beta3.Params',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minCommissionRate !== '') {
            writer.uint32(10).string(message.minCommissionRate);
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
                    message.minCommissionRate = reader.string();
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
            minCommissionRate: isSet(object.minCommissionRate)
                ? globalThis.String(object.minCommissionRate)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.minCommissionRate !== '') {
            obj.minCommissionRate = message.minCommissionRate;
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.minCommissionRate = (_a = object.minCommissionRate) !== null && _a !== void 0 ? _a : '';
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
