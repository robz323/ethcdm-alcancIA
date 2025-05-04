import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ServiceExposeHTTPOptions } from './httpoptions';
export interface ServiceExpose {
    $type: 'akash.manifest.v2beta2.ServiceExpose';
    port: number;
    externalPort: number;
    proto: string;
    service: string;
    global: boolean;
    hosts: string[];
    httpOptions: ServiceExposeHTTPOptions | undefined;
    ip: string;
    endpointSequenceNumber: number;
}
export declare const ServiceExpose: {
    $type: "akash.manifest.v2beta2.ServiceExpose";
    encode(message: ServiceExpose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceExpose;
    fromJSON(object: any): ServiceExpose;
    toJSON(message: ServiceExpose): unknown;
    create(base?: DeepPartial<ServiceExpose>): ServiceExpose;
    fromPartial(object: DeepPartial<ServiceExpose>): ServiceExpose;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
