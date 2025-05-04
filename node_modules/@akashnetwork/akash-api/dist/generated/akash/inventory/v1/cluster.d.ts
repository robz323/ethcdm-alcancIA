import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Node } from './node';
import { Storage } from './storage';
export interface Cluster {
    $type: 'akash.inventory.v1.Cluster';
    nodes: Node[];
    storage: Storage[];
}
export declare const Cluster: {
    $type: "akash.inventory.v1.Cluster";
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    create(base?: DeepPartial<Cluster>): Cluster;
    fromPartial(object: DeepPartial<Cluster>): Cluster;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
