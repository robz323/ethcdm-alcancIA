import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface Quantity {
    $type: 'k8s.io.apimachinery.pkg.api.resource.Quantity';
    string?: string | undefined;
}
export interface QuantityValue {
    $type: 'k8s.io.apimachinery.pkg.api.resource.QuantityValue';
    string?: string | undefined;
}
export declare const Quantity: {
    $type: "k8s.io.apimachinery.pkg.api.resource.Quantity";
    encode(message: Quantity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Quantity;
    fromJSON(object: any): Quantity;
    toJSON(message: Quantity): unknown;
    create(base?: DeepPartial<Quantity>): Quantity;
    fromPartial(object: DeepPartial<Quantity>): Quantity;
};
export declare const QuantityValue: {
    $type: "k8s.io.apimachinery.pkg.api.resource.QuantityValue";
    encode(message: QuantityValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuantityValue;
    fromJSON(object: any): QuantityValue;
    toJSON(message: QuantityValue): unknown;
    create(base?: DeepPartial<QuantityValue>): QuantityValue;
    fromPartial(object: DeepPartial<QuantityValue>): QuantityValue;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
