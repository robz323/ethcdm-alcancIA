import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface Attribute {
    $type: 'akash.base.v1beta2.Attribute';
    key: string;
    value: string;
}
export interface SignedBy {
    $type: 'akash.base.v1beta2.SignedBy';
    allOf: string[];
    anyOf: string[];
}
export interface PlacementRequirements {
    $type: 'akash.base.v1beta2.PlacementRequirements';
    signedBy: SignedBy | undefined;
    attributes: Attribute[];
}
export declare const Attribute: {
    $type: "akash.base.v1beta2.Attribute";
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attribute;
    fromJSON(object: any): Attribute;
    toJSON(message: Attribute): unknown;
    create(base?: DeepPartial<Attribute>): Attribute;
    fromPartial(object: DeepPartial<Attribute>): Attribute;
};
export declare const SignedBy: {
    $type: "akash.base.v1beta2.SignedBy";
    encode(message: SignedBy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignedBy;
    fromJSON(object: any): SignedBy;
    toJSON(message: SignedBy): unknown;
    create(base?: DeepPartial<SignedBy>): SignedBy;
    fromPartial(object: DeepPartial<SignedBy>): SignedBy;
};
export declare const PlacementRequirements: {
    $type: "akash.base.v1beta2.PlacementRequirements";
    encode(message: PlacementRequirements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlacementRequirements;
    fromJSON(object: any): PlacementRequirements;
    toJSON(message: PlacementRequirements): unknown;
    create(base?: DeepPartial<PlacementRequirements>): PlacementRequirements;
    fromPartial(object: DeepPartial<PlacementRequirements>): PlacementRequirements;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
