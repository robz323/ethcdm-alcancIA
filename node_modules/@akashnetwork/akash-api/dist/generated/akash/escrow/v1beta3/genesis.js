"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const types_1 = require("./types");
function createBaseGenesisState() {
    return {
        $type: 'akash.escrow.v1beta3.GenesisState',
        accounts: [],
        payments: [],
    };
}
exports.GenesisState = {
    $type: 'akash.escrow.v1beta3.GenesisState',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            types_1.Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.payments) {
            types_1.FractionalPayment.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(types_1.Account.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.payments.push(types_1.FractionalPayment.decode(reader, reader.uint32()));
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
            $type: exports.GenesisState.$type,
            accounts: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.accounts)
                ? object.accounts.map((e) => types_1.Account.fromJSON(e))
                : [],
            payments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.payments)
                ? object.payments.map((e) => types_1.FractionalPayment.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if ((_a = message.accounts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.accounts = message.accounts.map((e) => types_1.Account.toJSON(e));
        }
        if ((_b = message.payments) === null || _b === void 0 ? void 0 : _b.length) {
            obj.payments = message.payments.map((e) => types_1.FractionalPayment.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.accounts =
            ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Account.fromPartial(e))) || [];
        message.payments =
            ((_b = object.payments) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.FractionalPayment.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenesisState.$type, exports.GenesisState);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
