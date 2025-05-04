"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Akash = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const client_info_1 = require("./client_info");
function createBaseAkash() {
    return { $type: 'akash.discovery.v1.Akash', clientInfo: undefined };
}
exports.Akash = {
    $type: 'akash.discovery.v1.Akash',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientInfo !== undefined) {
            client_info_1.ClientInfo.encode(message.clientInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAkash();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientInfo = client_info_1.ClientInfo.decode(reader, reader.uint32());
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
            $type: exports.Akash.$type,
            clientInfo: isSet(object.clientInfo)
                ? client_info_1.ClientInfo.fromJSON(object.clientInfo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientInfo !== undefined) {
            obj.clientInfo = client_info_1.ClientInfo.toJSON(message.clientInfo);
        }
        return obj;
    },
    create(base) {
        return exports.Akash.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAkash();
        message.clientInfo =
            object.clientInfo !== undefined && object.clientInfo !== null
                ? client_info_1.ClientInfo.fromPartial(object.clientInfo)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Akash.$type, exports.Akash);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
