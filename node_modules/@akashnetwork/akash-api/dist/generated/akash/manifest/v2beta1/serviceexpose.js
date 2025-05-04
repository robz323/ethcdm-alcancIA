"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceExpose = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const httpoptions_1 = require("./httpoptions");
function createBaseServiceExpose() {
    return {
        $type: 'akash.manifest.v2beta1.ServiceExpose',
        port: 0,
        externalPort: 0,
        proto: '',
        service: '',
        global: false,
        hosts: [],
        httpOptions: undefined,
        ip: '',
        endpointSequenceNumber: 0,
    };
}
exports.ServiceExpose = {
    $type: 'akash.manifest.v2beta1.ServiceExpose',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).uint32(message.port);
        }
        if (message.externalPort !== 0) {
            writer.uint32(16).uint32(message.externalPort);
        }
        if (message.proto !== '') {
            writer.uint32(26).string(message.proto);
        }
        if (message.service !== '') {
            writer.uint32(34).string(message.service);
        }
        if (message.global !== false) {
            writer.uint32(40).bool(message.global);
        }
        for (const v of message.hosts) {
            writer.uint32(50).string(v);
        }
        if (message.httpOptions !== undefined) {
            httpoptions_1.ServiceExposeHTTPOptions.encode(message.httpOptions, writer.uint32(58).fork()).ldelim();
        }
        if (message.ip !== '') {
            writer.uint32(66).string(message.ip);
        }
        if (message.endpointSequenceNumber !== 0) {
            writer.uint32(72).uint32(message.endpointSequenceNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceExpose();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.port = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.externalPort = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proto = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.global = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.hosts.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.httpOptions = httpoptions_1.ServiceExposeHTTPOptions.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.ip = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.endpointSequenceNumber = reader.uint32();
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
            $type: exports.ServiceExpose.$type,
            port: isSet(object.port) ? globalThis.Number(object.port) : 0,
            externalPort: isSet(object.externalPort)
                ? globalThis.Number(object.externalPort)
                : 0,
            proto: isSet(object.proto) ? globalThis.String(object.proto) : '',
            service: isSet(object.service) ? globalThis.String(object.service) : '',
            global: isSet(object.global) ? globalThis.Boolean(object.global) : false,
            hosts: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.hosts)
                ? object.hosts.map((e) => globalThis.String(e))
                : [],
            httpOptions: isSet(object.httpOptions)
                ? httpoptions_1.ServiceExposeHTTPOptions.fromJSON(object.httpOptions)
                : undefined,
            ip: isSet(object.ip) ? globalThis.String(object.ip) : '',
            endpointSequenceNumber: isSet(object.endpointSequenceNumber)
                ? globalThis.Number(object.endpointSequenceNumber)
                : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.port !== 0) {
            obj.port = Math.round(message.port);
        }
        if (message.externalPort !== 0) {
            obj.externalPort = Math.round(message.externalPort);
        }
        if (message.proto !== '') {
            obj.proto = message.proto;
        }
        if (message.service !== '') {
            obj.service = message.service;
        }
        if (message.global !== false) {
            obj.global = message.global;
        }
        if ((_a = message.hosts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.hosts = message.hosts;
        }
        if (message.httpOptions !== undefined) {
            obj.httpOptions = httpoptions_1.ServiceExposeHTTPOptions.toJSON(message.httpOptions);
        }
        if (message.ip !== '') {
            obj.ip = message.ip;
        }
        if (message.endpointSequenceNumber !== 0) {
            obj.endpointSequenceNumber = Math.round(message.endpointSequenceNumber);
        }
        return obj;
    },
    create(base) {
        return exports.ServiceExpose.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseServiceExpose();
        message.port = (_a = object.port) !== null && _a !== void 0 ? _a : 0;
        message.externalPort = (_b = object.externalPort) !== null && _b !== void 0 ? _b : 0;
        message.proto = (_c = object.proto) !== null && _c !== void 0 ? _c : '';
        message.service = (_d = object.service) !== null && _d !== void 0 ? _d : '';
        message.global = (_e = object.global) !== null && _e !== void 0 ? _e : false;
        message.hosts = ((_f = object.hosts) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.httpOptions =
            object.httpOptions !== undefined && object.httpOptions !== null
                ? httpoptions_1.ServiceExposeHTTPOptions.fromPartial(object.httpOptions)
                : undefined;
        message.ip = (_g = object.ip) !== null && _g !== void 0 ? _g : '';
        message.endpointSequenceNumber = (_h = object.endpointSequenceNumber) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceExpose.$type, exports.ServiceExpose);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
