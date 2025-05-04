"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderRPCClientImpl = exports.ProviderRPCServiceName = void 0;
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const operators_1 = require("rxjs/operators");
const empty_1 = require("../../../google/protobuf/empty");
const status_1 = require("./status");
exports.ProviderRPCServiceName = 'akash.provider.v1.ProviderRPC';
class ProviderRPCClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.ProviderRPCServiceName;
        this.rpc = rpc;
        this.GetStatus = this.GetStatus.bind(this);
        this.StreamStatus = this.StreamStatus.bind(this);
    }
    GetStatus(request) {
        const data = empty_1.Empty.encode(request).finish();
        const promise = this.rpc.request(this.service, 'GetStatus', data);
        return promise.then((data) => status_1.Status.decode(minimal_1.default.Reader.create(data)));
    }
    StreamStatus(request) {
        const data = empty_1.Empty.encode(request).finish();
        const result = this.rpc.serverStreamingRequest(this.service, 'StreamStatus', data);
        return result.pipe((0, operators_1.map)((data) => status_1.Status.decode(minimal_1.default.Reader.create(data))));
    }
}
exports.ProviderRPCClientImpl = ProviderRPCClientImpl;
