import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
export interface AccountID {
    $type: 'akash.escrow.v1beta1.AccountID';
    scope: string;
    xid: string;
}
export interface Account {
    $type: 'akash.escrow.v1beta1.Account';
    id: AccountID | undefined;
    owner: string;
    state: Account_State;
    balance: Coin | undefined;
    transferred: Coin | undefined;
    settledAt: Long;
}
export declare enum Account_State {
    invalid = 0,
    open = 1,
    closed = 2,
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare function account_StateFromJSON(object: any): Account_State;
export declare function account_StateToJSON(object: Account_State): string;
export interface Payment {
    $type: 'akash.escrow.v1beta1.Payment';
    accountId: AccountID | undefined;
    paymentId: string;
    owner: string;
    state: Payment_State;
    rate: Coin | undefined;
    balance: Coin | undefined;
    withdrawn: Coin | undefined;
}
export declare enum Payment_State {
    invalid = 0,
    open = 1,
    closed = 2,
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare function payment_StateFromJSON(object: any): Payment_State;
export declare function payment_StateToJSON(object: Payment_State): string;
export declare const AccountID: {
    $type: "akash.escrow.v1beta1.AccountID";
    encode(message: AccountID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountID;
    fromJSON(object: any): AccountID;
    toJSON(message: AccountID): unknown;
    create(base?: DeepPartial<AccountID>): AccountID;
    fromPartial(object: DeepPartial<AccountID>): AccountID;
};
export declare const Account: {
    $type: "akash.escrow.v1beta1.Account";
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    create(base?: DeepPartial<Account>): Account;
    fromPartial(object: DeepPartial<Account>): Account;
};
export declare const Payment: {
    $type: "akash.escrow.v1beta1.Payment";
    encode(message: Payment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Payment;
    fromJSON(object: any): Payment;
    toJSON(message: Payment): unknown;
    create(base?: DeepPartial<Payment>): Payment;
    fromPartial(object: DeepPartial<Payment>): Payment;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
