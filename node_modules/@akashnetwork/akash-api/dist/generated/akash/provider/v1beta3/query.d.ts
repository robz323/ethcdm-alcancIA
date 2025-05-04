import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Provider } from './provider';
export interface QueryProvidersRequest {
    $type: 'akash.provider.v1beta3.QueryProvidersRequest';
    pagination: PageRequest | undefined;
}
export interface QueryProvidersResponse {
    $type: 'akash.provider.v1beta3.QueryProvidersResponse';
    providers: Provider[];
    pagination: PageResponse | undefined;
}
export interface QueryProviderRequest {
    $type: 'akash.provider.v1beta3.QueryProviderRequest';
    owner: string;
}
export interface QueryProviderResponse {
    $type: 'akash.provider.v1beta3.QueryProviderResponse';
    provider: Provider | undefined;
}
export declare const QueryProvidersRequest: {
    $type: "akash.provider.v1beta3.QueryProvidersRequest";
    encode(message: QueryProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersRequest;
    fromJSON(object: any): QueryProvidersRequest;
    toJSON(message: QueryProvidersRequest): unknown;
    create(base?: DeepPartial<QueryProvidersRequest>): QueryProvidersRequest;
    fromPartial(object: DeepPartial<QueryProvidersRequest>): QueryProvidersRequest;
};
export declare const QueryProvidersResponse: {
    $type: "akash.provider.v1beta3.QueryProvidersResponse";
    encode(message: QueryProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersResponse;
    fromJSON(object: any): QueryProvidersResponse;
    toJSON(message: QueryProvidersResponse): unknown;
    create(base?: DeepPartial<QueryProvidersResponse>): QueryProvidersResponse;
    fromPartial(object: DeepPartial<QueryProvidersResponse>): QueryProvidersResponse;
};
export declare const QueryProviderRequest: {
    $type: "akash.provider.v1beta3.QueryProviderRequest";
    encode(message: QueryProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderRequest;
    fromJSON(object: any): QueryProviderRequest;
    toJSON(message: QueryProviderRequest): unknown;
    create(base?: DeepPartial<QueryProviderRequest>): QueryProviderRequest;
    fromPartial(object: DeepPartial<QueryProviderRequest>): QueryProviderRequest;
};
export declare const QueryProviderResponse: {
    $type: "akash.provider.v1beta3.QueryProviderResponse";
    encode(message: QueryProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderResponse;
    fromJSON(object: any): QueryProviderResponse;
    toJSON(message: QueryProviderResponse): unknown;
    create(base?: DeepPartial<QueryProviderResponse>): QueryProviderResponse;
    fromPartial(object: DeepPartial<QueryProviderResponse>): QueryProviderResponse;
};
export interface Query {
    Providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    Provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}
export declare const QueryServiceName = "akash.provider.v1beta3.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    Provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
