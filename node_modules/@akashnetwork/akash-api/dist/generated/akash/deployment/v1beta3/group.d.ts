import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { GroupID } from './groupid';
import { GroupSpec } from './groupspec';
export interface Group {
    $type: 'akash.deployment.v1beta3.Group';
    groupId: GroupID | undefined;
    state: Group_State;
    groupSpec: GroupSpec | undefined;
    createdAt: Long;
}
export declare enum Group_State {
    invalid = 0,
    open = 1,
    paused = 2,
    insufficient_funds = 3,
    closed = 4,
    UNRECOGNIZED = -1
}
export declare function group_StateFromJSON(object: any): Group_State;
export declare function group_StateToJSON(object: Group_State): string;
export declare const Group: {
    $type: "akash.deployment.v1beta3.Group";
    encode(message: Group, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Group;
    fromJSON(object: any): Group;
    toJSON(message: Group): unknown;
    create(base?: DeepPartial<Group>): Group;
    fromPartial(object: DeepPartial<Group>): Group;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
