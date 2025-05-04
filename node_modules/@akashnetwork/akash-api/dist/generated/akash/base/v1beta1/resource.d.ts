import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Attribute } from './attribute';
import { Endpoint } from './endpoint';
import { ResourceValue } from './resourcevalue';
export interface CPU {
    $type: 'akash.base.v1beta1.CPU';
    units: ResourceValue | undefined;
    attributes: Attribute[];
}
export interface Memory {
    $type: 'akash.base.v1beta1.Memory';
    quantity: ResourceValue | undefined;
    attributes: Attribute[];
}
export interface Storage {
    $type: 'akash.base.v1beta1.Storage';
    quantity: ResourceValue | undefined;
    attributes: Attribute[];
}
export interface ResourceUnits {
    $type: 'akash.base.v1beta1.ResourceUnits';
    cpu: CPU | undefined;
    memory: Memory | undefined;
    storage: Storage | undefined;
    endpoints: Endpoint[];
}
export declare const CPU: {
    $type: "akash.base.v1beta1.CPU";
    encode(message: CPU, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CPU;
    fromJSON(object: any): CPU;
    toJSON(message: CPU): unknown;
    create(base?: DeepPartial<CPU>): CPU;
    fromPartial(object: DeepPartial<CPU>): CPU;
};
export declare const Memory: {
    $type: "akash.base.v1beta1.Memory";
    encode(message: Memory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Memory;
    fromJSON(object: any): Memory;
    toJSON(message: Memory): unknown;
    create(base?: DeepPartial<Memory>): Memory;
    fromPartial(object: DeepPartial<Memory>): Memory;
};
export declare const Storage: {
    $type: "akash.base.v1beta1.Storage";
    encode(message: Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Storage;
    fromJSON(object: any): Storage;
    toJSON(message: Storage): unknown;
    create(base?: DeepPartial<Storage>): Storage;
    fromPartial(object: DeepPartial<Storage>): Storage;
};
export declare const ResourceUnits: {
    $type: "akash.base.v1beta1.ResourceUnits";
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
