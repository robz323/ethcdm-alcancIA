"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterRPCClientImpl = exports.ClusterRPCServiceName = exports.NodeRPCClientImpl = exports.NodeRPCServiceName = void 0;
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const operators_1 = require("rxjs/operators");
const empty_1 = require("../../../google/protobuf/empty");
const cluster_1 = require("./cluster");
const node_1 = require("./node");
exports.NodeRPCServiceName = 'akash.inventory.v1.NodeRPC';
class NodeRPCClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.NodeRPCServiceName;
        this.rpc = rpc;
        this.QueryNode = this.QueryNode.bind(this);
        this.StreamNode = this.StreamNode.bind(this);
    }
    QueryNode(request) {
        const data = empty_1.Empty.encode(request).finish();
        const promise = this.rpc.request(this.service, 'QueryNode', data);
        return promise.then((data) => node_1.Node.decode(minimal_1.default.Reader.create(data)));
    }
    StreamNode(request) {
        const data = empty_1.Empty.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(this.service, 'StreamNode', data);
        return result.pipe((0, operators_1.map)((data) => node_1.Node.decode(minimal_1.default.Reader.create(data))));
    }
}
exports.NodeRPCClientImpl = NodeRPCClientImpl;
exports.ClusterRPCServiceName = 'akash.inventory.v1.ClusterRPC';
class ClusterRPCClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.ClusterRPCServiceName;
        this.rpc = rpc;
        this.QueryCluster = this.QueryCluster.bind(this);
        this.StreamCluster = this.StreamCluster.bind(this);
    }
    QueryCluster(request) {
        const data = empty_1.Empty.encode(request).finish();
        const promise = this.rpc.request(this.service, 'QueryCluster', data);
        return promise.then((data) => cluster_1.Cluster.decode(minimal_1.default.Reader.create(data)));
    }
    StreamCluster(request) {
        const data = empty_1.Empty.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(this.service, 'StreamCluster', data);
        return result.pipe((0, operators_1.map)((data) => cluster_1.Cluster.decode(minimal_1.default.Reader.create(data))));
    }
}
exports.ClusterRPCClientImpl = ClusterRPCClientImpl;
