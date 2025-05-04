"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const typeRegistry_1 = require("../../../typeRegistry");
const resourceunits_1 = require("../../base/v1beta2/resourceunits");
function createBaseResource() {
    return {
        $type: 'akash.deployment.v1beta2.Resource',
        resources: undefined,
        count: 0,
        price: undefined,
    };
}
exports.Resource = {
    $type: 'akash.deployment.v1beta2.Resource',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            resourceunits_1.ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(16).uint32(message.count);
        }
        if (message.price !== undefined) {
            coin_1.DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resources = resourceunits_1.ResourceUnits.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.count = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.price = coin_1.DecCoin.decode(reader, reader.uint32());
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
            $type: exports.Resource.$type,
            resources: isSet(object.resources)
                ? resourceunits_1.ResourceUnits.fromJSON(object.resources)
                : undefined,
            count: isSet(object.count) ? globalThis.Number(object.count) : 0,
            price: isSet(object.price) ? coin_1.DecCoin.fromJSON(object.price) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources !== undefined) {
            obj.resources = resourceunits_1.ResourceUnits.toJSON(message.resources);
        }
        if (message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        if (message.price !== undefined) {
            obj.price = coin_1.DecCoin.toJSON(message.price);
        }
        return obj;
    },
    create(base) {
        return exports.Resource.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResource();
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? resourceunits_1.ResourceUnits.fromPartial(object.resources)
                : undefined;
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? coin_1.DecCoin.fromPartial(object.price)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resource.$type, exports.Resource);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
