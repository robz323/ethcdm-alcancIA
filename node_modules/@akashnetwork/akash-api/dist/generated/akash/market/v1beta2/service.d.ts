import { MsgCloseBid, MsgCloseBidResponse, MsgCreateBid, MsgCreateBidResponse } from './bid';
import { MsgCloseLease, MsgCloseLeaseResponse, MsgCreateLease, MsgCreateLeaseResponse, MsgWithdrawLease, MsgWithdrawLeaseResponse } from './lease';
export interface Msg {
    CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
    CloseBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
    WithdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
    CreateLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
    CloseLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
}
export declare const MsgServiceName = "akash.market.v1beta2.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
    CloseBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
    WithdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
    CreateLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
    CloseLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
