import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Attribute } from '../../base/v1beta3/attribute';
export interface ProviderInfo {
    $type: 'akash.provider.v1beta3.ProviderInfo';
    email: string;
    website: string;
}
export interface MsgCreateProvider {
    $type: 'akash.provider.v1beta3.MsgCreateProvider';
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: ProviderInfo | undefined;
}
export interface MsgCreateProviderResponse {
    $type: 'akash.provider.v1beta3.MsgCreateProviderResponse';
}
export interface MsgUpdateProvider {
    $type: 'akash.provider.v1beta3.MsgUpdateProvider';
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: ProviderInfo | undefined;
}
export interface MsgUpdateProviderResponse {
    $type: 'akash.provider.v1beta3.MsgUpdateProviderResponse';
}
export interface MsgDeleteProvider {
    $type: 'akash.provider.v1beta3.MsgDeleteProvider';
    owner: string;
}
export interface MsgDeleteProviderResponse {
    $type: 'akash.provider.v1beta3.MsgDeleteProviderResponse';
}
export interface Provider {
    $type: 'akash.provider.v1beta3.Provider';
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: ProviderInfo | undefined;
}
export declare const ProviderInfo: {
    $type: "akash.provider.v1beta3.ProviderInfo";
    encode(message: ProviderInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderInfo;
    fromJSON(object: any): ProviderInfo;
    toJSON(message: ProviderInfo): unknown;
    create(base?: DeepPartial<ProviderInfo>): ProviderInfo;
    fromPartial(object: DeepPartial<ProviderInfo>): ProviderInfo;
};
export declare const MsgCreateProvider: {
    $type: "akash.provider.v1beta3.MsgCreateProvider";
    encode(message: MsgCreateProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProvider;
    fromJSON(object: any): MsgCreateProvider;
    toJSON(message: MsgCreateProvider): unknown;
    create(base?: DeepPartial<MsgCreateProvider>): MsgCreateProvider;
    fromPartial(object: DeepPartial<MsgCreateProvider>): MsgCreateProvider;
};
export declare const MsgCreateProviderResponse: {
    $type: "akash.provider.v1beta3.MsgCreateProviderResponse";
    encode(_: MsgCreateProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProviderResponse;
    fromJSON(_: any): MsgCreateProviderResponse;
    toJSON(_: MsgCreateProviderResponse): unknown;
    create(base?: DeepPartial<MsgCreateProviderResponse>): MsgCreateProviderResponse;
    fromPartial(_: DeepPartial<MsgCreateProviderResponse>): MsgCreateProviderResponse;
};
export declare const MsgUpdateProvider: {
    $type: "akash.provider.v1beta3.MsgUpdateProvider";
    encode(message: MsgUpdateProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProvider;
    fromJSON(object: any): MsgUpdateProvider;
    toJSON(message: MsgUpdateProvider): unknown;
    create(base?: DeepPartial<MsgUpdateProvider>): MsgUpdateProvider;
    fromPartial(object: DeepPartial<MsgUpdateProvider>): MsgUpdateProvider;
};
export declare const MsgUpdateProviderResponse: {
    $type: "akash.provider.v1beta3.MsgUpdateProviderResponse";
    encode(_: MsgUpdateProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProviderResponse;
    fromJSON(_: any): MsgUpdateProviderResponse;
    toJSON(_: MsgUpdateProviderResponse): unknown;
    create(base?: DeepPartial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse;
    fromPartial(_: DeepPartial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse;
};
export declare const MsgDeleteProvider: {
    $type: "akash.provider.v1beta3.MsgDeleteProvider";
    encode(message: MsgDeleteProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProvider;
    fromJSON(object: any): MsgDeleteProvider;
    toJSON(message: MsgDeleteProvider): unknown;
    create(base?: DeepPartial<MsgDeleteProvider>): MsgDeleteProvider;
    fromPartial(object: DeepPartial<MsgDeleteProvider>): MsgDeleteProvider;
};
export declare const MsgDeleteProviderResponse: {
    $type: "akash.provider.v1beta3.MsgDeleteProviderResponse";
    encode(_: MsgDeleteProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderResponse;
    fromJSON(_: any): MsgDeleteProviderResponse;
    toJSON(_: MsgDeleteProviderResponse): unknown;
    create(base?: DeepPartial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse;
    fromPartial(_: DeepPartial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse;
};
export declare const Provider: {
    $type: "akash.provider.v1beta3.Provider";
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Provider;
    fromJSON(object: any): Provider;
    toJSON(message: Provider): unknown;
    create(base?: DeepPartial<Provider>): Provider;
    fromPartial(object: DeepPartial<Provider>): Provider;
};
export interface Msg {
    CreateProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse>;
    UpdateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse>;
    DeleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse>;
}
export declare const MsgServiceName = "akash.provider.v1beta3.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse>;
    UpdateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse>;
    DeleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
