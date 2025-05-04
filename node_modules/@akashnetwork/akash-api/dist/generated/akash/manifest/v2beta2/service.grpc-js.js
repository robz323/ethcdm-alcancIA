"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.ServiceImageCredentials = exports.ServiceParams = exports.StorageParams = exports.protobufPackage = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const resources_1 = require("../../base/v1beta3/resources");
const serviceexpose_1 = require("./serviceexpose");
exports.protobufPackage = 'akash.manifest.v2beta2';
function createBaseStorageParams() {
    return {
        $type: 'akash.manifest.v2beta2.StorageParams',
        name: '',
        mount: '',
        readOnly: false,
    };
}
exports.StorageParams = {
    $type: 'akash.manifest.v2beta2.StorageParams',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.mount !== '') {
            writer.uint32(18).string(message.mount);
        }
        if (message.readOnly !== false) {
            writer.uint32(24).bool(message.readOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorageParams();
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
                    message.mount = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.readOnly = reader.bool();
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
            $type: exports.StorageParams.$type,
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            mount: isSet(object.mount) ? globalThis.String(object.mount) : '',
            readOnly: isSet(object.readOnly)
                ? globalThis.Boolean(object.readOnly)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.mount !== '') {
            obj.mount = message.mount;
        }
        if (message.readOnly !== false) {
            obj.readOnly = message.readOnly;
        }
        return obj;
    },
    create(base) {
        return exports.StorageParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStorageParams();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.mount = (_b = object.mount) !== null && _b !== void 0 ? _b : '';
        message.readOnly = (_c = object.readOnly) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StorageParams.$type, exports.StorageParams);
