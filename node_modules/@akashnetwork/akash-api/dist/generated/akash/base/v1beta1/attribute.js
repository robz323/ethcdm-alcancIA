"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementRequirements = exports.SignedBy = exports.Attribute = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
function createBaseAttribute() {
    return { $type: 'akash.base.v1beta1.Attribute', key: '', value: '' };
}
exports.Attribute = {
    $type: 'akash.base.v1beta1.Attribute',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
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
            $type: exports.Attribute.$type,
            key: isSet(object.key) ? globalThis.String(object.key) : '',
            value: isSet(object.value) ? globalThis.String(object.value) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== '') {
            obj.key = message.key;
        }
        if (message.value !== '') {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.Attribute.fromPartial(base !== null && base !== void 0 ? base : {});
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.allOf) {
            writer.uint32(10).string(v);
        }
        for (const v of message.anyOf) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedBy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.allOf.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.anyOf.push(reader.string());
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
            $type: exports.SignedBy.$type,
            allOf: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.allOf)
                ? object.allOf.map((e) => globalThis.String(e))
                : [],
            anyOf: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.anyOf)
                ? object.anyOf.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if ((_a = message.allOf) === null || _a === void 0 ? void 0 : _a.length) {
            obj.allOf = message.allOf;
        }
        if ((_b = message.anyOf) === null || _b === void 0 ? void 0 : _b.length) {
            obj.anyOf = message.anyOf;
        }
        return obj;
    },
    create(base) {
        return exports.SignedBy.fromPartial(base !== null && base !== void 0 ? base : {});
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signedBy !== undefined) {
            exports.SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlacementRequirements();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signedBy = exports.SignedBy.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
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
            $type: exports.PlacementRequirements.$type,
            signedBy: isSet(object.signedBy)
                ? exports.SignedBy.fromJSON(object.signedBy)
                : undefined,
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => exports.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.signedBy !== undefined) {
            obj.signedBy = exports.SignedBy.toJSON(message.signedBy);
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => exports.Attribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.PlacementRequirements.fromPartial(base !== null && base !== void 0 ? base : {});
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
