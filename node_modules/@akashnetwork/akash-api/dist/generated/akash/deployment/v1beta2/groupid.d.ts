import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface GroupID {
    $type: 'akash.deployment.v1beta2.GroupID';
    owner: string;
    dseq: Long;
    gseq: number;
}
export declare const GroupID: {
    $type: "akash.deployment.v1beta2.GroupID";
    encode(message: GroupID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupID;
    fromJSON(object: any): GroupID;
    toJSON(message: GroupID): unknown;
    create(base?: DeepPartial<GroupID>): GroupID;
    fromPartial(object: DeepPartial<GroupID>): GroupID;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
