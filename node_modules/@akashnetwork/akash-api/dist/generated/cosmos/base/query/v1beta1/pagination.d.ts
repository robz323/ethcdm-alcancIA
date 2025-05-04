import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface PageRequest {
    $type: 'cosmos.base.query.v1beta1.PageRequest';
    key: Uint8Array;
    offset: Long;
    limit: Long;
    countTotal: boolean;
    reverse: boolean;
}
export interface PageResponse {
    $type: 'cosmos.base.query.v1beta1.PageResponse';
    nextKey: Uint8Array;
    total: Long;
}
export declare const PageRequest: {
    $type: "cosmos.base.query.v1beta1.PageRequest";
    encode(message: PageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest;
    fromJSON(object: any): PageRequest;
    toJSON(message: PageRequest): unknown;
    create(base?: DeepPartial<PageRequest>): PageRequest;
    fromPartial(object: DeepPartial<PageRequest>): PageRequest;
};
export declare const PageResponse: {
    $type: "cosmos.base.query.v1beta1.PageResponse";
    encode(message: PageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PageResponse;
    fromJSON(object: any): PageResponse;
    toJSON(message: PageResponse): unknown;
    create(base?: DeepPartial<PageResponse>): PageResponse;
    fromPartial(object: DeepPartial<PageResponse>): PageResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
