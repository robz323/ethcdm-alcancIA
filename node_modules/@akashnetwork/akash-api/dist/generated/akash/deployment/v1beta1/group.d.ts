import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { PlacementRequirements } from '../../base/v1beta1/attribute';
import { ResourceUnits } from '../../base/v1beta1/resource';
export interface MsgCloseGroup {
    $type: 'akash.deployment.v1beta1.MsgCloseGroup';
    id: GroupID | undefined;
}
export interface MsgCloseGroupResponse {
    $type: 'akash.deployment.v1beta1.MsgCloseGroupResponse';
}
export interface MsgPauseGroup {
    $type: 'akash.deployment.v1beta1.MsgPauseGroup';
    id: GroupID | undefined;
}
export interface MsgPauseGroupResponse {
    $type: 'akash.deployment.v1beta1.MsgPauseGroupResponse';
}
export interface MsgStartGroup {
    $type: 'akash.deployment.v1beta1.MsgStartGroup';
    id: GroupID | undefined;
}
export interface MsgStartGroupResponse {
    $type: 'akash.deployment.v1beta1.MsgStartGroupResponse';
}
export interface GroupID {
    $type: 'akash.deployment.v1beta1.GroupID';
    owner: string;
    dseq: Long;
    gseq: number;
}
export interface GroupSpec {
    $type: 'akash.deployment.v1beta1.GroupSpec';
    name: string;
    requirements: PlacementRequirements | undefined;
    resources: Resource[];
}
export interface Group {
    $type: 'akash.deployment.v1beta1.Group';
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
export interface Resource {
    $type: 'akash.deployment.v1beta1.Resource';
    resources: ResourceUnits | undefined;
    count: number;
    price: Coin | undefined;
}
export declare const MsgCloseGroup: {
    $type: "akash.deployment.v1beta1.MsgCloseGroup";
    encode(message: MsgCloseGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroup;
    fromJSON(object: any): MsgCloseGroup;
    toJSON(message: MsgCloseGroup): unknown;
    create(base?: DeepPartial<MsgCloseGroup>): MsgCloseGroup;
    fromPartial(object: DeepPartial<MsgCloseGroup>): MsgCloseGroup;
};
export declare const MsgCloseGroupResponse: {
    $type: "akash.deployment.v1beta1.MsgCloseGroupResponse";
    encode(_: MsgCloseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroupResponse;
    fromJSON(_: any): MsgCloseGroupResponse;
    toJSON(_: MsgCloseGroupResponse): unknown;
    create(base?: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse;
    fromPartial(_: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse;
};
export declare const MsgPauseGroup: {
    $type: "akash.deployment.v1beta1.MsgPauseGroup";
    encode(message: MsgPauseGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroup;
    fromJSON(object: any): MsgPauseGroup;
    toJSON(message: MsgPauseGroup): unknown;
    create(base?: DeepPartial<MsgPauseGroup>): MsgPauseGroup;
    fromPartial(object: DeepPartial<MsgPauseGroup>): MsgPauseGroup;
};
export declare const MsgPauseGroupResponse: {
    $type: "akash.deployment.v1beta1.MsgPauseGroupResponse";
    encode(_: MsgPauseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroupResponse;
    fromJSON(_: any): MsgPauseGroupResponse;
    toJSON(_: MsgPauseGroupResponse): unknown;
    create(base?: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse;
    fromPartial(_: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse;
};
export declare const MsgStartGroup: {
    $type: "akash.deployment.v1beta1.MsgStartGroup";
    encode(message: MsgStartGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroup;
    fromJSON(object: any): MsgStartGroup;
    toJSON(message: MsgStartGroup): unknown;
    create(base?: DeepPartial<MsgStartGroup>): MsgStartGroup;
    fromPartial(object: DeepPartial<MsgStartGroup>): MsgStartGroup;
};
export declare const MsgStartGroupResponse: {
    $type: "akash.deployment.v1beta1.MsgStartGroupResponse";
    encode(_: MsgStartGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroupResponse;
    fromJSON(_: any): MsgStartGroupResponse;
    toJSON(_: MsgStartGroupResponse): unknown;
    create(base?: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse;
    fromPartial(_: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse;
};
export declare const GroupID: {
    $type: "akash.deployment.v1beta1.GroupID";
    encode(message: GroupID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupID;
    fromJSON(object: any): GroupID;
    toJSON(message: GroupID): unknown;
    create(base?: DeepPartial<GroupID>): GroupID;
    fromPartial(object: DeepPartial<GroupID>): GroupID;
};
export declare const GroupSpec: {
    $type: "akash.deployment.v1beta1.GroupSpec";
    encode(message: GroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec;
    fromJSON(object: any): GroupSpec;
    toJSON(message: GroupSpec): unknown;
    create(base?: DeepPartial<GroupSpec>): GroupSpec;
    fromPartial(object: DeepPartial<GroupSpec>): GroupSpec;
};
export declare const Group: {
    $type: "akash.deployment.v1beta1.Group";
    encode(message: Group, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Group;
    fromJSON(object: any): Group;
    toJSON(message: Group): unknown;
    create(base?: DeepPartial<Group>): Group;
    fromPartial(object: DeepPartial<Group>): Group;
};
export declare const Resource: {
    $type: "akash.deployment.v1beta1.Resource";
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    create(base?: DeepPartial<Resource>): Resource;
    fromPartial(object: DeepPartial<Resource>): Resource;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
