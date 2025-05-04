"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaseRPCClient = exports.LeaseRPCService = exports.ServiceStatusResponse = exports.ServiceStatusRequest = exports.ShellRequest = exports.ServiceLogsResponse = exports.ServiceLogs = exports.ServiceLogsRequest = exports.SendManifestResponse = exports.SendManifestRequest = exports.ServiceStatus = exports.ForwarderPortStatus = exports.LeaseIPStatus = exports.LeaseServiceStatus = exports.protobufPackage = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../../typeRegistry");
const group_1 = require("../../../manifest/v2beta2/group");
const lease_1 = require("../../../market/v1beta4/lease");
exports.protobufPackage = 'akash.provider.lease.v1';
function createBaseLeaseServiceStatus() {
    return {
        $type: 'akash.provider.lease.v1.LeaseServiceStatus',
        available: 0,
        total: 0,
        uris: [],
        observedGeneration: long_1.default.ZERO,
        replicas: 0,
        updatedReplicas: 0,
        readyReplicas: 0,
        availableReplicas: 0,
    };
}
exports.LeaseServiceStatus = {
    $type: 'akash.provider.lease.v1.LeaseServiceStatus',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.available !== 0) {
            writer.uint32(8).int32(message.available);
        }
        if (message.total !== 0) {
            writer.uint32(16).int32(message.total);
        }
        for (const v of message.uris) {
            writer.uint32(26).string(v);
        }
        if (!message.observedGeneration.equals(long_1.default.ZERO)) {
            writer.uint32(32).int64(message.observedGeneration);
        }
        if (message.replicas !== 0) {
            writer.uint32(40).int32(message.replicas);
        }
        if (message.updatedReplicas !== 0) {
            writer.uint32(48).int32(message.updatedReplicas);
        }
        if (message.readyReplicas !== 0) {
            writer.uint32(56).int32(message.readyReplicas);
        }
        if (message.availableReplicas !== 0) {
            writer.uint32(64).int32(message.availableReplicas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaseServiceStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.available = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.total = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.uris.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.observedGeneration = reader.int64();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.replicas = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.updatedReplicas = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.readyReplicas = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.availableReplicas = reader.int32();
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
            $type: exports.LeaseServiceStatus.$type,
            available: isSet(object.available)
                ? globalThis.Number(object.available)
                : 0,
            total: isSet(object.total) ? globalThis.Number(object.total) : 0,
            uris: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uris)
                ? object.uris.map((e) => globalThis.String(e))
                : [],
            observedGeneration: isSet(object.observedGeneration)
                ? long_1.default.fromValue(object.observedGeneration)
                : long_1.default.ZERO,
            replicas: isSet(object.replicas) ? globalThis.Number(object.replicas) : 0,
            updatedReplicas: isSet(object.updatedReplicas)
                ? globalThis.Number(object.updatedReplicas)
                : 0,
            readyReplicas: isSet(object.readyReplicas)
                ? globalThis.Number(object.readyReplicas)
                : 0,
            availableReplicas: isSet(object.availableReplicas)
                ? globalThis.Number(object.availableReplicas)
                : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.available !== 0) {
            obj.available = Math.round(message.available);
        }
        if (message.total !== 0) {
            obj.total = Math.round(message.total);
        }
        if ((_a = message.uris) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uris = message.uris;
        }
        if (!message.observedGeneration.equals(long_1.default.ZERO)) {
            obj.observedGeneration = (message.observedGeneration || long_1.default.ZERO).toString();
        }
        if (message.replicas !== 0) {
            obj.replicas = Math.round(message.replicas);
        }
        if (message.updatedReplicas !== 0) {
            obj.updatedReplicas = Math.round(message.updatedReplicas);
        }
        if (message.readyReplicas !== 0) {
            obj.readyReplicas = Math.round(message.readyReplicas);
        }
        if (message.availableReplicas !== 0) {
            obj.availableReplicas = Math.round(message.availableReplicas);
        }
        return obj;
    },
    create(base) {
        return exports.LeaseServiceStatus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseLeaseServiceStatus();
        message.available = (_a = object.available) !== null && _a !== void 0 ? _a : 0;
        message.total = (_b = object.total) !== null && _b !== void 0 ? _b : 0;
        message.uris = ((_c = object.uris) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.observedGeneration =
            object.observedGeneration !== undefined &&
                object.observedGeneration !== null
                ? long_1.default.fromValue(object.observedGeneration)
                : long_1.default.ZERO;
        message.replicas = (_d = object.replicas) !== null && _d !== void 0 ? _d : 0;
        message.updatedReplicas = (_e = object.updatedReplicas) !== null && _e !== void 0 ? _e : 0;
        message.readyReplicas = (_f = object.readyReplicas) !== null && _f !== void 0 ? _f : 0;
        message.availableReplicas = (_g = object.availableReplicas) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LeaseServiceStatus.$type, exports.LeaseServiceStatus);
function createBaseLeaseIPStatus() {
    return {
        $type: 'akash.provider.lease.v1.LeaseIPStatus',
        port: 0,
        externalPort: 0,
        protocol: '',
        ip: '',
    };
}
exports.LeaseIPStatus = {
    $type: 'akash.provider.lease.v1.LeaseIPStatus',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).uint32(message.port);
        }
        if (message.externalPort !== 0) {
            writer.uint32(16).uint32(message.externalPort);
        }
        if (message.protocol !== '') {
            writer.uint32(26).string(message.protocol);
        }
        if (message.ip !== '') {
            writer.uint32(34).string(message.ip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaseIPStatus();
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
                    message.protocol = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ip = reader.string();
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
            $type: exports.LeaseIPStatus.$type,
            port: isSet(object.port) ? globalThis.Number(object.port) : 0,
            externalPort: isSet(object.externalPort)
                ? globalThis.Number(object.externalPort)
                : 0,
            protocol: isSet(object.protocol)
                ? globalThis.String(object.protocol)
                : '',
            ip: isSet(object.ip) ? globalThis.String(object.ip) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.port !== 0) {
            obj.port = Math.round(message.port);
        }
        if (message.externalPort !== 0) {
            obj.externalPort = Math.round(message.externalPort);
        }
        if (message.protocol !== '') {
            obj.protocol = message.protocol;
        }
        if (message.ip !== '') {
            obj.ip = message.ip;
        }
        return obj;
    },
    create(base) {
        return exports.LeaseIPStatus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLeaseIPStatus();
        message.port = (_a = object.port) !== null && _a !== void 0 ? _a : 0;
        message.externalPort = (_b = object.externalPort) !== null && _b !== void 0 ? _b : 0;
        message.protocol = (_c = object.protocol) !== null && _c !== void 0 ? _c : '';
        message.ip = (_d = object.ip) !== null && _d !== void 0 ? _d : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LeaseIPStatus.$type, exports.LeaseIPStatus);
