import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Certificate } from './cert';
export interface GenesisCertificate {
    $type: 'akash.cert.v1beta2.GenesisCertificate';
    owner: string;
    certificate: Certificate | undefined;
}
export interface GenesisState {
    $type: 'akash.cert.v1beta2.GenesisState';
    certificates: GenesisCertificate[];
}
export declare const GenesisCertificate: {
    $type: "akash.cert.v1beta2.GenesisCertificate";
    encode(message: GenesisCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisCertificate;
    fromJSON(object: any): GenesisCertificate;
    toJSON(message: GenesisCertificate): unknown;
    create(base?: DeepPartial<GenesisCertificate>): GenesisCertificate;
    fromPartial(object: DeepPartial<GenesisCertificate>): GenesisCertificate;
};
export declare const GenesisState: {
    $type: "akash.cert.v1beta2.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create(base?: DeepPartial<GenesisState>): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
