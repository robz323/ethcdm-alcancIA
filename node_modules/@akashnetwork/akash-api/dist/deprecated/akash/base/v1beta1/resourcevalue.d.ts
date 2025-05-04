import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "akash.base.v1beta1";
export interface ResourceValue {
    $type: 'akash.base.v1beta1.ResourceValue';
    val: Uint8Array;
}
export declare const ResourceValue: {
    $type: "akash.base.v1beta1.ResourceValue";
    encode(message: ResourceValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceValue;
    fromJSON(object: any): ResourceValue;
    toJSON(message: ResourceValue): unknown;
    fromPartial<I extends {
        val?: Uint8Array;
    } & {
        val?: Uint8Array;
    } & Record<Exclude<keyof I, "$type" | "val">, never>>(object: I): ResourceValue;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;
export {};
