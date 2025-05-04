"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const service_1 = require("./service");
function createBaseGroup() {
    return { $type: 'akash.manifest.v2beta2.Group', name: '', services: [] };
}
exports.Group = {
    $type: 'akash.manifest.v2beta2.Group',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.services) {
            service_1.Service.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.services.push(service_1.Service.decode(reader, reader.uint32()));
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
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            services: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.services)
                ? object.services.map((e) => service_1.Service.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if ((_a = message.services) === null || _a === void 0 ? void 0 : _a.length) {
            obj.services = message.services.map((e) => service_1.Service.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Group.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGroup();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : '';
        message.services =
            ((_b = object.services) === null || _b === void 0 ? void 0 : _b.map((e) => service_1.Service.fromPartial(e))) || [];
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
