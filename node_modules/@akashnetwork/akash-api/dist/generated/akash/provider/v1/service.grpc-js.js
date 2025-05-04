"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderRPCClient = exports.ProviderRPCService = exports.protobufPackage = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const empty_1 = require("../../../google/protobuf/empty");
const status_1 = require("./status");
exports.protobufPackage = 'akash.provider.v1';
exports.ProviderRPCService = {
    getStatus: {
        path: '/akash.provider.v1.ProviderRPC/GetStatus',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        requestDeserialize: (value) => empty_1.Empty.decode(value),
        responseSerialize: (value) => Buffer.from(status_1.Status.encode(value).finish()),
        responseDeserialize: (value) => status_1.Status.decode(value),
    },
    streamStatus: {
        path: '/akash.provider.v1.ProviderRPC/StreamStatus',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        requestDeserialize: (value) => empty_1.Empty.decode(value),
        responseSerialize: (value) => Buffer.from(status_1.Status.encode(value).finish()),
        responseDeserialize: (value) => status_1.Status.decode(value),
    },
};
exports.ProviderRPCClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProviderRPCService, 'akash.provider.v1.ProviderRPC');
