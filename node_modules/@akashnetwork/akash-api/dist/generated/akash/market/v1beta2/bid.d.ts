import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin, DecCoin } from '../../../cosmos/base/v1beta1/coin';
import { OrderID } from './order';
export interface MsgCreateBid {
    $type: 'akash.market.v1beta2.MsgCreateBid';
    order: OrderID | undefined;
    provider: string;
    price: DecCoin | undefined;
    deposit: Coin | undefined;
}
export interface MsgCreateBidResponse {
    $type: 'akash.market.v1beta2.MsgCreateBidResponse';
}
export interface MsgCloseBid {
    $type: 'akash.market.v1beta2.MsgCloseBid';
    bidId: BidID | undefined;
}
export interface MsgCloseBidResponse {
    $type: 'akash.market.v1beta2.MsgCloseBidResponse';
}
export interface BidID {
    $type: 'akash.market.v1beta2.BidID';
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
}
export interface Bid {
    $type: 'akash.market.v1beta2.Bid';
    bidId: BidID | undefined;
    state: Bid_State;
    price: DecCoin | undefined;
    createdAt: Long;
}
export declare enum Bid_State {
    invalid = 0,
    open = 1,
    active = 2,
    lost = 3,
    closed = 4,
    UNRECOGNIZED = -1
}
export declare function bid_StateFromJSON(object: any): Bid_State;
export declare function bid_StateToJSON(object: Bid_State): string;
export interface BidFilters {
    $type: 'akash.market.v1beta2.BidFilters';
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
export declare const MsgCreateBid: {
    $type: "akash.market.v1beta2.MsgCreateBid";
    encode(message: MsgCreateBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBid;
    fromJSON(object: any): MsgCreateBid;
    toJSON(message: MsgCreateBid): unknown;
    create(base?: DeepPartial<MsgCreateBid>): MsgCreateBid;
    fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid;
};
export declare const MsgCreateBidResponse: {
    $type: "akash.market.v1beta2.MsgCreateBidResponse";
    encode(_: MsgCreateBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBidResponse;
    fromJSON(_: any): MsgCreateBidResponse;
    toJSON(_: MsgCreateBidResponse): unknown;
    create(base?: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse;
    fromPartial(_: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse;
};
export declare const MsgCloseBid: {
    $type: "akash.market.v1beta2.MsgCloseBid";
    encode(message: MsgCloseBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBid;
    fromJSON(object: any): MsgCloseBid;
    toJSON(message: MsgCloseBid): unknown;
    create(base?: DeepPartial<MsgCloseBid>): MsgCloseBid;
    fromPartial(object: DeepPartial<MsgCloseBid>): MsgCloseBid;
};
export declare const MsgCloseBidResponse: {
    $type: "akash.market.v1beta2.MsgCloseBidResponse";
    encode(_: MsgCloseBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBidResponse;
    fromJSON(_: any): MsgCloseBidResponse;
    toJSON(_: MsgCloseBidResponse): unknown;
    create(base?: DeepPartial<MsgCloseBidResponse>): MsgCloseBidResponse;
    fromPartial(_: DeepPartial<MsgCloseBidResponse>): MsgCloseBidResponse;
};
export declare const BidID: {
    $type: "akash.market.v1beta2.BidID";
    encode(message: BidID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BidID;
    fromJSON(object: any): BidID;
    toJSON(message: BidID): unknown;
    create(base?: DeepPartial<BidID>): BidID;
    fromPartial(object: DeepPartial<BidID>): BidID;
};
export declare const Bid: {
    $type: "akash.market.v1beta2.Bid";
    encode(message: Bid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bid;
    fromJSON(object: any): Bid;
    toJSON(message: Bid): unknown;
    create(base?: DeepPartial<Bid>): Bid;
    fromPartial(object: DeepPartial<Bid>): Bid;
};
export declare const BidFilters: {
    $type: "akash.market.v1beta2.BidFilters";
    encode(message: BidFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BidFilters;
    fromJSON(object: any): BidFilters;
    toJSON(message: BidFilters): unknown;
    create(base?: DeepPartial<BidFilters>): BidFilters;
    fromPartial(object: DeepPartial<BidFilters>): BidFilters;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
