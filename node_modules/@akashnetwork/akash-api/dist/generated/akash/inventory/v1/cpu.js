"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPU = exports.CPUInfo = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const resourcepair_1 = require("./resourcepair");
function createBaseCPUInfo() {
    return {
        $type: 'akash.inventory.v1.CPUInfo',
        id: '',
        vendor: '',
        model: '',
        vcores: 0,
    };
}
exports.CPUInfo = {
    $type: 'akash.inventory.v1.CPUInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.vendor !== '') {
            writer.uint32(18).string(message.vendor);
        }
        if (message.model !== '') {
            writer.uint32(26).string(message.model);
        }
        if (message.vcores !== 0) {
            writer.uint32(32).uint32(message.vcores);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCPUInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.vendor = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.model = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.vcores = reader.uint32();
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
            $type: exports.CPUInfo.$type,
            id: isSet(object.id) ? globalThis.String(object.id) : '',
            vendor: isSet(object.vendor) ? globalThis.String(object.vendor) : '',
            model: isSet(object.model) ? globalThis.String(object.model) : '',
            vcores: isSet(object.vcores) ? globalThis.Number(object.vcores) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== '') {
            obj.id = message.id;
        }
        if (message.vendor !== '') {
            obj.vendor = message.vendor;
        }
        if (message.model !== '') {
            obj.model = message.model;
        }
        if (message.vcores !== 0) {
            obj.vcores = Math.round(message.vcores);
        }
        return obj;
    },
    create(base) {
        return exports.CPUInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCPUInfo();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.vendor = (_b = object.vendor) !== null && _b !== void 0 ? _b : '';
        message.model = (_c = object.model) !== null && _c !== void 0 ? _c : '';
        message.vcores = (_d = object.vcores) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CPUInfo.$type, exports.CPUInfo);
function createBaseCPU() {
    return { $type: 'akash.inventory.v1.CPU', quantity: undefined, info: [] };
}
exports.CPU = {
    $type: 'akash.inventory.v1.CPU',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quantity !== undefined) {
            resourcepair_1.ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.info) {
            exports.CPUInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCPU();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.quantity = resourcepair_1.ResourcePair.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.info.push(exports.CPUInfo.decode(reader, reader.uint32()));
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
            $type: exports.CPU.$type,
            quantity: isSet(object.quantity)
                ? resourcepair_1.ResourcePair.fromJSON(object.quantity)
                : undefined,
            info: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.info)
                ? object.info.map((e) => exports.CPUInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.quantity !== undefined) {
            obj.quantity = resourcepair_1.ResourcePair.toJSON(message.quantity);
        }
        if ((_a = message.info) === null || _a === void 0 ? void 0 : _a.length) {
            obj.info = message.info.map((e) => exports.CPUInfo.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.CPU.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCPU();
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? resourcepair_1.ResourcePair.fromPartial(object.quantity)
                : undefined;
        message.info = ((_a = object.info) === null || _a === void 0 ? void 0 : _a.map((e) => exports.CPUInfo.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CPU.$type, exports.CPU);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
