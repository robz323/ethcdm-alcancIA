import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Service } from './service';
export interface Group {
    $type: 'akash.manifest.v2beta1.Group';
    name: string;
    services: Service[];
}
export declare const Group: {
    $type: "akash.manifest.v2beta1.Group";
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