function createBaseServiceParams() {
    return { $type: 'akash.manifest.v2beta2.ServiceParams', storage: [] };
}
exports.ServiceParams = {
    $type: 'akash.manifest.v2beta2.ServiceParams',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.storage) {
            exports.StorageParams.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.storage.push(exports.StorageParams.decode(reader, reader.uint32()));
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
            $type: exports.ServiceParams.$type,
            storage: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.storage)
                ? object.storage.map((e) => exports.StorageParams.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.storage) === null || _a === void 0 ? void 0 : _a.length) {
            obj.storage = message.storage.map((e) => exports.StorageParams.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ServiceParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseServiceParams();
        message.storage =
            ((_a = object.storage) === null || _a === void 0 ? void 0 : _a.map((e) => exports.StorageParams.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceParams.$type, exports.ServiceParams);
function createBaseServiceImageCredentials() {
    return {
        $type: 'akash.manifest.v2beta2.ServiceImageCredentials',
        host: '',
        email: '',
        username: '',
        password: '',
    };
}
exports.ServiceImageCredentials = {
    $type: 'akash.manifest.v2beta2.ServiceImageCredentials',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.email !== '') {
            writer.uint32(18).string(message.email);
        }
        if (message.username !== '') {
            writer.uint32(26).string(message.username);
        }
        if (message.password !== '') {
            writer.uint32(34).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceImageCredentials();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.password = reader.string();
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
            $type: exports.ServiceImageCredentials.$type,
            host: isSet(object.host) ? globalThis.String(object.host) : '',
            email: isSet(object.email) ? globalThis.String(object.email) : '',
            username: isSet(object.username)
                ? globalThis.String(object.username)
                : '',
            password: isSet(object.password)
                ? globalThis.String(object.password)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.host !== '') {
            obj.host = message.host;
        }
        if (message.email !== '') {
            obj.email = message.email;
        }
        if (message.username !== '') {
            obj.username = message.username;
        }
        if (message.password !== '') {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.ServiceImageCredentials.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseServiceImageCredentials();
        message.host = (_a = object.host) !== null && _a !== void 0 ? _a : '';
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : '';
        message.username = (_c = object.username) !== null && _c !== void 0 ? _c : '';
        message.password = (_d = object.password) !== null && _d !== void 0 ? _d : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServiceImageCredentials.$type, exports.ServiceImageCredentials);
function createBaseService() {
    return {
        $type: 'akash.manifest.v2beta2.Service',
        name: '',
        image: '',
        command: [],
        args: [],
        env: [],
        resources: undefined,
        count: 0,
        expose: [],
        params: undefined,
        credentials: undefined,
    };
}
exports.Service = {
    $type: 'akash.manifest.v2beta2.Service',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.image !== '') {
            writer.uint32(18).string(message.image);
        }
        for (const v of message.command) {
            writer.uint32(26).string(v);
        }
        for (const v of message.args) {
            writer.uint32(34).string(v);
        }
        for (const v of message.env) {
            writer.uint32(42).string(v);
        }
        if (message.resources !== undefined) {
            resources_1.Resources.encode(message.resources, writer.uint32(50).fork()).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(56).uint32(message.count);
        }
        for (const v of message.expose) {
            serviceexpose_1.ServiceExpose.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.params !== undefined) {
            exports.ServiceParams.encode(message.params, writer.uint32(74).fork()).ldelim();
        }
        if (message.credentials !== undefined) {
            exports.ServiceImageCredentials.encode(message.credentials, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseService();
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
                    message.image = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.command.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.args.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.env.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.resources = resources_1.Resources.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.count = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.expose.push(serviceexpose_1.ServiceExpose.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.params = exports.ServiceParams.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.credentials = exports.ServiceImageCredentials.decode(reader, reader.uint32());
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
            $type: exports.Service.$type,
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            image: isSet(object.image) ? globalThis.String(object.image) : '',
            command: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.command)
                ? object.command.map((e) => globalThis.String(e))
                : [],
            args: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.args)
                ? object.args.map((e) => globalThis.String(e))
                : [],
            env: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.env)
                ? object.env.map((e) => globalThis.String(e))
                : [],
            resources: isSet(object.resources)
                ? resources_1.Resources.fromJSON(object.resources)
                : undefined,
            count: isSet(object.count) ? globalThis.Number(object.count) : 0,
            expose: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.expose)
                ? object.expose.map((e) => serviceexpose_1.ServiceExpose.fromJSON(e))
                : [],
            params: isSet(object.params)
                ? exports.ServiceParams.fromJSON(object.params)
                : undefined,
            credentials: isSet(object.credentials)
                ? exports.ServiceImageCredentials.fromJSON(object.credentials)
                : undefined,
        };
    },
    toJSON(message) {
        var _a, _b, _c, _d;
        const obj = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.image !== '') {
            obj.image = message.image;
        }
        if ((_a = message.command) === null || _a === void 0 ? void 0 : _a.length) {
            obj.command = message.command;
        }
        if ((_b = message.args) === null || _b === void 0 ? void 0 : _b.length) {
            obj.args = message.args;
        }
        if ((_c = message.env) === null || _c === void 0 ? void 0 : _c.length) {
            obj.env = message.env;
        }
        if (message.resources !== undefined) {
            obj.resources = resources_1.Resources.toJSON(message.resources);
        }
        if (message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        if ((_d = message.expose) === null || _d === void 0 ? void 0 : _d.length) {
            obj.expose = message.expose.map((e) => serviceexpose_1.ServiceExpose.toJSON(e));
        }
        if (message.params !== undefined) {
            obj.params = exports.ServiceParams.toJSON(message.params);
        }
        if (message.credentials !== undefined) {
            obj.credentials = exports.ServiceImageCredentials.toJSON(message.credentials);
        }
        return obj;
    },
    create(base) {
        return exports.Service.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseService();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.image = (_b = object.image) !== null && _b !== void 0 ? _b : '';
        message.command = ((_c = object.command) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.args = ((_d = object.args) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.env = ((_e = object.env) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? resources_1.Resources.fromPartial(object.resources)
                : undefined;
        message.count = (_f = object.count) !== null && _f !== void 0 ? _f : 0;
        message.expose =
            ((_g = object.expose) === null || _g === void 0 ? void 0 : _g.map((e) => serviceexpose_1.ServiceExpose.fromPartial(e))) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? exports.ServiceParams.fromPartial(object.params)
                : undefined;
        message.credentials =
            object.credentials !== undefined && object.credentials !== null
                ? exports.ServiceImageCredentials.fromPartial(object.credentials)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Service.$type, exports.Service);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
