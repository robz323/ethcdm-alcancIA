"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantityValue = exports.Quantity = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../../../typeRegistry");
function createBaseQuantity() {
    return { $type: 'k8s.io.apimachinery.pkg.api.resource.Quantity', string: '' };
}
exports.Quantity = {
    $type: 'k8s.io.apimachinery.pkg.api.resource.Quantity',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.string !== undefined && message.string !== '') {
            writer.uint32(10).string(message.string);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuantity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.string = reader.string();
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
            $type: exports.Quantity.$type,
            string: isSet(object.string) ? globalThis.String(object.string) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.string !== undefined && message.string !== '') {
            obj.string = message.string;
        }
        return obj;
    },
    create(base) {
        return exports.Quantity.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuantity();
        message.string = (_a = object.string) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Quantity.$type, exports.Quantity);
function createBaseQuantityValue() {
    return {
        $type: 'k8s.io.apimachinery.pkg.api.resource.QuantityValue',
        string: '',
    };
}
exports.QuantityValue = {
    $type: 'k8s.io.apimachinery.pkg.api.resource.QuantityValue',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.string !== undefined && message.string !== '') {
            writer.uint32(10).string(message.string);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuantityValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.string = reader.string();
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
            $type: exports.QuantityValue.$type,
            string: isSet(object.string) ? globalThis.String(object.string) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.string !== undefined && message.string !== '') {
            obj.string = message.string;
        }
        return obj;
    },
    create(base) {
        return exports.QuantityValue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuantityValue();
        message.string = (_a = object.string) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QuantityValue.$type, exports.QuantityValue);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
