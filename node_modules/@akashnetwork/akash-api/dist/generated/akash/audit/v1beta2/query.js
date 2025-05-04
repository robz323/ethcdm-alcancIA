"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryAuditorAttributesRequest = exports.QueryProviderAuditorRequest = exports.QueryProviderAttributesRequest = exports.QueryAllProvidersAttributesRequest = exports.QueryProviderRequest = exports.QueryProvidersResponse = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const typeRegistry_1 = require("../../../typeRegistry");
const audit_1 = require("./audit");
function createBaseQueryProvidersResponse() {
    return {
        $type: 'akash.audit.v1beta2.QueryProvidersResponse',
        providers: [],
        pagination: undefined,
    };
}
exports.QueryProvidersResponse = {
    $type: 'akash.audit.v1beta2.QueryProvidersResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providers) {
            audit_1.Provider.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProvidersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.providers.push(audit_1.Provider.decode(reader, reader.uint32()));
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
            $type: exports.QueryProvidersResponse.$type,
            providers: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.providers)
                ? object.providers.map((e) => audit_1.Provider.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.providers) === null || _a === void 0 ? void 0 : _a.length) {
            obj.providers = message.providers.map((e) => audit_1.Provider.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryProvidersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryProvidersResponse();
        message.providers =
            ((_a = object.providers) === null || _a === void 0 ? void 0 : _a.map((e) => audit_1.Provider.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProvidersResponse.$type, exports.QueryProvidersResponse);
function createBaseQueryProviderRequest() {
    return {
        $type: 'akash.audit.v1beta2.QueryProviderRequest',
        auditor: '',
        owner: '',
    };
}
exports.QueryProviderRequest = {
    $type: 'akash.audit.v1beta2.QueryProviderRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditor !== '') {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.auditor = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.owner = reader.string();
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
            $type: exports.QueryProviderRequest.$type,
            auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : '',
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auditor !== '') {
            obj.auditor = message.auditor;
        }
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        return obj;
    },
    create(base) {
        return exports.QueryProviderRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryProviderRequest();
        message.auditor = (_a = object.auditor) !== null && _a !== void 0 ? _a : '';
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProviderRequest.$type, exports.QueryProviderRequest);
function createBaseQueryAllProvidersAttributesRequest() {
    return {
        $type: 'akash.audit.v1beta2.QueryAllProvidersAttributesRequest',
        pagination: undefined,
    };
}
exports.QueryAllProvidersAttributesRequest = {
    $type: 'akash.audit.v1beta2.QueryAllProvidersAttributesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllProvidersAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
            $type: exports.QueryAllProvidersAttributesRequest.$type,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllProvidersAttributesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllProvidersAttributesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryAllProvidersAttributesRequest.$type, exports.QueryAllProvidersAttributesRequest);
function createBaseQueryProviderAttributesRequest() {
    return {
        $type: 'akash.audit.v1beta2.QueryProviderAttributesRequest',
        owner: '',
        pagination: undefined,
    };
}
exports.QueryProviderAttributesRequest = {
    $type: 'akash.audit.v1beta2.QueryProviderAttributesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderAttributesRequest();
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
                    if (tag !== 18) {
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
            $type: exports.QueryProviderAttributesRequest.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryProviderAttributesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryProviderAttributesRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProviderAttributesRequest.$type, exports.QueryProviderAttributesRequest);
function createBaseQueryProviderAuditorRequest() {
    return {
        $type: 'akash.audit.v1beta2.QueryProviderAuditorRequest',
        auditor: '',
        owner: '',
    };
}
exports.QueryProviderAuditorRequest = {
    $type: 'akash.audit.v1beta2.QueryProviderAuditorRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditor !== '') {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderAuditorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.auditor = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.owner = reader.string();
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
            $type: exports.QueryProviderAuditorRequest.$type,
            auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : '',
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auditor !== '') {
            obj.auditor = message.auditor;
        }
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        return obj;
    },
    create(base) {
        return exports.QueryProviderAuditorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryProviderAuditorRequest();
        message.auditor = (_a = object.auditor) !== null && _a !== void 0 ? _a : '';
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProviderAuditorRequest.$type, exports.QueryProviderAuditorRequest);
function createBaseQueryAuditorAttributesRequest() {
    return {
        $type: 'akash.audit.v1beta2.QueryAuditorAttributesRequest',
        auditor: '',
        pagination: undefined,
    };
}
exports.QueryAuditorAttributesRequest = {
    $type: 'akash.audit.v1beta2.QueryAuditorAttributesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditor !== '') {
            writer.uint32(10).string(message.auditor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuditorAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.auditor = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
            $type: exports.QueryAuditorAttributesRequest.$type,
            auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : '',
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auditor !== '') {
            obj.auditor = message.auditor;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAuditorAttributesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAuditorAttributesRequest();
        message.auditor = (_a = object.auditor) !== null && _a !== void 0 ? _a : '';
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryAuditorAttributesRequest.$type, exports.QueryAuditorAttributesRequest);
exports.QueryServiceName = 'akash.audit.v1beta2.Query';
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.QueryServiceName;
        this.rpc = rpc;
        this.AllProvidersAttributes = this.AllProvidersAttributes.bind(this);
        this.ProviderAttributes = this.ProviderAttributes.bind(this);
        this.ProviderAuditorAttributes = this.ProviderAuditorAttributes.bind(this);
        this.AuditorAttributes = this.AuditorAttributes.bind(this);
    }
    AllProvidersAttributes(request) {
        const data = exports.QueryAllProvidersAttributesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'AllProvidersAttributes', data);
        return promise.then((data) => exports.QueryProvidersResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ProviderAttributes(request) {
        const data = exports.QueryProviderAttributesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'ProviderAttributes', data);
        return promise.then((data) => exports.QueryProvidersResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ProviderAuditorAttributes(request) {
        const data = exports.QueryProviderAuditorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'ProviderAuditorAttributes', data);
        return promise.then((data) => exports.QueryProvidersResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AuditorAttributes(request) {
        const data = exports.QueryAuditorAttributesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'AuditorAttributes', data);
        return promise.then((data) => exports.QueryProvidersResponse.decode(minimal_1.default.Reader.create(data)));
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
