import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface Http {
    $type: 'google.api.Http';
    rules: HttpRule[];
    fullyDecodeReservedExpansion: boolean;
}
export interface HttpRule {
    $type: 'google.api.HttpRule';
    selector: string;
    get?: string | undefined;
    put?: string | undefined;
    post?: string | undefined;
    delete?: string | undefined;
    patch?: string | undefined;
    custom?: CustomHttpPattern | undefined;
    body: string;
    responseBody: string;
    additionalBindings: HttpRule[];
}
export interface CustomHttpPattern {
    $type: 'google.api.CustomHttpPattern';
    kind: string;
    path: string;
}
export declare const Http: {
    $type: "google.api.Http";
    encode(message: Http, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Http;
    fromJSON(object: any): Http;
    toJSON(message: Http): unknown;
    create(base?: DeepPartial<Http>): Http;
    fromPartial(object: DeepPartial<Http>): Http;
};
export declare const HttpRule: {
    $type: "google.api.HttpRule";
    encode(message: HttpRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpRule;
    fromJSON(object: any): HttpRule;
    toJSON(message: HttpRule): unknown;
    create(base?: DeepPartial<HttpRule>): HttpRule;
    fromPartial(object: DeepPartial<HttpRule>): HttpRule;
};
export declare const CustomHttpPattern: {
    $type: "google.api.CustomHttpPattern";
    encode(message: CustomHttpPattern, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CustomHttpPattern;
    fromJSON(object: any): CustomHttpPattern;
    toJSON(message: CustomHttpPattern): unknown;
    create(base?: DeepPartial<CustomHttpPattern>): CustomHttpPattern;
    fromPartial(object: DeepPartial<CustomHttpPattern>): CustomHttpPattern;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
