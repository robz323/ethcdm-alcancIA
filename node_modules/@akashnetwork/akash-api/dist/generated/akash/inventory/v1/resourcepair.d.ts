import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Quantity } from '../../../k8s.io/apimachinery/pkg/api/resource/generated';
import { Attribute } from '../../base/v1beta3/attribute';
export interface ResourcePair {
    $type: 'akash.inventory.v1.ResourcePair';
    allocatable: Quantity | undefined;
    allocated: Quantity | undefined;
    attributes: Attribute[];
}
export declare const ResourcePair: {
    $type: "akash.inventory.v1.ResourcePair";
    encode(message: ResourcePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourcePair;
    fromJSON(object: any): ResourcePair;
    toJSON(message: ResourcePair): unknown;
    create(base?: DeepPartial<ResourcePair>): ResourcePair;
    fromPartial(object: DeepPartial<ResourcePair>): ResourcePair;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
