import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Endpoint } from './endpoint';
import { CPU, Memory, Storage } from './resource';
export interface ResourceUnits {
    $type: 'akash.base.v1beta2.ResourceUnits';
    cpu: CPU | undefined;
    memory: Memory | undefined;
    storage: Storage[];
    endpoints: Endpoint[];
}
export declare const ResourceUnits: {
    $type: "akash.base.v1beta2.ResourceUnits";
    encode(message: ResourceUnits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnits;
    fromJSON(object: any): ResourceUnits;
    toJSON(message: ResourceUnits): unknown;
    create(base?: DeepPartial<ResourceUnits>): ResourceUnits;
    fromPartial(object: DeepPartial<ResourceUnits>): ResourceUnits;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
