import { MsgCloseDeployment, MsgCloseDeploymentResponse, MsgCreateDeployment, MsgCreateDeploymentResponse, MsgDepositDeployment, MsgDepositDeploymentResponse, MsgUpdateDeployment, MsgUpdateDeploymentResponse } from './deploymentmsg';
import { MsgCloseGroup, MsgCloseGroupResponse, MsgPauseGroup, MsgPauseGroupResponse, MsgStartGroup, MsgStartGroupResponse } from './groupmsg';
export interface Msg {
    CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
export declare const MsgServiceName = "akash.deployment.v1beta3.Msg";
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
export {};
