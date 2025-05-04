import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Deployment } from './deployment';
import { Group } from './group';
import { Params } from './params';
export interface GenesisDeployment {
    $type: 'akash.deployment.v1beta3.GenesisDeployment';
    deployment: Deployment | undefined;
    groups: Group[];
}
export interface GenesisState {
    $type: 'akash.deployment.v1beta3.GenesisState';
    deployments: GenesisDeployment[];
    params: Params | undefined;
}
export declare const GenesisDeployment: {
    $type: "akash.deployment.v1beta3.GenesisDeployment";
    encode(message: GenesisDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDeployment;
    fromJSON(object: any): GenesisDeployment;
    toJSON(message: GenesisDeployment): unknown;
    create(base?: DeepPartial<GenesisDeployment>): GenesisDeployment;
    fromPartial(object: DeepPartial<GenesisDeployment>): GenesisDeployment;
};
export declare const GenesisState: {
    $type: "akash.deployment.v1beta3.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create(base?: DeepPartial<GenesisState>): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
