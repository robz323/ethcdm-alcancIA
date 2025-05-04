import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DecCoin } from '../../../cosmos/base/v1beta1/coin';
import { BidID } from './bid';
export interface LeaseID {
    $type: 'akash.market.v1beta2.LeaseID';
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
}
export interface Lease {
    $type: 'akash.market.v1beta2.Lease';
    leaseId: LeaseID | undefined;
    state: Lease_State;
    price: DecCoin | undefined;
    createdAt: Long;
    closedOn: Long;
}
export declare enum Lease_State {
    invalid = 0,
    active = 1,
    insufficient_funds = 2,
    closed = 3,
    UNRECOGNIZED = -1
}
export declare function lease_StateFromJSON(object: any): Lease_State;
export declare function lease_StateToJSON(object: Lease_State): string;
export interface LeaseFilters {
    $type: 'akash.market.v1beta2.LeaseFilters';
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
export interface MsgCreateLease {
    $type: 'akash.market.v1beta2.MsgCreateLease';
    bidId: BidID | undefined;
}
export interface MsgCreateLeaseResponse {
    $type: 'akash.market.v1beta2.MsgCreateLeaseResponse';
}
export interface MsgWithdrawLease {
    $type: 'akash.market.v1beta2.MsgWithdrawLease';
    bidId: LeaseID | undefined;
}
export interface MsgWithdrawLeaseResponse {
    $type: 'akash.market.v1beta2.MsgWithdrawLeaseResponse';
}
export interface MsgCloseLease {
    $type: 'akash.market.v1beta2.MsgCloseLease';
    leaseId: LeaseID | undefined;
}
export interface MsgCloseLeaseResponse {
    $type: 'akash.market.v1beta2.MsgCloseLeaseResponse';
}
export declare const LeaseID: {
    $type: "akash.market.v1beta2.LeaseID";
    encode(message: LeaseID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LeaseID;
    fromJSON(object: any): LeaseID;
    toJSON(message: LeaseID): unknown;
    create(base?: DeepPartial<LeaseID>): LeaseID;
    fromPartial(object: DeepPartial<LeaseID>): LeaseID;
};
export declare const Lease: {
    $type: "akash.market.v1beta2.Lease";
    encode(message: Lease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Lease;
    fromJSON(object: any): Lease;
    toJSON(message: Lease): unknown;
    create(base?: DeepPartial<Lease>): Lease;
    fromPartial(object: DeepPartial<Lease>): Lease;
};
export declare const LeaseFilters: {
    $type: "akash.market.v1beta2.LeaseFilters";
    encode(message: LeaseFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LeaseFilters;
    fromJSON(object: any): LeaseFilters;
    toJSON(message: LeaseFilters): unknown;
    create(base?: DeepPartial<LeaseFilters>): LeaseFilters;
    fromPartial(object: DeepPartial<LeaseFilters>): LeaseFilters;
};
export declare const MsgCreateLease: {
    $type: "akash.market.v1beta2.MsgCreateLease";
    encode(message: MsgCreateLease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLease;
    fromJSON(object: any): MsgCreateLease;
    toJSON(message: MsgCreateLease): unknown;
    create(base?: DeepPartial<MsgCreateLease>): MsgCreateLease;
    fromPartial(object: DeepPartial<MsgCreateLease>): MsgCreateLease;
};
export declare const MsgCreateLeaseResponse: {
    $type: "akash.market.v1beta2.MsgCreateLeaseResponse";
    encode(_: MsgCreateLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLeaseResponse;
    fromJSON(_: any): MsgCreateLeaseResponse;
    toJSON(_: MsgCreateLeaseResponse): unknown;
    create(base?: DeepPartial<MsgCreateLeaseResponse>): MsgCreateLeaseResponse;
    fromPartial(_: DeepPartial<MsgCreateLeaseResponse>): MsgCreateLeaseResponse;
};
export declare const MsgWithdrawLease: {
    $type: "akash.market.v1beta2.MsgWithdrawLease";
    encode(message: MsgWithdrawLease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLease;
    fromJSON(object: any): MsgWithdrawLease;
    toJSON(message: MsgWithdrawLease): unknown;
    create(base?: DeepPartial<MsgWithdrawLease>): MsgWithdrawLease;
    fromPartial(object: DeepPartial<MsgWithdrawLease>): MsgWithdrawLease;
};
export declare const MsgWithdrawLeaseResponse: {
    $type: "akash.market.v1beta2.MsgWithdrawLeaseResponse";
    encode(_: MsgWithdrawLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLeaseResponse;
    fromJSON(_: any): MsgWithdrawLeaseResponse;
    toJSON(_: MsgWithdrawLeaseResponse): unknown;
    create(base?: DeepPartial<MsgWithdrawLeaseResponse>): MsgWithdrawLeaseResponse;
    fromPartial(_: DeepPartial<MsgWithdrawLeaseResponse>): MsgWithdrawLeaseResponse;
};
export declare const MsgCloseLease: {
    $type: "akash.market.v1beta2.MsgCloseLease";
    encode(message: MsgCloseLease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLease;
    fromJSON(object: any): MsgCloseLease;
    toJSON(message: MsgCloseLease): unknown;
    create(base?: DeepPartial<MsgCloseLease>): MsgCloseLease;
    fromPartial(object: DeepPartial<MsgCloseLease>): MsgCloseLease;
};
export declare const MsgCloseLeaseResponse: {
    $type: "akash.market.v1beta2.MsgCloseLeaseResponse";
    encode(_: MsgCloseLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLeaseResponse;
    fromJSON(_: any): MsgCloseLeaseResponse;
    toJSON(_: MsgCloseLeaseResponse): unknown;
    create(base?: DeepPartial<MsgCloseLeaseResponse>): MsgCloseLeaseResponse;
    fromPartial(_: DeepPartial<MsgCloseLeaseResponse>): MsgCloseLeaseResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
