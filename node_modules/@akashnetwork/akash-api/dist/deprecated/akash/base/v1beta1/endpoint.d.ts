import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "akash.base.v1beta1";
export interface Endpoint {
    $type: 'akash.base.v1beta1.Endpoint';
    kind: Endpoint_Kind;
}
export declare enum Endpoint_Kind {
    SHARED_HTTP = 0,
    RANDOM_PORT = 1,
    UNRECOGNIZED = -1
}
export declare function endpoint_KindFromJSON(object: any): Endpoint_Kind;
export declare function endpoint_KindToJSON(object: Endpoint_Kind): string;
export declare const Endpoint: {
    $type: "akash.base.v1beta1.Endpoint";
    encode(message: Endpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint;
    fromJSON(object: any): Endpoint;
    toJSON(message: Endpoint): unknown;
    fromPartial<I extends {
        kind?: Endpoint_Kind;
    } & {
        kind?: Endpoint_Kind;
    } & Record<Exclude<keyof I, "$type" | "kind">, never>>(object: I): Endpoint;
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
