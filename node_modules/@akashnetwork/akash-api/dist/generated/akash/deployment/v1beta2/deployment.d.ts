import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface DeploymentID {
    $type: 'akash.deployment.v1beta2.DeploymentID';
    owner: string;
    dseq: Long;
}
export interface Deployment {
    $type: 'akash.deployment.v1beta2.Deployment';
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
    $type: 'akash.deployment.v1beta2.DeploymentFilters';
    owner: string;
    dseq: Long;
    state: string;
}
export declare const DeploymentID: {
    $type: "akash.deployment.v1beta2.DeploymentID";
    encode(message: DeploymentID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentID;
    fromJSON(object: any): DeploymentID;
    toJSON(message: DeploymentID): unknown;
    create(base?: DeepPartial<DeploymentID>): DeploymentID;
    fromPartial(object: DeepPartial<DeploymentID>): DeploymentID;
};
export declare const Deployment: {
    $type: "akash.deployment.v1beta2.Deployment";
    encode(message: Deployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deployment;
    fromJSON(object: any): Deployment;
    toJSON(message: Deployment): unknown;
    create(base?: DeepPartial<Deployment>): Deployment;
    fromPartial(object: DeepPartial<Deployment>): Deployment;
};
export declare const DeploymentFilters: {
    $type: "akash.deployment.v1beta2.DeploymentFilters";
    encode(message: DeploymentFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentFilters;
    fromJSON(object: any): DeploymentFilters;
    toJSON(message: DeploymentFilters): unknown;
    create(base?: DeepPartial<DeploymentFilters>): DeploymentFilters;
    fromPartial(object: DeepPartial<DeploymentFilters>): DeploymentFilters;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
