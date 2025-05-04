"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.DenomTakeRate = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
function createBaseDenomTakeRate() {
    return { $type: 'akash.take.v1beta3.DenomTakeRate', denom: '', rate: 0 };
}
exports.DenomTakeRate = {
    $type: 'akash.take.v1beta3.DenomTakeRate',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.rate !== 0) {
            writer.uint32(16).uint32(message.rate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomTakeRate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.rate = reader.uint32();
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
            $type: exports.DenomTakeRate.$type,
            denom: isSet(object.denom) ? globalThis.String(object.denom) : '',
            rate: isSet(object.rate) ? globalThis.Number(object.rate) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom !== '') {
            obj.denom = message.denom;
        }
        if (message.rate !== 0) {
            obj.rate = Math.round(message.rate);
        }
        return obj;
    },
    create(base) {
        return exports.DenomTakeRate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDenomTakeRate();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : '';
        message.rate = (_b = object.rate) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DenomTakeRate.$type, exports.DenomTakeRate);
function createBaseParams() {
    return {
        $type: 'akash.take.v1beta3.Params',
        denomTakeRates: [],
        defaultTakeRate: 0,
    };
}
exports.Params = {
    $type: 'akash.take.v1beta3.Params',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denomTakeRates) {
            exports.DenomTakeRate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultTakeRate !== 0) {
            writer.uint32(16).uint32(message.defaultTakeRate);
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
                    message.denomTakeRates.push(exports.DenomTakeRate.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.defaultTakeRate = reader.uint32();
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
            denomTakeRates: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.denomTakeRates)
                ? object.denomTakeRates.map((e) => exports.DenomTakeRate.fromJSON(e))
                : [],
            defaultTakeRate: isSet(object.defaultTakeRate)
                ? globalThis.Number(object.defaultTakeRate)
                : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.denomTakeRates) === null || _a === void 0 ? void 0 : _a.length) {
            obj.denomTakeRates = message.denomTakeRates.map((e) => exports.DenomTakeRate.toJSON(e));
        }
        if (message.defaultTakeRate !== 0) {
            obj.defaultTakeRate = Math.round(message.defaultTakeRate);
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseParams();
        message.denomTakeRates =
            ((_a = object.denomTakeRates) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DenomTakeRate.fromPartial(e))) || [];
        message.defaultTakeRate = (_b = object.defaultTakeRate) !== null && _b !== void 0 ? _b : 0;
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
