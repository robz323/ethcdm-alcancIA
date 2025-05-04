import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Attribute } from './attribute';
import { ResourceValue } from './resourcevalue';
export interface GPU {
    $type: 'akash.base.v1beta3.GPU';
    units: ResourceValue | undefined;
    attributes: Attribute[];
}
export declare const GPU: {
    $type: "akash.base.v1beta3.GPU";
    encode(message: GPU, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GPU;
    fromJSON(object: any): GPU;
    toJSON(message: GPU): unknown;
    create(base?: DeepPartial<GPU>): GPU;
    fromPartial(object: DeepPartial<GPU>): GPU;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
