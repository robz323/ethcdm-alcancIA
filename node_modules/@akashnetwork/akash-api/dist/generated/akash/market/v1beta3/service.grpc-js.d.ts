/// <reference types="node" />
import { ChannelCredentials, Client, Metadata } from '@grpc/grpc-js';
import type { CallOptions, ClientOptions, ClientUnaryCall, handleUnaryCall, ServiceError, UntypedServiceImplementation } from '@grpc/grpc-js';
import { MsgCloseBid, MsgCloseBidResponse, MsgCreateBid, MsgCreateBidResponse } from './bid';
import { MsgCloseLease, MsgCloseLeaseResponse, MsgCreateLease, MsgCreateLeaseResponse, MsgWithdrawLease, MsgWithdrawLeaseResponse } from './lease';
export declare const protobufPackage = "akash.market.v1beta3";
export type MsgService = typeof MsgService;
export declare const MsgService: {
    readonly createBid: {
        readonly path: "/akash.market.v1beta3.Msg/CreateBid";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgCreateBid) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgCreateBid;
        readonly responseSerialize: (value: MsgCreateBidResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgCreateBidResponse;
    };
    readonly closeBid: {
        readonly path: "/akash.market.v1beta3.Msg/CloseBid";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgCloseBid) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgCloseBid;
        readonly responseSerialize: (value: MsgCloseBidResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgCloseBidResponse;
    };
    readonly withdrawLease: {
        readonly path: "/akash.market.v1beta3.Msg/WithdrawLease";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgWithdrawLease) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgWithdrawLease;
        readonly responseSerialize: (value: MsgWithdrawLeaseResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgWithdrawLeaseResponse;
    };
    readonly createLease: {
        readonly path: "/akash.market.v1beta3.Msg/CreateLease";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgCreateLease) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgCreateLease;
        readonly responseSerialize: (value: MsgCreateLeaseResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgCreateLeaseResponse;
    };
    readonly closeLease: {
        readonly path: "/akash.market.v1beta3.Msg/CloseLease";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgCloseLease) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgCloseLease;
        readonly responseSerialize: (value: MsgCloseLeaseResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgCloseLeaseResponse;
    };
};
export interface MsgServer extends UntypedServiceImplementation {
    createBid: handleUnaryCall<MsgCreateBid, MsgCreateBidResponse>;
    closeBid: handleUnaryCall<MsgCloseBid, MsgCloseBidResponse>;
    withdrawLease: handleUnaryCall<MsgWithdrawLease, MsgWithdrawLeaseResponse>;
    createLease: handleUnaryCall<MsgCreateLease, MsgCreateLeaseResponse>;
    closeLease: handleUnaryCall<MsgCloseLease, MsgCloseLeaseResponse>;
}
export interface MsgClient extends Client {
    createBid(request: MsgCreateBid, callback: (error: ServiceError | null, response: MsgCreateBidResponse) => void): ClientUnaryCall;
    createBid(request: MsgCreateBid, metadata: Metadata, callback: (error: ServiceError | null, response: MsgCreateBidResponse) => void): ClientUnaryCall;
    createBid(request: MsgCreateBid, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgCreateBidResponse) => void): ClientUnaryCall;
    closeBid(request: MsgCloseBid, callback: (error: ServiceError | null, response: MsgCloseBidResponse) => void): ClientUnaryCall;
    closeBid(request: MsgCloseBid, metadata: Metadata, callback: (error: ServiceError | null, response: MsgCloseBidResponse) => void): ClientUnaryCall;
    closeBid(request: MsgCloseBid, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgCloseBidResponse) => void): ClientUnaryCall;
    withdrawLease(request: MsgWithdrawLease, callback: (error: ServiceError | null, response: MsgWithdrawLeaseResponse) => void): ClientUnaryCall;
    withdrawLease(request: MsgWithdrawLease, metadata: Metadata, callback: (error: ServiceError | null, response: MsgWithdrawLeaseResponse) => void): ClientUnaryCall;
    withdrawLease(request: MsgWithdrawLease, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgWithdrawLeaseResponse) => void): ClientUnaryCall;
    createLease(request: MsgCreateLease, callback: (error: ServiceError | null, response: MsgCreateLeaseResponse) => void): ClientUnaryCall;
    createLease(request: MsgCreateLease, metadata: Metadata, callback: (error: ServiceError | null, response: MsgCreateLeaseResponse) => void): ClientUnaryCall;
    createLease(request: MsgCreateLease, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgCreateLeaseResponse) => void): ClientUnaryCall;
    closeLease(request: MsgCloseLease, callback: (error: ServiceError | null, response: MsgCloseLeaseResponse) => void): ClientUnaryCall;
    closeLease(request: MsgCloseLease, metadata: Metadata, callback: (error: ServiceError | null, response: MsgCloseLeaseResponse) => void): ClientUnaryCall;
    closeLease(request: MsgCloseLease, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgCloseLeaseResponse) => void): ClientUnaryCall;
}
export declare const MsgClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MsgClient;
    service: typeof MsgService;
    serviceName: string;
};
