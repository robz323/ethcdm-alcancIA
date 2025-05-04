"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSpec = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const attribute_1 = require("../../base/v1beta2/attribute");
const resource_1 = require("./resource");
function createBaseGroupSpec() {
    return {
        $type: 'akash.deployment.v1beta2.GroupSpec',
        name: '',
        requirements: undefined,
        resources: [],
    };
}
exports.GroupSpec = {
    $type: 'akash.deployment.v1beta2.GroupSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.requirements !== undefined) {
            attribute_1.PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.resources) {
            resource_1.Resource.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupSpec();
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
                    message.requirements = attribute_1.PlacementRequirements.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.resources.push(resource_1.Resource.decode(reader, reader.uint32()));
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
            $type: exports.GroupSpec.$type,
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            requirements: isSet(object.requirements)
                ? attribute_1.PlacementRequirements.fromJSON(object.requirements)
                : undefined,
            resources: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.resources)
                ? object.resources.map((e) => resource_1.Resource.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.requirements !== undefined) {
            obj.requirements = attribute_1.PlacementRequirements.toJSON(message.requirements);
        }
        if ((_a = message.resources) === null || _a === void 0 ? void 0 : _a.length) {
            obj.resources = message.resources.map((e) => resource_1.Resource.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GroupSpec.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGroupSpec();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.requirements =
            object.requirements !== undefined && object.requirements !== null
                ? attribute_1.PlacementRequirements.fromPartial(object.requirements)
                : undefined;
        message.resources =
            ((_b = object.resources) === null || _b === void 0 ? void 0 : _b.map((e) => resource_1.Resource.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GroupSpec.$type, exports.GroupSpec);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
