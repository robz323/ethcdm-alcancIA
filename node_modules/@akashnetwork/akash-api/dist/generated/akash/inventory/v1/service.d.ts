import { Observable } from 'rxjs';
import { Empty } from '../../../google/protobuf/empty';
import { Cluster } from './cluster';
import { Node } from './node';
export interface NodeRPC {
    QueryNode(request: Empty): Promise<Node>;
    StreamNode(request: Empty): Observable<Node>;
}
export declare const NodeRPCServiceName = "akash.inventory.v1.NodeRPC";
export declare class NodeRPCClientImpl implements NodeRPC {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    QueryNode(request: Empty): Promise<Node>;
    StreamNode(request: Empty): Observable<Node>;
}
export interface ClusterRPC {
    QueryCluster(request: Empty): Promise<Cluster>;
    StreamCluster(request: Empty): Observable<Cluster>;
}
export declare const ClusterRPCServiceName = "akash.inventory.v1.ClusterRPC";
export declare class ClusterRPCClientImpl implements ClusterRPC {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    QueryCluster(request: Empty): Promise<Cluster>;
    StreamCluster(request: Empty): Observable<Cluster>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
    clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
    serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
    bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
export {};
