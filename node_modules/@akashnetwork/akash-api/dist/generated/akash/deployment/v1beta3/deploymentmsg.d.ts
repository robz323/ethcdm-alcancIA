import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { DeploymentID } from './deployment';
import { GroupSpec } from './groupspec';
export interface MsgCreateDeployment {
    $type: 'akash.deployment.v1beta3.MsgCreateDeployment';
    id: DeploymentID | undefined;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit: Coin | undefined;
    depositor: string;
}
export interface MsgCreateDeploymentResponse {
    $type: 'akash.deployment.v1beta3.MsgCreateDeploymentResponse';
}
export interface MsgDepositDeployment {
    $type: 'akash.deployment.v1beta3.MsgDepositDeployment';
    id: DeploymentID | undefined;
    amount: Coin | undefined;
    depositor: string;
}
export interface MsgDepositDeploymentResponse {
    $type: 'akash.deployment.v1beta3.MsgDepositDeploymentResponse';
}
export interface MsgUpdateDeployment {
    $type: 'akash.deployment.v1beta3.MsgUpdateDeployment';
    id: DeploymentID | undefined;
    version: Uint8Array;
}
export interface MsgUpdateDeploymentResponse {
    $type: 'akash.deployment.v1beta3.MsgUpdateDeploymentResponse';
}
export interface MsgCloseDeployment {
    $type: 'akash.deployment.v1beta3.MsgCloseDeployment';
    id: DeploymentID | undefined;
}
export interface MsgCloseDeploymentResponse {
    $type: 'akash.deployment.v1beta3.MsgCloseDeploymentResponse';
}
export declare const MsgCreateDeployment: {
    $type: "akash.deployment.v1beta3.MsgCreateDeployment";
    encode(message: MsgCreateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeployment;
    fromJSON(object: any): MsgCreateDeployment;
    toJSON(message: MsgCreateDeployment): unknown;
    create(base?: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment;
    fromPartial(object: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment;
};
export declare const MsgCreateDeploymentResponse: {
    $type: "akash.deployment.v1beta3.MsgCreateDeploymentResponse";
    encode(_: MsgCreateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeploymentResponse;
    fromJSON(_: any): MsgCreateDeploymentResponse;
    toJSON(_: MsgCreateDeploymentResponse): unknown;
    create(base?: DeepPartial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse;
    fromPartial(_: DeepPartial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse;
};
export declare const MsgDepositDeployment: {
    $type: "akash.deployment.v1beta3.MsgDepositDeployment";
    encode(message: MsgDepositDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeployment;
    fromJSON(object: any): MsgDepositDeployment;
    toJSON(message: MsgDepositDeployment): unknown;
    create(base?: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment;
    fromPartial(object: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment;
};
export declare const MsgDepositDeploymentResponse: {
    $type: "akash.deployment.v1beta3.MsgDepositDeploymentResponse";
    encode(_: MsgDepositDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeploymentResponse;
    fromJSON(_: any): MsgDepositDeploymentResponse;
    toJSON(_: MsgDepositDeploymentResponse): unknown;
    create(base?: DeepPartial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse;
    fromPartial(_: DeepPartial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse;
};
export declare const MsgUpdateDeployment: {
    $type: "akash.deployment.v1beta3.MsgUpdateDeployment";
    encode(message: MsgUpdateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeployment;
    fromJSON(object: any): MsgUpdateDeployment;
    toJSON(message: MsgUpdateDeployment): unknown;
    create(base?: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment;
    fromPartial(object: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment;
};
export declare const MsgUpdateDeploymentResponse: {
    $type: "akash.deployment.v1beta3.MsgUpdateDeploymentResponse";
    encode(_: MsgUpdateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeploymentResponse;
    fromJSON(_: any): MsgUpdateDeploymentResponse;
    toJSON(_: MsgUpdateDeploymentResponse): unknown;
    create(base?: DeepPartial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse;
    fromPartial(_: DeepPartial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse;
};
export declare const MsgCloseDeployment: {
    $type: "akash.deployment.v1beta3.MsgCloseDeployment";
    encode(message: MsgCloseDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeployment;
    fromJSON(object: any): MsgCloseDeployment;
    toJSON(message: MsgCloseDeployment): unknown;
    create(base?: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment;
    fromPartial(object: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment;
};
export declare const MsgCloseDeploymentResponse: {
    $type: "akash.deployment.v1beta3.MsgCloseDeploymentResponse";
    encode(_: MsgCloseDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeploymentResponse;
    fromJSON(_: any): MsgCloseDeploymentResponse;
    toJSON(_: MsgCloseDeploymentResponse): unknown;
    create(base?: DeepPartial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse;
    fromPartial(_: DeepPartial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
