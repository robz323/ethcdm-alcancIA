"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FractionalPayment = exports.Account = exports.AccountID = exports.fractionalPayment_StateToJSON = exports.fractionalPayment_StateFromJSON = exports.FractionalPayment_State = exports.account_StateToJSON = exports.account_StateFromJSON = exports.Account_State = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const typeRegistry_1 = require("../../../typeRegistry");
var Account_State;
(function (Account_State) {
    Account_State[Account_State["invalid"] = 0] = "invalid";
    Account_State[Account_State["open"] = 1] = "open";
    Account_State[Account_State["closed"] = 2] = "closed";
    Account_State[Account_State["overdrawn"] = 3] = "overdrawn";
    Account_State[Account_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Account_State || (exports.Account_State = Account_State = {}));
function account_StateFromJSON(object) {
    switch (object) {
        case 0:
        case 'invalid':
            return Account_State.invalid;
        case 1:
        case 'open':
            return Account_State.open;
        case 2:
        case 'closed':
            return Account_State.closed;
        case 3:
        case 'overdrawn':
            return Account_State.overdrawn;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Account_State.UNRECOGNIZED;
    }
}
exports.account_StateFromJSON = account_StateFromJSON;
function account_StateToJSON(object) {
    switch (object) {
        case Account_State.invalid:
            return 'invalid';
        case Account_State.open:
            return 'open';
        case Account_State.closed:
            return 'closed';
        case Account_State.overdrawn:
            return 'overdrawn';
        case Account_State.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
exports.account_StateToJSON = account_StateToJSON;
var FractionalPayment_State;
(function (FractionalPayment_State) {
    FractionalPayment_State[FractionalPayment_State["invalid"] = 0] = "invalid";
    FractionalPayment_State[FractionalPayment_State["open"] = 1] = "open";
    FractionalPayment_State[FractionalPayment_State["closed"] = 2] = "closed";
    FractionalPayment_State[FractionalPayment_State["overdrawn"] = 3] = "overdrawn";
    FractionalPayment_State[FractionalPayment_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FractionalPayment_State || (exports.FractionalPayment_State = FractionalPayment_State = {}));
function fractionalPayment_StateFromJSON(object) {
    switch (object) {
        case 0:
        case 'invalid':
            return FractionalPayment_State.invalid;
        case 1:
        case 'open':
            return FractionalPayment_State.open;
        case 2:
        case 'closed':
            return FractionalPayment_State.closed;
        case 3:
        case 'overdrawn':
            return FractionalPayment_State.overdrawn;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FractionalPayment_State.UNRECOGNIZED;
    }
}
exports.fractionalPayment_StateFromJSON = fractionalPayment_StateFromJSON;
function fractionalPayment_StateToJSON(object) {
    switch (object) {
        case FractionalPayment_State.invalid:
            return 'invalid';
        case FractionalPayment_State.open:
            return 'open';
        case FractionalPayment_State.closed:
            return 'closed';
        case FractionalPayment_State.overdrawn:
            return 'overdrawn';
        case FractionalPayment_State.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
exports.fractionalPayment_StateToJSON = fractionalPayment_StateToJSON;
function createBaseAccountID() {
    return { $type: 'akash.escrow.v1beta2.AccountID', scope: '', xid: '' };
}
exports.AccountID = {
    $type: 'akash.escrow.v1beta2.AccountID',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scope !== '') {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== '') {
            writer.uint32(18).string(message.xid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.scope = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.xid = reader.string();
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
            $type: exports.AccountID.$type,
            scope: isSet(object.scope) ? globalThis.String(object.scope) : '',
            xid: isSet(object.xid) ? globalThis.String(object.xid) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.scope !== '') {
            obj.scope = message.scope;
        }
        if (message.xid !== '') {
            obj.xid = message.xid;
        }
        return obj;
    },
    create(base) {
        return exports.AccountID.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAccountID();
        message.scope = (_a = object.scope) !== null && _a !== void 0 ? _a : '';
        message.xid = (_b = object.xid) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AccountID.$type, exports.AccountID);
function createBaseAccount() {
    return {
        $type: 'akash.escrow.v1beta2.Account',
        id: undefined,
        owner: '',
        state: 0,
        balance: undefined,
        transferred: undefined,
        settledAt: long_1.default.ZERO,
        depositor: '',
        funds: undefined,
    };
}
exports.Account = {
    $type: 'akash.escrow.v1beta2.Account',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.balance !== undefined) {
            coin_1.DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
        }
        if (message.transferred !== undefined) {
            coin_1.DecCoin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
        }
        if (!message.settledAt.equals(long_1.default.ZERO)) {
            writer.uint32(48).int64(message.settledAt);
        }
        if (message.depositor !== '') {
            writer.uint32(58).string(message.depositor);
        }
        if (message.funds !== undefined) {
            coin_1.DecCoin.encode(message.funds, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = exports.AccountID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.balance = coin_1.DecCoin.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.transferred = coin_1.DecCoin.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.settledAt = reader.int64();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.depositor = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.funds = coin_1.DecCoin.decode(reader, reader.uint32());
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
            $type: exports.Account.$type,
            id: isSet(object.id) ? exports.AccountID.fromJSON(object.id) : undefined,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            state: isSet(object.state) ? account_StateFromJSON(object.state) : 0,
            balance: isSet(object.balance)
                ? coin_1.DecCoin.fromJSON(object.balance)
                : undefined,
            transferred: isSet(object.transferred)
                ? coin_1.DecCoin.fromJSON(object.transferred)
                : undefined,
            settledAt: isSet(object.settledAt)
                ? long_1.default.fromValue(object.settledAt)
                : long_1.default.ZERO,
            depositor: isSet(object.depositor)
                ? globalThis.String(object.depositor)
                : '',
            funds: isSet(object.funds) ? coin_1.DecCoin.fromJSON(object.funds) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = exports.AccountID.toJSON(message.id);
        }
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.state !== 0) {
            obj.state = account_StateToJSON(message.state);
        }
        if (message.balance !== undefined) {
            obj.balance = coin_1.DecCoin.toJSON(message.balance);
        }
        if (message.transferred !== undefined) {
            obj.transferred = coin_1.DecCoin.toJSON(message.transferred);
        }
        if (!message.settledAt.equals(long_1.default.ZERO)) {
            obj.settledAt = (message.settledAt || long_1.default.ZERO).toString();
        }
        if (message.depositor !== '') {
            obj.depositor = message.depositor;
        }
        if (message.funds !== undefined) {
            obj.funds = coin_1.DecCoin.toJSON(message.funds);
        }
        return obj;
    },
    create(base) {
        return exports.Account.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAccount();
        message.id =
            object.id !== undefined && object.id !== null
                ? exports.AccountID.fromPartial(object.id)
                : undefined;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? coin_1.DecCoin.fromPartial(object.balance)
                : undefined;
        message.transferred =
            object.transferred !== undefined && object.transferred !== null
                ? coin_1.DecCoin.fromPartial(object.transferred)
                : undefined;
        message.settledAt =
            object.settledAt !== undefined && object.settledAt !== null
                ? long_1.default.fromValue(object.settledAt)
                : long_1.default.ZERO;
        message.depositor = (_c = object.depositor) !== null && _c !== void 0 ? _c : '';
        message.funds =
            object.funds !== undefined && object.funds !== null
                ? coin_1.DecCoin.fromPartial(object.funds)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Account.$type, exports.Account);
function createBaseFractionalPayment() {
    return {
        $type: 'akash.escrow.v1beta2.FractionalPayment',
        accountId: undefined,
        paymentId: '',
        owner: '',
        state: 0,
        rate: undefined,
        balance: undefined,
        withdrawn: undefined,
    };
}
exports.FractionalPayment = {
    $type: 'akash.escrow.v1beta2.FractionalPayment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accountId !== undefined) {
            exports.AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.paymentId !== '') {
            writer.uint32(18).string(message.paymentId);
        }
        if (message.owner !== '') {
            writer.uint32(26).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.rate !== undefined) {
            coin_1.DecCoin.encode(message.rate, writer.uint32(42).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.DecCoin.encode(message.balance, writer.uint32(50).fork()).ldelim();
        }
        if (message.withdrawn !== undefined) {
            coin_1.Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFractionalPayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accountId = exports.AccountID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.paymentId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.rate = coin_1.DecCoin.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.balance = coin_1.DecCoin.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.withdrawn = coin_1.Coin.decode(reader, reader.uint32());
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
            $type: exports.FractionalPayment.$type,
            accountId: isSet(object.accountId)
                ? exports.AccountID.fromJSON(object.accountId)
                : undefined,
            paymentId: isSet(object.paymentId)
                ? globalThis.String(object.paymentId)
                : '',
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            state: isSet(object.state)
                ? fractionalPayment_StateFromJSON(object.state)
                : 0,
            rate: isSet(object.rate) ? coin_1.DecCoin.fromJSON(object.rate) : undefined,
            balance: isSet(object.balance)
                ? coin_1.DecCoin.fromJSON(object.balance)
                : undefined,
            withdrawn: isSet(object.withdrawn)
                ? coin_1.Coin.fromJSON(object.withdrawn)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accountId !== undefined) {
            obj.accountId = exports.AccountID.toJSON(message.accountId);
        }
        if (message.paymentId !== '') {
            obj.paymentId = message.paymentId;
        }
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.state !== 0) {
            obj.state = fractionalPayment_StateToJSON(message.state);
        }
        if (message.rate !== undefined) {
            obj.rate = coin_1.DecCoin.toJSON(message.rate);
        }
        if (message.balance !== undefined) {
            obj.balance = coin_1.DecCoin.toJSON(message.balance);
        }
        if (message.withdrawn !== undefined) {
            obj.withdrawn = coin_1.Coin.toJSON(message.withdrawn);
        }
        return obj;
    },
    create(base) {
        return exports.FractionalPayment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseFractionalPayment();
        message.accountId =
            object.accountId !== undefined && object.accountId !== null
                ? exports.AccountID.fromPartial(object.accountId)
                : undefined;
        message.paymentId = (_a = object.paymentId) !== null && _a !== void 0 ? _a : '';
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : '';
        message.state = (_c = object.state) !== null && _c !== void 0 ? _c : 0;
        message.rate =
            object.rate !== undefined && object.rate !== null
                ? coin_1.DecCoin.fromPartial(object.rate)
                : undefined;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? coin_1.DecCoin.fromPartial(object.balance)
                : undefined;
        message.withdrawn =
            object.withdrawn !== undefined && object.withdrawn !== null
                ? coin_1.Coin.fromPartial(object.withdrawn)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FractionalPayment.$type, exports.FractionalPayment);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
