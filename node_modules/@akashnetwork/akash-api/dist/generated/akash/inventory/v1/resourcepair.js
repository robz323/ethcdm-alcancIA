"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePair = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const generated_1 = require("../../../k8s.io/apimachinery/pkg/api/resource/generated");
const typeRegistry_1 = require("../../../typeRegistry");
const attribute_1 = require("../../base/v1beta3/attribute");
function createBaseResourcePair() {
    return {
        $type: 'akash.inventory.v1.ResourcePair',
        allocatable: undefined,
        allocated: undefined,
        attributes: [],
    };
}
exports.ResourcePair = {
    $type: 'akash.inventory.v1.ResourcePair',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.allocatable !== undefined) {
            generated_1.Quantity.encode(message.allocatable, writer.uint32(10).fork()).ldelim();
        }
        if (message.allocated !== undefined) {
            generated_1.Quantity.encode(message.allocated, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourcePair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.allocatable = generated_1.Quantity.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.allocated = generated_1.Quantity.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            $type: exports.ResourcePair.$type,
            allocatable: isSet(object.allocatable)
                ? generated_1.Quantity.fromJSON(object.allocatable)
                : undefined,
            allocated: isSet(object.allocated)
                ? generated_1.Quantity.fromJSON(object.allocated)
                : undefined,
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.allocatable !== undefined) {
            obj.allocatable = generated_1.Quantity.toJSON(message.allocatable);
        }
        if (message.allocated !== undefined) {
            obj.allocated = generated_1.Quantity.toJSON(message.allocated);
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ResourcePair.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResourcePair();
        message.allocatable =
            object.allocatable !== undefined && object.allocatable !== null
                ? generated_1.Quantity.fromPartial(object.allocatable)
                : undefined;
        message.allocated =
            object.allocated !== undefined && object.allocated !== null
                ? generated_1.Quantity.fromPartial(object.allocated)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourcePair.$type, exports.ResourcePair);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
