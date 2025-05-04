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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementRequirements = exports.SignedBy = exports.Attribute = exports.protobufPackage = void 0;
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = 'akash.base.v1beta1';
function createBaseAttribute() {
    return { $type: 'akash.base.v1beta1.Attribute', key: '', value: '' };
}
exports.Attribute = {
    $type: 'akash.base.v1beta1.Attribute',
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.Attribute.$type,
            key: isSet(object.key) ? String(object.key) : '',
            value: isSet(object.value) ? String(object.value) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAttribute();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : '';
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Attribute.$type, exports.Attribute);
function createBaseSignedBy() {
    return { $type: 'akash.base.v1beta1.SignedBy', allOf: [], anyOf: [] };
}
exports.SignedBy = {
    $type: 'akash.base.v1beta1.SignedBy',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.allOf) {
            writer.uint32(10).string(v);
        }
        for (const v of message.anyOf) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedBy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allOf.push(reader.string());
                    break;
                case 2:
                    message.anyOf.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.SignedBy.$type,
            allOf: Array.isArray(object === null || object === void 0 ? void 0 : object.allOf)
                ? object.allOf.map((e) => String(e))
                : [],
            anyOf: Array.isArray(object === null || object === void 0 ? void 0 : object.anyOf)
                ? object.anyOf.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allOf) {
            obj.allOf = message.allOf.map((e) => e);
        }
        else {
            obj.allOf = [];
        }
        if (message.anyOf) {
            obj.anyOf = message.anyOf.map((e) => e);
        }
        else {
            obj.anyOf = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSignedBy();
        message.allOf = ((_a = object.allOf) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.anyOf = ((_b = object.anyOf) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SignedBy.$type, exports.SignedBy);
function createBasePlacementRequirements() {
    return {
        $type: 'akash.base.v1beta1.PlacementRequirements',
        signedBy: undefined,
        attributes: [],
    };
}
exports.PlacementRequirements = {
    $type: 'akash.base.v1beta1.PlacementRequirements',
    encode(message, writer = _m0.Writer.create()) {
        if (message.signedBy !== undefined) {
            exports.SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlacementRequirements();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedBy = exports.SignedBy.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.PlacementRequirements.$type,
            signedBy: isSet(object.signedBy)
                ? exports.SignedBy.fromJSON(object.signedBy)
                : undefined,
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => exports.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedBy !== undefined &&
            (obj.signedBy = message.signedBy
                ? exports.SignedBy.toJSON(message.signedBy)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? exports.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePlacementRequirements();
        message.signedBy =
            object.signedBy !== undefined && object.signedBy !== null
                ? exports.SignedBy.fromPartial(object.signedBy)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementRequirements.$type, exports.PlacementRequirements);
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
