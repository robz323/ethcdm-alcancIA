"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisDeployment = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const deployment_1 = require("./deployment");
const group_1 = require("./group");
const params_1 = require("./params");
function createBaseGenesisDeployment() {
    return {
        $type: 'akash.deployment.v1beta2.GenesisDeployment',
        deployment: undefined,
        groups: [],
    };
}
exports.GenesisDeployment = {
    $type: 'akash.deployment.v1beta2.GenesisDeployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deployment !== undefined) {
            deployment_1.Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.deployment = deployment_1.Deployment.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
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
            $type: exports.GenesisDeployment.$type,
            deployment: isSet(object.deployment)
                ? deployment_1.Deployment.fromJSON(object.deployment)
                : undefined,
            groups: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.groups)
                ? object.groups.map((e) => group_1.Group.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.deployment !== undefined) {
            obj.deployment = deployment_1.Deployment.toJSON(message.deployment);
        }
        if ((_a = message.groups) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groups = message.groups.map((e) => group_1.Group.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisDeployment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisDeployment();
        message.deployment =
            object.deployment !== undefined && object.deployment !== null
                ? deployment_1.Deployment.fromPartial(object.deployment)
                : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => group_1.Group.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenesisDeployment.$type, exports.GenesisDeployment);
function createBaseGenesisState() {
    return {
        $type: 'akash.deployment.v1beta2.GenesisState',
        deployments: [],
        params: undefined,
    };
}
exports.GenesisState = {
    $type: 'akash.deployment.v1beta2.GenesisState',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.deployments) {
            exports.GenesisDeployment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.deployments.push(exports.GenesisDeployment.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            deployments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.deployments)
                ? object.deployments.map((e) => exports.GenesisDeployment.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.deployments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.deployments = message.deployments.map((e) => exports.GenesisDeployment.toJSON(e));
        }
        if (message.params !== undefined) {
            obj.params = params_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.deployments =
            ((_a = object.deployments) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GenesisDeployment.fromPartial(e))) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
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
