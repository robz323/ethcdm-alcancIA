import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Attribute } from '../../base/v1beta3/attribute';
export interface Provider {
    $type: 'akash.audit.v1beta3.Provider';
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
export interface AuditedAttributes {
    $type: 'akash.audit.v1beta3.AuditedAttributes';
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
export interface AttributesResponse {
    $type: 'akash.audit.v1beta3.AttributesResponse';
    attributes: AuditedAttributes[];
}
export interface AttributesFilters {
    $type: 'akash.audit.v1beta3.AttributesFilters';
    auditors: string[];
    owners: string[];
}
export interface MsgSignProviderAttributes {
    $type: 'akash.audit.v1beta3.MsgSignProviderAttributes';
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
export interface MsgSignProviderAttributesResponse {
    $type: 'akash.audit.v1beta3.MsgSignProviderAttributesResponse';
}
export interface MsgDeleteProviderAttributes {
    $type: 'akash.audit.v1beta3.MsgDeleteProviderAttributes';
    owner: string;
    auditor: string;
    keys: string[];
}
export interface MsgDeleteProviderAttributesResponse {
    $type: 'akash.audit.v1beta3.MsgDeleteProviderAttributesResponse';
}
export declare const Provider: {
    $type: "akash.audit.v1beta3.Provider";
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Provider;
    fromJSON(object: any): Provider;
    toJSON(message: Provider): unknown;
    create(base?: DeepPartial<Provider>): Provider;
    fromPartial(object: DeepPartial<Provider>): Provider;
};
export declare const AuditedAttributes: {
    $type: "akash.audit.v1beta3.AuditedAttributes";
    encode(message: AuditedAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuditedAttributes;
    fromJSON(object: any): AuditedAttributes;
    toJSON(message: AuditedAttributes): unknown;
    create(base?: DeepPartial<AuditedAttributes>): AuditedAttributes;
    fromPartial(object: DeepPartial<AuditedAttributes>): AuditedAttributes;
};
export declare const AttributesResponse: {
    $type: "akash.audit.v1beta3.AttributesResponse";
    encode(message: AttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributesResponse;
    fromJSON(object: any): AttributesResponse;
    toJSON(message: AttributesResponse): unknown;
    create(base?: DeepPartial<AttributesResponse>): AttributesResponse;
    fromPartial(object: DeepPartial<AttributesResponse>): AttributesResponse;
};
export declare const AttributesFilters: {
    $type: "akash.audit.v1beta3.AttributesFilters";
    encode(message: AttributesFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributesFilters;
    fromJSON(object: any): AttributesFilters;
    toJSON(message: AttributesFilters): unknown;
    create(base?: DeepPartial<AttributesFilters>): AttributesFilters;
    fromPartial(object: DeepPartial<AttributesFilters>): AttributesFilters;
};
export declare const MsgSignProviderAttributes: {
    $type: "akash.audit.v1beta3.MsgSignProviderAttributes";
    encode(message: MsgSignProviderAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignProviderAttributes;
    fromJSON(object: any): MsgSignProviderAttributes;
    toJSON(message: MsgSignProviderAttributes): unknown;
    create(base?: DeepPartial<MsgSignProviderAttributes>): MsgSignProviderAttributes;
    fromPartial(object: DeepPartial<MsgSignProviderAttributes>): MsgSignProviderAttributes;
};
export declare const MsgSignProviderAttributesResponse: {
    $type: "akash.audit.v1beta3.MsgSignProviderAttributesResponse";
    encode(_: MsgSignProviderAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignProviderAttributesResponse;
    fromJSON(_: any): MsgSignProviderAttributesResponse;
    toJSON(_: MsgSignProviderAttributesResponse): unknown;
    create(base?: DeepPartial<MsgSignProviderAttributesResponse>): MsgSignProviderAttributesResponse;
    fromPartial(_: DeepPartial<MsgSignProviderAttributesResponse>): MsgSignProviderAttributesResponse;
};
export declare const MsgDeleteProviderAttributes: {
    $type: "akash.audit.v1beta3.MsgDeleteProviderAttributes";
    encode(message: MsgDeleteProviderAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderAttributes;
    fromJSON(object: any): MsgDeleteProviderAttributes;
    toJSON(message: MsgDeleteProviderAttributes): unknown;
    create(base?: DeepPartial<MsgDeleteProviderAttributes>): MsgDeleteProviderAttributes;
    fromPartial(object: DeepPartial<MsgDeleteProviderAttributes>): MsgDeleteProviderAttributes;
};
export declare const MsgDeleteProviderAttributesResponse: {
    $type: "akash.audit.v1beta3.MsgDeleteProviderAttributesResponse";
    encode(_: MsgDeleteProviderAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderAttributesResponse;
    fromJSON(_: any): MsgDeleteProviderAttributesResponse;
    toJSON(_: MsgDeleteProviderAttributesResponse): unknown;
    create(base?: DeepPartial<MsgDeleteProviderAttributesResponse>): MsgDeleteProviderAttributesResponse;
    fromPartial(_: DeepPartial<MsgDeleteProviderAttributesResponse>): MsgDeleteProviderAttributesResponse;
};
export interface Msg {
    SignProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse>;
    DeleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse>;
}
export declare const MsgServiceName = "akash.audit.v1beta3.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    SignProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse>;
    DeleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
