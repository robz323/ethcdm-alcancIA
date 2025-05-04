import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Account, FractionalPayment } from './types';
export interface QueryAccountsRequest {
    $type: 'akash.escrow.v1beta3.QueryAccountsRequest';
    scope: string;
    xid: string;
    owner: string;
    state: string;
    pagination: PageRequest | undefined;
}
export interface QueryAccountsResponse {
    $type: 'akash.escrow.v1beta3.QueryAccountsResponse';
    accounts: Account[];
    pagination: PageResponse | undefined;
}
export interface QueryPaymentsRequest {
    $type: 'akash.escrow.v1beta3.QueryPaymentsRequest';
    scope: string;
    xid: string;
    id: string;
    owner: string;
    state: string;
    pagination: PageRequest | undefined;
}
export interface QueryPaymentsResponse {
    $type: 'akash.escrow.v1beta3.QueryPaymentsResponse';
    payments: FractionalPayment[];
    pagination: PageResponse | undefined;
}
export declare const QueryAccountsRequest: {
    $type: "akash.escrow.v1beta3.QueryAccountsRequest";
    encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(object: any): QueryAccountsRequest;
    toJSON(message: QueryAccountsRequest): unknown;
    create(base?: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
    fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    $type: "akash.escrow.v1beta3.QueryAccountsResponse";
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    create(base?: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
    fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryPaymentsRequest: {
    $type: "akash.escrow.v1beta3.QueryPaymentsRequest";
    encode(message: QueryPaymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsRequest;
    fromJSON(object: any): QueryPaymentsRequest;
    toJSON(message: QueryPaymentsRequest): unknown;
    create(base?: DeepPartial<QueryPaymentsRequest>): QueryPaymentsRequest;
    fromPartial(object: DeepPartial<QueryPaymentsRequest>): QueryPaymentsRequest;
};
export declare const QueryPaymentsResponse: {
    $type: "akash.escrow.v1beta3.QueryPaymentsResponse";
    encode(message: QueryPaymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsResponse;
    fromJSON(object: any): QueryPaymentsResponse;
    toJSON(message: QueryPaymentsResponse): unknown;
    create(base?: DeepPartial<QueryPaymentsResponse>): QueryPaymentsResponse;
    fromPartial(object: DeepPartial<QueryPaymentsResponse>): QueryPaymentsResponse;
};
export interface Query {
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    Payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}
export declare const QueryServiceName = "akash.escrow.v1beta3.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    Payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
