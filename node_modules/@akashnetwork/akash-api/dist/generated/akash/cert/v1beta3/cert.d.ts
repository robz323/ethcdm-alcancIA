import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface CertificateID {
    $type: 'akash.cert.v1beta3.CertificateID';
    owner: string;
    serial: string;
}
export interface Certificate {
    $type: 'akash.cert.v1beta3.Certificate';
    state: Certificate_State;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
export declare enum Certificate_State {
    invalid = 0,
    valid = 1,
    revoked = 2,
    UNRECOGNIZED = -1
}
export declare function certificate_StateFromJSON(object: any): Certificate_State;
export declare function certificate_StateToJSON(object: Certificate_State): string;
export interface CertificateFilter {
    $type: 'akash.cert.v1beta3.CertificateFilter';
    owner: string;
    serial: string;
    state: string;
}
export interface MsgCreateCertificate {
    $type: 'akash.cert.v1beta3.MsgCreateCertificate';
    owner: string;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
export interface MsgCreateCertificateResponse {
    $type: 'akash.cert.v1beta3.MsgCreateCertificateResponse';
}
export interface MsgRevokeCertificate {
    $type: 'akash.cert.v1beta3.MsgRevokeCertificate';
    id: CertificateID | undefined;
}
export interface MsgRevokeCertificateResponse {
    $type: 'akash.cert.v1beta3.MsgRevokeCertificateResponse';
}
export declare const CertificateID: {
    $type: "akash.cert.v1beta3.CertificateID";
    encode(message: CertificateID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateID;
    fromJSON(object: any): CertificateID;
    toJSON(message: CertificateID): unknown;
    create(base?: DeepPartial<CertificateID>): CertificateID;
    fromPartial(object: DeepPartial<CertificateID>): CertificateID;
};
export declare const Certificate: {
    $type: "akash.cert.v1beta3.Certificate";
    encode(message: Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Certificate;
    fromJSON(object: any): Certificate;
    toJSON(message: Certificate): unknown;
    create(base?: DeepPartial<Certificate>): Certificate;
    fromPartial(object: DeepPartial<Certificate>): Certificate;
};
export declare const CertificateFilter: {
    $type: "akash.cert.v1beta3.CertificateFilter";
    encode(message: CertificateFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateFilter;
    fromJSON(object: any): CertificateFilter;
    toJSON(message: CertificateFilter): unknown;
    create(base?: DeepPartial<CertificateFilter>): CertificateFilter;
    fromPartial(object: DeepPartial<CertificateFilter>): CertificateFilter;
};
export declare const MsgCreateCertificate: {
    $type: "akash.cert.v1beta3.MsgCreateCertificate";
    encode(message: MsgCreateCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificate;
    fromJSON(object: any): MsgCreateCertificate;
    toJSON(message: MsgCreateCertificate): unknown;
    create(base?: DeepPartial<MsgCreateCertificate>): MsgCreateCertificate;
    fromPartial(object: DeepPartial<MsgCreateCertificate>): MsgCreateCertificate;
};
export declare const MsgCreateCertificateResponse: {
    $type: "akash.cert.v1beta3.MsgCreateCertificateResponse";
    encode(_: MsgCreateCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificateResponse;
    fromJSON(_: any): MsgCreateCertificateResponse;
    toJSON(_: MsgCreateCertificateResponse): unknown;
    create(base?: DeepPartial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse;
    fromPartial(_: DeepPartial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse;
};
export declare const MsgRevokeCertificate: {
    $type: "akash.cert.v1beta3.MsgRevokeCertificate";
    encode(message: MsgRevokeCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificate;
    fromJSON(object: any): MsgRevokeCertificate;
    toJSON(message: MsgRevokeCertificate): unknown;
    create(base?: DeepPartial<MsgRevokeCertificate>): MsgRevokeCertificate;
    fromPartial(object: DeepPartial<MsgRevokeCertificate>): MsgRevokeCertificate;
};
export declare const MsgRevokeCertificateResponse: {
    $type: "akash.cert.v1beta3.MsgRevokeCertificateResponse";
    encode(_: MsgRevokeCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificateResponse;
    fromJSON(_: any): MsgRevokeCertificateResponse;
    toJSON(_: MsgRevokeCertificateResponse): unknown;
    create(base?: DeepPartial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse;
    fromPartial(_: DeepPartial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse;
};
export interface Msg {
    CreateCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
    RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
}
export declare const MsgServiceName = "akash.cert.v1beta3.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
    RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
