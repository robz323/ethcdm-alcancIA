import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Quantity } from '../../../k8s.io/apimachinery/pkg/api/resource/generated';
import { Cluster } from '../../inventory/v1/cluster';
export interface ResourcesMetric {
    $type: 'akash.provider.v1.ResourcesMetric';
    cpu: Quantity | undefined;
    memory: Quantity | undefined;
    gpu: Quantity | undefined;
    ephemeralStorage: Quantity | undefined;
    storage: {
        [key: string]: Quantity;
    };
}
export interface ResourcesMetric_StorageEntry {
    $type: 'akash.provider.v1.ResourcesMetric.StorageEntry';
    key: string;
    value: Quantity | undefined;
}
export interface Leases {
    $type: 'akash.provider.v1.Leases';
    active: number;
}
export interface ReservationsMetric {
    $type: 'akash.provider.v1.ReservationsMetric';
    count: number;
    resources: ResourcesMetric | undefined;
}
export interface Reservations {
    $type: 'akash.provider.v1.Reservations';
    pending: ReservationsMetric | undefined;
    active: ReservationsMetric | undefined;
}
export interface Inventory {
    $type: 'akash.provider.v1.Inventory';
    cluster: Cluster | undefined;
    reservations: Reservations | undefined;
}
export interface ClusterStatus {
    $type: 'akash.provider.v1.ClusterStatus';
    leases: Leases | undefined;
    inventory: Inventory | undefined;
}
export interface BidEngineStatus {
    $type: 'akash.provider.v1.BidEngineStatus';
    orders: number;
}
export interface ManifestStatus {
    $type: 'akash.provider.v1.ManifestStatus';
    deployments: number;
}
export interface Status {
    $type: 'akash.provider.v1.Status';
    errors: string[];
    cluster: ClusterStatus | undefined;
    bidEngine: BidEngineStatus | undefined;
    manifest: ManifestStatus | undefined;
    publicHostnames: string[];
    timestamp: Date | undefined;
}
export declare const ResourcesMetric: {
    $type: "akash.provider.v1.ResourcesMetric";
    encode(message: ResourcesMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesMetric;
    fromJSON(object: any): ResourcesMetric;
    toJSON(message: ResourcesMetric): unknown;
    create(base?: DeepPartial<ResourcesMetric>): ResourcesMetric;
    fromPartial(object: DeepPartial<ResourcesMetric>): ResourcesMetric;
};
export declare const ResourcesMetric_StorageEntry: {
    $type: "akash.provider.v1.ResourcesMetric.StorageEntry";
    encode(message: ResourcesMetric_StorageEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesMetric_StorageEntry;
    fromJSON(object: any): ResourcesMetric_StorageEntry;
    toJSON(message: ResourcesMetric_StorageEntry): unknown;
    create(base?: DeepPartial<ResourcesMetric_StorageEntry>): ResourcesMetric_StorageEntry;
    fromPartial(object: DeepPartial<ResourcesMetric_StorageEntry>): ResourcesMetric_StorageEntry;
};
export declare const Leases: {
    $type: "akash.provider.v1.Leases";
    encode(message: Leases, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Leases;
    fromJSON(object: any): Leases;
    toJSON(message: Leases): unknown;
    create(base?: DeepPartial<Leases>): Leases;
    fromPartial(object: DeepPartial<Leases>): Leases;
};
export declare const ReservationsMetric: {
    $type: "akash.provider.v1.ReservationsMetric";
    encode(message: ReservationsMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReservationsMetric;
    fromJSON(object: any): ReservationsMetric;
    toJSON(message: ReservationsMetric): unknown;
    create(base?: DeepPartial<ReservationsMetric>): ReservationsMetric;
    fromPartial(object: DeepPartial<ReservationsMetric>): ReservationsMetric;
};
export declare const Reservations: {
    $type: "akash.provider.v1.Reservations";
    encode(message: Reservations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reservations;
    fromJSON(object: any): Reservations;
    toJSON(message: Reservations): unknown;
    create(base?: DeepPartial<Reservations>): Reservations;
    fromPartial(object: DeepPartial<Reservations>): Reservations;
};
export declare const Inventory: {
    $type: "akash.provider.v1.Inventory";
    encode(message: Inventory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Inventory;
    fromJSON(object: any): Inventory;
    toJSON(message: Inventory): unknown;
    create(base?: DeepPartial<Inventory>): Inventory;
    fromPartial(object: DeepPartial<Inventory>): Inventory;
};
export declare const ClusterStatus: {
    $type: "akash.provider.v1.ClusterStatus";
    encode(message: ClusterStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterStatus;
    fromJSON(object: any): ClusterStatus;
    toJSON(message: ClusterStatus): unknown;
    create(base?: DeepPartial<ClusterStatus>): ClusterStatus;
    fromPartial(object: DeepPartial<ClusterStatus>): ClusterStatus;
};
export declare const BidEngineStatus: {
    $type: "akash.provider.v1.BidEngineStatus";
    encode(message: BidEngineStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BidEngineStatus;
    fromJSON(object: any): BidEngineStatus;
    toJSON(message: BidEngineStatus): unknown;
    create(base?: DeepPartial<BidEngineStatus>): BidEngineStatus;
    fromPartial(object: DeepPartial<BidEngineStatus>): BidEngineStatus;
};
export declare const ManifestStatus: {
    $type: "akash.provider.v1.ManifestStatus";
    encode(message: ManifestStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManifestStatus;
    fromJSON(object: any): ManifestStatus;
    toJSON(message: ManifestStatus): unknown;
    create(base?: DeepPartial<ManifestStatus>): ManifestStatus;
    fromPartial(object: DeepPartial<ManifestStatus>): ManifestStatus;
};
export declare const Status: {
    $type: "akash.provider.v1.Status";
    encode(message: Status, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Status;
    fromJSON(object: any): Status;
    toJSON(message: Status): unknown;
    create(base?: DeepPartial<Status>): Status;
    fromPartial(object: DeepPartial<Status>): Status;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
