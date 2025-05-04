import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { GroupSpec } from '../../deployment/v1beta2/groupspec';
export interface OrderID {
    $type: 'akash.market.v1beta2.OrderID';
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
}
export interface Order {
    $type: 'akash.market.v1beta2.Order';
    orderId: OrderID | undefined;
    state: Order_State;
    spec: GroupSpec | undefined;
    createdAt: Long;
}
export declare enum Order_State {
    invalid = 0,
    open = 1,
    active = 2,
    closed = 3,
    UNRECOGNIZED = -1
}
export declare function order_StateFromJSON(object: any): Order_State;
export declare function order_StateToJSON(object: Order_State): string;
export interface OrderFilters {
    $type: 'akash.market.v1beta2.OrderFilters';
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    state: string;
}
export declare const OrderID: {
    $type: "akash.market.v1beta2.OrderID";
    encode(message: OrderID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderID;
    fromJSON(object: any): OrderID;
    toJSON(message: OrderID): unknown;
    create(base?: DeepPartial<OrderID>): OrderID;
    fromPartial(object: DeepPartial<OrderID>): OrderID;
};
export declare const Order: {
    $type: "akash.market.v1beta2.Order";
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    create(base?: DeepPartial<Order>): Order;
    fromPartial(object: DeepPartial<Order>): Order;
};
export declare const OrderFilters: {
    $type: "akash.market.v1beta2.OrderFilters";
    encode(message: OrderFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderFilters;
    fromJSON(object: any): OrderFilters;
    toJSON(message: OrderFilters): unknown;
    create(base?: DeepPartial<OrderFilters>): OrderFilters;
    fromPartial(object: DeepPartial<OrderFilters>): OrderFilters;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
