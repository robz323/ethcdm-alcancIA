"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const bid_1 = require("./bid");
const lease_1 = require("./lease");
const order_1 = require("./order");
const params_1 = require("./params");
function createBaseGenesisState() {
    return {
        $type: 'akash.market.v1beta4.GenesisState',
        params: undefined,
        orders: [],
        leases: [],
        bids: [],
    };
}
exports.GenesisState = {
    $type: 'akash.market.v1beta4.GenesisState',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.orders) {
            order_1.Order.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.leases) {
            lease_1.Lease.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.bids) {
            bid_1.Bid.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orders.push(order_1.Order.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.leases.push(lease_1.Lease.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.bids.push(bid_1.Bid.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            orders: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.orders)
                ? object.orders.map((e) => order_1.Order.fromJSON(e))
                : [],
            leases: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.leases)
                ? object.leases.map((e) => lease_1.Lease.fromJSON(e))
                : [],
            bids: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.bids)
                ? object.bids.map((e) => bid_1.Bid.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if (message.params !== undefined) {
            obj.params = params_1.Params.toJSON(message.params);
        }
        if ((_a = message.orders) === null || _a === void 0 ? void 0 : _a.length) {
            obj.orders = message.orders.map((e) => order_1.Order.toJSON(e));
        }
        if ((_b = message.leases) === null || _b === void 0 ? void 0 : _b.length) {
            obj.leases = message.leases.map((e) => lease_1.Lease.toJSON(e));
        }
        if ((_c = message.bids) === null || _c === void 0 ? void 0 : _c.length) {
            obj.bids = message.bids.map((e) => bid_1.Bid.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => order_1.Order.fromPartial(e))) || [];
        message.leases = ((_b = object.leases) === null || _b === void 0 ? void 0 : _b.map((e) => lease_1.Lease.fromPartial(e))) || [];
        message.bids = ((_c = object.bids) === null || _c === void 0 ? void 0 : _c.map((e) => bid_1.Bid.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenesisState.$type, exports.GenesisState);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
