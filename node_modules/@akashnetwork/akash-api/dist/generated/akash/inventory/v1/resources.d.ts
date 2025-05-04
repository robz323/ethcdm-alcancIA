import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { CPU } from './cpu';
import { GPU } from './gpu';
import { Memory } from './memory';
import { ResourcePair } from './resourcepair';
export interface NodeResources {
    $type: 'akash.inventory.v1.NodeResources';
    cpu: CPU | undefined;
    memory: Memory | undefined;
    gpu: GPU | undefined;
    ephemeralStorage: ResourcePair | undefined;
    volumesAttached: ResourcePair | undefined;
    volumesMounted: ResourcePair | undefined;
}
export declare const NodeResources: {
    $type: "akash.inventory.v1.NodeResources";
    encode(message: NodeResources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeResources;
    fromJSON(object: any): NodeResources;
    toJSON(message: NodeResources): unknown;
    create(base?: DeepPartial<NodeResources>): NodeResources;
    fromPartial(object: DeepPartial<NodeResources>): NodeResources;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
