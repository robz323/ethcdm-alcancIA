"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCloseDeploymentResponse = exports.MsgCloseDeployment = exports.MsgUpdateDeploymentResponse = exports.MsgUpdateDeployment = exports.MsgDepositDeploymentResponse = exports.MsgDepositDeployment = exports.MsgCreateDeploymentResponse = exports.MsgCreateDeployment = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const typeRegistry_1 = require("../../../typeRegistry");
const deployment_1 = require("./deployment");
const groupspec_1 = require("./groupspec");
function createBaseMsgCreateDeployment() {
    return {
        $type: 'akash.deployment.v1beta2.MsgCreateDeployment',
        id: undefined,
        groups: [],
        version: new Uint8Array(0),
        deposit: undefined,
        depositor: '',
    };
}
exports.MsgCreateDeployment = {
    $type: 'akash.deployment.v1beta2.MsgCreateDeployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            groupspec_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositor !== '') {
            writer.uint32(42).string(message.depositor);
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
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groups.push(groupspec_1.GroupSpec.decode(reader, reader.uint32()));
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
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.depositor = reader.string();
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
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
            groups: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.groups)
                ? object.groups.map((e) => groupspec_1.GroupSpec.fromJSON(e))
                : [],
            version: isSet(object.version)
                ? bytesFromBase64(object.version)
                : new Uint8Array(0),
            deposit: isSet(object.deposit)
                ? coin_1.Coin.fromJSON(object.deposit)
                : undefined,
            depositor: isSet(object.depositor)
                ? globalThis.String(object.depositor)
                : '',
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== undefined) {
            obj.id = deployment_1.DeploymentID.toJSON(message.id);
        }
        if ((_a = message.groups) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groups = message.groups.map((e) => groupspec_1.GroupSpec.toJSON(e));
        }
        if (message.version.length !== 0) {
            obj.version = base64FromBytes(message.version);
        }
        if (message.deposit !== undefined) {
            obj.deposit = coin_1.Coin.toJSON(message.deposit);
        }
        if (message.depositor !== '') {
            obj.depositor = message.depositor;
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateDeployment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => groupspec_1.GroupSpec.fromPartial(e))) || [];
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? coin_1.Coin.fromPartial(object.deposit)
                : undefined;
        message.depositor = (_c = object.depositor) !== null && _c !== void 0 ? _c : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateDeployment.$type, exports.MsgCreateDeployment);
function createBaseMsgCreateDeploymentResponse() {
    return { $type: 'akash.deployment.v1beta2.MsgCreateDeploymentResponse' };
}
exports.MsgCreateDeploymentResponse = {
    $type: 'akash.deployment.v1beta2.MsgCreateDeploymentResponse',
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
        $type: 'akash.deployment.v1beta2.MsgDepositDeployment',
        id: undefined,
        amount: undefined,
        depositor: '',
    };
}
exports.MsgDepositDeployment = {
    $type: 'akash.deployment.v1beta2.MsgDepositDeployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositor !== '') {
            writer.uint32(26).string(message.depositor);
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
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.depositor = reader.string();
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
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            depositor: isSet(object.depositor)
                ? globalThis.String(object.depositor)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = deployment_1.DeploymentID.toJSON(message.id);
        }
        if (message.amount !== undefined) {
            obj.amount = coin_1.Coin.toJSON(message.amount);
        }
        if (message.depositor !== '') {
            obj.depositor = message.depositor;
        }
        return obj;
    },
    create(base) {
        return exports.MsgDepositDeployment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDepositDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgDepositDeployment.$type, exports.MsgDepositDeployment);
function createBaseMsgDepositDeploymentResponse() {
    return { $type: 'akash.deployment.v1beta2.MsgDepositDeploymentResponse' };
}
exports.MsgDepositDeploymentResponse = {
    $type: 'akash.deployment.v1beta2.MsgDepositDeploymentResponse',
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
        $type: 'akash.deployment.v1beta2.MsgUpdateDeployment',
        id: undefined,
        version: new Uint8Array(0),
    };
}
exports.MsgUpdateDeployment = {
    $type: 'akash.deployment.v1beta2.MsgUpdateDeployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
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
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
            version: isSet(object.version)
                ? bytesFromBase64(object.version)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = deployment_1.DeploymentID.toJSON(message.id);
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
        var _a;
        const message = createBaseMsgUpdateDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgUpdateDeployment.$type, exports.MsgUpdateDeployment);
function createBaseMsgUpdateDeploymentResponse() {
    return { $type: 'akash.deployment.v1beta2.MsgUpdateDeploymentResponse' };
}
exports.MsgUpdateDeploymentResponse = {
    $type: 'akash.deployment.v1beta2.MsgUpdateDeploymentResponse',
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
        $type: 'akash.deployment.v1beta2.MsgCloseDeployment',
        id: undefined,
    };
}
exports.MsgCloseDeployment = {
    $type: 'akash.deployment.v1beta2.MsgCloseDeployment',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
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
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = deployment_1.DeploymentID.toJSON(message.id);
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
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCloseDeployment.$type, exports.MsgCloseDeployment);
function createBaseMsgCloseDeploymentResponse() {
    return { $type: 'akash.deployment.v1beta2.MsgCloseDeploymentResponse' };
}
exports.MsgCloseDeploymentResponse = {
    $type: 'akash.deployment.v1beta2.MsgCloseDeploymentResponse',
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
