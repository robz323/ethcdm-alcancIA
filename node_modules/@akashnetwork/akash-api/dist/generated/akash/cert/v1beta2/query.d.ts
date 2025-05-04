import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Certificate, CertificateFilter } from './cert';
export interface CertificateResponse {
    $type: 'akash.cert.v1beta2.CertificateResponse';
    certificate: Certificate | undefined;
    serial: string;
}
export interface QueryCertificatesRequest {
    $type: 'akash.cert.v1beta2.QueryCertificatesRequest';
    filter: CertificateFilter | undefined;
    pagination: PageRequest | undefined;
}
export interface QueryCertificatesResponse {
    $type: 'akash.cert.v1beta2.QueryCertificatesResponse';
    certificates: CertificateResponse[];
    pagination: PageResponse | undefined;
}
export declare const CertificateResponse: {
    $type: "akash.cert.v1beta2.CertificateResponse";
    encode(message: CertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateResponse;
    fromJSON(object: any): CertificateResponse;
    toJSON(message: CertificateResponse): unknown;
    create(base?: DeepPartial<CertificateResponse>): CertificateResponse;
    fromPartial(object: DeepPartial<CertificateResponse>): CertificateResponse;
};
export declare const QueryCertificatesRequest: {
    $type: "akash.cert.v1beta2.QueryCertificatesRequest";
    encode(message: QueryCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesRequest;
    fromJSON(object: any): QueryCertificatesRequest;
    toJSON(message: QueryCertificatesRequest): unknown;
    create(base?: DeepPartial<QueryCertificatesRequest>): QueryCertificatesRequest;
    fromPartial(object: DeepPartial<QueryCertificatesRequest>): QueryCertificatesRequest;
};
export declare const QueryCertificatesResponse: {
    $type: "akash.cert.v1beta2.QueryCertificatesResponse";
    encode(message: QueryCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesResponse;
    fromJSON(object: any): QueryCertificatesResponse;
    toJSON(message: QueryCertificatesResponse): unknown;
    create(base?: DeepPartial<QueryCertificatesResponse>): QueryCertificatesResponse;
    fromPartial(object: DeepPartial<QueryCertificatesResponse>): QueryCertificatesResponse;
};
export interface Query {
    Certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
export declare const QueryServiceName = "akash.cert.v1beta2.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