function createBaseForwarderPortStatus() {
    return {
        $type: 'akash.provider.lease.v1.ForwarderPortStatus',
        host: '',
        port: 0,
        externalPort: 0,
        proto: '',
        name: '',
    };
}
exports.ForwarderPortStatus = {
    $type: 'akash.provider.lease.v1.ForwarderPortStatus',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(16).uint32(message.port);
        }
        if (message.externalPort !== 0) {
            writer.uint32(24).uint32(message.externalPort);
        }
        if (message.proto !== '') {
            writer.uint32(34).string(message.proto);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseForwarderPortStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.port = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.externalPort = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proto = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.name = reader.string();
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
            $type: exports.ForwarderPortStatus.$type,
            host: isSet(object.host) ? globalThis.String(object.host) : '',
            port: isSet(object.port) ? globalThis.Number(object.port) : 0,
            externalPort: isSet(object.externalPort)
                ? globalThis.Number(object.externalPort)
                : 0,
            proto: isSet(object.proto) ? globalThis.String(object.proto) : '',
            name: isSet(object.name) ? globalThis.String(object.name) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.host !== '') {
            obj.host = message.host;
        }
        if (message.port !== 0) {
            obj.port = Math.round(message.port);
        }
        if (message.externalPort !== 0) {
            obj.externalPort = Math.round(message.externalPort);
        }
        if (message.proto !== '') {
            obj.proto = message.proto;
        }
        if (message.name !== '') {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.ForwarderPortStatus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseForwarderPortStatus();
        message.host = (_a = object.host) !== null && _a !== void 0 ? _a : '';
        message.port = (_b = object.port) !== null && _b !== void 0 ? _b : 0;
        message.externalPort = (_c = object.externalPort) !== null && _c !== void 0 ? _c : 0;
        message.proto = (_d = object.proto) !== null && _d !== void 0 ? _d : '';
        message.name = (_e = object.name) !== null && _e !== void 0 ? _e : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ForwarderPortStatus.$type, exports.ForwarderPortStatus);
