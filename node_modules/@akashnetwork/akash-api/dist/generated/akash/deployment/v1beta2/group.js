"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.group_StateToJSON = exports.group_StateFromJSON = exports.Group_State = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const groupid_1 = require("./groupid");
const groupspec_1 = require("./groupspec");
var Group_State;
(function (Group_State) {
    Group_State[Group_State["invalid"] = 0] = "invalid";
    Group_State[Group_State["open"] = 1] = "open";
    Group_State[Group_State["paused"] = 2] = "paused";
    Group_State[Group_State["insufficient_funds"] = 3] = "insufficient_funds";
    Group_State[Group_State["closed"] = 4] = "closed";
    Group_State[Group_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Group_State || (exports.Group_State = Group_State = {}));
function group_StateFromJSON(object) {
    switch (object) {
        case 0:
        case 'invalid':
            return Group_State.invalid;
        case 1:
        case 'open':
            return Group_State.open;
        case 2:
        case 'paused':
            return Group_State.paused;
        case 3:
        case 'insufficient_funds':
            return Group_State.insufficient_funds;
        case 4:
        case 'closed':
            return Group_State.closed;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Group_State.UNRECOGNIZED;
    }
}
exports.group_StateFromJSON = group_StateFromJSON;
function group_StateToJSON(object) {
    switch (object) {
        case Group_State.invalid:
            return 'invalid';
        case Group_State.open:
            return 'open';
        case Group_State.paused:
            return 'paused';
        case Group_State.insufficient_funds:
            return 'insufficient_funds';
        case Group_State.closed:
            return 'closed';
        case Group_State.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
exports.group_StateToJSON = group_StateToJSON;
function createBaseGroup() {
    return {
        $type: 'akash.deployment.v1beta2.Group',
        groupId: undefined,
        state: 0,
        groupSpec: undefined,
        createdAt: long_1.default.ZERO,
    };
}
exports.Group = {
    $type: 'akash.deployment.v1beta2.Group',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== undefined) {
            groupid_1.GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.groupSpec !== undefined) {
            groupspec_1.GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
        }
        if (!message.createdAt.equals(long_1.default.ZERO)) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.groupId = groupid_1.GroupID.decode(reader, reader.uint32());
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
                    message.groupSpec = groupspec_1.GroupSpec.decode(reader, reader.uint32());
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
            $type: exports.Group.$type,
            groupId: isSet(object.groupId)
                ? groupid_1.GroupID.fromJSON(object.groupId)
                : undefined,
            state: isSet(object.state) ? group_StateFromJSON(object.state) : 0,
            groupSpec: isSet(object.groupSpec)
                ? groupspec_1.GroupSpec.fromJSON(object.groupSpec)
                : undefined,
            createdAt: isSet(object.createdAt)
                ? long_1.default.fromValue(object.createdAt)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupId !== undefined) {
            obj.groupId = groupid_1.GroupID.toJSON(message.groupId);
        }
        if (message.state !== 0) {
            obj.state = group_StateToJSON(message.state);
        }
        if (message.groupSpec !== undefined) {
            obj.groupSpec = groupspec_1.GroupSpec.toJSON(message.groupSpec);
        }
        if (!message.createdAt.equals(long_1.default.ZERO)) {
            obj.createdAt = (message.createdAt || long_1.default.ZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.Group.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGroup();
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? groupid_1.GroupID.fromPartial(object.groupId)
                : undefined;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.groupSpec =
            object.groupSpec !== undefined && object.groupSpec !== null
                ? groupspec_1.GroupSpec.fromPartial(object.groupSpec)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? long_1.default.fromValue(object.createdAt)
                : long_1.default.ZERO;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Group.$type, exports.Group);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
