/// <reference types="node" />
import { ChannelCredentials, Client, Metadata } from '@grpc/grpc-js';
import type { CallOptions, ClientOptions, ClientUnaryCall, handleUnaryCall, ServiceError, UntypedServiceImplementation } from '@grpc/grpc-js';
import { MsgCloseDeployment, MsgCloseDeploymentResponse, MsgCreateDeployment, MsgCreateDeploymentResponse, MsgDepositDeployment, MsgDepositDeploymentResponse, MsgUpdateDeployment, MsgUpdateDeploymentResponse } from './deploymentmsg';
import { MsgCloseGroup, MsgCloseGroupResponse, MsgPauseGroup, MsgPauseGroupResponse, MsgStartGroup, MsgStartGroupResponse } from './groupmsg';
export declare const protobufPackage = "akash.deployment.v1beta3";
export type MsgService = typeof MsgService;
export declare const MsgService: {
    readonly createDeployment: {
        readonly path: "/akash.deployment.v1beta3.Msg/CreateDeployment";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgCreateDeployment) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgCreateDeployment;
        readonly responseSerialize: (value: MsgCreateDeploymentResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgCreateDeploymentResponse;
    };
    readonly depositDeployment: {
        readonly path: "/akash.deployment.v1beta3.Msg/DepositDeployment";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgDepositDeployment) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgDepositDeployment;
        readonly responseSerialize: (value: MsgDepositDeploymentResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgDepositDeploymentResponse;
    };
    readonly updateDeployment: {
        readonly path: "/akash.deployment.v1beta3.Msg/UpdateDeployment";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgUpdateDeployment) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgUpdateDeployment;
        readonly responseSerialize: (value: MsgUpdateDeploymentResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgUpdateDeploymentResponse;
    };
    readonly closeDeployment: {
        readonly path: "/akash.deployment.v1beta3.Msg/CloseDeployment";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgCloseDeployment) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgCloseDeployment;
        readonly responseSerialize: (value: MsgCloseDeploymentResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgCloseDeploymentResponse;
    };
    readonly closeGroup: {
        readonly path: "/akash.deployment.v1beta3.Msg/CloseGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgCloseGroup) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgCloseGroup;
        readonly responseSerialize: (value: MsgCloseGroupResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgCloseGroupResponse;
    };
    readonly pauseGroup: {
        readonly path: "/akash.deployment.v1beta3.Msg/PauseGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgPauseGroup) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgPauseGroup;
        readonly responseSerialize: (value: MsgPauseGroupResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgPauseGroupResponse;
    };
    readonly startGroup: {
        readonly path: "/akash.deployment.v1beta3.Msg/StartGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MsgStartGroup) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MsgStartGroup;
        readonly responseSerialize: (value: MsgStartGroupResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => MsgStartGroupResponse;
    };
};
export interface MsgServer extends UntypedServiceImplementation {
    createDeployment: handleUnaryCall<MsgCreateDeployment, MsgCreateDeploymentResponse>;
    depositDeployment: handleUnaryCall<MsgDepositDeployment, MsgDepositDeploymentResponse>;
    updateDeployment: handleUnaryCall<MsgUpdateDeployment, MsgUpdateDeploymentResponse>;
    closeDeployment: handleUnaryCall<MsgCloseDeployment, MsgCloseDeploymentResponse>;
    closeGroup: handleUnaryCall<MsgCloseGroup, MsgCloseGroupResponse>;
    pauseGroup: handleUnaryCall<MsgPauseGroup, MsgPauseGroupResponse>;
    startGroup: handleUnaryCall<MsgStartGroup, MsgStartGroupResponse>;
}
export interface MsgClient extends Client {
    createDeployment(request: MsgCreateDeployment, callback: (error: ServiceError | null, response: MsgCreateDeploymentResponse) => void): ClientUnaryCall;
    createDeployment(request: MsgCreateDeployment, metadata: Metadata, callback: (error: ServiceError | null, response: MsgCreateDeploymentResponse) => void): ClientUnaryCall;
    createDeployment(request: MsgCreateDeployment, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgCreateDeploymentResponse) => void): ClientUnaryCall;
    depositDeployment(request: MsgDepositDeployment, callback: (error: ServiceError | null, response: MsgDepositDeploymentResponse) => void): ClientUnaryCall;
    depositDeployment(request: MsgDepositDeployment, metadata: Metadata, callback: (error: ServiceError | null, response: MsgDepositDeploymentResponse) => void): ClientUnaryCall;
    depositDeployment(request: MsgDepositDeployment, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgDepositDeploymentResponse) => void): ClientUnaryCall;
    updateDeployment(request: MsgUpdateDeployment, callback: (error: ServiceError | null, response: MsgUpdateDeploymentResponse) => void): ClientUnaryCall;
    updateDeployment(request: MsgUpdateDeployment, metadata: Metadata, callback: (error: ServiceError | null, response: MsgUpdateDeploymentResponse) => void): ClientUnaryCall;
    updateDeployment(request: MsgUpdateDeployment, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgUpdateDeploymentResponse) => void): ClientUnaryCall;
    closeDeployment(request: MsgCloseDeployment, callback: (error: ServiceError | null, response: MsgCloseDeploymentResponse) => void): ClientUnaryCall;
    closeDeployment(request: MsgCloseDeployment, metadata: Metadata, callback: (error: ServiceError | null, response: MsgCloseDeploymentResponse) => void): ClientUnaryCall;
    closeDeployment(request: MsgCloseDeployment, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgCloseDeploymentResponse) => void): ClientUnaryCall;
    closeGroup(request: MsgCloseGroup, callback: (error: ServiceError | null, response: MsgCloseGroupResponse) => void): ClientUnaryCall;
    closeGroup(request: MsgCloseGroup, metadata: Metadata, callback: (error: ServiceError | null, response: MsgCloseGroupResponse) => void): ClientUnaryCall;
    closeGroup(request: MsgCloseGroup, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgCloseGroupResponse) => void): ClientUnaryCall;
    pauseGroup(request: MsgPauseGroup, callback: (error: ServiceError | null, response: MsgPauseGroupResponse) => void): ClientUnaryCall;
    pauseGroup(request: MsgPauseGroup, metadata: Metadata, callback: (error: ServiceError | null, response: MsgPauseGroupResponse) => void): ClientUnaryCall;
    pauseGroup(request: MsgPauseGroup, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgPauseGroupResponse) => void): ClientUnaryCall;
    startGroup(request: MsgStartGroup, callback: (error: ServiceError | null, response: MsgStartGroupResponse) => void): ClientUnaryCall;
    startGroup(request: MsgStartGroup, metadata: Metadata, callback: (error: ServiceError | null, response: MsgStartGroupResponse) => void): ClientUnaryCall;
    startGroup(request: MsgStartGroup, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MsgStartGroupResponse) => void): ClientUnaryCall;
}
export declare const MsgClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MsgClient;
    service: typeof MsgService;
    serviceName: string;
};
