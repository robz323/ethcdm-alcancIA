"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgDeleteProviderAttributesResponse = exports.MsgDeleteProviderAttributes = exports.MsgSignProviderAttributesResponse = exports.MsgSignProviderAttributes = exports.AttributesFilters = exports.AttributesResponse = exports.AuditedAttributes = exports.Provider = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const attribute_1 = require("../../base/v1beta3/attribute");
function createBaseProvider() {
    return {
        $type: 'akash.audit.v1beta3.Provider',
        owner: '',
        auditor: '',
        attributes: [],
    };
}
exports.Provider = {
    $type: 'akash.audit.v1beta3.Provider',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== '') {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.auditor = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : '',
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.auditor !== '') {
            obj.auditor = message.auditor;
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
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
        message.auditor = (_b = object.auditor) !== null && _b !== void 0 ? _b : '';
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Provider.$type, exports.Provider);
function createBaseAuditedAttributes() {
    return {
        $type: 'akash.audit.v1beta3.AuditedAttributes',
        owner: '',
        auditor: '',
        attributes: [],
    };
}
exports.AuditedAttributes = {
    $type: 'akash.audit.v1beta3.AuditedAttributes',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== '') {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuditedAttributes();
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
                    message.auditor = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            $type: exports.AuditedAttributes.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : '',
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.auditor !== '') {
            obj.auditor = message.auditor;
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.AuditedAttributes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAuditedAttributes();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.auditor = (_b = object.auditor) !== null && _b !== void 0 ? _b : '';
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AuditedAttributes.$type, exports.AuditedAttributes);
function createBaseAttributesResponse() {
    return { $type: 'akash.audit.v1beta3.AttributesResponse', attributes: [] };
}
exports.AttributesResponse = {
    $type: 'akash.audit.v1beta3.AttributesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.attributes) {
            exports.AuditedAttributes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttributesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.attributes.push(exports.AuditedAttributes.decode(reader, reader.uint32()));
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
            $type: exports.AttributesResponse.$type,
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => exports.AuditedAttributes.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => exports.AuditedAttributes.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.AttributesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAttributesResponse();
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AuditedAttributes.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttributesResponse.$type, exports.AttributesResponse);
function createBaseAttributesFilters() {
    return {
        $type: 'akash.audit.v1beta3.AttributesFilters',
        auditors: [],
        owners: [],
    };
}
exports.AttributesFilters = {
    $type: 'akash.audit.v1beta3.AttributesFilters',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.auditors) {
            writer.uint32(10).string(v);
        }
        for (const v of message.owners) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttributesFilters();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.auditors.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.owners.push(reader.string());
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
            $type: exports.AttributesFilters.$type,
            auditors: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.auditors)
                ? object.auditors.map((e) => globalThis.String(e))
                : [],
            owners: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.owners)
                ? object.owners.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if ((_a = message.auditors) === null || _a === void 0 ? void 0 : _a.length) {
            obj.auditors = message.auditors;
        }
        if ((_b = message.owners) === null || _b === void 0 ? void 0 : _b.length) {
            obj.owners = message.owners;
        }
        return obj;
    },
    create(base) {
        return exports.AttributesFilters.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAttributesFilters();
        message.auditors = ((_a = object.auditors) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.owners = ((_b = object.owners) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttributesFilters.$type, exports.AttributesFilters);
function createBaseMsgSignProviderAttributes() {
    return {
        $type: 'akash.audit.v1beta3.MsgSignProviderAttributes',
        owner: '',
        auditor: '',
        attributes: [],
    };
}
exports.MsgSignProviderAttributes = {
    $type: 'akash.audit.v1beta3.MsgSignProviderAttributes',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== '') {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignProviderAttributes();
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
                    message.auditor = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            $type: exports.MsgSignProviderAttributes.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : '',
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.auditor !== '') {
            obj.auditor = message.auditor;
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MsgSignProviderAttributes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgSignProviderAttributes();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.auditor = (_b = object.auditor) !== null && _b !== void 0 ? _b : '';
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgSignProviderAttributes.$type, exports.MsgSignProviderAttributes);
function createBaseMsgSignProviderAttributesResponse() {
    return { $type: 'akash.audit.v1beta3.MsgSignProviderAttributesResponse' };
}
exports.MsgSignProviderAttributesResponse = {
    $type: 'akash.audit.v1beta3.MsgSignProviderAttributesResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignProviderAttributesResponse();
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
        return { $type: exports.MsgSignProviderAttributesResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgSignProviderAttributesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgSignProviderAttributesResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgSignProviderAttributesResponse.$type, exports.MsgSignProviderAttributesResponse);
function createBaseMsgDeleteProviderAttributes() {
    return {
        $type: 'akash.audit.v1beta3.MsgDeleteProviderAttributes',
        owner: '',
        auditor: '',
        keys: [],
    };
}
exports.MsgDeleteProviderAttributes = {
    $type: 'akash.audit.v1beta3.MsgDeleteProviderAttributes',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== '') {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.keys) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderAttributes();
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
                    message.auditor = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.keys.push(reader.string());
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
            $type: exports.MsgDeleteProviderAttributes.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            auditor: isSet(object.auditor) ? globalThis.String(object.auditor) : '',
            keys: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.keys)
                ? object.keys.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.auditor !== '') {
            obj.auditor = message.auditor;
        }
        if ((_a = message.keys) === null || _a === void 0 ? void 0 : _a.length) {
            obj.keys = message.keys;
        }
        return obj;
    },
    create(base) {
        return exports.MsgDeleteProviderAttributes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgDeleteProviderAttributes();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.auditor = (_b = object.auditor) !== null && _b !== void 0 ? _b : '';
        message.keys = ((_c = object.keys) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgDeleteProviderAttributes.$type, exports.MsgDeleteProviderAttributes);
function createBaseMsgDeleteProviderAttributesResponse() {
    return { $type: 'akash.audit.v1beta3.MsgDeleteProviderAttributesResponse' };
}
exports.MsgDeleteProviderAttributesResponse = {
    $type: 'akash.audit.v1beta3.MsgDeleteProviderAttributesResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderAttributesResponse();
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
        return { $type: exports.MsgDeleteProviderAttributesResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgDeleteProviderAttributesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteProviderAttributesResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgDeleteProviderAttributesResponse.$type, exports.MsgDeleteProviderAttributesResponse);
exports.MsgServiceName = 'akash.audit.v1beta3.Msg';
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.MsgServiceName;
        this.rpc = rpc;
        this.SignProviderAttributes = this.SignProviderAttributes.bind(this);
        this.DeleteProviderAttributes = this.DeleteProviderAttributes.bind(this);
    }
    SignProviderAttributes(request) {
        const data = exports.MsgSignProviderAttributes.encode(request).finish();
        const promise = this.rpc.request(this.service, 'SignProviderAttributes', data);
        return promise.then((data) => exports.MsgSignProviderAttributesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DeleteProviderAttributes(request) {
        const data = exports.MsgDeleteProviderAttributes.encode(request).finish();
        const promise = this.rpc.request(this.service, 'DeleteProviderAttributes', data);
        return promise.then((data) => exports.MsgDeleteProviderAttributesResponse.decode(minimal_1.default.Reader.create(data)));
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
