import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { CPU } from './cpu';
import { Endpoint } from './endpoint';
import { GPU } from './gpu';
import { Memory } from './memory';
import { Storage } from './storage';
export interface Resources {
    $type: 'akash.base.v1beta3.Resources';
    id: number;
    cpu: CPU | undefined;
    memory: Memory | undefined;
    storage: Storage[];
    gpu: GPU | undefined;
    endpoints: Endpoint[];
}
export declare const Resources: {
    $type: "akash.base.v1beta3.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    create(base?: DeepPartial<Resources>): Resources;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
