import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface ResourceValue {
    $type: 'akash.base.v1beta2.ResourceValue';
    val: Uint8Array;
}
export declare const ResourceValue: {
    $type: "akash.base.v1beta2.ResourceValue";
    encode(message: ResourceValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceValue;
    fromJSON(object: any): ResourceValue;
    toJSON(message: ResourceValue): unknown;
    create(base?: DeepPartial<ResourceValue>): ResourceValue;
    fromPartial(object: DeepPartial<ResourceValue>): ResourceValue;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
