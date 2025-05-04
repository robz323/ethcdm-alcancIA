"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositParams = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
function createBaseDepositParams() {
    return {
        $type: 'akash.gov.v1beta3.DepositParams',
        minInitialDepositRate: new Uint8Array(0),
    };
}
exports.DepositParams = {
    $type: 'akash.gov.v1beta3.DepositParams',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minInitialDepositRate.length !== 0) {
            writer.uint32(10).bytes(message.minInitialDepositRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.minInitialDepositRate = reader.bytes();
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
            $type: exports.DepositParams.$type,
            minInitialDepositRate: isSet(object.minInitialDepositRate)
                ? bytesFromBase64(object.minInitialDepositRate)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.minInitialDepositRate.length !== 0) {
            obj.minInitialDepositRate = base64FromBytes(message.minInitialDepositRate);
        }
        return obj;
    },
    create(base) {
        return exports.DepositParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDepositParams();
        message.minInitialDepositRate =
            (_a = object.minInitialDepositRate) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DepositParams.$type, exports.DepositParams);
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString('base64');
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(''));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
