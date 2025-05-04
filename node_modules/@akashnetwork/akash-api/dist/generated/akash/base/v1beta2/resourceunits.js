"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceUnits = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const endpoint_1 = require("./endpoint");
const resource_1 = require("./resource");
function createBaseResourceUnits() {
    return {
        $type: 'akash.base.v1beta2.ResourceUnits',
        cpu: undefined,
        memory: undefined,
        storage: [],
        endpoints: [],
    };
}
exports.ResourceUnits = {
    $type: 'akash.base.v1beta2.ResourceUnits',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cpu !== undefined) {
            resource_1.CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            resource_1.Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.storage) {
            resource_1.Storage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.endpoints) {
            endpoint_1.Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceUnits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cpu = resource_1.CPU.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.memory = resource_1.Memory.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.storage.push(resource_1.Storage.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
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
            $type: exports.ResourceUnits.$type,
            cpu: isSet(object.cpu) ? resource_1.CPU.fromJSON(object.cpu) : undefined,
            memory: isSet(object.memory) ? resource_1.Memory.fromJSON(object.memory) : undefined,
            storage: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.storage)
                ? object.storage.map((e) => resource_1.Storage.fromJSON(e))
                : [],
            endpoints: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.endpoints)
                ? object.endpoints.map((e) => endpoint_1.Endpoint.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if (message.cpu !== undefined) {
            obj.cpu = resource_1.CPU.toJSON(message.cpu);
        }
        if (message.memory !== undefined) {
            obj.memory = resource_1.Memory.toJSON(message.memory);
        }
        if ((_a = message.storage) === null || _a === void 0 ? void 0 : _a.length) {
            obj.storage = message.storage.map((e) => resource_1.Storage.toJSON(e));
        }
        if ((_b = message.endpoints) === null || _b === void 0 ? void 0 : _b.length) {
            obj.endpoints = message.endpoints.map((e) => endpoint_1.Endpoint.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ResourceUnits.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseResourceUnits();
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? resource_1.CPU.fromPartial(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? resource_1.Memory.fromPartial(object.memory)
                : undefined;
        message.storage = ((_a = object.storage) === null || _a === void 0 ? void 0 : _a.map((e) => resource_1.Storage.fromPartial(e))) || [];
        message.endpoints =
            ((_b = object.endpoints) === null || _b === void 0 ? void 0 : _b.map((e) => endpoint_1.Endpoint.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceUnits.$type, exports.ResourceUnits);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
