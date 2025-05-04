import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DecCoin } from '../../../cosmos/base/v1beta1/coin';
import { Resources } from '../../base/v1beta3/resources';
export interface ResourceUnit {
    $type: 'akash.deployment.v1beta3.ResourceUnit';
    resource: Resources | undefined;
    count: number;
    price: DecCoin | undefined;
}
export declare const ResourceUnit: {
    $type: "akash.deployment.v1beta3.ResourceUnit";
    encode(message: ResourceUnit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnit;
    fromJSON(object: any): ResourceUnit;
    toJSON(message: ResourceUnit): unknown;
    create(base?: DeepPartial<ResourceUnit>): ResourceUnit;
    fromPartial(object: DeepPartial<ResourceUnit>): ResourceUnit;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
