import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface Timestamp {
    $type: 'google.protobuf.Timestamp';
    seconds: Long;
    nanos: number;
}
export declare const Timestamp: {
    $type: "google.protobuf.Timestamp";
    encode(message: Timestamp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Timestamp;
    fromJSON(object: any): Timestamp;
    toJSON(message: Timestamp): unknown;
    create(base?: DeepPartial<Timestamp>): Timestamp;
    fromPartial(object: DeepPartial<Timestamp>): Timestamp;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
