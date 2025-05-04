import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Attribute } from './attribute';
import { ResourceValue } from './resourcevalue';
export interface Memory {
    $type: 'akash.base.v1beta3.Memory';
    quantity: ResourceValue | undefined;
    attributes: Attribute[];
}
export declare const Memory: {
    $type: "akash.base.v1beta3.Memory";
    encode(message: Memory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Memory;
    fromJSON(object: any): Memory;
    toJSON(message: Memory): unknown;
    create(base?: DeepPartial<Memory>): Memory;
    fromPartial(object: DeepPartial<Memory>): Memory;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
