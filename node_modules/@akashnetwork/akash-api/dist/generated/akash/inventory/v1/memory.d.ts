import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ResourcePair } from './resourcepair';
export interface MemoryInfo {
    $type: 'akash.inventory.v1.MemoryInfo';
    vendor: string;
    type: string;
    totalSize: string;
    speed: string;
}
export interface Memory {
    $type: 'akash.inventory.v1.Memory';
    quantity: ResourcePair | undefined;
    info: MemoryInfo[];
}
export declare const MemoryInfo: {
    $type: "akash.inventory.v1.MemoryInfo";
    encode(message: MemoryInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemoryInfo;
    fromJSON(object: any): MemoryInfo;
    toJSON(message: MemoryInfo): unknown;
    create(base?: DeepPartial<MemoryInfo>): MemoryInfo;
    fromPartial(object: DeepPartial<MemoryInfo>): MemoryInfo;
};
export declare const Memory: {
    $type: "akash.inventory.v1.Memory";
    encode(message: Memory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Memory;
    fromJSON(object: any): Memory;
    toJSON(message: Memory): unknown;
    create(base?: DeepPartial<Memory>): Memory;
    fromPartial(object: DeepPartial<Memory>): Memory;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
