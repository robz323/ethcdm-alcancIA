"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgStartGroupResponse = exports.MsgStartGroup = exports.MsgPauseGroupResponse = exports.MsgPauseGroup = exports.MsgCloseGroupResponse = exports.MsgCloseGroup = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const groupid_1 = require("./groupid");
function createBaseMsgCloseGroup() {
    return { $type: 'akash.deployment.v1beta3.MsgCloseGroup', id: undefined };
}
exports.MsgCloseGroup = {
    $type: 'akash.deployment.v1beta3.MsgCloseGroup',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
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
            $type: exports.MsgCloseGroup.$type,
            id: isSet(object.id) ? groupid_1.GroupID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = groupid_1.GroupID.toJSON(message.id);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCloseGroup.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgCloseGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? groupid_1.GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCloseGroup.$type, exports.MsgCloseGroup);
function createBaseMsgCloseGroupResponse() {
    return { $type: 'akash.deployment.v1beta3.MsgCloseGroupResponse' };
}
exports.MsgCloseGroupResponse = {
    $type: 'akash.deployment.v1beta3.MsgCloseGroupResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseGroupResponse();
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
        return { $type: exports.MsgCloseGroupResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCloseGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCloseGroupResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCloseGroupResponse.$type, exports.MsgCloseGroupResponse);
function createBaseMsgPauseGroup() {
    return { $type: 'akash.deployment.v1beta3.MsgPauseGroup', id: undefined };
}
exports.MsgPauseGroup = {
    $type: 'akash.deployment.v1beta3.MsgPauseGroup',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
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
            $type: exports.MsgPauseGroup.$type,
            id: isSet(object.id) ? groupid_1.GroupID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = groupid_1.GroupID.toJSON(message.id);
        }
        return obj;
    },
    create(base) {
        return exports.MsgPauseGroup.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgPauseGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? groupid_1.GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgPauseGroup.$type, exports.MsgPauseGroup);
function createBaseMsgPauseGroupResponse() {
    return { $type: 'akash.deployment.v1beta3.MsgPauseGroupResponse' };
}
exports.MsgPauseGroupResponse = {
    $type: 'akash.deployment.v1beta3.MsgPauseGroupResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseGroupResponse();
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
        return { $type: exports.MsgPauseGroupResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgPauseGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgPauseGroupResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgPauseGroupResponse.$type, exports.MsgPauseGroupResponse);
function createBaseMsgStartGroup() {
    return { $type: 'akash.deployment.v1beta3.MsgStartGroup', id: undefined };
}
exports.MsgStartGroup = {
    $type: 'akash.deployment.v1beta3.MsgStartGroup',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStartGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
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
            $type: exports.MsgStartGroup.$type,
            id: isSet(object.id) ? groupid_1.GroupID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = groupid_1.GroupID.toJSON(message.id);
        }
        return obj;
    },
    create(base) {
        return exports.MsgStartGroup.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgStartGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? groupid_1.GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgStartGroup.$type, exports.MsgStartGroup);
function createBaseMsgStartGroupResponse() {
    return { $type: 'akash.deployment.v1beta3.MsgStartGroupResponse' };
}
exports.MsgStartGroupResponse = {
    $type: 'akash.deployment.v1beta3.MsgStartGroupResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStartGroupResponse();
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
        return { $type: exports.MsgStartGroupResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgStartGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgStartGroupResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgStartGroupResponse.$type, exports.MsgStartGroupResponse);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
