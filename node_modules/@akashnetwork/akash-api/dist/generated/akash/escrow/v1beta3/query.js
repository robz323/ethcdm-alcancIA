"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryPaymentsResponse = exports.QueryPaymentsRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const typeRegistry_1 = require("../../../typeRegistry");
const types_1 = require("./types");
function createBaseQueryAccountsRequest() {
    return {
        $type: 'akash.escrow.v1beta3.QueryAccountsRequest',
        scope: '',
        xid: '',
        owner: '',
        state: '',
        pagination: undefined,
    };
}
exports.QueryAccountsRequest = {
    $type: 'akash.escrow.v1beta3.QueryAccountsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scope !== '') {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== '') {
            writer.uint32(18).string(message.xid);
        }
        if (message.owner !== '') {
            writer.uint32(26).string(message.owner);
        }
        if (message.state !== '') {
            writer.uint32(34).string(message.state);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.state = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            $type: exports.QueryAccountsRequest.$type,
            scope: isSet(object.scope) ? globalThis.String(object.scope) : '',
            xid: isSet(object.xid) ? globalThis.String(object.xid) : '',
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            state: isSet(object.state) ? globalThis.String(object.state) : '',
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
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
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.state !== '') {
            obj.state = message.state;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAccountsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryAccountsRequest();
        message.scope = (_a = object.scope) !== null && _a !== void 0 ? _a : '';
        message.xid = (_b = object.xid) !== null && _b !== void 0 ? _b : '';
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : '';
        message.state = (_d = object.state) !== null && _d !== void 0 ? _d : '';
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryAccountsRequest.$type, exports.QueryAccountsRequest);
function createBaseQueryAccountsResponse() {
    return {
        $type: 'akash.escrow.v1beta3.QueryAccountsResponse',
        accounts: [],
        pagination: undefined,
    };
}
exports.QueryAccountsResponse = {
    $type: 'akash.escrow.v1beta3.QueryAccountsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            types_1.Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
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
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            $type: exports.QueryAccountsResponse.$type,
            accounts: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.accounts)
                ? object.accounts.map((e) => types_1.Account.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.accounts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.accounts = message.accounts.map((e) => types_1.Account.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAccountsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountsResponse();
        message.accounts =
            ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Account.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryAccountsResponse.$type, exports.QueryAccountsResponse);
function createBaseQueryPaymentsRequest() {
    return {
        $type: 'akash.escrow.v1beta3.QueryPaymentsRequest',
        scope: '',
        xid: '',
        id: '',
        owner: '',
        state: '',
        pagination: undefined,
    };
}
exports.QueryPaymentsRequest = {
    $type: 'akash.escrow.v1beta3.QueryPaymentsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scope !== '') {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== '') {
            writer.uint32(18).string(message.xid);
        }
        if (message.id !== '') {
            writer.uint32(26).string(message.id);
        }
        if (message.owner !== '') {
            writer.uint32(34).string(message.owner);
        }
        if (message.state !== '') {
            writer.uint32(42).string(message.state);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentsRequest();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.state = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            $type: exports.QueryPaymentsRequest.$type,
            scope: isSet(object.scope) ? globalThis.String(object.scope) : '',
            xid: isSet(object.xid) ? globalThis.String(object.xid) : '',
            id: isSet(object.id) ? globalThis.String(object.id) : '',
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            state: isSet(object.state) ? globalThis.String(object.state) : '',
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
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
        if (message.id !== '') {
            obj.id = message.id;
        }
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.state !== '') {
            obj.state = message.state;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPaymentsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseQueryPaymentsRequest();
        message.scope = (_a = object.scope) !== null && _a !== void 0 ? _a : '';
        message.xid = (_b = object.xid) !== null && _b !== void 0 ? _b : '';
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : '';
        message.owner = (_d = object.owner) !== null && _d !== void 0 ? _d : '';
        message.state = (_e = object.state) !== null && _e !== void 0 ? _e : '';
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryPaymentsRequest.$type, exports.QueryPaymentsRequest);
function createBaseQueryPaymentsResponse() {
    return {
        $type: 'akash.escrow.v1beta3.QueryPaymentsResponse',
        payments: [],
        pagination: undefined,
    };
}
exports.QueryPaymentsResponse = {
    $type: 'akash.escrow.v1beta3.QueryPaymentsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.payments) {
            types_1.FractionalPayment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payments.push(types_1.FractionalPayment.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            $type: exports.QueryPaymentsResponse.$type,
            payments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.payments)
                ? object.payments.map((e) => types_1.FractionalPayment.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.payments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.payments = message.payments.map((e) => types_1.FractionalPayment.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPaymentsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPaymentsResponse();
        message.payments =
            ((_a = object.payments) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.FractionalPayment.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryPaymentsResponse.$type, exports.QueryPaymentsResponse);
exports.QueryServiceName = 'akash.escrow.v1beta3.Query';
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.QueryServiceName;
        this.rpc = rpc;
        this.Accounts = this.Accounts.bind(this);
        this.Payments = this.Payments.bind(this);
    }
    Accounts(request) {
        const data = exports.QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Accounts', data);
        return promise.then((data) => exports.QueryAccountsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Payments(request) {
        const data = exports.QueryPaymentsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Payments', data);
        return promise.then((data) => exports.QueryPaymentsResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
