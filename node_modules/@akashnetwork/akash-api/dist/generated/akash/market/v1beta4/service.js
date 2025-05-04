"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = void 0;
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const bid_1 = require("./bid");
const lease_1 = require("./lease");
exports.MsgServiceName = 'akash.market.v1beta4.Msg';
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.MsgServiceName;
        this.rpc = rpc;
        this.CreateBid = this.CreateBid.bind(this);
        this.CloseBid = this.CloseBid.bind(this);
        this.WithdrawLease = this.WithdrawLease.bind(this);
        this.CreateLease = this.CreateLease.bind(this);
        this.CloseLease = this.CloseLease.bind(this);
    }
    CreateBid(request) {
        const data = bid_1.MsgCreateBid.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CreateBid', data);
        return promise.then((data) => bid_1.MsgCreateBidResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CloseBid(request) {
        const data = bid_1.MsgCloseBid.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CloseBid', data);
        return promise.then((data) => bid_1.MsgCloseBidResponse.decode(minimal_1.default.Reader.create(data)));
    }
    WithdrawLease(request) {
        const data = lease_1.MsgWithdrawLease.encode(request).finish();
        const promise = this.rpc.request(this.service, 'WithdrawLease', data);
        return promise.then((data) => lease_1.MsgWithdrawLeaseResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreateLease(request) {
        const data = lease_1.MsgCreateLease.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CreateLease', data);
        return promise.then((data) => lease_1.MsgCreateLeaseResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CloseLease(request) {
        const data = lease_1.MsgCloseLease.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CloseLease', data);
        return promise.then((data) => lease_1.MsgCloseLeaseResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
