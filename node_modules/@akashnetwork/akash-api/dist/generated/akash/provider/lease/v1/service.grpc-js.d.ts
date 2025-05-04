/// <reference types="node" />
import { ChannelCredentials, Client, ClientReadableStream, handleServerStreamingCall, Metadata } from '@grpc/grpc-js';
import type { CallOptions, ClientOptions, ClientUnaryCall, handleUnaryCall, ServiceError, UntypedServiceImplementation } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Group } from '../../../manifest/v2beta2/group';
import { LeaseID } from '../../../market/v1beta4/lease';
export declare const protobufPackage = "akash.provider.lease.v1";
export interface LeaseServiceStatus {
    $type: 'akash.provider.lease.v1.LeaseServiceStatus';
    available: number;
    total: number;
    uris: string[];
    observedGeneration: Long;
    replicas: number;
    updatedReplicas: number;
    readyReplicas: number;
    availableReplicas: number;
}
export interface LeaseIPStatus {
    $type: 'akash.provider.lease.v1.LeaseIPStatus';
    port: number;
    externalPort: number;
    protocol: string;
    ip: string;
}
export interface ForwarderPortStatus {
    $type: 'akash.provider.lease.v1.ForwarderPortStatus';
    host: string;
    port: number;
    externalPort: number;
    proto: string;
    name: string;
}
export interface ServiceStatus {
    $type: 'akash.provider.lease.v1.ServiceStatus';
    name: string;
    status: LeaseServiceStatus | undefined;
    ports: ForwarderPortStatus[];
    ips: LeaseIPStatus[];
}
export interface SendManifestRequest {
    $type: 'akash.provider.lease.v1.SendManifestRequest';
    leaseId: LeaseID | undefined;
    manifest: Group[];
}
export interface SendManifestResponse {
    $type: 'akash.provider.lease.v1.SendManifestResponse';
}
export interface ServiceLogsRequest {
    $type: 'akash.provider.lease.v1.ServiceLogsRequest';
    leaseId: LeaseID | undefined;
    services: string[];
}
export interface ServiceLogs {
    $type: 'akash.provider.lease.v1.ServiceLogs';
    name: string;
    logs: Uint8Array;
}
export interface ServiceLogsResponse {
    $type: 'akash.provider.lease.v1.ServiceLogsResponse';
    services: ServiceLogs[];
}
export interface ShellRequest {
    $type: 'akash.provider.lease.v1.ShellRequest';
    leaseId: LeaseID | undefined;
}
export interface ServiceStatusRequest {
    $type: 'akash.provider.lease.v1.ServiceStatusRequest';
    leaseId: LeaseID | undefined;
    services: string[];
}
export interface ServiceStatusResponse {
    $type: 'akash.provider.lease.v1.ServiceStatusResponse';
    services: ServiceStatus[];
}
export declare const LeaseServiceStatus: {
    $type: "akash.provider.lease.v1.LeaseServiceStatus";
    encode(message: LeaseServiceStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LeaseServiceStatus;
    fromJSON(object: any): LeaseServiceStatus;
    toJSON(message: LeaseServiceStatus): unknown;
    create(base?: DeepPartial<LeaseServiceStatus>): LeaseServiceStatus;
    fromPartial(object: DeepPartial<LeaseServiceStatus>): LeaseServiceStatus;
};
export declare const LeaseIPStatus: {
    $type: "akash.provider.lease.v1.LeaseIPStatus";
    encode(message: LeaseIPStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LeaseIPStatus;
    fromJSON(object: any): LeaseIPStatus;
    toJSON(message: LeaseIPStatus): unknown;
    create(base?: DeepPartial<LeaseIPStatus>): LeaseIPStatus;
    fromPartial(object: DeepPartial<LeaseIPStatus>): LeaseIPStatus;
};
export declare const ForwarderPortStatus: {
    $type: "akash.provider.lease.v1.ForwarderPortStatus";
    encode(message: ForwarderPortStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ForwarderPortStatus;
    fromJSON(object: any): ForwarderPortStatus;
    toJSON(message: ForwarderPortStatus): unknown;
    create(base?: DeepPartial<ForwarderPortStatus>): ForwarderPortStatus;
    fromPartial(object: DeepPartial<ForwarderPortStatus>): ForwarderPortStatus;
};
export declare const ServiceStatus: {
    $type: "akash.provider.lease.v1.ServiceStatus";
    encode(message: ServiceStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceStatus;
    fromJSON(object: any): ServiceStatus;
    toJSON(message: ServiceStatus): unknown;
    create(base?: DeepPartial<ServiceStatus>): ServiceStatus;
    fromPartial(object: DeepPartial<ServiceStatus>): ServiceStatus;
};
export declare const SendManifestRequest: {
    $type: "akash.provider.lease.v1.SendManifestRequest";
    encode(message: SendManifestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendManifestRequest;
    fromJSON(object: any): SendManifestRequest;
    toJSON(message: SendManifestRequest): unknown;
    create(base?: DeepPartial<SendManifestRequest>): SendManifestRequest;
    fromPartial(object: DeepPartial<SendManifestRequest>): SendManifestRequest;
};
export declare const SendManifestResponse: {
    $type: "akash.provider.lease.v1.SendManifestResponse";
    encode(_: SendManifestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendManifestResponse;
    fromJSON(_: any): SendManifestResponse;
    toJSON(_: SendManifestResponse): unknown;
    create(base?: DeepPartial<SendManifestResponse>): SendManifestResponse;
    fromPartial(_: DeepPartial<SendManifestResponse>): SendManifestResponse;
};
export declare const ServiceLogsRequest: {
    $type: "akash.provider.lease.v1.ServiceLogsRequest";
    encode(message: ServiceLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLogsRequest;
    fromJSON(object: any): ServiceLogsRequest;
    toJSON(message: ServiceLogsRequest): unknown;
    create(base?: DeepPartial<ServiceLogsRequest>): ServiceLogsRequest;
    fromPartial(object: DeepPartial<ServiceLogsRequest>): ServiceLogsRequest;
};
export declare const ServiceLogs: {
    $type: "akash.provider.lease.v1.ServiceLogs";
    encode(message: ServiceLogs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLogs;
    fromJSON(object: any): ServiceLogs;
    toJSON(message: ServiceLogs): unknown;
    create(base?: DeepPartial<ServiceLogs>): ServiceLogs;
    fromPartial(object: DeepPartial<ServiceLogs>): ServiceLogs;
};
export declare const ServiceLogsResponse: {
    $type: "akash.provider.lease.v1.ServiceLogsResponse";
    encode(message: ServiceLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLogsResponse;
    fromJSON(object: any): ServiceLogsResponse;
    toJSON(message: ServiceLogsResponse): unknown;
    create(base?: DeepPartial<ServiceLogsResponse>): ServiceLogsResponse;
    fromPartial(object: DeepPartial<ServiceLogsResponse>): ServiceLogsResponse;
};
export declare const ShellRequest: {
    $type: "akash.provider.lease.v1.ShellRequest";
    encode(message: ShellRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ShellRequest;
    fromJSON(object: any): ShellRequest;
    toJSON(message: ShellRequest): unknown;
    create(base?: DeepPartial<ShellRequest>): ShellRequest;
    fromPartial(object: DeepPartial<ShellRequest>): ShellRequest;
};
export declare const ServiceStatusRequest: {
    $type: "akash.provider.lease.v1.ServiceStatusRequest";
    encode(message: ServiceStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceStatusRequest;
    fromJSON(object: any): ServiceStatusRequest;
    toJSON(message: ServiceStatusRequest): unknown;
    create(base?: DeepPartial<ServiceStatusRequest>): ServiceStatusRequest;
    fromPartial(object: DeepPartial<ServiceStatusRequest>): ServiceStatusRequest;
};
export declare const ServiceStatusResponse: {
    $type: "akash.provider.lease.v1.ServiceStatusResponse";
    encode(message: ServiceStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceStatusResponse;
    fromJSON(object: any): ServiceStatusResponse;
    toJSON(message: ServiceStatusResponse): unknown;
    create(base?: DeepPartial<ServiceStatusResponse>): ServiceStatusResponse;
    fromPartial(object: DeepPartial<ServiceStatusResponse>): ServiceStatusResponse;
};
export type LeaseRPCService = typeof LeaseRPCService;
export declare const LeaseRPCService: {
    readonly sendManifest: {
        readonly path: "/akash.provider.lease.v1.LeaseRPC/SendManifest";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SendManifestRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SendManifestRequest;
        readonly responseSerialize: (value: SendManifestResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SendManifestResponse;
    };
    readonly serviceStatus: {
        readonly path: "/akash.provider.lease.v1.LeaseRPC/ServiceStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ServiceStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ServiceStatusRequest;
        readonly responseSerialize: (value: ServiceStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ServiceStatusResponse;
    };
    readonly streamServiceStatus: {
        readonly path: "/akash.provider.lease.v1.LeaseRPC/StreamServiceStatus";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ServiceStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ServiceStatusRequest;
        readonly responseSerialize: (value: ServiceStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ServiceStatusResponse;
    };
    readonly serviceLogs: {
        readonly path: "/akash.provider.lease.v1.LeaseRPC/ServiceLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ServiceLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ServiceLogsRequest;
        readonly responseSerialize: (value: ServiceLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ServiceLogsResponse;
    };
    readonly streamServiceLogs: {
        readonly path: "/akash.provider.lease.v1.LeaseRPC/StreamServiceLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ServiceLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ServiceLogsRequest;
        readonly responseSerialize: (value: ServiceLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ServiceLogsResponse;
    };
};
export interface LeaseRPCServer extends UntypedServiceImplementation {
    sendManifest: handleUnaryCall<SendManifestRequest, SendManifestResponse>;
    serviceStatus: handleUnaryCall<ServiceStatusRequest, ServiceStatusResponse>;
    streamServiceStatus: handleServerStreamingCall<ServiceStatusRequest, ServiceStatusResponse>;
    serviceLogs: handleUnaryCall<ServiceLogsRequest, ServiceLogsResponse>;
    streamServiceLogs: handleServerStreamingCall<ServiceLogsRequest, ServiceLogsResponse>;
}
export interface LeaseRPCClient extends Client {
    sendManifest(request: SendManifestRequest, callback: (error: ServiceError | null, response: SendManifestResponse) => void): ClientUnaryCall;
    sendManifest(request: SendManifestRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SendManifestResponse) => void): ClientUnaryCall;
    sendManifest(request: SendManifestRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SendManifestResponse) => void): ClientUnaryCall;
    serviceStatus(request: ServiceStatusRequest, callback: (error: ServiceError | null, response: ServiceStatusResponse) => void): ClientUnaryCall;
    serviceStatus(request: ServiceStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ServiceStatusResponse) => void): ClientUnaryCall;
    serviceStatus(request: ServiceStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ServiceStatusResponse) => void): ClientUnaryCall;
    streamServiceStatus(request: ServiceStatusRequest, options?: Partial<CallOptions>): ClientReadableStream<ServiceStatusResponse>;
    streamServiceStatus(request: ServiceStatusRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<ServiceStatusResponse>;
    serviceLogs(request: ServiceLogsRequest, callback: (error: ServiceError | null, response: ServiceLogsResponse) => void): ClientUnaryCall;
    serviceLogs(request: ServiceLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ServiceLogsResponse) => void): ClientUnaryCall;
    serviceLogs(request: ServiceLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ServiceLogsResponse) => void): ClientUnaryCall;
    streamServiceLogs(request: ServiceLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<ServiceLogsResponse>;
    streamServiceLogs(request: ServiceLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<ServiceLogsResponse>;
}
export declare const LeaseRPCClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LeaseRPCClient;
    service: typeof LeaseRPCService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
