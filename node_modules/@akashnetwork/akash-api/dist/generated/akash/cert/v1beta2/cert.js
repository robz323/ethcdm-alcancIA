"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgRevokeCertificateResponse = exports.MsgRevokeCertificate = exports.MsgCreateCertificateResponse = exports.MsgCreateCertificate = exports.CertificateFilter = exports.Certificate = exports.CertificateID = exports.certificate_StateToJSON = exports.certificate_StateFromJSON = exports.Certificate_State = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
var Certificate_State;
(function (Certificate_State) {
    Certificate_State[Certificate_State["invalid"] = 0] = "invalid";
    Certificate_State[Certificate_State["valid"] = 1] = "valid";
    Certificate_State[Certificate_State["revoked"] = 2] = "revoked";
    Certificate_State[Certificate_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Certificate_State || (exports.Certificate_State = Certificate_State = {}));
function certificate_StateFromJSON(object) {
    switch (object) {
        case 0:
        case 'invalid':
            return Certificate_State.invalid;
        case 1:
        case 'valid':
            return Certificate_State.valid;
        case 2:
        case 'revoked':
            return Certificate_State.revoked;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Certificate_State.UNRECOGNIZED;
    }
}
exports.certificate_StateFromJSON = certificate_StateFromJSON;
function certificate_StateToJSON(object) {
    switch (object) {
        case Certificate_State.invalid:
            return 'invalid';
        case Certificate_State.valid:
            return 'valid';
        case Certificate_State.revoked:
            return 'revoked';
        case Certificate_State.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
exports.certificate_StateToJSON = certificate_StateToJSON;
function createBaseCertificateID() {
    return { $type: 'akash.cert.v1beta2.CertificateID', owner: '', serial: '' };
}
exports.CertificateID = {
    $type: 'akash.cert.v1beta2.CertificateID',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== '') {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateID();
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
                    message.serial = reader.string();
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
            $type: exports.CertificateID.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            serial: isSet(object.serial) ? globalThis.String(object.serial) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.serial !== '') {
            obj.serial = message.serial;
        }
        return obj;
    },
    create(base) {
        return exports.CertificateID.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCertificateID();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.serial = (_b = object.serial) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CertificateID.$type, exports.CertificateID);
function createBaseCertificate() {
    return {
        $type: 'akash.cert.v1beta2.Certificate',
        state: 0,
        cert: new Uint8Array(0),
        pubkey: new Uint8Array(0),
    };
}
exports.Certificate = {
    $type: 'akash.cert.v1beta2.Certificate',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.cert.length !== 0) {
            writer.uint32(26).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(34).bytes(message.pubkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
                    message.cert = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.pubkey = reader.bytes();
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
            $type: exports.Certificate.$type,
            state: isSet(object.state) ? certificate_StateFromJSON(object.state) : 0,
            cert: isSet(object.cert)
                ? bytesFromBase64(object.cert)
                : new Uint8Array(0),
            pubkey: isSet(object.pubkey)
                ? bytesFromBase64(object.pubkey)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = certificate_StateToJSON(message.state);
        }
        if (message.cert.length !== 0) {
            obj.cert = base64FromBytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            obj.pubkey = base64FromBytes(message.pubkey);
        }
        return obj;
    },
    create(base) {
        return exports.Certificate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCertificate();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.cert = (_b = object.cert) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.pubkey = (_c = object.pubkey) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Certificate.$type, exports.Certificate);
function createBaseCertificateFilter() {
    return {
        $type: 'akash.cert.v1beta2.CertificateFilter',
        owner: '',
        serial: '',
        state: '',
    };
}
exports.CertificateFilter = {
    $type: 'akash.cert.v1beta2.CertificateFilter',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== '') {
            writer.uint32(18).string(message.serial);
        }
        if (message.state !== '') {
            writer.uint32(26).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateFilter();
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
                    message.serial = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            $type: exports.CertificateFilter.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            serial: isSet(object.serial) ? globalThis.String(object.serial) : '',
            state: isSet(object.state) ? globalThis.String(object.state) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.serial !== '') {
            obj.serial = message.serial;
        }
        if (message.state !== '') {
            obj.state = message.state;
        }
        return obj;
    },
    create(base) {
        return exports.CertificateFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCertificateFilter();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.serial = (_b = object.serial) !== null && _b !== void 0 ? _b : '';
        message.state = (_c = object.state) !== null && _c !== void 0 ? _c : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CertificateFilter.$type, exports.CertificateFilter);
function createBaseMsgCreateCertificate() {
    return {
        $type: 'akash.cert.v1beta2.MsgCreateCertificate',
        owner: '',
        cert: new Uint8Array(0),
        pubkey: new Uint8Array(0),
    };
}
exports.MsgCreateCertificate = {
    $type: 'akash.cert.v1beta2.MsgCreateCertificate',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.cert.length !== 0) {
            writer.uint32(18).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(26).bytes(message.pubkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCertificate();
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
                    message.cert = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.pubkey = reader.bytes();
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
            $type: exports.MsgCreateCertificate.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            cert: isSet(object.cert)
                ? bytesFromBase64(object.cert)
                : new Uint8Array(0),
            pubkey: isSet(object.pubkey)
                ? bytesFromBase64(object.pubkey)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.cert.length !== 0) {
            obj.cert = base64FromBytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            obj.pubkey = base64FromBytes(message.pubkey);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateCertificate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateCertificate();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.cert = (_b = object.cert) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.pubkey = (_c = object.pubkey) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateCertificate.$type, exports.MsgCreateCertificate);
function createBaseMsgCreateCertificateResponse() {
    return { $type: 'akash.cert.v1beta2.MsgCreateCertificateResponse' };
}
exports.MsgCreateCertificateResponse = {
    $type: 'akash.cert.v1beta2.MsgCreateCertificateResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCertificateResponse();
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
        return { $type: exports.MsgCreateCertificateResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCreateCertificateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateCertificateResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateCertificateResponse.$type, exports.MsgCreateCertificateResponse);
function createBaseMsgRevokeCertificate() {
    return { $type: 'akash.cert.v1beta2.MsgRevokeCertificate', id: undefined };
}
exports.MsgRevokeCertificate = {
    $type: 'akash.cert.v1beta2.MsgRevokeCertificate',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = exports.CertificateID.decode(reader, reader.uint32());
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
            $type: exports.MsgRevokeCertificate.$type,
            id: isSet(object.id) ? exports.CertificateID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = exports.CertificateID.toJSON(message.id);
        }
        return obj;
    },
    create(base) {
        return exports.MsgRevokeCertificate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgRevokeCertificate();
        message.id =
            object.id !== undefined && object.id !== null
                ? exports.CertificateID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgRevokeCertificate.$type, exports.MsgRevokeCertificate);
function createBaseMsgRevokeCertificateResponse() {
    return { $type: 'akash.cert.v1beta2.MsgRevokeCertificateResponse' };
}
exports.MsgRevokeCertificateResponse = {
    $type: 'akash.cert.v1beta2.MsgRevokeCertificateResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeCertificateResponse();
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
        return { $type: exports.MsgRevokeCertificateResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgRevokeCertificateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRevokeCertificateResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgRevokeCertificateResponse.$type, exports.MsgRevokeCertificateResponse);
exports.MsgServiceName = 'akash.cert.v1beta2.Msg';
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.MsgServiceName;
        this.rpc = rpc;
        this.CreateCertificate = this.CreateCertificate.bind(this);
        this.RevokeCertificate = this.RevokeCertificate.bind(this);
    }
    CreateCertificate(request) {
        const data = exports.MsgCreateCertificate.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CreateCertificate', data);
        return promise.then((data) => exports.MsgCreateCertificateResponse.decode(minimal_1.default.Reader.create(data)));
    }
    RevokeCertificate(request) {
        const data = exports.MsgRevokeCertificate.encode(request).finish();
        const promise = this.rpc.request(this.service, 'RevokeCertificate', data);
        return promise.then((data) => exports.MsgRevokeCertificateResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString('base64');
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(''));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
