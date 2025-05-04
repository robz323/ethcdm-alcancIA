import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Account, FractionalPayment } from '../../escrow/v1beta3/types';
import { Bid, BidFilters, BidID } from './bid';
import { Lease, LeaseFilters, LeaseID } from './lease';
import { Order, OrderFilters, OrderID } from './order';
export interface QueryOrdersRequest {
    $type: 'akash.market.v1beta4.QueryOrdersRequest';
    filters: OrderFilters | undefined;
    pagination: PageRequest | undefined;
}
export interface QueryOrdersResponse {
    $type: 'akash.market.v1beta4.QueryOrdersResponse';
    orders: Order[];
    pagination: PageResponse | undefined;
}
export interface QueryOrderRequest {
    $type: 'akash.market.v1beta4.QueryOrderRequest';
    id: OrderID | undefined;
}
export interface QueryOrderResponse {
    $type: 'akash.market.v1beta4.QueryOrderResponse';
    order: Order | undefined;
}
export interface QueryBidsRequest {
    $type: 'akash.market.v1beta4.QueryBidsRequest';
    filters: BidFilters | undefined;
    pagination: PageRequest | undefined;
}
export interface QueryBidsResponse {
    $type: 'akash.market.v1beta4.QueryBidsResponse';
    bids: QueryBidResponse[];
    pagination: PageResponse | undefined;
}
export interface QueryBidRequest {
    $type: 'akash.market.v1beta4.QueryBidRequest';
    id: BidID | undefined;
}
export interface QueryBidResponse {
    $type: 'akash.market.v1beta4.QueryBidResponse';
    bid: Bid | undefined;
    escrowAccount: Account | undefined;
}
export interface QueryLeasesRequest {
    $type: 'akash.market.v1beta4.QueryLeasesRequest';
    filters: LeaseFilters | undefined;
    pagination: PageRequest | undefined;
}
export interface QueryLeasesResponse {
    $type: 'akash.market.v1beta4.QueryLeasesResponse';
    leases: QueryLeaseResponse[];
    pagination: PageResponse | undefined;
}
export interface QueryLeaseRequest {
    $type: 'akash.market.v1beta4.QueryLeaseRequest';
    id: LeaseID | undefined;
}
export interface QueryLeaseResponse {
    $type: 'akash.market.v1beta4.QueryLeaseResponse';
    lease: Lease | undefined;
    escrowPayment: FractionalPayment | undefined;
}
export declare const QueryOrdersRequest: {
    $type: "akash.market.v1beta4.QueryOrdersRequest";
    encode(message: QueryOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersRequest;
    fromJSON(object: any): QueryOrdersRequest;
    toJSON(message: QueryOrdersRequest): unknown;
    create(base?: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest;
    fromPartial(object: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest;
};
export declare const QueryOrdersResponse: {
    $type: "akash.market.v1beta4.QueryOrdersResponse";
    encode(message: QueryOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse;
    fromJSON(object: any): QueryOrdersResponse;
    toJSON(message: QueryOrdersResponse): unknown;
    create(base?: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse;
    fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse;
};
export declare const QueryOrderRequest: {
    $type: "akash.market.v1beta4.QueryOrderRequest";
    encode(message: QueryOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest;
    fromJSON(object: any): QueryOrderRequest;
    toJSON(message: QueryOrderRequest): unknown;
    create(base?: DeepPartial<QueryOrderRequest>): QueryOrderRequest;
    fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest;
};
export declare const QueryOrderResponse: {
    $type: "akash.market.v1beta4.QueryOrderResponse";
    encode(message: QueryOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse;
    fromJSON(object: any): QueryOrderResponse;
    toJSON(message: QueryOrderResponse): unknown;
    create(base?: DeepPartial<QueryOrderResponse>): QueryOrderResponse;
    fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse;
};
export declare const QueryBidsRequest: {
    $type: "akash.market.v1beta4.QueryBidsRequest";
    encode(message: QueryBidsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsRequest;
    fromJSON(object: any): QueryBidsRequest;
    toJSON(message: QueryBidsRequest): unknown;
    create(base?: DeepPartial<QueryBidsRequest>): QueryBidsRequest;
    fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest;
};
export declare const QueryBidsResponse: {
    $type: "akash.market.v1beta4.QueryBidsResponse";
    encode(message: QueryBidsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsResponse;
    fromJSON(object: any): QueryBidsResponse;
    toJSON(message: QueryBidsResponse): unknown;
    create(base?: DeepPartial<QueryBidsResponse>): QueryBidsResponse;
    fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse;
};
export declare const QueryBidRequest: {
    $type: "akash.market.v1beta4.QueryBidRequest";
    encode(message: QueryBidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidRequest;
    fromJSON(object: any): QueryBidRequest;
    toJSON(message: QueryBidRequest): unknown;
    create(base?: DeepPartial<QueryBidRequest>): QueryBidRequest;
    fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest;
};
export declare const QueryBidResponse: {
    $type: "akash.market.v1beta4.QueryBidResponse";
    encode(message: QueryBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidResponse;
    fromJSON(object: any): QueryBidResponse;
    toJSON(message: QueryBidResponse): unknown;
    create(base?: DeepPartial<QueryBidResponse>): QueryBidResponse;
    fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse;
};
export declare const QueryLeasesRequest: {
    $type: "akash.market.v1beta4.QueryLeasesRequest";
    encode(message: QueryLeasesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesRequest;
    fromJSON(object: any): QueryLeasesRequest;
    toJSON(message: QueryLeasesRequest): unknown;
    create(base?: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest;
    fromPartial(object: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest;
};
export declare const QueryLeasesResponse: {
    $type: "akash.market.v1beta4.QueryLeasesResponse";
    encode(message: QueryLeasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesResponse;
    fromJSON(object: any): QueryLeasesResponse;
    toJSON(message: QueryLeasesResponse): unknown;
    create(base?: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse;
    fromPartial(object: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse;
};
export declare const QueryLeaseRequest: {
    $type: "akash.market.v1beta4.QueryLeaseRequest";
    encode(message: QueryLeaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseRequest;
    fromJSON(object: any): QueryLeaseRequest;
    toJSON(message: QueryLeaseRequest): unknown;
    create(base?: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest;
    fromPartial(object: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest;
};
export declare const QueryLeaseResponse: {
    $type: "akash.market.v1beta4.QueryLeaseResponse";
    encode(message: QueryLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseResponse;
    fromJSON(object: any): QueryLeaseResponse;
    toJSON(message: QueryLeaseResponse): unknown;
    create(base?: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse;
    fromPartial(object: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse;
};
export interface Query {
    Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
    Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
export declare const QueryServiceName = "akash.market.v1beta4.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
    Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
