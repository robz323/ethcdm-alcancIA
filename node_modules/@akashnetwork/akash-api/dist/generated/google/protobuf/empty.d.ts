import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface Empty {
    $type: 'google.protobuf.Empty';
}
export declare const Empty: {
    $type: "google.protobuf.Empty";
    encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
    fromJSON(_: any): Empty;
    toJSON(_: Empty): unknown;
    create(base?: DeepPartial<Empty>): Empty;
    fromPartial(_: DeepPartial<Empty>): Empty;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
