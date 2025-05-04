import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ResourcePair } from './resourcepair';
export interface GPUInfo {
    $type: 'akash.inventory.v1.GPUInfo';
    vendor: string;
    vendorId: string;
    name: string;
    modelid: string;
    interface: string;
    memorySize: string;
}
export interface GPU {
    $type: 'akash.inventory.v1.GPU';
    quantity: ResourcePair | undefined;
    info: GPUInfo[];
}
export declare const GPUInfo: {
    $type: "akash.inventory.v1.GPUInfo";
    encode(message: GPUInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GPUInfo;
    fromJSON(object: any): GPUInfo;
    toJSON(message: GPUInfo): unknown;
    create(base?: DeepPartial<GPUInfo>): GPUInfo;
    fromPartial(object: DeepPartial<GPUInfo>): GPUInfo;
};
export declare const GPU: {
    $type: "akash.inventory.v1.GPU";
    encode(message: GPU, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GPU;
    fromJSON(object: any): GPU;
    toJSON(message: GPU): unknown;
    create(base?: DeepPartial<GPU>): GPU;
    fromPartial(object: DeepPartial<GPU>): GPU;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
