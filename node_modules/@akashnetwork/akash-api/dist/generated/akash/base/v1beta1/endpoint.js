"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.endpoint_KindToJSON = exports.endpoint_KindFromJSON = exports.Endpoint_Kind = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
var Endpoint_Kind;
(function (Endpoint_Kind) {
    Endpoint_Kind[Endpoint_Kind["SHARED_HTTP"] = 0] = "SHARED_HTTP";
    Endpoint_Kind[Endpoint_Kind["RANDOM_PORT"] = 1] = "RANDOM_PORT";
    Endpoint_Kind[Endpoint_Kind["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Endpoint_Kind || (exports.Endpoint_Kind = Endpoint_Kind = {}));
function endpoint_KindFromJSON(object) {
    switch (object) {
        case 0:
        case 'SHARED_HTTP':
            return Endpoint_Kind.SHARED_HTTP;
        case 1:
        case 'RANDOM_PORT':
            return Endpoint_Kind.RANDOM_PORT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Endpoint_Kind.UNRECOGNIZED;
    }
}
exports.endpoint_KindFromJSON = endpoint_KindFromJSON;
function endpoint_KindToJSON(object) {
    switch (object) {
        case Endpoint_Kind.SHARED_HTTP:
            return 'SHARED_HTTP';
        case Endpoint_Kind.RANDOM_PORT:
            return 'RANDOM_PORT';
        case Endpoint_Kind.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
exports.endpoint_KindToJSON = endpoint_KindToJSON;
function createBaseEndpoint() {
    return { $type: 'akash.base.v1beta1.Endpoint', kind: 0 };
}
exports.Endpoint = {
    $type: 'akash.base.v1beta1.Endpoint',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.kind !== 0) {
            writer.uint32(8).int32(message.kind);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndpoint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.kind = reader.int32();
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
            $type: exports.Endpoint.$type,
            kind: isSet(object.kind) ? endpoint_KindFromJSON(object.kind) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.kind !== 0) {
            obj.kind = endpoint_KindToJSON(message.kind);
        }
        return obj;
    },
    create(base) {
        return exports.Endpoint.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEndpoint();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Endpoint.$type, exports.Endpoint);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
