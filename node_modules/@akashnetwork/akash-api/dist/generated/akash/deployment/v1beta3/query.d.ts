import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Account } from '../../escrow/v1beta3/types';
import { Deployment, DeploymentFilters, DeploymentID } from './deployment';
import { Group } from './group';
import { GroupID } from './groupid';
export interface QueryDeploymentsRequest {
    $type: 'akash.deployment.v1beta3.QueryDeploymentsRequest';
    filters: DeploymentFilters | undefined;
    pagination: PageRequest | undefined;
}
export interface QueryDeploymentsResponse {
    $type: 'akash.deployment.v1beta3.QueryDeploymentsResponse';
    deployments: QueryDeploymentResponse[];
    pagination: PageResponse | undefined;
}
export interface QueryDeploymentRequest {
    $type: 'akash.deployment.v1beta3.QueryDeploymentRequest';
    id: DeploymentID | undefined;
}
export interface QueryDeploymentResponse {
    $type: 'akash.deployment.v1beta3.QueryDeploymentResponse';
    deployment: Deployment | undefined;
    groups: Group[];
    escrowAccount: Account | undefined;
}
export interface QueryGroupRequest {
    $type: 'akash.deployment.v1beta3.QueryGroupRequest';
    id: GroupID | undefined;
}
export interface QueryGroupResponse {
    $type: 'akash.deployment.v1beta3.QueryGroupResponse';
    group: Group | undefined;
}
export declare const QueryDeploymentsRequest: {
    $type: "akash.deployment.v1beta3.QueryDeploymentsRequest";
    encode(message: QueryDeploymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsRequest;
    fromJSON(object: any): QueryDeploymentsRequest;
    toJSON(message: QueryDeploymentsRequest): unknown;
    create(base?: DeepPartial<QueryDeploymentsRequest>): QueryDeploymentsRequest;
    fromPartial(object: DeepPartial<QueryDeploymentsRequest>): QueryDeploymentsRequest;
};
export declare const QueryDeploymentsResponse: {
    $type: "akash.deployment.v1beta3.QueryDeploymentsResponse";
    encode(message: QueryDeploymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsResponse;
    fromJSON(object: any): QueryDeploymentsResponse;
    toJSON(message: QueryDeploymentsResponse): unknown;
    create(base?: DeepPartial<QueryDeploymentsResponse>): QueryDeploymentsResponse;
    fromPartial(object: DeepPartial<QueryDeploymentsResponse>): QueryDeploymentsResponse;
};
export declare const QueryDeploymentRequest: {
    $type: "akash.deployment.v1beta3.QueryDeploymentRequest";
    encode(message: QueryDeploymentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentRequest;
    fromJSON(object: any): QueryDeploymentRequest;
    toJSON(message: QueryDeploymentRequest): unknown;
    create(base?: DeepPartial<QueryDeploymentRequest>): QueryDeploymentRequest;
    fromPartial(object: DeepPartial<QueryDeploymentRequest>): QueryDeploymentRequest;
};
export declare const QueryDeploymentResponse: {
    $type: "akash.deployment.v1beta3.QueryDeploymentResponse";
    encode(message: QueryDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentResponse;
    fromJSON(object: any): QueryDeploymentResponse;
    toJSON(message: QueryDeploymentResponse): unknown;
    create(base?: DeepPartial<QueryDeploymentResponse>): QueryDeploymentResponse;
    fromPartial(object: DeepPartial<QueryDeploymentResponse>): QueryDeploymentResponse;
};
export declare const QueryGroupRequest: {
    $type: "akash.deployment.v1beta3.QueryGroupRequest";
    encode(message: QueryGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupRequest;
    fromJSON(object: any): QueryGroupRequest;
    toJSON(message: QueryGroupRequest): unknown;
    create(base?: DeepPartial<QueryGroupRequest>): QueryGroupRequest;
    fromPartial(object: DeepPartial<QueryGroupRequest>): QueryGroupRequest;
};
export declare const QueryGroupResponse: {
    $type: "akash.deployment.v1beta3.QueryGroupResponse";
    encode(message: QueryGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupResponse;
    fromJSON(object: any): QueryGroupResponse;
    toJSON(message: QueryGroupResponse): unknown;
    create(base?: DeepPartial<QueryGroupResponse>): QueryGroupResponse;
    fromPartial(object: DeepPartial<QueryGroupResponse>): QueryGroupResponse;
};
export interface Query {
    Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export declare const QueryServiceName = "akash.deployment.v1beta3.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
