"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryProviderResponse = exports.QueryProviderRequest = exports.QueryProvidersResponse = exports.QueryProvidersRequest = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const typeRegistry_1 = require("../../../typeRegistry");
const provider_1 = require("./provider");
function createBaseQueryProvidersRequest() {
    return {
        $type: 'akash.provider.v1beta3.QueryProvidersRequest',
        pagination: undefined,
    };
}
exports.QueryProvidersRequest = {
    $type: 'akash.provider.v1beta3.QueryProvidersRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProvidersRequest();
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
            $type: exports.QueryProvidersRequest.$type,
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
        return exports.QueryProvidersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryProvidersRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProvidersRequest.$type, exports.QueryProvidersRequest);
function createBaseQueryProvidersResponse() {
    return {
        $type: 'akash.provider.v1beta3.QueryProvidersResponse',
        providers: [],
        pagination: undefined,
    };
}
exports.QueryProvidersResponse = {
    $type: 'akash.provider.v1beta3.QueryProvidersResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providers) {
            provider_1.Provider.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.providers.push(provider_1.Provider.decode(reader, reader.uint32()));
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
                ? object.providers.map((e) => provider_1.Provider.fromJSON(e))
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
            obj.providers = message.providers.map((e) => provider_1.Provider.toJSON(e));
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
            ((_a = object.providers) === null || _a === void 0 ? void 0 : _a.map((e) => provider_1.Provider.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProvidersResponse.$type, exports.QueryProvidersResponse);
function createBaseQueryProviderRequest() {
    return { $type: 'akash.provider.v1beta3.QueryProviderRequest', owner: '' };
}
exports.QueryProviderRequest = {
    $type: 'akash.provider.v1beta3.QueryProviderRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
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
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        return obj;
    },
    create(base) {
        return exports.QueryProviderRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryProviderRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProviderRequest.$type, exports.QueryProviderRequest);
function createBaseQueryProviderResponse() {
    return {
        $type: 'akash.provider.v1beta3.QueryProviderResponse',
        provider: undefined,
    };
}
exports.QueryProviderResponse = {
    $type: 'akash.provider.v1beta3.QueryProviderResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.provider !== undefined) {
            provider_1.Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.provider = provider_1.Provider.decode(reader, reader.uint32());
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
            $type: exports.QueryProviderResponse.$type,
            provider: isSet(object.provider)
                ? provider_1.Provider.fromJSON(object.provider)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.provider !== undefined) {
            obj.provider = provider_1.Provider.toJSON(message.provider);
        }
        return obj;
    },
    create(base) {
        return exports.QueryProviderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryProviderResponse();
        message.provider =
            object.provider !== undefined && object.provider !== null
                ? provider_1.Provider.fromPartial(object.provider)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProviderResponse.$type, exports.QueryProviderResponse);
exports.QueryServiceName = 'akash.provider.v1beta3.Query';
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.QueryServiceName;
        this.rpc = rpc;
        this.Providers = this.Providers.bind(this);
        this.Provider = this.Provider.bind(this);
    }
    Providers(request) {
        const data = exports.QueryProvidersRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Providers', data);
        return promise.then((data) => exports.QueryProvidersResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Provider(request) {
        const data = exports.QueryProviderRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Provider', data);
        return promise.then((data) => exports.QueryProviderResponse.decode(minimal_1.default.Reader.create(data)));
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
