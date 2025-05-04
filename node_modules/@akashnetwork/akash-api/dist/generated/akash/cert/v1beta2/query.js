"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryCertificatesResponse = exports.QueryCertificatesRequest = exports.CertificateResponse = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const typeRegistry_1 = require("../../../typeRegistry");
const cert_1 = require("./cert");
function createBaseCertificateResponse() {
    return {
        $type: 'akash.cert.v1beta2.CertificateResponse',
        certificate: undefined,
        serial: '',
    };
}
exports.CertificateResponse = {
    $type: 'akash.cert.v1beta2.CertificateResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificate !== undefined) {
            cert_1.Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
        }
        if (message.serial !== '') {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.certificate = cert_1.Certificate.decode(reader, reader.uint32());
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
            $type: exports.CertificateResponse.$type,
            certificate: isSet(object.certificate)
                ? cert_1.Certificate.fromJSON(object.certificate)
                : undefined,
            serial: isSet(object.serial) ? globalThis.String(object.serial) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.certificate !== undefined) {
            obj.certificate = cert_1.Certificate.toJSON(message.certificate);
        }
        if (message.serial !== '') {
            obj.serial = message.serial;
        }
        return obj;
    },
    create(base) {
        return exports.CertificateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCertificateResponse();
        message.certificate =
            object.certificate !== undefined && object.certificate !== null
                ? cert_1.Certificate.fromPartial(object.certificate)
                : undefined;
        message.serial = (_a = object.serial) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CertificateResponse.$type, exports.CertificateResponse);
function createBaseQueryCertificatesRequest() {
    return {
        $type: 'akash.cert.v1beta2.QueryCertificatesRequest',
        filter: undefined,
        pagination: undefined,
    };
}
exports.QueryCertificatesRequest = {
    $type: 'akash.cert.v1beta2.QueryCertificatesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filter !== undefined) {
            cert_1.CertificateFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCertificatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = cert_1.CertificateFilter.decode(reader, reader.uint32());
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
            $type: exports.QueryCertificatesRequest.$type,
            filter: isSet(object.filter)
                ? cert_1.CertificateFilter.fromJSON(object.filter)
                : undefined,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = cert_1.CertificateFilter.toJSON(message.filter);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryCertificatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryCertificatesRequest();
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? cert_1.CertificateFilter.fromPartial(object.filter)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryCertificatesRequest.$type, exports.QueryCertificatesRequest);
function createBaseQueryCertificatesResponse() {
    return {
        $type: 'akash.cert.v1beta2.QueryCertificatesResponse',
        certificates: [],
        pagination: undefined,
    };
}
exports.QueryCertificatesResponse = {
    $type: 'akash.cert.v1beta2.QueryCertificatesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            exports.CertificateResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCertificatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.certificates.push(exports.CertificateResponse.decode(reader, reader.uint32()));
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
            $type: exports.QueryCertificatesResponse.$type,
            certificates: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.certificates)
                ? object.certificates.map((e) => exports.CertificateResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.certificates) === null || _a === void 0 ? void 0 : _a.length) {
            obj.certificates = message.certificates.map((e) => exports.CertificateResponse.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryCertificatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCertificatesResponse();
        message.certificates =
            ((_a = object.certificates) === null || _a === void 0 ? void 0 : _a.map((e) => exports.CertificateResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryCertificatesResponse.$type, exports.QueryCertificatesResponse);
exports.QueryServiceName = 'akash.cert.v1beta2.Query';
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.QueryServiceName;
        this.rpc = rpc;
        this.Certificates = this.Certificates.bind(this);
    }
    Certificates(request) {
        const data = exports.QueryCertificatesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Certificates', data);
        return promise.then((data) => exports.QueryCertificatesResponse.decode(minimal_1.default.Reader.create(data)));
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
