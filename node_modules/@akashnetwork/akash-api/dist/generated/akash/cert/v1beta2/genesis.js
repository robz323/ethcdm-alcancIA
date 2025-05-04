"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisCertificate = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const cert_1 = require("./cert");
function createBaseGenesisCertificate() {
    return {
        $type: 'akash.cert.v1beta2.GenesisCertificate',
        owner: '',
        certificate: undefined,
    };
}
exports.GenesisCertificate = {
    $type: 'akash.cert.v1beta2.GenesisCertificate',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.certificate !== undefined) {
            cert_1.Certificate.encode(message.certificate, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisCertificate();
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
                    message.certificate = cert_1.Certificate.decode(reader, reader.uint32());
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
            $type: exports.GenesisCertificate.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            certificate: isSet(object.certificate)
                ? cert_1.Certificate.fromJSON(object.certificate)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (message.certificate !== undefined) {
            obj.certificate = cert_1.Certificate.toJSON(message.certificate);
        }
        return obj;
    },
    create(base) {
        return exports.GenesisCertificate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisCertificate();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.certificate =
            object.certificate !== undefined && object.certificate !== null
                ? cert_1.Certificate.fromPartial(object.certificate)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenesisCertificate.$type, exports.GenesisCertificate);
function createBaseGenesisState() {
    return { $type: 'akash.cert.v1beta2.GenesisState', certificates: [] };
}
exports.GenesisState = {
    $type: 'akash.cert.v1beta2.GenesisState',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            exports.GenesisCertificate.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.certificates.push(exports.GenesisCertificate.decode(reader, reader.uint32()));
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
            certificates: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.certificates)
                ? object.certificates.map((e) => exports.GenesisCertificate.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.certificates) === null || _a === void 0 ? void 0 : _a.length) {
            obj.certificates = message.certificates.map((e) => exports.GenesisCertificate.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.certificates =
            ((_a = object.certificates) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GenesisCertificate.fromPartial(e))) || [];
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
