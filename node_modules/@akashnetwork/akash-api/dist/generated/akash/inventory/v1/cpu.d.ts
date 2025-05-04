import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ResourcePair } from './resourcepair';
export interface CPUInfo {
    $type: 'akash.inventory.v1.CPUInfo';
    id: string;
    vendor: string;
    model: string;
    vcores: number;
}
export interface CPU {
    $type: 'akash.inventory.v1.CPU';
    quantity: ResourcePair | undefined;
    info: CPUInfo[];
}
export declare const CPUInfo: {
    $type: "akash.inventory.v1.CPUInfo";
    encode(message: CPUInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CPUInfo;
    fromJSON(object: any): CPUInfo;
    toJSON(message: CPUInfo): unknown;
    create(base?: DeepPartial<CPUInfo>): CPUInfo;
    fromPartial(object: DeepPartial<CPUInfo>): CPUInfo;
};
export declare const CPU: {
    $type: "akash.inventory.v1.CPU";
    encode(message: CPU, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CPU;
    fromJSON(object: any): CPU;
    toJSON(message: CPU): unknown;
    create(base?: DeepPartial<CPU>): CPU;
    fromPartial(object: DeepPartial<CPU>): CPU;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
