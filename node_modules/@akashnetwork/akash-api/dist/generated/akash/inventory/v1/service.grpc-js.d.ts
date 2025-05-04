/// <reference types="node" />
import { ChannelCredentials, Client, ClientReadableStream, handleServerStreamingCall, Metadata } from '@grpc/grpc-js';
import type { CallOptions, ClientOptions, ClientUnaryCall, handleUnaryCall, ServiceError, UntypedServiceImplementation } from '@grpc/grpc-js';
import { Empty } from '../../../google/protobuf/empty';
import { Cluster } from './cluster';
import { Node } from './node';
export declare const protobufPackage = "akash.inventory.v1";
export type NodeRPCService = typeof NodeRPCService;
export declare const NodeRPCService: {
    readonly queryNode: {
        readonly path: "/akash.inventory.v1.NodeRPC/QueryNode";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Node) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Node;
    };
    readonly streamNode: {
        readonly path: "/akash.inventory.v1.NodeRPC/StreamNode";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Node) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Node;
    };
};
export interface NodeRPCServer extends UntypedServiceImplementation {
    queryNode: handleUnaryCall<Empty, Node>;
    streamNode: handleServerStreamingCall<Empty, Node>;
}
export interface NodeRPCClient extends Client {
    queryNode(request: Empty, callback: (error: ServiceError | null, response: Node) => void): ClientUnaryCall;
    queryNode(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: Node) => void): ClientUnaryCall;
    queryNode(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Node) => void): ClientUnaryCall;
    streamNode(request: Empty, options?: Partial<CallOptions>): ClientReadableStream<Node>;
    streamNode(request: Empty, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Node>;
}
export declare const NodeRPCClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): NodeRPCClient;
    service: typeof NodeRPCService;
    serviceName: string;
};
export type ClusterRPCService = typeof ClusterRPCService;
export declare const ClusterRPCService: {
    readonly queryCluster: {
        readonly path: "/akash.inventory.v1.ClusterRPC/QueryCluster";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    readonly streamCluster: {
        readonly path: "/akash.inventory.v1.ClusterRPC/StreamCluster";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
};
export interface ClusterRPCServer extends UntypedServiceImplementation {
    queryCluster: handleUnaryCall<Empty, Cluster>;
    streamCluster: handleServerStreamingCall<Empty, Cluster>;
}
export interface ClusterRPCClient extends Client {
    queryCluster(request: Empty, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    queryCluster(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    queryCluster(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    streamCluster(request: Empty, options?: Partial<CallOptions>): ClientReadableStream<Cluster>;
    streamCluster(request: Empty, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Cluster>;
}
export declare const ClusterRPCClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ClusterRPCClient;
    service: typeof ClusterRPCService;
    serviceName: string;
};
