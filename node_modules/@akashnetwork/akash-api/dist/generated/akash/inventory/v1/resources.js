"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeResources = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const cpu_1 = require("./cpu");
const gpu_1 = require("./gpu");
const memory_1 = require("./memory");
const resourcepair_1 = require("./resourcepair");
function createBaseNodeResources() {
    return {
        $type: 'akash.inventory.v1.NodeResources',
        cpu: undefined,
        memory: undefined,
        gpu: undefined,
        ephemeralStorage: undefined,
        volumesAttached: undefined,
        volumesMounted: undefined,
    };
}
exports.NodeResources = {
    $type: 'akash.inventory.v1.NodeResources',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cpu !== undefined) {
            cpu_1.CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            memory_1.Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        if (message.gpu !== undefined) {
            gpu_1.GPU.encode(message.gpu, writer.uint32(26).fork()).ldelim();
        }
        if (message.ephemeralStorage !== undefined) {
            resourcepair_1.ResourcePair.encode(message.ephemeralStorage, writer.uint32(34).fork()).ldelim();
        }
        if (message.volumesAttached !== undefined) {
            resourcepair_1.ResourcePair.encode(message.volumesAttached, writer.uint32(42).fork()).ldelim();
        }
        if (message.volumesMounted !== undefined) {
            resourcepair_1.ResourcePair.encode(message.volumesMounted, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeResources();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cpu = cpu_1.CPU.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.memory = memory_1.Memory.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.gpu = gpu_1.GPU.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ephemeralStorage = resourcepair_1.ResourcePair.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.volumesAttached = resourcepair_1.ResourcePair.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.volumesMounted = resourcepair_1.ResourcePair.decode(reader, reader.uint32());
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
            $type: exports.NodeResources.$type,
            cpu: isSet(object.cpu) ? cpu_1.CPU.fromJSON(object.cpu) : undefined,
            memory: isSet(object.memory) ? memory_1.Memory.fromJSON(object.memory) : undefined,
            gpu: isSet(object.gpu) ? gpu_1.GPU.fromJSON(object.gpu) : undefined,
            ephemeralStorage: isSet(object.ephemeralStorage)
                ? resourcepair_1.ResourcePair.fromJSON(object.ephemeralStorage)
                : undefined,
            volumesAttached: isSet(object.volumesAttached)
                ? resourcepair_1.ResourcePair.fromJSON(object.volumesAttached)
                : undefined,
            volumesMounted: isSet(object.volumesMounted)
                ? resourcepair_1.ResourcePair.fromJSON(object.volumesMounted)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cpu !== undefined) {
            obj.cpu = cpu_1.CPU.toJSON(message.cpu);
        }
        if (message.memory !== undefined) {
            obj.memory = memory_1.Memory.toJSON(message.memory);
        }
        if (message.gpu !== undefined) {
            obj.gpu = gpu_1.GPU.toJSON(message.gpu);
        }
        if (message.ephemeralStorage !== undefined) {
            obj.ephemeralStorage = resourcepair_1.ResourcePair.toJSON(message.ephemeralStorage);
        }
        if (message.volumesAttached !== undefined) {
            obj.volumesAttached = resourcepair_1.ResourcePair.toJSON(message.volumesAttached);
        }
        if (message.volumesMounted !== undefined) {
            obj.volumesMounted = resourcepair_1.ResourcePair.toJSON(message.volumesMounted);
        }
        return obj;
    },
    create(base) {
        return exports.NodeResources.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseNodeResources();
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? cpu_1.CPU.fromPartial(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? memory_1.Memory.fromPartial(object.memory)
                : undefined;
        message.gpu =
            object.gpu !== undefined && object.gpu !== null
                ? gpu_1.GPU.fromPartial(object.gpu)
                : undefined;
        message.ephemeralStorage =
            object.ephemeralStorage !== undefined && object.ephemeralStorage !== null
                ? resourcepair_1.ResourcePair.fromPartial(object.ephemeralStorage)
                : undefined;
        message.volumesAttached =
            object.volumesAttached !== undefined && object.volumesAttached !== null
                ? resourcepair_1.ResourcePair.fromPartial(object.volumesAttached)
                : undefined;
        message.volumesMounted =
            object.volumesMounted !== undefined && object.volumesMounted !== null
                ? resourcepair_1.ResourcePair.fromPartial(object.volumesMounted)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeResources.$type, exports.NodeResources);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
