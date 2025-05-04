"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPU = exports.GPUInfo = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const resourcepair_1 = require("./resourcepair");
function createBaseGPUInfo() {
    return {
        $type: 'akash.inventory.v1.GPUInfo',
        vendor: '',
        vendorId: '',
        name: '',
        modelid: '',
        interface: '',
        memorySize: '',
    };
}
exports.GPUInfo = {
    $type: 'akash.inventory.v1.GPUInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.vendor !== '') {
            writer.uint32(10).string(message.vendor);
        }
        if (message.vendorId !== '') {
            writer.uint32(18).string(message.vendorId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.modelid !== '') {
            writer.uint32(34).string(message.modelid);
        }
        if (message.interface !== '') {
            writer.uint32(42).string(message.interface);
        }
        if (message.memorySize !== '') {
            writer.uint32(50).string(message.memorySize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGPUInfo();
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
                    message.vendorId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.modelid = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.interface = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.memorySize = reader.string();
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
            $type: exports.GPUInfo.$type,
            vendor: isSet(object.vendor) ? globalThis.String(object.vendor) : '',
            vendorId: isSet(object.vendorId)
                ? globalThis.String(object.vendorId)
                : '',
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            modelid: isSet(object.modelid) ? globalThis.String(object.modelid) : '',
            interface: isSet(object.interface)
                ? globalThis.String(object.interface)
                : '',
            memorySize: isSet(object.memorySize)
                ? globalThis.String(object.memorySize)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vendor !== '') {
            obj.vendor = message.vendor;
        }
        if (message.vendorId !== '') {
            obj.vendorId = message.vendorId;
        }
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.modelid !== '') {
            obj.modelid = message.modelid;
        }
        if (message.interface !== '') {
            obj.interface = message.interface;
        }
        if (message.memorySize !== '') {
            obj.memorySize = message.memorySize;
        }
        return obj;
    },
    create(base) {
        return exports.GPUInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseGPUInfo();
        message.vendor = (_a = object.vendor) !== null && _a !== void 0 ? _a : '';
        message.vendorId = (_b = object.vendorId) !== null && _b !== void 0 ? _b : '';
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : '';
        message.modelid = (_d = object.modelid) !== null && _d !== void 0 ? _d : '';
        message.interface = (_e = object.interface) !== null && _e !== void 0 ? _e : '';
        message.memorySize = (_f = object.memorySize) !== null && _f !== void 0 ? _f : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GPUInfo.$type, exports.GPUInfo);
function createBaseGPU() {
    return { $type: 'akash.inventory.v1.GPU', quantity: undefined, info: [] };
}
exports.GPU = {
    $type: 'akash.inventory.v1.GPU',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quantity !== undefined) {
            resourcepair_1.ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.info) {
            exports.GPUInfo.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.quantity = resourcepair_1.ResourcePair.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.info.push(exports.GPUInfo.decode(reader, reader.uint32()));
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
            quantity: isSet(object.quantity)
                ? resourcepair_1.ResourcePair.fromJSON(object.quantity)
                : undefined,
            info: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.info)
                ? object.info.map((e) => exports.GPUInfo.fromJSON(e))
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
            obj.info = message.info.map((e) => exports.GPUInfo.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GPU.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGPU();
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? resourcepair_1.ResourcePair.fromPartial(object.quantity)
                : undefined;
        message.info = ((_a = object.info) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GPUInfo.fromPartial(e))) || [];
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
