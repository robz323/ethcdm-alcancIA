"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPU = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const attribute_1 = require("./attribute");
const resourcevalue_1 = require("./resourcevalue");
function createBaseGPU() {
    return { $type: 'akash.base.v1beta3.GPU', units: undefined, attributes: [] };
}
exports.GPU = {
    $type: 'akash.base.v1beta3.GPU',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.units !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGPU();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.units = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
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
            $type: exports.GPU.$type,
            units: isSet(object.units)
                ? resourcevalue_1.ResourceValue.fromJSON(object.units)
                : undefined,
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.units !== undefined) {
            obj.units = resourcevalue_1.ResourceValue.toJSON(message.units);
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GPU.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGPU();
        message.units =
            object.units !== undefined && object.units !== null
                ? resourcevalue_1.ResourceValue.fromPartial(object.units)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GPU.$type, exports.GPU);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
