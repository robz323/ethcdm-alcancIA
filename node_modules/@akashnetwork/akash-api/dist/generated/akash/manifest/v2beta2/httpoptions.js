"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceExposeHTTPOptions = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
function createBaseServiceExposeHTTPOptions() {
    return {
        $type: 'akash.manifest.v2beta2.ServiceExposeHTTPOptions',
        maxBodySize: 0,
        readTimeout: 0,
        sendTimeout: 0,
        nextTries: 0,
        nextTimeout: 0,
        nextCases: [],
    };
}
exports.ServiceExposeHTTPOptions = {
    $type: 'akash.manifest.v2beta2.ServiceExposeHTTPOptions',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxBodySize !== 0) {
            writer.uint32(8).uint32(message.maxBodySize);
        }
        if (message.readTimeout !== 0) {
            writer.uint32(16).uint32(message.readTimeout);
        }
        if (message.sendTimeout !== 0) {
            writer.uint32(24).uint32(message.sendTimeout);
        }
        if (message.nextTries !== 0) {
            writer.uint32(32).uint32(message.nextTries);
        }
        if (message.nextTimeout !== 0) {
            writer.uint32(40).uint32(message.nextTimeout);
        }
        for (const v of message.nextCases) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceExposeHTTPOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.maxBodySize = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.readTimeout = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sendTimeout = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.nextTries = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.nextTimeout = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextCases.push(reader.string());
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
            $type: exports.ServiceExposeHTTPOptions.$type,
            maxBodySize: isSet(object.maxBodySize)
                ? globalThis.Number(object.maxBodySize)
                : 0,
            readTimeout: isSet(object.readTimeout)
                ? globalThis.Number(object.readTimeout)
                : 0,
            sendTimeout: isSet(object.sendTimeout)
                ? globalThis.Number(object.sendTimeout)
                : 0,
            nextTries: isSet(object.nextTries)
                ? globalThis.Number(object.nextTries)
                : 0,
            nextTimeout: isSet(object.nextTimeout)
                ? globalThis.Number(object.nextTimeout)
                : 0,
            nextCases: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.nextCases)
                ? object.nextCases.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.maxBodySize !== 0) {
            obj.maxBodySize = Math.round(message.maxBodySize);
        }
        if (message.readTimeout !== 0) {
            obj.readTimeout = Math.round(message.readTimeout);
        }
        if (message.sendTimeout !== 0) {
            obj.sendTimeout = Math.round(message.sendTimeout);
        }
        if (message.nextTries !== 0) {
            obj.nextTries = Math.round(message.nextTries);
        }
        if (message.nextTimeout !== 0) {
            obj.nextTimeout = Math.round(message.nextTimeout);
        }
        if ((_a = message.nextCases) === null || _a === void 0 ? void 0 : _a.length) {
            obj.nextCases = message.nextCases;
        }
        return obj;
    },
    create(base) {
        return exports.ServiceExposeHTTPOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseServiceExposeHTTPOptions();
        message.maxBodySize = (_a = object.maxBodySize) !== null && _a !== void 0 ? _a : 0;
        message.readTimeout = (_b = object.readTimeout) !== null && _b !== void 0 ? _b : 0;
        message.sendTimeout = (_c = object.sendTimeout) !== null && _c !== void 0 ? _c : 0;
        message.nextTries = (_d = object.nextTries) !== null && _d !== void 0 ? _d : 0;
        message.nextTimeout = (_e = object.nextTimeout) !== null && _e !== void 0 ? _e : 0;
        message.nextCases = ((_f = object.nextCases) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceExposeHTTPOptions.$type, exports.ServiceExposeHTTPOptions);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
