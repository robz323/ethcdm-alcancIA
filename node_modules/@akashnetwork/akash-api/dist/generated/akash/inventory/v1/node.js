"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.NodeCapabilities = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const resources_1 = require("./resources");
function createBaseNodeCapabilities() {
    return { $type: 'akash.inventory.v1.NodeCapabilities', storageClasses: [] };
}
exports.NodeCapabilities = {
    $type: 'akash.inventory.v1.NodeCapabilities',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.storageClasses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeCapabilities();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.storageClasses.push(reader.string());
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
            $type: exports.NodeCapabilities.$type,
            storageClasses: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.storageClasses)
                ? object.storageClasses.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.storageClasses) === null || _a === void 0 ? void 0 : _a.length) {
            obj.storageClasses = message.storageClasses;
        }
        return obj;
    },
    create(base) {
        return exports.NodeCapabilities.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNodeCapabilities();
        message.storageClasses = ((_a = object.storageClasses) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeCapabilities.$type, exports.NodeCapabilities);
function createBaseNode() {
    return {
        $type: 'akash.inventory.v1.Node',
        name: '',
        resources: undefined,
        capabilities: undefined,
    };
}
exports.Node = {
    $type: 'akash.inventory.v1.Node',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.resources !== undefined) {
            resources_1.NodeResources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.capabilities !== undefined) {
            exports.NodeCapabilities.encode(message.capabilities, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.resources = resources_1.NodeResources.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.capabilities = exports.NodeCapabilities.decode(reader, reader.uint32());
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
            $type: exports.Node.$type,
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            resources: isSet(object.resources)
                ? resources_1.NodeResources.fromJSON(object.resources)
                : undefined,
            capabilities: isSet(object.capabilities)
                ? exports.NodeCapabilities.fromJSON(object.capabilities)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.resources !== undefined) {
            obj.resources = resources_1.NodeResources.toJSON(message.resources);
        }
        if (message.capabilities !== undefined) {
            obj.capabilities = exports.NodeCapabilities.toJSON(message.capabilities);
        }
        return obj;
    },
    create(base) {
        return exports.Node.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNode();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? resources_1.NodeResources.fromPartial(object.resources)
                : undefined;
        message.capabilities =
            object.capabilities !== undefined && object.capabilities !== null
                ? exports.NodeCapabilities.fromPartial(object.capabilities)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Node.$type, exports.Node);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
