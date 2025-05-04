"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = exports.StorageInfo = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const resourcepair_1 = require("./resourcepair");
function createBaseStorageInfo() {
    return { $type: 'akash.inventory.v1.StorageInfo', class: '', iops: '' };
}
exports.StorageInfo = {
    $type: 'akash.inventory.v1.StorageInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.class !== '') {
            writer.uint32(10).string(message.class);
        }
        if (message.iops !== '') {
            writer.uint32(18).string(message.iops);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorageInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.class = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.iops = reader.string();
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
            $type: exports.StorageInfo.$type,
            class: isSet(object.class) ? globalThis.String(object.class) : '',
            iops: isSet(object.iops) ? globalThis.String(object.iops) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.class !== '') {
            obj.class = message.class;
        }
        if (message.iops !== '') {
            obj.iops = message.iops;
        }
        return obj;
    },
    create(base) {
        return exports.StorageInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStorageInfo();
        message.class = (_a = object.class) !== null && _a !== void 0 ? _a : '';
        message.iops = (_b = object.iops) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StorageInfo.$type, exports.StorageInfo);
function createBaseStorage() {
    return {
        $type: 'akash.inventory.v1.Storage',
        quantity: undefined,
        info: undefined,
    };
}
exports.Storage = {
    $type: 'akash.inventory.v1.Storage',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quantity !== undefined) {
            resourcepair_1.ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.StorageInfo.encode(message.info, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorage();
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
                    message.info = exports.StorageInfo.decode(reader, reader.uint32());
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
            $type: exports.Storage.$type,
            quantity: isSet(object.quantity)
                ? resourcepair_1.ResourcePair.fromJSON(object.quantity)
                : undefined,
            info: isSet(object.info) ? exports.StorageInfo.fromJSON(object.info) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.quantity !== undefined) {
            obj.quantity = resourcepair_1.ResourcePair.toJSON(message.quantity);
        }
        if (message.info !== undefined) {
            obj.info = exports.StorageInfo.toJSON(message.info);
        }
        return obj;
    },
    create(base) {
        return exports.Storage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseStorage();
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? resourcepair_1.ResourcePair.fromPartial(object.quantity)
                : undefined;
        message.info =
            object.info !== undefined && object.info !== null
                ? exports.StorageInfo.fromPartial(object.info)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Storage.$type, exports.Storage);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
