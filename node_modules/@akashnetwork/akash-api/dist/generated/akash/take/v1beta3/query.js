"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = void 0;
exports.QueryServiceName = 'akash.take.v1beta3.Query';
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.QueryServiceName;
        this.rpc = rpc;
    }
}
exports.QueryClientImpl = QueryClientImpl;
