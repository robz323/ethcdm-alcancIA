import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface Endpoint {
    $type: 'akash.base.v1beta3.Endpoint';
    kind: Endpoint_Kind;
    sequenceNumber: number;
}
export declare enum Endpoint_Kind {
    SHARED_HTTP = 0,
    RANDOM_PORT = 1,
    LEASED_IP = 2,
    UNRECOGNIZED = -1
}
export declare function endpoint_KindFromJSON(object: any): Endpoint_Kind;
export declare function endpoint_KindToJSON(object: Endpoint_Kind): string;
export declare const Endpoint: {
    $type: "akash.base.v1beta3.Endpoint";
    encode(message: Endpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint;
    fromJSON(object: any): Endpoint;
    toJSON(message: Endpoint): unknown;
    create(base?: DeepPartial<Endpoint>): Endpoint;
    fromPartial(object: DeepPartial<Endpoint>): Endpoint;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
