import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "akash.cert.v1beta1";
export interface CertificateID {
    $type: 'akash.cert.v1beta1.CertificateID';
    owner: string;
    serial: string;
}
export interface Certificate {
    $type: 'akash.cert.v1beta1.Certificate';
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
    $type: 'akash.cert.v1beta1.CertificateFilter';
    owner: string;
    serial: string;
    state: string;
}
export interface MsgCreateCertificate {
    $type: 'akash.cert.v1beta1.MsgCreateCertificate';
    owner: string;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
export interface MsgCreateCertificateResponse {
    $type: 'akash.cert.v1beta1.MsgCreateCertificateResponse';
}
export interface MsgRevokeCertificate {
    $type: 'akash.cert.v1beta1.MsgRevokeCertificate';
    id?: CertificateID;
}
export interface MsgRevokeCertificateResponse {
    $type: 'akash.cert.v1beta1.MsgRevokeCertificateResponse';
}
export declare const CertificateID: {
    $type: "akash.cert.v1beta1.CertificateID";
    encode(message: CertificateID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateID;
    fromJSON(object: any): CertificateID;
    toJSON(message: CertificateID): unknown;
    fromPartial<I extends {
        owner?: string;
        serial?: string;
    } & {
        owner?: string;
        serial?: string;
    } & Record<Exclude<keyof I, "$type" | "owner" | "serial">, never>>(object: I): CertificateID;
};
export declare const Certificate: {
    $type: "akash.cert.v1beta1.Certificate";
    encode(message: Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Certificate;
    fromJSON(object: any): Certificate;
    toJSON(message: Certificate): unknown;
    fromPartial<I extends {
        state?: Certificate_State;
        cert?: Uint8Array;
        pubkey?: Uint8Array;
    } & {
        state?: Certificate_State;
        cert?: Uint8Array;
        pubkey?: Uint8Array;
    } & Record<Exclude<keyof I, "$type" | "state" | "cert" | "pubkey">, never>>(object: I): Certificate;
};
export declare const CertificateFilter: {
    $type: "akash.cert.v1beta1.CertificateFilter";
    encode(message: CertificateFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateFilter;
    fromJSON(object: any): CertificateFilter;
    toJSON(message: CertificateFilter): unknown;
    fromPartial<I extends {
        owner?: string;
        state?: string;
        serial?: string;
    } & {
        owner?: string;
        state?: string;
        serial?: string;
    } & Record<Exclude<keyof I, "$type" | "owner" | "state" | "serial">, never>>(object: I): CertificateFilter;
};
export declare const MsgCreateCertificate: {
    $type: "akash.cert.v1beta1.MsgCreateCertificate";
    encode(message: MsgCreateCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificate;
    fromJSON(object: any): MsgCreateCertificate;
    toJSON(message: MsgCreateCertificate): unknown;
    fromPartial<I extends {
        owner?: string;
        cert?: Uint8Array;
        pubkey?: Uint8Array;
    } & {
        owner?: string;
        cert?: Uint8Array;
        pubkey?: Uint8Array;
    } & Record<Exclude<keyof I, "$type" | "owner" | "cert" | "pubkey">, never>>(object: I): MsgCreateCertificate;
};
export declare const MsgCreateCertificateResponse: {
    $type: "akash.cert.v1beta1.MsgCreateCertificateResponse";
    encode(_: MsgCreateCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificateResponse;
    fromJSON(_: any): MsgCreateCertificateResponse;
    toJSON(_: MsgCreateCertificateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): MsgCreateCertificateResponse;
};
export declare const MsgRevokeCertificate: {
    $type: "akash.cert.v1beta1.MsgRevokeCertificate";
    encode(message: MsgRevokeCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificate;
    fromJSON(object: any): MsgRevokeCertificate;
    toJSON(message: MsgRevokeCertificate): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string;
            serial?: string;
        };
    } & {
        id?: {
            owner?: string;
            serial?: string;
        } & {
            owner?: string;
            serial?: string;
        } & Record<Exclude<keyof I["id"], "$type" | "owner" | "serial">, never>;
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): MsgRevokeCertificate;
};
export declare const MsgRevokeCertificateResponse: {
    $type: "akash.cert.v1beta1.MsgRevokeCertificateResponse";
    encode(_: MsgRevokeCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificateResponse;
    fromJSON(_: any): MsgRevokeCertificateResponse;
    toJSON(_: MsgRevokeCertificateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): MsgRevokeCertificateResponse;
};
export interface Msg {
    CreateCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
    RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
    RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;
export {};
