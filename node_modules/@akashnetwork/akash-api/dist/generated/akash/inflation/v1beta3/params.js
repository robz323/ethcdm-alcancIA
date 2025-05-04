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
    return {
        $type: 'akash.inflation.v1beta3.Params',
        inflationDecayFactor: '',
        initialInflation: '',
        variance: '',
    };
}
exports.Params = {
    $type: 'akash.inflation.v1beta3.Params',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.inflationDecayFactor !== '') {
            writer.uint32(10).string(message.inflationDecayFactor);
        }
        if (message.initialInflation !== '') {
            writer.uint32(18).string(message.initialInflation);
        }
        if (message.variance !== '') {
            writer.uint32(26).string(message.variance);
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
                    message.inflationDecayFactor = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.initialInflation = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.variance = reader.string();
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
            inflationDecayFactor: isSet(object.inflationDecayFactor)
                ? globalThis.String(object.inflationDecayFactor)
                : '',
            initialInflation: isSet(object.initialInflation)
                ? globalThis.String(object.initialInflation)
                : '',
            variance: isSet(object.variance)
                ? globalThis.String(object.variance)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.inflationDecayFactor !== '') {
            obj.inflationDecayFactor = message.inflationDecayFactor;
        }
        if (message.initialInflation !== '') {
            obj.initialInflation = message.initialInflation;
        }
        if (message.variance !== '') {
            obj.variance = message.variance;
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseParams();
        message.inflationDecayFactor = (_a = object.inflationDecayFactor) !== null && _a !== void 0 ? _a : '';
        message.initialInflation = (_b = object.initialInflation) !== null && _b !== void 0 ? _b : '';
        message.variance = (_c = object.variance) !== null && _c !== void 0 ? _c : '';
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
