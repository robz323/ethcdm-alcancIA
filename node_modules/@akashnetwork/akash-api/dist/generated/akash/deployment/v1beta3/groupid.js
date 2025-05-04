"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupID = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
function createBaseGroupID() {
    return {
        $type: 'akash.deployment.v1beta3.GroupID',
        owner: '',
        dseq: long_1.default.UZERO,
        gseq: 0,
    };
}
exports.GroupID = {
    $type: 'akash.deployment.v1beta3.GroupID',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.dseq = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.gseq = reader.uint32();
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
            $type: exports.GroupID.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            dseq: isSet(object.dseq) ? long_1.default.fromValue(object.dseq) : long_1.default.UZERO,
            gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            obj.dseq = (message.dseq || long_1.default.UZERO).toString();
        }
        if (message.gseq !== 0) {
            obj.gseq = Math.round(message.gseq);
        }
        return obj;
    },
    create(base) {
        return exports.GroupID.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGroupID();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.dseq =
            object.dseq !== undefined && object.dseq !== null
                ? long_1.default.fromValue(object.dseq)
                : long_1.default.UZERO;
        message.gseq = (_b = object.gseq) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GroupID.$type, exports.GroupID);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
