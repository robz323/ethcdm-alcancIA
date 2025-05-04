import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface Coin {
    $type: 'cosmos.base.v1beta1.Coin';
    denom: string;
    amount: string;
}
export interface DecCoin {
    $type: 'cosmos.base.v1beta1.DecCoin';
    denom: string;
    amount: string;
}
export interface IntProto {
    $type: 'cosmos.base.v1beta1.IntProto';
    int: string;
}
export interface DecProto {
    $type: 'cosmos.base.v1beta1.DecProto';
    dec: string;
}
export declare const Coin: {
    $type: "cosmos.base.v1beta1.Coin";
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromJSON(object: any): Coin;
    toJSON(message: Coin): unknown;
    create(base?: DeepPartial<Coin>): Coin;
    fromPartial(object: DeepPartial<Coin>): Coin;
};
export declare const DecCoin: {
    $type: "cosmos.base.v1beta1.DecCoin";
    encode(message: DecCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecCoin;
    fromJSON(object: any): DecCoin;
    toJSON(message: DecCoin): unknown;
    create(base?: DeepPartial<DecCoin>): DecCoin;
    fromPartial(object: DeepPartial<DecCoin>): DecCoin;
};
export declare const IntProto: {
    $type: "cosmos.base.v1beta1.IntProto";
    encode(message: IntProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntProto;
    fromJSON(object: any): IntProto;
    toJSON(message: IntProto): unknown;
    create(base?: DeepPartial<IntProto>): IntProto;
    fromPartial(object: DeepPartial<IntProto>): IntProto;
};
export declare const DecProto: {
    $type: "cosmos.base.v1beta1.DecProto";
    encode(message: DecProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecProto;
    fromJSON(object: any): DecProto;
    toJSON(message: DecProto): unknown;
    create(base?: DeepPartial<DecProto>): DecProto;
    fromPartial(object: DeepPartial<DecProto>): DecProto;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
