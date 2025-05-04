import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface ServiceExposeHTTPOptions {
    $type: 'akash.manifest.v2beta1.ServiceExposeHTTPOptions';
    maxBodySize: number;
    readTimeout: number;
    sendTimeout: number;
    nextTries: number;
    nextTimeout: number;
    nextCases: string[];
}
export declare const ServiceExposeHTTPOptions: {
    $type: "akash.manifest.v2beta1.ServiceExposeHTTPOptions";
    encode(message: ServiceExposeHTTPOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceExposeHTTPOptions;
    fromJSON(object: any): ServiceExposeHTTPOptions;
    toJSON(message: ServiceExposeHTTPOptions): unknown;
    create(base?: DeepPartial<ServiceExposeHTTPOptions>): ServiceExposeHTTPOptions;
    fromPartial(object: DeepPartial<ServiceExposeHTTPOptions>): ServiceExposeHTTPOptions;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
