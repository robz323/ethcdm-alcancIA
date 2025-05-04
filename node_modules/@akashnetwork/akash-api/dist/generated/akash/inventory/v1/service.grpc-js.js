"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterRPCClient = exports.ClusterRPCService = exports.NodeRPCClient = exports.NodeRPCService = exports.protobufPackage = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const empty_1 = require("../../../google/protobuf/empty");
const cluster_1 = require("./cluster");
const node_1 = require("./node");
exports.protobufPackage = 'akash.inventory.v1';
exports.NodeRPCService = {
    queryNode: {
        path: '/akash.inventory.v1.NodeRPC/QueryNode',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        requestDeserialize: (value) => empty_1.Empty.decode(value),
        responseSerialize: (value) => Buffer.from(node_1.Node.encode(value).finish()),
        responseDeserialize: (value) => node_1.Node.decode(value),
    },
    streamNode: {
        path: '/akash.inventory.v1.NodeRPC/StreamNode',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        requestDeserialize: (value) => empty_1.Empty.decode(value),
        responseSerialize: (value) => Buffer.from(node_1.Node.encode(value).finish()),
        responseDeserialize: (value) => node_1.Node.decode(value),
    },
};
exports.NodeRPCClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.NodeRPCService, 'akash.inventory.v1.NodeRPC');
exports.ClusterRPCService = {
    queryCluster: {
        path: '/akash.inventory.v1.ClusterRPC/QueryCluster',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        requestDeserialize: (value) => empty_1.Empty.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    streamCluster: {
        path: '/akash.inventory.v1.ClusterRPC/StreamCluster',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        requestDeserialize: (value) => empty_1.Empty.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
};
exports.ClusterRPCClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterRPCService, 'akash.inventory.v1.ClusterRPC');
