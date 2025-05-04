import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Resources } from '../../base/v1beta3/resources';
import { ServiceExpose } from './serviceexpose';
export interface StorageParams {
    $type: 'akash.manifest.v2beta2.StorageParams';
    name: string;
    mount: string;
    readOnly: boolean;
}
export interface ServiceParams {
    $type: 'akash.manifest.v2beta2.ServiceParams';
    storage: StorageParams[];
}
export interface ServiceImageCredentials {
    $type: 'akash.manifest.v2beta2.ServiceImageCredentials';
    host: string;
    email: string;
    username: string;
    password: string;
}
export interface Service {
    $type: 'akash.manifest.v2beta2.Service';
    name: string;
    image: string;
    command: string[];
    args: string[];
    env: string[];
    resources: Resources | undefined;
    count: number;
    expose: ServiceExpose[];
    params: ServiceParams | undefined;
    credentials: ServiceImageCredentials | undefined;
}
export declare const StorageParams: {
    $type: "akash.manifest.v2beta2.StorageParams";
    encode(message: StorageParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageParams;
    fromJSON(object: any): StorageParams;
    toJSON(message: StorageParams): unknown;
    create(base?: DeepPartial<StorageParams>): StorageParams;
    fromPartial(object: DeepPartial<StorageParams>): StorageParams;
};
export declare const ServiceParams: {
    $type: "akash.manifest.v2beta2.ServiceParams";
    encode(message: ServiceParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceParams;
    fromJSON(object: any): ServiceParams;
    toJSON(message: ServiceParams): unknown;
    create(base?: DeepPartial<ServiceParams>): ServiceParams;
    fromPartial(object: DeepPartial<ServiceParams>): ServiceParams;
};
export declare const ServiceImageCredentials: {
    $type: "akash.manifest.v2beta2.ServiceImageCredentials";
    encode(message: ServiceImageCredentials, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceImageCredentials;
    fromJSON(object: any): ServiceImageCredentials;
    toJSON(message: ServiceImageCredentials): unknown;
    create(base?: DeepPartial<ServiceImageCredentials>): ServiceImageCredentials;
    fromPartial(object: DeepPartial<ServiceImageCredentials>): ServiceImageCredentials;
};
export declare const Service: {
    $type: "akash.manifest.v2beta2.Service";
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    create(base?: DeepPartial<Service>): Service;
    fromPartial(object: DeepPartial<Service>): Service;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
