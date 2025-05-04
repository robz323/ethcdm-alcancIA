import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "akash.base.v1beta1";
export interface Attribute {
    $type: 'akash.base.v1beta1.Attribute';
    key: string;
    value: string;
}
export interface SignedBy {
    $type: 'akash.base.v1beta1.SignedBy';
    allOf: string[];
    anyOf: string[];
}
export interface PlacementRequirements {
    $type: 'akash.base.v1beta1.PlacementRequirements';
    signedBy: SignedBy | undefined;
    attributes: Attribute[];
}
export declare const Attribute: {
    $type: "akash.base.v1beta1.Attribute";
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attribute;
    fromJSON(object: any): Attribute;
    toJSON(message: Attribute): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, "$type" | "key" | "value">, never>>(object: I): Attribute;
};
export declare const SignedBy: {
    $type: "akash.base.v1beta1.SignedBy";
    encode(message: SignedBy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignedBy;
    fromJSON(object: any): SignedBy;
    toJSON(message: SignedBy): unknown;
    fromPartial<I extends {
        allOf?: string[];
        anyOf?: string[];
    } & {
        allOf?: string[] & string[] & Record<Exclude<keyof I["allOf"], "$type" | keyof string[]>, never>;
        anyOf?: string[] & string[] & Record<Exclude<keyof I["anyOf"], "$type" | keyof string[]>, never>;
    } & Record<Exclude<keyof I, "$type" | "allOf" | "anyOf">, never>>(object: I): SignedBy;
};
export declare const PlacementRequirements: {
    $type: "akash.base.v1beta1.PlacementRequirements";
    encode(message: PlacementRequirements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlacementRequirements;
    fromJSON(object: any): PlacementRequirements;
    toJSON(message: PlacementRequirements): unknown;
    fromPartial<I extends {
        signedBy?: {
            allOf?: string[];
            anyOf?: string[];
        };
        attributes?: {
            key?: string;
            value?: string;
        }[];
    } & {
        signedBy?: {
            allOf?: string[];
            anyOf?: string[];
        } & {
            allOf?: string[] & string[] & Record<Exclude<keyof I["signedBy"]["allOf"], "$type" | keyof string[]>, never>;
            anyOf?: string[] & string[] & Record<Exclude<keyof I["signedBy"]["anyOf"], "$type" | keyof string[]>, never>;
        } & Record<Exclude<keyof I["signedBy"], "$type" | "allOf" | "anyOf">, never>;
        attributes?: {
            key?: string;
            value?: string;
        }[] & ({
            key?: string;
            value?: string;
        } & {
            key?: string;
            value?: string;
        } & Record<Exclude<keyof I["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["attributes"], "$type" | keyof {
            key?: string;
            value?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "$type" | "signedBy" | "attributes">, never>>(object: I): PlacementRequirements;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;
export {};
