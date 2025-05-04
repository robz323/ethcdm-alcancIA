import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { NodeResources } from './resources';
export interface NodeCapabilities {
    $type: 'akash.inventory.v1.NodeCapabilities';
    storageClasses: string[];
}
export interface Node {
    $type: 'akash.inventory.v1.Node';
    name: string;
    resources: NodeResources | undefined;
    capabilities: NodeCapabilities | undefined;
}
export declare const NodeCapabilities: {
    $type: "akash.inventory.v1.NodeCapabilities";
    encode(message: NodeCapabilities, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeCapabilities;
    fromJSON(object: any): NodeCapabilities;
    toJSON(message: NodeCapabilities): unknown;
    create(base?: DeepPartial<NodeCapabilities>): NodeCapabilities;
    fromPartial(object: DeepPartial<NodeCapabilities>): NodeCapabilities;
};
export declare const Node: {
    $type: "akash.inventory.v1.Node";
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    create(base?: DeepPartial<Node>): Node;
    fromPartial(object: DeepPartial<Node>): Node;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
