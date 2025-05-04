"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientInfo = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
function createBaseClientInfo() {
    return { $type: 'akash.discovery.v1.ClientInfo', apiVersion: '' };
}
exports.ClientInfo = {
    $type: 'akash.discovery.v1.ClientInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiVersion !== '') {
            writer.uint32(10).string(message.apiVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.apiVersion = reader.string();
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
            $type: exports.ClientInfo.$type,
            apiVersion: isSet(object.apiVersion)
                ? globalThis.String(object.apiVersion)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.apiVersion !== '') {
            obj.apiVersion = message.apiVersion;
        }
        return obj;
    },
    create(base) {
        return exports.ClientInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseClientInfo();
        message.apiVersion = (_a = object.apiVersion) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClientInfo.$type, exports.ClientInfo);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
