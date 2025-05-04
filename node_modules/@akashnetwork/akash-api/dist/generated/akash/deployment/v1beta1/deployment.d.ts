import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { GroupSpec, MsgCloseGroup, MsgCloseGroupResponse, MsgPauseGroup, MsgPauseGroupResponse, MsgStartGroup, MsgStartGroupResponse } from './group';
export interface MsgCreateDeployment {
    $type: 'akash.deployment.v1beta1.MsgCreateDeployment';
    id: DeploymentID | undefined;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit: Coin | undefined;
}
export interface MsgCreateDeploymentResponse {
    $type: 'akash.deployment.v1beta1.MsgCreateDeploymentResponse';
}
export interface MsgDepositDeployment {
    $type: 'akash.deployment.v1beta1.MsgDepositDeployment';
    id: DeploymentID | undefined;
    amount: Coin | undefined;
}
export interface MsgDepositDeploymentResponse {
    $type: 'akash.deployment.v1beta1.MsgDepositDeploymentResponse';
}
export interface MsgUpdateDeployment {
    $type: 'akash.deployment.v1beta1.MsgUpdateDeployment';
    id: DeploymentID | undefined;
    groups: GroupSpec[];
    version: Uint8Array;
}
export interface MsgUpdateDeploymentResponse {
    $type: 'akash.deployment.v1beta1.MsgUpdateDeploymentResponse';
}
export interface MsgCloseDeployment {
    $type: 'akash.deployment.v1beta1.MsgCloseDeployment';
    id: DeploymentID | undefined;
}
export interface MsgCloseDeploymentResponse {
    $type: 'akash.deployment.v1beta1.MsgCloseDeploymentResponse';
}
export interface DeploymentID {
    $type: 'akash.deployment.v1beta1.DeploymentID';
    owner: string;
    dseq: Long;
}
export interface Deployment {
    $type: 'akash.deployment.v1beta1.Deployment';
    deploymentId: DeploymentID | undefined;
    state: Deployment_State;
    version: Uint8Array;
    createdAt: Long;
}
export declare enum Deployment_State {
    invalid = 0,
    active = 1,
    closed = 2,
    UNRECOGNIZED = -1
}
export declare function deployment_StateFromJSON(object: any): Deployment_State;
export declare function deployment_StateToJSON(object: Deployment_State): string;
export interface DeploymentFilters {
    $type: 'akash.deployment.v1beta1.DeploymentFilters';
    owner: string;
    dseq: Long;
    state: string;
}
export declare const MsgCreateDeployment: {
    $type: "akash.deployment.v1beta1.MsgCreateDeployment";
    encode(message: MsgCreateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeployment;
    fromJSON(object: any): MsgCreateDeployment;
    toJSON(message: MsgCreateDeployment): unknown;
    create(base?: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment;
    fromPartial(object: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment;
};
export declare const MsgCreateDeploymentResponse: {
    $type: "akash.deployment.v1beta1.MsgCreateDeploymentResponse";
    encode(_: MsgCreateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeploymentResponse;
    fromJSON(_: any): MsgCreateDeploymentResponse;
    toJSON(_: MsgCreateDeploymentResponse): unknown;
    create(base?: DeepPartial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse;
    fromPartial(_: DeepPartial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse;
};
export declare const MsgDepositDeployment: {
    $type: "akash.deployment.v1beta1.MsgDepositDeployment";
    encode(message: MsgDepositDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeployment;
    fromJSON(object: any): MsgDepositDeployment;
    toJSON(message: MsgDepositDeployment): unknown;
    create(base?: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment;
    fromPartial(object: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment;
};
export declare const MsgDepositDeploymentResponse: {
    $type: "akash.deployment.v1beta1.MsgDepositDeploymentResponse";
    encode(_: MsgDepositDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeploymentResponse;
    fromJSON(_: any): MsgDepositDeploymentResponse;
    toJSON(_: MsgDepositDeploymentResponse): unknown;
    create(base?: DeepPartial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse;
    fromPartial(_: DeepPartial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse;
};
export declare const MsgUpdateDeployment: {
    $type: "akash.deployment.v1beta1.MsgUpdateDeployment";
    encode(message: MsgUpdateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeployment;
    fromJSON(object: any): MsgUpdateDeployment;
    toJSON(message: MsgUpdateDeployment): unknown;
    create(base?: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment;
    fromPartial(object: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment;
};
export declare const MsgUpdateDeploymentResponse: {
    $type: "akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
    encode(_: MsgUpdateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeploymentResponse;
    fromJSON(_: any): MsgUpdateDeploymentResponse;
    toJSON(_: MsgUpdateDeploymentResponse): unknown;
    create(base?: DeepPartial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse;
    fromPartial(_: DeepPartial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse;
};
export declare const MsgCloseDeployment: {
    $type: "akash.deployment.v1beta1.MsgCloseDeployment";
    encode(message: MsgCloseDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeployment;
    fromJSON(object: any): MsgCloseDeployment;
    toJSON(message: MsgCloseDeployment): unknown;
    create(base?: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment;
    fromPartial(object: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment;
};
export declare const MsgCloseDeploymentResponse: {
    $type: "akash.deployment.v1beta1.MsgCloseDeploymentResponse";
    encode(_: MsgCloseDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeploymentResponse;
    fromJSON(_: any): MsgCloseDeploymentResponse;
    toJSON(_: MsgCloseDeploymentResponse): unknown;
    create(base?: DeepPartial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse;
    fromPartial(_: DeepPartial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse;
};
export declare const DeploymentID: {
    $type: "akash.deployment.v1beta1.DeploymentID";
    encode(message: DeploymentID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentID;
    fromJSON(object: any): DeploymentID;
    toJSON(message: DeploymentID): unknown;
    create(base?: DeepPartial<DeploymentID>): DeploymentID;
    fromPartial(object: DeepPartial<DeploymentID>): DeploymentID;
};
export declare const Deployment: {
    $type: "akash.deployment.v1beta1.Deployment";
    encode(message: Deployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deployment;
    fromJSON(object: any): Deployment;
    toJSON(message: Deployment): unknown;
    create(base?: DeepPartial<Deployment>): Deployment;
    fromPartial(object: DeepPartial<Deployment>): Deployment;
};
export declare const DeploymentFilters: {
    $type: "akash.deployment.v1beta1.DeploymentFilters";
    encode(message: DeploymentFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentFilters;
    fromJSON(object: any): DeploymentFilters;
    toJSON(message: DeploymentFilters): unknown;
    create(base?: DeepPartial<DeploymentFilters>): DeploymentFilters;
    fromPartial(object: DeepPartial<DeploymentFilters>): DeploymentFilters;
};
export interface Msg {
    CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
export declare const MsgServiceName = "akash.deployment.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
