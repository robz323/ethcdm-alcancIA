import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { GroupID } from './groupid';
export interface MsgCloseGroup {
    $type: 'akash.deployment.v1beta2.MsgCloseGroup';
    id: GroupID | undefined;
}
export interface MsgCloseGroupResponse {
    $type: 'akash.deployment.v1beta2.MsgCloseGroupResponse';
}
export interface MsgPauseGroup {
    $type: 'akash.deployment.v1beta2.MsgPauseGroup';
    id: GroupID | undefined;
}
export interface MsgPauseGroupResponse {
    $type: 'akash.deployment.v1beta2.MsgPauseGroupResponse';
}
export interface MsgStartGroup {
    $type: 'akash.deployment.v1beta2.MsgStartGroup';
    id: GroupID | undefined;
}
export interface MsgStartGroupResponse {
    $type: 'akash.deployment.v1beta2.MsgStartGroupResponse';
}
export declare const MsgCloseGroup: {
    $type: "akash.deployment.v1beta2.MsgCloseGroup";
    encode(message: MsgCloseGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroup;
    fromJSON(object: any): MsgCloseGroup;
    toJSON(message: MsgCloseGroup): unknown;
    create(base?: DeepPartial<MsgCloseGroup>): MsgCloseGroup;
    fromPartial(object: DeepPartial<MsgCloseGroup>): MsgCloseGroup;
};
export declare const MsgCloseGroupResponse: {
    $type: "akash.deployment.v1beta2.MsgCloseGroupResponse";
    encode(_: MsgCloseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroupResponse;
    fromJSON(_: any): MsgCloseGroupResponse;
    toJSON(_: MsgCloseGroupResponse): unknown;
    create(base?: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse;
    fromPartial(_: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse;
};
export declare const MsgPauseGroup: {
    $type: "akash.deployment.v1beta2.MsgPauseGroup";
    encode(message: MsgPauseGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroup;
    fromJSON(object: any): MsgPauseGroup;
    toJSON(message: MsgPauseGroup): unknown;
    create(base?: DeepPartial<MsgPauseGroup>): MsgPauseGroup;
    fromPartial(object: DeepPartial<MsgPauseGroup>): MsgPauseGroup;
};
export declare const MsgPauseGroupResponse: {
    $type: "akash.deployment.v1beta2.MsgPauseGroupResponse";
    encode(_: MsgPauseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroupResponse;
    fromJSON(_: any): MsgPauseGroupResponse;
    toJSON(_: MsgPauseGroupResponse): unknown;
    create(base?: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse;
    fromPartial(_: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse;
};
export declare const MsgStartGroup: {
    $type: "akash.deployment.v1beta2.MsgStartGroup";
    encode(message: MsgStartGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroup;
    fromJSON(object: any): MsgStartGroup;
    toJSON(message: MsgStartGroup): unknown;
    create(base?: DeepPartial<MsgStartGroup>): MsgStartGroup;
    fromPartial(object: DeepPartial<MsgStartGroup>): MsgStartGroup;
};
export declare const MsgStartGroupResponse: {
    $type: "akash.deployment.v1beta2.MsgStartGroupResponse";
    encode(_: MsgStartGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroupResponse;
    fromJSON(_: any): MsgStartGroupResponse;
    toJSON(_: MsgStartGroupResponse): unknown;
    create(base?: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse;
    fromPartial(_: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
