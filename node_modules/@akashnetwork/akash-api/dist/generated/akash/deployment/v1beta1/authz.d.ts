import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
export interface DepositDeploymentAuthorization {
    $type: 'akash.deployment.v1beta1.DepositDeploymentAuthorization';
    spendLimit: Coin | undefined;
}
export declare const DepositDeploymentAuthorization: {
    $type: "akash.deployment.v1beta1.DepositDeploymentAuthorization";
    encode(message: DepositDeploymentAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositDeploymentAuthorization;
    fromJSON(object: any): DepositDeploymentAuthorization;
    toJSON(message: DepositDeploymentAuthorization): unknown;
    create(base?: DeepPartial<DepositDeploymentAuthorization>): DepositDeploymentAuthorization;
    fromPartial(object: DeepPartial<DepositDeploymentAuthorization>): DepositDeploymentAuthorization;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