function createBaseServiceStatus() {
    return {
        $type: 'akash.provider.lease.v1.ServiceStatus',
        name: '',
        status: undefined,
        ports: [],
        ips: [],
    };
}
exports.ServiceStatus = {
    $type: 'akash.provider.lease.v1.ServiceStatus',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.status !== undefined) {
            exports.LeaseServiceStatus.encode(message.status, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.ports) {
            exports.ForwarderPortStatus.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.ips) {
            exports.LeaseIPStatus.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.status = exports.LeaseServiceStatus.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ports.push(exports.ForwarderPortStatus.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ips.push(exports.LeaseIPStatus.decode(reader, reader.uint32()));
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
            $type: exports.ServiceStatus.$type,
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            status: isSet(object.status)
                ? exports.LeaseServiceStatus.fromJSON(object.status)
                : undefined,
            ports: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.ports)
                ? object.ports.map((e) => exports.ForwarderPortStatus.fromJSON(e))
                : [],
            ips: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.ips)
                ? object.ips.map((e) => exports.LeaseIPStatus.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.status !== undefined) {
            obj.status = exports.LeaseServiceStatus.toJSON(message.status);
        }
        if ((_a = message.ports) === null || _a === void 0 ? void 0 : _a.length) {
            obj.ports = message.ports.map((e) => exports.ForwarderPortStatus.toJSON(e));
        }
        if ((_b = message.ips) === null || _b === void 0 ? void 0 : _b.length) {
            obj.ips = message.ips.map((e) => exports.LeaseIPStatus.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ServiceStatus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseServiceStatus();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? exports.LeaseServiceStatus.fromPartial(object.status)
                : undefined;
        message.ports =
            ((_b = object.ports) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ForwarderPortStatus.fromPartial(e))) || [];
        message.ips = ((_c = object.ips) === null || _c === void 0 ? void 0 : _c.map((e) => exports.LeaseIPStatus.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceStatus.$type, exports.ServiceStatus);
function createBaseSendManifestRequest() {
    return {
        $type: 'akash.provider.lease.v1.SendManifestRequest',
        leaseId: undefined,
        manifest: [],
    };
}
exports.SendManifestRequest = {
    $type: 'akash.provider.lease.v1.SendManifestRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leaseId !== undefined) {
            lease_1.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.manifest) {
            group_1.Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendManifestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leaseId = lease_1.LeaseID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.manifest.push(group_1.Group.decode(reader, reader.uint32()));
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
            $type: exports.SendManifestRequest.$type,
            leaseId: isSet(object.leaseId)
                ? lease_1.LeaseID.fromJSON(object.leaseId)
                : undefined,
            manifest: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.manifest)
                ? object.manifest.map((e) => group_1.Group.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = lease_1.LeaseID.toJSON(message.leaseId);
        }
        if ((_a = message.manifest) === null || _a === void 0 ? void 0 : _a.length) {
            obj.manifest = message.manifest.map((e) => group_1.Group.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SendManifestRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSendManifestRequest();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? lease_1.LeaseID.fromPartial(object.leaseId)
                : undefined;
        message.manifest = ((_a = object.manifest) === null || _a === void 0 ? void 0 : _a.map((e) => group_1.Group.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SendManifestRequest.$type, exports.SendManifestRequest);
function createBaseSendManifestResponse() {
    return { $type: 'akash.provider.lease.v1.SendManifestResponse' };
}
exports.SendManifestResponse = {
    $type: 'akash.provider.lease.v1.SendManifestResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendManifestResponse();
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
        return { $type: exports.SendManifestResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.SendManifestResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseSendManifestResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SendManifestResponse.$type, exports.SendManifestResponse);
function createBaseServiceLogsRequest() {
    return {
        $type: 'akash.provider.lease.v1.ServiceLogsRequest',
        leaseId: undefined,
        services: [],
    };
}
exports.ServiceLogsRequest = {
    $type: 'akash.provider.lease.v1.ServiceLogsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leaseId !== undefined) {
            lease_1.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.services) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceLogsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leaseId = lease_1.LeaseID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.services.push(reader.string());
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
            $type: exports.ServiceLogsRequest.$type,
            leaseId: isSet(object.leaseId)
                ? lease_1.LeaseID.fromJSON(object.leaseId)
                : undefined,
            services: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.services)
                ? object.services.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = lease_1.LeaseID.toJSON(message.leaseId);
        }
        if ((_a = message.services) === null || _a === void 0 ? void 0 : _a.length) {
            obj.services = message.services;
        }
        return obj;
    },
    create(base) {
        return exports.ServiceLogsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseServiceLogsRequest();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? lease_1.LeaseID.fromPartial(object.leaseId)
                : undefined;
        message.services = ((_a = object.services) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceLogsRequest.$type, exports.ServiceLogsRequest);
function createBaseServiceLogs() {
    return {
        $type: 'akash.provider.lease.v1.ServiceLogs',
        name: '',
        logs: new Uint8Array(0),
    };
}
exports.ServiceLogs = {
    $type: 'akash.provider.lease.v1.ServiceLogs',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.logs.length !== 0) {
            writer.uint32(18).bytes(message.logs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceLogs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.logs = reader.bytes();
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
            $type: exports.ServiceLogs.$type,
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            logs: isSet(object.logs)
                ? bytesFromBase64(object.logs)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.logs.length !== 0) {
            obj.logs = base64FromBytes(message.logs);
        }
        return obj;
    },
    create(base) {
        return exports.ServiceLogs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseServiceLogs();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.logs = (_b = object.logs) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceLogs.$type, exports.ServiceLogs);
function createBaseServiceLogsResponse() {
    return { $type: 'akash.provider.lease.v1.ServiceLogsResponse', services: [] };
}
exports.ServiceLogsResponse = {
    $type: 'akash.provider.lease.v1.ServiceLogsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.services) {
            exports.ServiceLogs.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceLogsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.services.push(exports.ServiceLogs.decode(reader, reader.uint32()));
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
            $type: exports.ServiceLogsResponse.$type,
            services: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.services)
                ? object.services.map((e) => exports.ServiceLogs.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.services) === null || _a === void 0 ? void 0 : _a.length) {
            obj.services = message.services.map((e) => exports.ServiceLogs.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ServiceLogsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseServiceLogsResponse();
        message.services =
            ((_a = object.services) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ServiceLogs.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceLogsResponse.$type, exports.ServiceLogsResponse);
function createBaseShellRequest() {
    return { $type: 'akash.provider.lease.v1.ShellRequest', leaseId: undefined };
}
exports.ShellRequest = {
    $type: 'akash.provider.lease.v1.ShellRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leaseId !== undefined) {
            lease_1.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseShellRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leaseId = lease_1.LeaseID.decode(reader, reader.uint32());
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
            $type: exports.ShellRequest.$type,
            leaseId: isSet(object.leaseId)
                ? lease_1.LeaseID.fromJSON(object.leaseId)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = lease_1.LeaseID.toJSON(message.leaseId);
        }
        return obj;
    },
    create(base) {
        return exports.ShellRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseShellRequest();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? lease_1.LeaseID.fromPartial(object.leaseId)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ShellRequest.$type, exports.ShellRequest);
function createBaseServiceStatusRequest() {
    return {
        $type: 'akash.provider.lease.v1.ServiceStatusRequest',
        leaseId: undefined,
        services: [],
    };
}
exports.ServiceStatusRequest = {
    $type: 'akash.provider.lease.v1.ServiceStatusRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leaseId !== undefined) {
            lease_1.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.services) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leaseId = lease_1.LeaseID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.services.push(reader.string());
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
            $type: exports.ServiceStatusRequest.$type,
            leaseId: isSet(object.leaseId)
                ? lease_1.LeaseID.fromJSON(object.leaseId)
                : undefined,
            services: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.services)
                ? object.services.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = lease_1.LeaseID.toJSON(message.leaseId);
        }
        if ((_a = message.services) === null || _a === void 0 ? void 0 : _a.length) {
            obj.services = message.services;
        }
        return obj;
    },
    create(base) {
        return exports.ServiceStatusRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseServiceStatusRequest();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? lease_1.LeaseID.fromPartial(object.leaseId)
                : undefined;
        message.services = ((_a = object.services) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceStatusRequest.$type, exports.ServiceStatusRequest);
function createBaseServiceStatusResponse() {
    return {
        $type: 'akash.provider.lease.v1.ServiceStatusResponse',
        services: [],
    };
}
exports.ServiceStatusResponse = {
    $type: 'akash.provider.lease.v1.ServiceStatusResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.services) {
            exports.ServiceStatus.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.services.push(exports.ServiceStatus.decode(reader, reader.uint32()));
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
            $type: exports.ServiceStatusResponse.$type,
            services: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.services)
                ? object.services.map((e) => exports.ServiceStatus.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.services) === null || _a === void 0 ? void 0 : _a.length) {
            obj.services = message.services.map((e) => exports.ServiceStatus.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ServiceStatusResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseServiceStatusResponse();
        message.services =
            ((_a = object.services) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ServiceStatus.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceStatusResponse.$type, exports.ServiceStatusResponse);
exports.LeaseRPCService = {
    sendManifest: {
        path: '/akash.provider.lease.v1.LeaseRPC/SendManifest',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SendManifestRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SendManifestRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.SendManifestResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.SendManifestResponse.decode(value),
    },
    serviceStatus: {
        path: '/akash.provider.lease.v1.LeaseRPC/ServiceStatus',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ServiceStatusRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ServiceStatusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ServiceStatusResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ServiceStatusResponse.decode(value),
    },
    streamServiceStatus: {
        path: '/akash.provider.lease.v1.LeaseRPC/StreamServiceStatus',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.ServiceStatusRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ServiceStatusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ServiceStatusResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ServiceStatusResponse.decode(value),
    },
    serviceLogs: {
        path: '/akash.provider.lease.v1.LeaseRPC/ServiceLogs',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ServiceLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ServiceLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ServiceLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ServiceLogsResponse.decode(value),
    },
    streamServiceLogs: {
        path: '/akash.provider.lease.v1.LeaseRPC/StreamServiceLogs',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.ServiceLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ServiceLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ServiceLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ServiceLogsResponse.decode(value),
    },
};
exports.LeaseRPCClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LeaseRPCService, 'akash.provider.lease.v1.LeaseRPC');
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
