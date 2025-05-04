import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Provider } from './audit';
export interface QueryProvidersResponse {
    $type: 'akash.audit.v1beta2.QueryProvidersResponse';
    providers: Provider[];
    pagination: PageResponse | undefined;
}
export interface QueryProviderRequest {
    $type: 'akash.audit.v1beta2.QueryProviderRequest';
    auditor: string;
    owner: string;
}
export interface QueryAllProvidersAttributesRequest {
    $type: 'akash.audit.v1beta2.QueryAllProvidersAttributesRequest';
    pagination: PageRequest | undefined;
}
export interface QueryProviderAttributesRequest {
    $type: 'akash.audit.v1beta2.QueryProviderAttributesRequest';
    owner: string;
    pagination: PageRequest | undefined;
}
export interface QueryProviderAuditorRequest {
    $type: 'akash.audit.v1beta2.QueryProviderAuditorRequest';
    auditor: string;
    owner: string;
}
export interface QueryAuditorAttributesRequest {
    $type: 'akash.audit.v1beta2.QueryAuditorAttributesRequest';
    auditor: string;
    pagination: PageRequest | undefined;
}
export declare const QueryProvidersResponse: {
    $type: "akash.audit.v1beta2.QueryProvidersResponse";
    encode(message: QueryProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersResponse;
    fromJSON(object: any): QueryProvidersResponse;
    toJSON(message: QueryProvidersResponse): unknown;
    create(base?: DeepPartial<QueryProvidersResponse>): QueryProvidersResponse;
    fromPartial(object: DeepPartial<QueryProvidersResponse>): QueryProvidersResponse;
};
export declare const QueryProviderRequest: {
    $type: "akash.audit.v1beta2.QueryProviderRequest";
    encode(message: QueryProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderRequest;
    fromJSON(object: any): QueryProviderRequest;
    toJSON(message: QueryProviderRequest): unknown;
    create(base?: DeepPartial<QueryProviderRequest>): QueryProviderRequest;
    fromPartial(object: DeepPartial<QueryProviderRequest>): QueryProviderRequest;
};
export declare const QueryAllProvidersAttributesRequest: {
    $type: "akash.audit.v1beta2.QueryAllProvidersAttributesRequest";
    encode(message: QueryAllProvidersAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProvidersAttributesRequest;
    fromJSON(object: any): QueryAllProvidersAttributesRequest;
    toJSON(message: QueryAllProvidersAttributesRequest): unknown;
    create(base?: DeepPartial<QueryAllProvidersAttributesRequest>): QueryAllProvidersAttributesRequest;
    fromPartial(object: DeepPartial<QueryAllProvidersAttributesRequest>): QueryAllProvidersAttributesRequest;
};
export declare const QueryProviderAttributesRequest: {
    $type: "akash.audit.v1beta2.QueryProviderAttributesRequest";
    encode(message: QueryProviderAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAttributesRequest;
    fromJSON(object: any): QueryProviderAttributesRequest;
    toJSON(message: QueryProviderAttributesRequest): unknown;
    create(base?: DeepPartial<QueryProviderAttributesRequest>): QueryProviderAttributesRequest;
    fromPartial(object: DeepPartial<QueryProviderAttributesRequest>): QueryProviderAttributesRequest;
};
export declare const QueryProviderAuditorRequest: {
    $type: "akash.audit.v1beta2.QueryProviderAuditorRequest";
    encode(message: QueryProviderAuditorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAuditorRequest;
    fromJSON(object: any): QueryProviderAuditorRequest;
    toJSON(message: QueryProviderAuditorRequest): unknown;
    create(base?: DeepPartial<QueryProviderAuditorRequest>): QueryProviderAuditorRequest;
    fromPartial(object: DeepPartial<QueryProviderAuditorRequest>): QueryProviderAuditorRequest;
};
export declare const QueryAuditorAttributesRequest: {
    $type: "akash.audit.v1beta2.QueryAuditorAttributesRequest";
    encode(message: QueryAuditorAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuditorAttributesRequest;
    fromJSON(object: any): QueryAuditorAttributesRequest;
    toJSON(message: QueryAuditorAttributesRequest): unknown;
    create(base?: DeepPartial<QueryAuditorAttributesRequest>): QueryAuditorAttributesRequest;
    fromPartial(object: DeepPartial<QueryAuditorAttributesRequest>): QueryAuditorAttributesRequest;
};
export interface Query {
    AllProvidersAttributes(request: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
    ProviderAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
    ProviderAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
    AuditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}
export declare const QueryServiceName = "akash.audit.v1beta2.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    AllProvidersAttributes(request: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
    ProviderAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
    ProviderAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
    AuditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
