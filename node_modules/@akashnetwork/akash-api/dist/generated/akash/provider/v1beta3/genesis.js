"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const provider_1 = require("./provider");
function createBaseGenesisState() {
    return { $type: 'akash.provider.v1beta3.GenesisState', providers: [] };
}
exports.GenesisState = {
    $type: 'akash.provider.v1beta3.GenesisState',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providers) {
            provider_1.Provider.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.providers.push(provider_1.Provider.decode(reader, reader.uint32()));
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
            providers: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.providers)
                ? object.providers.map((e) => provider_1.Provider.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.providers) === null || _a === void 0 ? void 0 : _a.length) {
            obj.providers = message.providers.map((e) => provider_1.Provider.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.providers =
            ((_a = object.providers) === null || _a === void 0 ? void 0 : _a.map((e) => provider_1.Provider.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenesisState.$type, exports.GenesisState);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
