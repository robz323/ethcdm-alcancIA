import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ClientInfo } from './client_info';
export interface Akash {
    $type: 'akash.discovery.v1.Akash';
    clientInfo: ClientInfo | undefined;
}
export declare const Akash: {
    $type: "akash.discovery.v1.Akash";
    encode(message: Akash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Akash;
    fromJSON(object: any): Akash;
    toJSON(message: Akash): unknown;
    create(base?: DeepPartial<Akash>): Akash;
    fromPartial(object: DeepPartial<Akash>): Akash;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
