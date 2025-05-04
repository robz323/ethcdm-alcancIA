"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClient = exports.MsgService = exports.protobufPackage = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const bid_1 = require("./bid");
const lease_1 = require("./lease");
exports.protobufPackage = 'akash.market.v1beta4';
exports.MsgService = {
    createBid: {
        path: '/akash.market.v1beta4.Msg/CreateBid',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(bid_1.MsgCreateBid.encode(value).finish()),
        requestDeserialize: (value) => bid_1.MsgCreateBid.decode(value),
        responseSerialize: (value) => Buffer.from(bid_1.MsgCreateBidResponse.encode(value).finish()),
        responseDeserialize: (value) => bid_1.MsgCreateBidResponse.decode(value),
    },
    closeBid: {
        path: '/akash.market.v1beta4.Msg/CloseBid',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(bid_1.MsgCloseBid.encode(value).finish()),
        requestDeserialize: (value) => bid_1.MsgCloseBid.decode(value),
        responseSerialize: (value) => Buffer.from(bid_1.MsgCloseBidResponse.encode(value).finish()),
        responseDeserialize: (value) => bid_1.MsgCloseBidResponse.decode(value),
    },
    withdrawLease: {
        path: '/akash.market.v1beta4.Msg/WithdrawLease',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(lease_1.MsgWithdrawLease.encode(value).finish()),
        requestDeserialize: (value) => lease_1.MsgWithdrawLease.decode(value),
        responseSerialize: (value) => Buffer.from(lease_1.MsgWithdrawLeaseResponse.encode(value).finish()),
        responseDeserialize: (value) => lease_1.MsgWithdrawLeaseResponse.decode(value),
    },
    createLease: {
        path: '/akash.market.v1beta4.Msg/CreateLease',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(lease_1.MsgCreateLease.encode(value).finish()),
        requestDeserialize: (value) => lease_1.MsgCreateLease.decode(value),
        responseSerialize: (value) => Buffer.from(lease_1.MsgCreateLeaseResponse.encode(value).finish()),
        responseDeserialize: (value) => lease_1.MsgCreateLeaseResponse.decode(value),
    },
    closeLease: {
        path: '/akash.market.v1beta4.Msg/CloseLease',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(lease_1.MsgCloseLease.encode(value).finish()),
        requestDeserialize: (value) => lease_1.MsgCloseLease.decode(value),
        responseSerialize: (value) => Buffer.from(lease_1.MsgCloseLeaseResponse.encode(value).finish()),
        responseDeserialize: (value) => lease_1.MsgCloseLeaseResponse.decode(value),
    },
};
exports.MsgClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MsgService, 'akash.market.v1beta4.Msg');
