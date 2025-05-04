import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface DenomTakeRate {
    $type: 'akash.take.v1beta3.DenomTakeRate';
    denom: string;
    rate: number;
}
export interface Params {
    $type: 'akash.take.v1beta3.Params';
    denomTakeRates: DenomTakeRate[];
    defaultTakeRate: number;
}
export declare const DenomTakeRate: {
    $type: "akash.take.v1beta3.DenomTakeRate";
    encode(message: DenomTakeRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomTakeRate;
    fromJSON(object: any): DenomTakeRate;
    toJSON(message: DenomTakeRate): unknown;
    create(base?: DeepPartial<DenomTakeRate>): DenomTakeRate;
    fromPartial(object: DeepPartial<DenomTakeRate>): DenomTakeRate;
};
export declare const Params: {
    $type: "akash.take.v1beta3.Params";
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
