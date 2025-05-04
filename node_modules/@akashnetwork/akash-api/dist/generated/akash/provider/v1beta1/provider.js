"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.Provider = exports.MsgDeleteProviderResponse = exports.MsgDeleteProvider = exports.MsgUpdateProviderResponse = exports.MsgUpdateProvider = exports.MsgCreateProviderResponse = exports.MsgCreateProvider = exports.ProviderInfo = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const attribute_1 = require("../../base/v1beta1/attribute");
function createBaseProviderInfo() {
    return {
        $type: 'akash.provider.v1beta1.ProviderInfo',
        email: '',
        website: '',
    };
}
exports.ProviderInfo = {
    $type: 'akash.provider.v1beta1.ProviderInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== '') {
            writer.uint32(10).string(message.email);
        }
        if (message.website !== '') {
            writer.uint32(18).string(message.website);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.website = reader.string();
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
            $type: exports.ProviderInfo.$type,
            email: isSet(object.email) ? globalThis.String(object.email) : '',
            website: isSet(object.website) ? globalThis.String(object.website) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== '') {
            obj.email = message.email;
        }
        if (message.website !== '') {
            obj.website = message.website;
        }
        return obj;
    },
    create(base) {
        return exports.ProviderInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProviderInfo();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : '';
        message.website = (_b = object.website) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ProviderInfo.$type, exports.ProviderInfo);
function createBaseMsgCreateProvider() {
    return {
        $type: 'akash.provider.v1beta1.MsgCreateProvider',
        owner: '',
        hostUri: '',
        attributes: [],
        info: undefined,
    };
}
exports.MsgCreateProvider = {
    $type: 'akash.provider.v1beta1.MsgCreateProvider',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== '') {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProvider();
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
                    message.hostUri = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
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
            $type: exports.MsgCreateProvider.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            hostUri: isSet(object.hostUri) ? globalThis.String(object.hostUri) : '',
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
            info: isSet(object.info) ? exports.ProviderInfo.fromJSON(object.info) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.hostUri !== '') {
            obj.hostUri = message.hostUri;
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        if (message.info !== undefined) {
            obj.info = exports.ProviderInfo.toJSON(message.info);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateProvider.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateProvider();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.hostUri = (_b = object.hostUri) !== null && _b !== void 0 ? _b : '';
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        message.info =
            object.info !== undefined && object.info !== null
                ? exports.ProviderInfo.fromPartial(object.info)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateProvider.$type, exports.MsgCreateProvider);
function createBaseMsgCreateProviderResponse() {
    return { $type: 'akash.provider.v1beta1.MsgCreateProviderResponse' };
}
exports.MsgCreateProviderResponse = {
    $type: 'akash.provider.v1beta1.MsgCreateProviderResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProviderResponse();
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
        return { $type: exports.MsgCreateProviderResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCreateProviderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateProviderResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateProviderResponse.$type, exports.MsgCreateProviderResponse);
function createBaseMsgUpdateProvider() {
    return {
        $type: 'akash.provider.v1beta1.MsgUpdateProvider',
        owner: '',
        hostUri: '',
        attributes: [],
        info: undefined,
    };
}
exports.MsgUpdateProvider = {
    $type: 'akash.provider.v1beta1.MsgUpdateProvider',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== '') {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProvider();
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
                    message.hostUri = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
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
            $type: exports.MsgUpdateProvider.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            hostUri: isSet(object.hostUri) ? globalThis.String(object.hostUri) : '',
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
            info: isSet(object.info) ? exports.ProviderInfo.fromJSON(object.info) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.hostUri !== '') {
            obj.hostUri = message.hostUri;
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        if (message.info !== undefined) {
            obj.info = exports.ProviderInfo.toJSON(message.info);
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateProvider.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateProvider();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.hostUri = (_b = object.hostUri) !== null && _b !== void 0 ? _b : '';
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        message.info =
            object.info !== undefined && object.info !== null
                ? exports.ProviderInfo.fromPartial(object.info)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgUpdateProvider.$type, exports.MsgUpdateProvider);
function createBaseMsgUpdateProviderResponse() {
    return { $type: 'akash.provider.v1beta1.MsgUpdateProviderResponse' };
}
exports.MsgUpdateProviderResponse = {
    $type: 'akash.provider.v1beta1.MsgUpdateProviderResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProviderResponse();
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
        return { $type: exports.MsgUpdateProviderResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateProviderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateProviderResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgUpdateProviderResponse.$type, exports.MsgUpdateProviderResponse);
function createBaseMsgDeleteProvider() {
    return { $type: 'akash.provider.v1beta1.MsgDeleteProvider', owner: '' };
}
exports.MsgDeleteProvider = {
    $type: 'akash.provider.v1beta1.MsgDeleteProvider',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProvider();
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
            $type: exports.MsgDeleteProvider.$type,
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
        return exports.MsgDeleteProvider.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDeleteProvider();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgDeleteProvider.$type, exports.MsgDeleteProvider);
function createBaseMsgDeleteProviderResponse() {
    return { $type: 'akash.provider.v1beta1.MsgDeleteProviderResponse' };
}
exports.MsgDeleteProviderResponse = {
    $type: 'akash.provider.v1beta1.MsgDeleteProviderResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderResponse();
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
        return { $type: exports.MsgDeleteProviderResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgDeleteProviderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteProviderResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgDeleteProviderResponse.$type, exports.MsgDeleteProviderResponse);
function createBaseProvider() {
    return {
        $type: 'akash.provider.v1beta1.Provider',
        owner: '',
        hostUri: '',
        attributes: [],
        info: undefined,
    };
}
exports.Provider = {
    $type: 'akash.provider.v1beta1.Provider',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== '') {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProvider();
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
                    message.hostUri = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
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
            $type: exports.Provider.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            hostUri: isSet(object.hostUri) ? globalThis.String(object.hostUri) : '',
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
            info: isSet(object.info) ? exports.ProviderInfo.fromJSON(object.info) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.hostUri !== '') {
            obj.hostUri = message.hostUri;
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        if (message.info !== undefined) {
            obj.info = exports.ProviderInfo.toJSON(message.info);
        }
        return obj;
    },
    create(base) {
        return exports.Provider.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseProvider();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.hostUri = (_b = object.hostUri) !== null && _b !== void 0 ? _b : '';
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        message.info =
            object.info !== undefined && object.info !== null
                ? exports.ProviderInfo.fromPartial(object.info)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Provider.$type, exports.Provider);
exports.MsgServiceName = 'akash.provider.v1beta1.Msg';
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.MsgServiceName;
        this.rpc = rpc;
        this.CreateProvider = this.CreateProvider.bind(this);
        this.UpdateProvider = this.UpdateProvider.bind(this);
        this.DeleteProvider = this.DeleteProvider.bind(this);
    }
    CreateProvider(request) {
        const data = exports.MsgCreateProvider.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CreateProvider', data);
        return promise.then((data) => exports.MsgCreateProviderResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateProvider(request) {
        const data = exports.MsgUpdateProvider.encode(request).finish();
        const promise = this.rpc.request(this.service, 'UpdateProvider', data);
        return promise.then((data) => exports.MsgUpdateProviderResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DeleteProvider(request) {
        const data = exports.MsgDeleteProvider.encode(request).finish();
        const promise = this.rpc.request(this.service, 'DeleteProvider', data);
        return promise.then((data) => exports.MsgDeleteProviderResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
