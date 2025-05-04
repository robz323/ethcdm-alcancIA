import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
export interface Params {
    $type: 'akash.deployment.v1beta3.Params';
    minDeposits: Coin[];
}
export declare const Params: {
    $type: "akash.deployment.v1beta3.Params";
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create(base?: DeepPartial<Params>): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
