"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resources = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const cpu_1 = require("./cpu");
const endpoint_1 = require("./endpoint");
const gpu_1 = require("./gpu");
const memory_1 = require("./memory");
const storage_1 = require("./storage");
function createBaseResources() {
    return {
        $type: 'akash.base.v1beta3.Resources',
        id: 0,
        cpu: undefined,
        memory: undefined,
        storage: [],
        gpu: undefined,
        endpoints: [],
    };
}
exports.Resources = {
    $type: 'akash.base.v1beta3.Resources',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.cpu !== undefined) {
            cpu_1.CPU.encode(message.cpu, writer.uint32(18).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            memory_1.Memory.encode(message.memory, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.storage) {
            storage_1.Storage.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.gpu !== undefined) {
            gpu_1.GPU.encode(message.gpu, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.endpoints) {
            endpoint_1.Endpoint.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResources();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.cpu = cpu_1.CPU.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.memory = memory_1.Memory.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.storage.push(storage_1.Storage.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.gpu = gpu_1.GPU.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.endpoints.push(endpoint_1.Endpoint.decode(reader, reader.uint32()));
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
            $type: exports.Resources.$type,
            id: isSet(object.id) ? globalThis.Number(object.id) : 0,
            cpu: isSet(object.cpu) ? cpu_1.CPU.fromJSON(object.cpu) : undefined,
            memory: isSet(object.memory) ? memory_1.Memory.fromJSON(object.memory) : undefined,
            storage: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.storage)
                ? object.storage.map((e) => storage_1.Storage.fromJSON(e))
                : [],
            gpu: isSet(object.gpu) ? gpu_1.GPU.fromJSON(object.gpu) : undefined,
            endpoints: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.endpoints)
                ? object.endpoints.map((e) => endpoint_1.Endpoint.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.cpu !== undefined) {
            obj.cpu = cpu_1.CPU.toJSON(message.cpu);
        }
        if (message.memory !== undefined) {
            obj.memory = memory_1.Memory.toJSON(message.memory);
        }
        if ((_a = message.storage) === null || _a === void 0 ? void 0 : _a.length) {
            obj.storage = message.storage.map((e) => storage_1.Storage.toJSON(e));
        }
        if (message.gpu !== undefined) {
            obj.gpu = gpu_1.GPU.toJSON(message.gpu);
        }
        if ((_b = message.endpoints) === null || _b === void 0 ? void 0 : _b.length) {
            obj.endpoints = message.endpoints.map((e) => endpoint_1.Endpoint.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Resources.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseResources();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? cpu_1.CPU.fromPartial(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? memory_1.Memory.fromPartial(object.memory)
                : undefined;
        message.storage = ((_b = object.storage) === null || _b === void 0 ? void 0 : _b.map((e) => storage_1.Storage.fromPartial(e))) || [];
        message.gpu =
            object.gpu !== undefined && object.gpu !== null
                ? gpu_1.GPU.fromPartial(object.gpu)
                : undefined;
        message.endpoints =
            ((_c = object.endpoints) === null || _c === void 0 ? void 0 : _c.map((e) => endpoint_1.Endpoint.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
