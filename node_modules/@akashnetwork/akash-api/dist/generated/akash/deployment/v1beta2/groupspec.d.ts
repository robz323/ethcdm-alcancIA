import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PlacementRequirements } from '../../base/v1beta2/attribute';
import { Resource } from './resource';
export interface GroupSpec {
    $type: 'akash.deployment.v1beta2.GroupSpec';
    name: string;
    requirements: PlacementRequirements | undefined;
    resources: Resource[];
}
export declare const GroupSpec: {
    $type: "akash.deployment.v1beta2.GroupSpec";
    encode(message: GroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec;
    fromJSON(object: any): GroupSpec;
    toJSON(message: GroupSpec): unknown;
    create(base?: DeepPartial<GroupSpec>): GroupSpec;
    fromPartial(object: DeepPartial<GroupSpec>): GroupSpec;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
