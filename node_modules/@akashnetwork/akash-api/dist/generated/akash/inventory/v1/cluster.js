"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const node_1 = require("./node");
const storage_1 = require("./storage");
function createBaseCluster() {
    return { $type: 'akash.inventory.v1.Cluster', nodes: [], storage: [] };
}
exports.Cluster = {
    $type: 'akash.inventory.v1.Cluster',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.nodes) {
            node_1.Node.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.storage) {
            storage_1.Storage.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCluster();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nodes.push(node_1.Node.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.storage.push(storage_1.Storage.decode(reader, reader.uint32()));
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
            $type: exports.Cluster.$type,
            nodes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.nodes)
                ? object.nodes.map((e) => node_1.Node.fromJSON(e))
                : [],
            storage: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.storage)
                ? object.storage.map((e) => storage_1.Storage.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if ((_a = message.nodes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.nodes = message.nodes.map((e) => node_1.Node.toJSON(e));
        }
        if ((_b = message.storage) === null || _b === void 0 ? void 0 : _b.length) {
            obj.storage = message.storage.map((e) => storage_1.Storage.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Cluster.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCluster();
        message.nodes = ((_a = object.nodes) === null || _a === void 0 ? void 0 : _a.map((e) => node_1.Node.fromPartial(e))) || [];
        message.storage = ((_b = object.storage) === null || _b === void 0 ? void 0 : _b.map((e) => storage_1.Storage.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cluster.$type, exports.Cluster);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
