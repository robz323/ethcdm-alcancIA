"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidFilters = exports.Bid = exports.BidID = exports.MsgCloseBidResponse = exports.MsgCloseBid = exports.MsgCreateBidResponse = exports.MsgCreateBid = exports.bid_StateToJSON = exports.bid_StateFromJSON = exports.Bid_State = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const typeRegistry_1 = require("../../../typeRegistry");
const order_1 = require("./order");
var Bid_State;
(function (Bid_State) {
    Bid_State[Bid_State["invalid"] = 0] = "invalid";
    Bid_State[Bid_State["open"] = 1] = "open";
    Bid_State[Bid_State["active"] = 2] = "active";
    Bid_State[Bid_State["lost"] = 3] = "lost";
    Bid_State[Bid_State["closed"] = 4] = "closed";
    Bid_State[Bid_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Bid_State || (exports.Bid_State = Bid_State = {}));
function bid_StateFromJSON(object) {
    switch (object) {
        case 0:
        case 'invalid':
            return Bid_State.invalid;
        case 1:
        case 'open':
            return Bid_State.open;
        case 2:
        case 'active':
            return Bid_State.active;
        case 3:
        case 'lost':
            return Bid_State.lost;
        case 4:
        case 'closed':
            return Bid_State.closed;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Bid_State.UNRECOGNIZED;
    }
}
exports.bid_StateFromJSON = bid_StateFromJSON;
function bid_StateToJSON(object) {
    switch (object) {
        case Bid_State.invalid:
            return 'invalid';
        case Bid_State.open:
            return 'open';
        case Bid_State.active:
            return 'active';
        case Bid_State.lost:
            return 'lost';
        case Bid_State.closed:
            return 'closed';
        case Bid_State.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
exports.bid_StateToJSON = bid_StateToJSON;
function createBaseMsgCreateBid() {
    return {
        $type: 'akash.market.v1beta2.MsgCreateBid',
        order: undefined,
        provider: '',
        price: undefined,
        deposit: undefined,
    };
}
exports.MsgCreateBid = {
    $type: 'akash.market.v1beta2.MsgCreateBid',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.order !== undefined) {
            order_1.OrderID.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.provider !== '') {
            writer.uint32(18).string(message.provider);
        }
        if (message.price !== undefined) {
            coin_1.DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.order = order_1.OrderID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.provider = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.price = coin_1.DecCoin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
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
            $type: exports.MsgCreateBid.$type,
            order: isSet(object.order) ? order_1.OrderID.fromJSON(object.order) : undefined,
            provider: isSet(object.provider)
                ? globalThis.String(object.provider)
                : '',
            price: isSet(object.price) ? coin_1.DecCoin.fromJSON(object.price) : undefined,
            deposit: isSet(object.deposit)
                ? coin_1.Coin.fromJSON(object.deposit)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.order !== undefined) {
            obj.order = order_1.OrderID.toJSON(message.order);
        }
        if (message.provider !== '') {
            obj.provider = message.provider;
        }
        if (message.price !== undefined) {
            obj.price = coin_1.DecCoin.toJSON(message.price);
        }
        if (message.deposit !== undefined) {
            obj.deposit = coin_1.Coin.toJSON(message.deposit);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateBid.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateBid();
        message.order =
            object.order !== undefined && object.order !== null
                ? order_1.OrderID.fromPartial(object.order)
                : undefined;
        message.provider = (_a = object.provider) !== null && _a !== void 0 ? _a : '';
        message.price =
            object.price !== undefined && object.price !== null
                ? coin_1.DecCoin.fromPartial(object.price)
                : undefined;
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? coin_1.Coin.fromPartial(object.deposit)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateBid.$type, exports.MsgCreateBid);
function createBaseMsgCreateBidResponse() {
    return { $type: 'akash.market.v1beta2.MsgCreateBidResponse' };
}
exports.MsgCreateBidResponse = {
    $type: 'akash.market.v1beta2.MsgCreateBidResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return { $type: exports.MsgCreateBidResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCreateBidResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateBidResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateBidResponse.$type, exports.MsgCreateBidResponse);
function createBaseMsgCloseBid() {
    return { $type: 'akash.market.v1beta2.MsgCloseBid', bidId: undefined };
}
exports.MsgCloseBid = {
    $type: 'akash.market.v1beta2.MsgCloseBid',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidId !== undefined) {
            exports.BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bidId = exports.BidID.decode(reader, reader.uint32());
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
            $type: exports.MsgCloseBid.$type,
            bidId: isSet(object.bidId) ? exports.BidID.fromJSON(object.bidId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.bidId !== undefined) {
            obj.bidId = exports.BidID.toJSON(message.bidId);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCloseBid.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgCloseBid();
        message.bidId =
            object.bidId !== undefined && object.bidId !== null
                ? exports.BidID.fromPartial(object.bidId)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCloseBid.$type, exports.MsgCloseBid);
function createBaseMsgCloseBidResponse() {
    return { $type: 'akash.market.v1beta2.MsgCloseBidResponse' };
}
exports.MsgCloseBidResponse = {
    $type: 'akash.market.v1beta2.MsgCloseBidResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseBidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return { $type: exports.MsgCloseBidResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCloseBidResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCloseBidResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCloseBidResponse.$type, exports.MsgCloseBidResponse);
function createBaseBidID() {
    return {
        $type: 'akash.market.v1beta2.BidID',
        owner: '',
        dseq: long_1.default.UZERO,
        gseq: 0,
        oseq: 0,
        provider: '',
    };
}
exports.BidID = {
    $type: 'akash.market.v1beta2.BidID',
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
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.provider !== '') {
            writer.uint32(42).string(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBidID();
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
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.oseq = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.provider = reader.string();
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
            $type: exports.BidID.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            dseq: isSet(object.dseq) ? long_1.default.fromValue(object.dseq) : long_1.default.UZERO,
            gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
            oseq: isSet(object.oseq) ? globalThis.Number(object.oseq) : 0,
            provider: isSet(object.provider)
                ? globalThis.String(object.provider)
                : '',
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
        if (message.oseq !== 0) {
            obj.oseq = Math.round(message.oseq);
        }
        if (message.provider !== '') {
            obj.provider = message.provider;
        }
        return obj;
    },
    create(base) {
        return exports.BidID.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseBidID();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.dseq =
            object.dseq !== undefined && object.dseq !== null
                ? long_1.default.fromValue(object.dseq)
                : long_1.default.UZERO;
        message.gseq = (_b = object.gseq) !== null && _b !== void 0 ? _b : 0;
        message.oseq = (_c = object.oseq) !== null && _c !== void 0 ? _c : 0;
        message.provider = (_d = object.provider) !== null && _d !== void 0 ? _d : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BidID.$type, exports.BidID);
function createBaseBid() {
    return {
        $type: 'akash.market.v1beta2.Bid',
        bidId: undefined,
        state: 0,
        price: undefined,
        createdAt: long_1.default.ZERO,
    };
}
exports.Bid = {
    $type: 'akash.market.v1beta2.Bid',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidId !== undefined) {
            exports.BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.price !== undefined) {
            coin_1.DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (!message.createdAt.equals(long_1.default.ZERO)) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bidId = exports.BidID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.price = coin_1.DecCoin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.createdAt = reader.int64();
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
            $type: exports.Bid.$type,
            bidId: isSet(object.bidId) ? exports.BidID.fromJSON(object.bidId) : undefined,
            state: isSet(object.state) ? bid_StateFromJSON(object.state) : 0,
            price: isSet(object.price) ? coin_1.DecCoin.fromJSON(object.price) : undefined,
            createdAt: isSet(object.createdAt)
                ? long_1.default.fromValue(object.createdAt)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.bidId !== undefined) {
            obj.bidId = exports.BidID.toJSON(message.bidId);
        }
        if (message.state !== 0) {
            obj.state = bid_StateToJSON(message.state);
        }
        if (message.price !== undefined) {
            obj.price = coin_1.DecCoin.toJSON(message.price);
        }
        if (!message.createdAt.equals(long_1.default.ZERO)) {
            obj.createdAt = (message.createdAt || long_1.default.ZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.Bid.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBid();
        message.bidId =
            object.bidId !== undefined && object.bidId !== null
                ? exports.BidID.fromPartial(object.bidId)
                : undefined;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? coin_1.DecCoin.fromPartial(object.price)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? long_1.default.fromValue(object.createdAt)
                : long_1.default.ZERO;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Bid.$type, exports.Bid);
function createBaseBidFilters() {
    return {
        $type: 'akash.market.v1beta2.BidFilters',
        owner: '',
        dseq: long_1.default.UZERO,
        gseq: 0,
        oseq: 0,
        provider: '',
        state: '',
    };
}
exports.BidFilters = {
    $type: 'akash.market.v1beta2.BidFilters',
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
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.provider !== '') {
            writer.uint32(42).string(message.provider);
        }
        if (message.state !== '') {
            writer.uint32(50).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBidFilters();
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
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.oseq = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.provider = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.state = reader.string();
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
            $type: exports.BidFilters.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            dseq: isSet(object.dseq) ? long_1.default.fromValue(object.dseq) : long_1.default.UZERO,
            gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
            oseq: isSet(object.oseq) ? globalThis.Number(object.oseq) : 0,
            provider: isSet(object.provider)
                ? globalThis.String(object.provider)
                : '',
            state: isSet(object.state) ? globalThis.String(object.state) : '',
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
        if (message.oseq !== 0) {
            obj.oseq = Math.round(message.oseq);
        }
        if (message.provider !== '') {
            obj.provider = message.provider;
        }
        if (message.state !== '') {
            obj.state = message.state;
        }
        return obj;
    },
    create(base) {
        return exports.BidFilters.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseBidFilters();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.dseq =
            object.dseq !== undefined && object.dseq !== null
                ? long_1.default.fromValue(object.dseq)
                : long_1.default.UZERO;
        message.gseq = (_b = object.gseq) !== null && _b !== void 0 ? _b : 0;
        message.oseq = (_c = object.oseq) !== null && _c !== void 0 ? _c : 0;
        message.provider = (_d = object.provider) !== null && _d !== void 0 ? _d : '';
        message.state = (_e = object.state) !== null && _e !== void 0 ? _e : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BidFilters.$type, exports.BidFilters);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
