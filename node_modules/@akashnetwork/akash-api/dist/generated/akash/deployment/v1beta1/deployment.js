"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.DeploymentFilters = exports.Deployment = exports.DeploymentID = exports.MsgCloseDeploymentResponse = exports.MsgCloseDeployment = exports.MsgUpdateDeploymentResponse = exports.MsgUpdateDeployment = exports.MsgDepositDeploymentResponse = exports.MsgDepositDeployment = exports.MsgCreateDeploymentResponse = exports.MsgCreateDeployment = exports.deployment_StateToJSON = exports.deployment_StateFromJSON = exports.Deployment_State = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const typeRegistry_1 = require("../../../typeRegistry");
const group_1 = require("./group");
var Deployment_State;
(function (Deployment_State) {
    Deployment_State[Deployment_State["invalid"] = 0] = "invalid";
    Deployment_State[Deployment_State["active"] = 1] = "active";
    Deployment_State[Deployment_State["closed"] = 2] = "closed";
    Deployment_State[Deployment_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Deployment_State || (exports.Deployment_State = Deployment_State = {}));
function deployment_StateFromJSON(object) {
    switch (object) {
        case 0:
        case 'invalid':
            return Deployment_State.invalid;
        case 1:
        case 'active':
            return Deployment_State.active;
        case 2:
        case 'closed':
            return Deployment_State.closed;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Deployment_State.UNRECOGNIZED;
    }
}
exports.deployment_StateFromJSON = deployment_StateFromJSON;
function deployment_StateToJSON(object) {
    switch (object) {
        case Deployment_State.invalid:
            return 'invalid';
        case Deployment_State.active:
            return 'active';
        case Deployment_State.closed:
            return 'closed';
        case Deployment_State.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
exports.deployment_StateToJSON = deployment_StateToJSON;
function createBaseMsgCreateDeployment() {
    return {
        $type: 'akash.deployment.v1beta1.MsgCreateDeployment',
        id: undefined,
        groups: [],
        version: new Uint8Array(0),
        deposit: undefined,
    };
}
exports.MsgCreateDeployment = {
    $type: 'akash.deployment.v1beta1.MsgCreateDeployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groups.push(group_1.GroupSpec.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.version = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
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
            $type: exports.MsgCreateDeployment.$type,
            id: isSet(object.id) ? exports.DeploymentID.fromJSON(object.id) : undefined,
            groups: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.groups)
                ? object.groups.map((e) => group_1.GroupSpec.fromJSON(e))
                : [],
            version: isSet(object.version)
                ? bytesFromBase64(object.version)
                : new Uint8Array(0),
            deposit: isSet(object.deposit)
                ? coin_1.Coin.fromJSON(object.deposit)
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== undefined) {
            obj.id = exports.DeploymentID.toJSON(message.id);
        }
        if ((_a = message.groups) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groups = message.groups.map((e) => group_1.GroupSpec.toJSON(e));
        }
        if (message.version.length !== 0) {
            obj.version = base64FromBytes(message.version);
        }
        if (message.deposit !== undefined) {
            obj.deposit = coin_1.Coin.toJSON(message.deposit);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateDeployment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCreateDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? exports.DeploymentID.fromPartial(object.id)
                : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => group_1.GroupSpec.fromPartial(e))) || [];
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? coin_1.Coin.fromPartial(object.deposit)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateDeployment.$type, exports.MsgCreateDeployment);
function createBaseMsgCreateDeploymentResponse() {
    return { $type: 'akash.deployment.v1beta1.MsgCreateDeploymentResponse' };
}
exports.MsgCreateDeploymentResponse = {
    $type: 'akash.deployment.v1beta1.MsgCreateDeploymentResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDeploymentResponse();
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
        return { $type: exports.MsgCreateDeploymentResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCreateDeploymentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateDeploymentResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateDeploymentResponse.$type, exports.MsgCreateDeploymentResponse);
function createBaseMsgDepositDeployment() {
    return {
        $type: 'akash.deployment.v1beta1.MsgDepositDeployment',
        id: undefined,
        amount: undefined,
    };
}
exports.MsgDepositDeployment = {
    $type: 'akash.deployment.v1beta1.MsgDepositDeployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            $type: exports.MsgDepositDeployment.$type,
            id: isSet(object.id) ? exports.DeploymentID.fromJSON(object.id) : undefined,
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = exports.DeploymentID.toJSON(message.id);
        }
        if (message.amount !== undefined) {
            obj.amount = coin_1.Coin.toJSON(message.amount);
        }
        return obj;
    },
    create(base) {
        return exports.MsgDepositDeployment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgDepositDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? exports.DeploymentID.fromPartial(object.id)
                : undefined;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgDepositDeployment.$type, exports.MsgDepositDeployment);
function createBaseMsgDepositDeploymentResponse() {
    return { $type: 'akash.deployment.v1beta1.MsgDepositDeploymentResponse' };
}
exports.MsgDepositDeploymentResponse = {
    $type: 'akash.deployment.v1beta1.MsgDepositDeploymentResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositDeploymentResponse();
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
        return { $type: exports.MsgDepositDeploymentResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgDepositDeploymentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDepositDeploymentResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgDepositDeploymentResponse.$type, exports.MsgDepositDeploymentResponse);
function createBaseMsgUpdateDeployment() {
    return {
        $type: 'akash.deployment.v1beta1.MsgUpdateDeployment',
        id: undefined,
        groups: [],
        version: new Uint8Array(0),
    };
}
exports.MsgUpdateDeployment = {
    $type: 'akash.deployment.v1beta1.MsgUpdateDeployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groups.push(group_1.GroupSpec.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.version = reader.bytes();
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
            $type: exports.MsgUpdateDeployment.$type,
            id: isSet(object.id) ? exports.DeploymentID.fromJSON(object.id) : undefined,
            groups: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.groups)
                ? object.groups.map((e) => group_1.GroupSpec.fromJSON(e))
                : [],
            version: isSet(object.version)
                ? bytesFromBase64(object.version)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== undefined) {
            obj.id = exports.DeploymentID.toJSON(message.id);
        }
        if ((_a = message.groups) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groups = message.groups.map((e) => group_1.GroupSpec.toJSON(e));
        }
        if (message.version.length !== 0) {
            obj.version = base64FromBytes(message.version);
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateDeployment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? exports.DeploymentID.fromPartial(object.id)
                : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => group_1.GroupSpec.fromPartial(e))) || [];
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgUpdateDeployment.$type, exports.MsgUpdateDeployment);
function createBaseMsgUpdateDeploymentResponse() {
    return { $type: 'akash.deployment.v1beta1.MsgUpdateDeploymentResponse' };
}
exports.MsgUpdateDeploymentResponse = {
    $type: 'akash.deployment.v1beta1.MsgUpdateDeploymentResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDeploymentResponse();
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
        return { $type: exports.MsgUpdateDeploymentResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateDeploymentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateDeploymentResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgUpdateDeploymentResponse.$type, exports.MsgUpdateDeploymentResponse);
function createBaseMsgCloseDeployment() {
    return {
        $type: 'akash.deployment.v1beta1.MsgCloseDeployment',
        id: undefined,
    };
}
exports.MsgCloseDeployment = {
    $type: 'akash.deployment.v1beta1.MsgCloseDeployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
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
            $type: exports.MsgCloseDeployment.$type,
            id: isSet(object.id) ? exports.DeploymentID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = exports.DeploymentID.toJSON(message.id);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCloseDeployment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgCloseDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? exports.DeploymentID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCloseDeployment.$type, exports.MsgCloseDeployment);
function createBaseMsgCloseDeploymentResponse() {
    return { $type: 'akash.deployment.v1beta1.MsgCloseDeploymentResponse' };
}
exports.MsgCloseDeploymentResponse = {
    $type: 'akash.deployment.v1beta1.MsgCloseDeploymentResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseDeploymentResponse();
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
        return { $type: exports.MsgCloseDeploymentResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCloseDeploymentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCloseDeploymentResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCloseDeploymentResponse.$type, exports.MsgCloseDeploymentResponse);
function createBaseDeploymentID() {
    return {
        $type: 'akash.deployment.v1beta1.DeploymentID',
        owner: '',
        dseq: long_1.default.UZERO,
    };
}
exports.DeploymentID = {
    $type: 'akash.deployment.v1beta1.DeploymentID',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            writer.uint32(16).uint64(message.dseq);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeploymentID();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.dseq = reader.uint64();
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
            $type: exports.DeploymentID.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            dseq: isSet(object.dseq) ? long_1.default.fromValue(object.dseq) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            obj.dseq = (message.dseq || long_1.default.UZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.DeploymentID.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeploymentID();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.dseq =
            object.dseq !== undefined && object.dseq !== null
                ? long_1.default.fromValue(object.dseq)
                : long_1.default.UZERO;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeploymentID.$type, exports.DeploymentID);
function createBaseDeployment() {
    return {
        $type: 'akash.deployment.v1beta1.Deployment',
        deploymentId: undefined,
        state: 0,
        version: new Uint8Array(0),
        createdAt: long_1.default.ZERO,
    };
}
exports.Deployment = {
    $type: 'akash.deployment.v1beta1.Deployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deploymentId !== undefined) {
            exports.DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (!message.createdAt.equals(long_1.default.ZERO)) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.deploymentId = exports.DeploymentID.decode(reader, reader.uint32());
                    continue;
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
                    message.version = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.createdAt = reader.int64();
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
            $type: exports.Deployment.$type,
            deploymentId: isSet(object.deploymentId)
                ? exports.DeploymentID.fromJSON(object.deploymentId)
                : undefined,
            state: isSet(object.state) ? deployment_StateFromJSON(object.state) : 0,
            version: isSet(object.version)
                ? bytesFromBase64(object.version)
                : new Uint8Array(0),
            createdAt: isSet(object.createdAt)
                ? long_1.default.fromValue(object.createdAt)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deploymentId !== undefined) {
            obj.deploymentId = exports.DeploymentID.toJSON(message.deploymentId);
        }
        if (message.state !== 0) {
            obj.state = deployment_StateToJSON(message.state);
        }
        if (message.version.length !== 0) {
            obj.version = base64FromBytes(message.version);
        }
        if (!message.createdAt.equals(long_1.default.ZERO)) {
            obj.createdAt = (message.createdAt || long_1.default.ZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.Deployment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeployment();
        message.deploymentId =
            object.deploymentId !== undefined && object.deploymentId !== null
                ? exports.DeploymentID.fromPartial(object.deploymentId)
                : undefined;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? long_1.default.fromValue(object.createdAt)
                : long_1.default.ZERO;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Deployment.$type, exports.Deployment);
function createBaseDeploymentFilters() {
    return {
        $type: 'akash.deployment.v1beta1.DeploymentFilters',
        owner: '',
        dseq: long_1.default.UZERO,
        state: '',
    };
}
exports.DeploymentFilters = {
    $type: 'akash.deployment.v1beta1.DeploymentFilters',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.state !== '') {
            writer.uint32(26).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeploymentFilters();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.dseq = reader.uint64();
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
            $type: exports.DeploymentFilters.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            dseq: isSet(object.dseq) ? long_1.default.fromValue(object.dseq) : long_1.default.UZERO,
            state: isSet(object.state) ? globalThis.String(object.state) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            obj.dseq = (message.dseq || long_1.default.UZERO).toString();
        }
        if (message.state !== '') {
            obj.state = message.state;
        }
        return obj;
    },
    create(base) {
        return exports.DeploymentFilters.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeploymentFilters();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.dseq =
            object.dseq !== undefined && object.dseq !== null
                ? long_1.default.fromValue(object.dseq)
                : long_1.default.UZERO;
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeploymentFilters.$type, exports.DeploymentFilters);
exports.MsgServiceName = 'akash.deployment.v1beta1.Msg';
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.MsgServiceName;
        this.rpc = rpc;
        this.CreateDeployment = this.CreateDeployment.bind(this);
        this.DepositDeployment = this.DepositDeployment.bind(this);
        this.UpdateDeployment = this.UpdateDeployment.bind(this);
        this.CloseDeployment = this.CloseDeployment.bind(this);
        this.CloseGroup = this.CloseGroup.bind(this);
        this.PauseGroup = this.PauseGroup.bind(this);
        this.StartGroup = this.StartGroup.bind(this);
    }
    CreateDeployment(request) {
        const data = exports.MsgCreateDeployment.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CreateDeployment', data);
        return promise.then((data) => exports.MsgCreateDeploymentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DepositDeployment(request) {
        const data = exports.MsgDepositDeployment.encode(request).finish();
        const promise = this.rpc.request(this.service, 'DepositDeployment', data);
        return promise.then((data) => exports.MsgDepositDeploymentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateDeployment(request) {
        const data = exports.MsgUpdateDeployment.encode(request).finish();
        const promise = this.rpc.request(this.service, 'UpdateDeployment', data);
        return promise.then((data) => exports.MsgUpdateDeploymentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CloseDeployment(request) {
        const data = exports.MsgCloseDeployment.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CloseDeployment', data);
        return promise.then((data) => exports.MsgCloseDeploymentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CloseGroup(request) {
        const data = group_1.MsgCloseGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CloseGroup', data);
        return promise.then((data) => group_1.MsgCloseGroupResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PauseGroup(request) {
        const data = group_1.MsgPauseGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PauseGroup', data);
        return promise.then((data) => group_1.MsgPauseGroupResponse.decode(minimal_1.default.Reader.create(data)));
    }
    StartGroup(request) {
        const data = group_1.MsgStartGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, 'StartGroup', data);
        return promise.then((data) => group_1.MsgStartGroupResponse.decode(minimal_1.default.Reader.create(data)));
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
