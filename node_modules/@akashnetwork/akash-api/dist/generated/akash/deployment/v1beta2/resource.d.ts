import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DecCoin } from '../../../cosmos/base/v1beta1/coin';
import { ResourceUnits } from '../../base/v1beta2/resourceunits';
export interface Resource {
    $type: 'akash.deployment.v1beta2.Resource';
    resources: ResourceUnits | undefined;
    count: number;
    price: DecCoin | undefined;
}
export declare const Resource: {
    $type: "akash.deployment.v1beta2.Resource";
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    create(base?: DeepPartial<Resource>): Resource;
    fromPartial(object: DeepPartial<Resource>): Resource;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
