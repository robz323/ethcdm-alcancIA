"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentFilters = exports.Deployment = exports.DeploymentID = exports.deployment_StateToJSON = exports.deployment_StateFromJSON = exports.Deployment_State = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
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
function createBaseDeploymentID() {
    return {
        $type: 'akash.deployment.v1beta2.DeploymentID',
        owner: '',
        dseq: long_1.default.UZERO,
    };
}
exports.DeploymentID = {
    $type: 'akash.deployment.v1beta2.DeploymentID',
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
        $type: 'akash.deployment.v1beta2.Deployment',
        deploymentId: undefined,
        state: 0,
        version: new Uint8Array(0),
        createdAt: long_1.default.ZERO,
    };
}
exports.Deployment = {
    $type: 'akash.deployment.v1beta2.Deployment',
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
        $type: 'akash.deployment.v1beta2.DeploymentFilters',
        owner: '',
        dseq: long_1.default.UZERO,
        state: '',
    };
}
exports.DeploymentFilters = {
    $type: 'akash.deployment.v1beta2.DeploymentFilters',
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
