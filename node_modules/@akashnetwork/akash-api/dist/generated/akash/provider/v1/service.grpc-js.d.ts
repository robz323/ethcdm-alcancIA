/// <reference types="node" />
import { ChannelCredentials, Client, ClientReadableStream, handleServerStreamingCall, Metadata } from '@grpc/grpc-js';
import type { CallOptions, ClientOptions, ClientUnaryCall, handleUnaryCall, ServiceError, UntypedServiceImplementation } from '@grpc/grpc-js';
import { Empty } from '../../../google/protobuf/empty';
import { Status } from './status';
export declare const protobufPackage = "akash.provider.v1";
export type ProviderRPCService = typeof ProviderRPCService;
export declare const ProviderRPCService: {
    readonly getStatus: {
        readonly path: "/akash.provider.v1.ProviderRPC/GetStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Status) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Status;
    };
    readonly streamStatus: {
        readonly path: "/akash.provider.v1.ProviderRPC/StreamStatus";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Status) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Status;
    };
};
export interface ProviderRPCServer extends UntypedServiceImplementation {
    getStatus: handleUnaryCall<Empty, Status>;
    streamStatus: handleServerStreamingCall<Empty, Status>;
}
export interface ProviderRPCClient extends Client {
    getStatus(request: Empty, callback: (error: ServiceError | null, response: Status) => void): ClientUnaryCall;
    getStatus(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: Status) => void): ClientUnaryCall;
    getStatus(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Status) => void): ClientUnaryCall;
    streamStatus(request: Empty, options?: Partial<CallOptions>): ClientReadableStream<Status>;
    streamStatus(request: Empty, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Status>;
}
export declare const ProviderRPCClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProviderRPCClient;
    service: typeof ProviderRPCService;
    serviceName: string;
};
