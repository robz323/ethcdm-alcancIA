"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.ManifestStatus = exports.BidEngineStatus = exports.ClusterStatus = exports.Inventory = exports.Reservations = exports.ReservationsMetric = exports.Leases = exports.ResourcesMetric_StorageEntry = exports.ResourcesMetric = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
const generated_1 = require("../../../k8s.io/apimachinery/pkg/api/resource/generated");
const typeRegistry_1 = require("../../../typeRegistry");
const cluster_1 = require("../../inventory/v1/cluster");
function createBaseResourcesMetric() {
    return {
        $type: 'akash.provider.v1.ResourcesMetric',
        cpu: undefined,
        memory: undefined,
        gpu: undefined,
        ephemeralStorage: undefined,
        storage: {},
    };
}
exports.ResourcesMetric = {
    $type: 'akash.provider.v1.ResourcesMetric',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cpu !== undefined) {
            generated_1.Quantity.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            generated_1.Quantity.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        if (message.gpu !== undefined) {
            generated_1.Quantity.encode(message.gpu, writer.uint32(26).fork()).ldelim();
        }
        if (message.ephemeralStorage !== undefined) {
            generated_1.Quantity.encode(message.ephemeralStorage, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.storage).forEach(([key, value]) => {
            exports.ResourcesMetric_StorageEntry.encode({
                $type: 'akash.provider.v1.ResourcesMetric.StorageEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourcesMetric();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cpu = generated_1.Quantity.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.memory = generated_1.Quantity.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.gpu = generated_1.Quantity.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ephemeralStorage = generated_1.Quantity.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    const entry5 = exports.ResourcesMetric_StorageEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.storage[entry5.key] = entry5.value;
                    }
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
            $type: exports.ResourcesMetric.$type,
            cpu: isSet(object.cpu) ? generated_1.Quantity.fromJSON(object.cpu) : undefined,
            memory: isSet(object.memory)
                ? generated_1.Quantity.fromJSON(object.memory)
                : undefined,
            gpu: isSet(object.gpu) ? generated_1.Quantity.fromJSON(object.gpu) : undefined,
            ephemeralStorage: isSet(object.ephemeralStorage)
                ? generated_1.Quantity.fromJSON(object.ephemeralStorage)
                : undefined,
            storage: isObject(object.storage)
                ? Object.entries(object.storage).reduce((acc, [key, value]) => {
                    acc[key] = generated_1.Quantity.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cpu !== undefined) {
            obj.cpu = generated_1.Quantity.toJSON(message.cpu);
        }
        if (message.memory !== undefined) {
            obj.memory = generated_1.Quantity.toJSON(message.memory);
        }
        if (message.gpu !== undefined) {
            obj.gpu = generated_1.Quantity.toJSON(message.gpu);
        }
        if (message.ephemeralStorage !== undefined) {
            obj.ephemeralStorage = generated_1.Quantity.toJSON(message.ephemeralStorage);
        }
        if (message.storage) {
            const entries = Object.entries(message.storage);
            if (entries.length > 0) {
                obj.storage = {};
                entries.forEach(([k, v]) => {
                    obj.storage[k] = generated_1.Quantity.toJSON(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.ResourcesMetric.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResourcesMetric();
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? generated_1.Quantity.fromPartial(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? generated_1.Quantity.fromPartial(object.memory)
                : undefined;
        message.gpu =
            object.gpu !== undefined && object.gpu !== null
                ? generated_1.Quantity.fromPartial(object.gpu)
                : undefined;
        message.ephemeralStorage =
            object.ephemeralStorage !== undefined && object.ephemeralStorage !== null
                ? generated_1.Quantity.fromPartial(object.ephemeralStorage)
                : undefined;
        message.storage = Object.entries((_a = object.storage) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = generated_1.Quantity.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourcesMetric.$type, exports.ResourcesMetric);
function createBaseResourcesMetric_StorageEntry() {
    return {
        $type: 'akash.provider.v1.ResourcesMetric.StorageEntry',
        key: '',
        value: undefined,
    };
}
exports.ResourcesMetric_StorageEntry = {
    $type: 'akash.provider.v1.ResourcesMetric.StorageEntry',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            generated_1.Quantity.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourcesMetric_StorageEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = generated_1.Quantity.decode(reader, reader.uint32());
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
            $type: exports.ResourcesMetric_StorageEntry.$type,
            key: isSet(object.key) ? globalThis.String(object.key) : '',
            value: isSet(object.value) ? generated_1.Quantity.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== '') {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = generated_1.Quantity.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.ResourcesMetric_StorageEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResourcesMetric_StorageEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? generated_1.Quantity.fromPartial(object.value)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourcesMetric_StorageEntry.$type, exports.ResourcesMetric_StorageEntry);
function createBaseLeases() {
    return { $type: 'akash.provider.v1.Leases', active: 0 };
}
exports.Leases = {
    $type: 'akash.provider.v1.Leases',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.active !== 0) {
            writer.uint32(8).uint32(message.active);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeases();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.active = reader.uint32();
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
            $type: exports.Leases.$type,
            active: isSet(object.active) ? globalThis.Number(object.active) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.active !== 0) {
            obj.active = Math.round(message.active);
        }
        return obj;
    },
    create(base) {
        return exports.Leases.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLeases();
        message.active = (_a = object.active) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Leases.$type, exports.Leases);
function createBaseReservationsMetric() {
    return {
        $type: 'akash.provider.v1.ReservationsMetric',
        count: 0,
        resources: undefined,
    };
}
exports.ReservationsMetric = {
    $type: 'akash.provider.v1.ReservationsMetric',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.count !== 0) {
            writer.uint32(8).uint32(message.count);
        }
        if (message.resources !== undefined) {
            exports.ResourcesMetric.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReservationsMetric();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.count = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.resources = exports.ResourcesMetric.decode(reader, reader.uint32());
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
            $type: exports.ReservationsMetric.$type,
            count: isSet(object.count) ? globalThis.Number(object.count) : 0,
            resources: isSet(object.resources)
                ? exports.ResourcesMetric.fromJSON(object.resources)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        if (message.resources !== undefined) {
            obj.resources = exports.ResourcesMetric.toJSON(message.resources);
        }
        return obj;
    },
    create(base) {
        return exports.ReservationsMetric.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseReservationsMetric();
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.ResourcesMetric.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ReservationsMetric.$type, exports.ReservationsMetric);
function createBaseReservations() {
    return {
        $type: 'akash.provider.v1.Reservations',
        pending: undefined,
        active: undefined,
    };
}
exports.Reservations = {
    $type: 'akash.provider.v1.Reservations',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pending !== undefined) {
            exports.ReservationsMetric.encode(message.pending, writer.uint32(10).fork()).ldelim();
        }
        if (message.active !== undefined) {
            exports.ReservationsMetric.encode(message.active, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReservations();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pending = exports.ReservationsMetric.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.active = exports.ReservationsMetric.decode(reader, reader.uint32());
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
            $type: exports.Reservations.$type,
            pending: isSet(object.pending)
                ? exports.ReservationsMetric.fromJSON(object.pending)
                : undefined,
            active: isSet(object.active)
                ? exports.ReservationsMetric.fromJSON(object.active)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pending !== undefined) {
            obj.pending = exports.ReservationsMetric.toJSON(message.pending);
        }
        if (message.active !== undefined) {
            obj.active = exports.ReservationsMetric.toJSON(message.active);
        }
        return obj;
    },
    create(base) {
        return exports.Reservations.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseReservations();
        message.pending =
            object.pending !== undefined && object.pending !== null
                ? exports.ReservationsMetric.fromPartial(object.pending)
                : undefined;
        message.active =
            object.active !== undefined && object.active !== null
                ? exports.ReservationsMetric.fromPartial(object.active)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Reservations.$type, exports.Reservations);
function createBaseInventory() {
    return {
        $type: 'akash.provider.v1.Inventory',
        cluster: undefined,
        reservations: undefined,
    };
}
exports.Inventory = {
    $type: 'akash.provider.v1.Inventory',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cluster !== undefined) {
            cluster_1.Cluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.reservations !== undefined) {
            exports.Reservations.encode(message.reservations, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInventory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cluster = cluster_1.Cluster.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.reservations = exports.Reservations.decode(reader, reader.uint32());
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
            $type: exports.Inventory.$type,
            cluster: isSet(object.cluster)
                ? cluster_1.Cluster.fromJSON(object.cluster)
                : undefined,
            reservations: isSet(object.reservations)
                ? exports.Reservations.fromJSON(object.reservations)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cluster !== undefined) {
            obj.cluster = cluster_1.Cluster.toJSON(message.cluster);
        }
        if (message.reservations !== undefined) {
            obj.reservations = exports.Reservations.toJSON(message.reservations);
        }
        return obj;
    },
    create(base) {
        return exports.Inventory.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseInventory();
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? cluster_1.Cluster.fromPartial(object.cluster)
                : undefined;
        message.reservations =
            object.reservations !== undefined && object.reservations !== null
                ? exports.Reservations.fromPartial(object.reservations)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Inventory.$type, exports.Inventory);
function createBaseClusterStatus() {
    return {
        $type: 'akash.provider.v1.ClusterStatus',
        leases: undefined,
        inventory: undefined,
    };
}
exports.ClusterStatus = {
    $type: 'akash.provider.v1.ClusterStatus',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leases !== undefined) {
            exports.Leases.encode(message.leases, writer.uint32(10).fork()).ldelim();
        }
        if (message.inventory !== undefined) {
            exports.Inventory.encode(message.inventory, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClusterStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leases = exports.Leases.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.inventory = exports.Inventory.decode(reader, reader.uint32());
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
            $type: exports.ClusterStatus.$type,
            leases: isSet(object.leases) ? exports.Leases.fromJSON(object.leases) : undefined,
            inventory: isSet(object.inventory)
                ? exports.Inventory.fromJSON(object.inventory)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.leases !== undefined) {
            obj.leases = exports.Leases.toJSON(message.leases);
        }
        if (message.inventory !== undefined) {
            obj.inventory = exports.Inventory.toJSON(message.inventory);
        }
        return obj;
    },
    create(base) {
        return exports.ClusterStatus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseClusterStatus();
        message.leases =
            object.leases !== undefined && object.leases !== null
                ? exports.Leases.fromPartial(object.leases)
                : undefined;
        message.inventory =
            object.inventory !== undefined && object.inventory !== null
                ? exports.Inventory.fromPartial(object.inventory)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterStatus.$type, exports.ClusterStatus);
function createBaseBidEngineStatus() {
    return { $type: 'akash.provider.v1.BidEngineStatus', orders: 0 };
}
exports.BidEngineStatus = {
    $type: 'akash.provider.v1.BidEngineStatus',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orders !== 0) {
            writer.uint32(8).uint32(message.orders);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBidEngineStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.orders = reader.uint32();
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
            $type: exports.BidEngineStatus.$type,
            orders: isSet(object.orders) ? globalThis.Number(object.orders) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders !== 0) {
            obj.orders = Math.round(message.orders);
        }
        return obj;
    },
    create(base) {
        return exports.BidEngineStatus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBidEngineStatus();
        message.orders = (_a = object.orders) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BidEngineStatus.$type, exports.BidEngineStatus);
function createBaseManifestStatus() {
    return { $type: 'akash.provider.v1.ManifestStatus', deployments: 0 };
}
exports.ManifestStatus = {
    $type: 'akash.provider.v1.ManifestStatus',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deployments !== 0) {
            writer.uint32(8).uint32(message.deployments);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseManifestStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.deployments = reader.uint32();
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
            $type: exports.ManifestStatus.$type,
            deployments: isSet(object.deployments)
                ? globalThis.Number(object.deployments)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deployments !== 0) {
            obj.deployments = Math.round(message.deployments);
        }
        return obj;
    },
    create(base) {
        return exports.ManifestStatus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseManifestStatus();
        message.deployments = (_a = object.deployments) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ManifestStatus.$type, exports.ManifestStatus);
function createBaseStatus() {
    return {
        $type: 'akash.provider.v1.Status',
        errors: [],
        cluster: undefined,
        bidEngine: undefined,
        manifest: undefined,
        publicHostnames: [],
        timestamp: undefined,
    };
}
exports.Status = {
    $type: 'akash.provider.v1.Status',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.errors) {
            writer.uint32(10).string(v);
        }
        if (message.cluster !== undefined) {
            exports.ClusterStatus.encode(message.cluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.bidEngine !== undefined) {
            exports.BidEngineStatus.encode(message.bidEngine, writer.uint32(26).fork()).ldelim();
        }
        if (message.manifest !== undefined) {
            exports.ManifestStatus.encode(message.manifest, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.publicHostnames) {
            writer.uint32(42).string(v);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.errors.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.cluster = exports.ClusterStatus.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.bidEngine = exports.BidEngineStatus.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.manifest = exports.ManifestStatus.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.publicHostnames.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            $type: exports.Status.$type,
            errors: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.errors)
                ? object.errors.map((e) => globalThis.String(e))
                : [],
            cluster: isSet(object.cluster)
                ? exports.ClusterStatus.fromJSON(object.cluster)
                : undefined,
            bidEngine: isSet(object.bidEngine)
                ? exports.BidEngineStatus.fromJSON(object.bidEngine)
                : undefined,
            manifest: isSet(object.manifest)
                ? exports.ManifestStatus.fromJSON(object.manifest)
                : undefined,
            publicHostnames: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.publicHostnames)
                ? object.publicHostnames.map((e) => globalThis.String(e))
                : [],
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if ((_a = message.errors) === null || _a === void 0 ? void 0 : _a.length) {
            obj.errors = message.errors;
        }
        if (message.cluster !== undefined) {
            obj.cluster = exports.ClusterStatus.toJSON(message.cluster);
        }
        if (message.bidEngine !== undefined) {
            obj.bidEngine = exports.BidEngineStatus.toJSON(message.bidEngine);
        }
        if (message.manifest !== undefined) {
            obj.manifest = exports.ManifestStatus.toJSON(message.manifest);
        }
        if ((_b = message.publicHostnames) === null || _b === void 0 ? void 0 : _b.length) {
            obj.publicHostnames = message.publicHostnames;
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = message.timestamp.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.Status.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStatus();
        message.errors = ((_a = object.errors) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? exports.ClusterStatus.fromPartial(object.cluster)
                : undefined;
        message.bidEngine =
            object.bidEngine !== undefined && object.bidEngine !== null
                ? exports.BidEngineStatus.fromPartial(object.bidEngine)
                : undefined;
        message.manifest =
            object.manifest !== undefined && object.manifest !== null
                ? exports.ManifestStatus.fromPartial(object.manifest)
                : undefined;
        message.publicHostnames = ((_b = object.publicHostnames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Status.$type, exports.Status);
function toTimestamp(date) {
    const seconds = numberToLong(Math.trunc(date.getTime() / 1000));
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds.toNumber() || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
