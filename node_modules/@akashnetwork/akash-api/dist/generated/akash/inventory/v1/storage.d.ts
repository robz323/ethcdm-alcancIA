import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ResourcePair } from './resourcepair';
export interface StorageInfo {
    $type: 'akash.inventory.v1.StorageInfo';
    class: string;
    iops: string;
}
export interface Storage {
    $type: 'akash.inventory.v1.Storage';
    quantity: ResourcePair | undefined;
    info: StorageInfo | undefined;
}
export declare const StorageInfo: {
    $type: "akash.inventory.v1.StorageInfo";
    encode(message: StorageInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageInfo;
    fromJSON(object: any): StorageInfo;
    toJSON(message: StorageInfo): unknown;
    create(base?: DeepPartial<StorageInfo>): StorageInfo;
    fromPartial(object: DeepPartial<StorageInfo>): StorageInfo;
};
export declare const Storage: {
    $type: "akash.inventory.v1.Storage";
    encode(message: Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Storage;
    fromJSON(object: any): Storage;
    toJSON(message: Storage): unknown;
    create(base?: DeepPartial<Storage>): Storage;
    fromPartial(object: DeepPartial<Storage>): Storage;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
