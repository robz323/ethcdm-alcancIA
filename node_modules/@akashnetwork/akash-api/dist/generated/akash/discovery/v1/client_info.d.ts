import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface ClientInfo {
    $type: 'akash.discovery.v1.ClientInfo';
    apiVersion: string;
}
export declare const ClientInfo: {
    $type: "akash.discovery.v1.ClientInfo";
    encode(message: ClientInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientInfo;
    fromJSON(object: any): ClientInfo;
    toJSON(message: ClientInfo): unknown;
    create(base?: DeepPartial<ClientInfo>): ClientInfo;
    fromPartial(object: DeepPartial<ClientInfo>): ClientInfo;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
