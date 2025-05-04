"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = exports.MemoryInfo = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const resourcepair_1 = require("./resourcepair");
function createBaseMemoryInfo() {
    return {
        $type: 'akash.inventory.v1.MemoryInfo',
        vendor: '',
        type: '',
        totalSize: '',
        speed: '',
    };
}
exports.MemoryInfo = {
    $type: 'akash.inventory.v1.MemoryInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.vendor !== '') {
            writer.uint32(10).string(message.vendor);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        if (message.totalSize !== '') {
            writer.uint32(26).string(message.totalSize);
        }
        if (message.speed !== '') {
            writer.uint32(34).string(message.speed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemoryInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.vendor = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.totalSize = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.speed = reader.string();
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
            $type: exports.MemoryInfo.$type,
            vendor: isSet(object.vendor) ? globalThis.String(object.vendor) : '',
            type: isSet(object.type) ? globalThis.String(object.type) : '',
            totalSize: isSet(object.totalSize)
                ? globalThis.String(object.totalSize)
                : '',
            speed: isSet(object.speed) ? globalThis.String(object.speed) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vendor !== '') {
            obj.vendor = message.vendor;
        }
        if (message.type !== '') {
            obj.type = message.type;
        }
        if (message.totalSize !== '') {
            obj.totalSize = message.totalSize;
        }
        if (message.speed !== '') {
            obj.speed = message.speed;
        }
        return obj;
    },
    create(base) {
        return exports.MemoryInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMemoryInfo();
        message.vendor = (_a = object.vendor) !== null && _a !== void 0 ? _a : '';
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : '';
        message.totalSize = (_c = object.totalSize) !== null && _c !== void 0 ? _c : '';
        message.speed = (_d = object.speed) !== null && _d !== void 0 ? _d : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MemoryInfo.$type, exports.MemoryInfo);
function createBaseMemory() {
    return { $type: 'akash.inventory.v1.Memory', quantity: undefined, info: [] };
}
exports.Memory = {
    $type: 'akash.inventory.v1.Memory',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quantity !== undefined) {
            resourcepair_1.ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.info) {
            exports.MemoryInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.quantity = resourcepair_1.ResourcePair.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.info.push(exports.MemoryInfo.decode(reader, reader.uint32()));
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
            $type: exports.Memory.$type,
            quantity: isSet(object.quantity)
                ? resourcepair_1.ResourcePair.fromJSON(object.quantity)
                : undefined,
            info: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.info)
                ? object.info.map((e) => exports.MemoryInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.quantity !== undefined) {
            obj.quantity = resourcepair_1.ResourcePair.toJSON(message.quantity);
        }
        if ((_a = message.info) === null || _a === void 0 ? void 0 : _a.length) {
            obj.info = message.info.map((e) => exports.MemoryInfo.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Memory.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMemory();
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? resourcepair_1.ResourcePair.fromPartial(object.quantity)
                : undefined;
        message.info = ((_a = object.info) === null || _a === void 0 ? void 0 : _a.map((e) => exports.MemoryInfo.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Memory.$type, exports.Memory);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
