import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface DepositParams {
    $type: 'akash.gov.v1beta3.DepositParams';
    minInitialDepositRate: Uint8Array;
}
export declare const DepositParams: {
    $type: "akash.gov.v1beta3.DepositParams";
    encode(message: DepositParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams;
    fromJSON(object: any): DepositParams;
    toJSON(message: DepositParams): unknown;
    create(base?: DeepPartial<DepositParams>): DepositParams;
    fromPartial(object: DeepPartial<DepositParams>): DepositParams;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
