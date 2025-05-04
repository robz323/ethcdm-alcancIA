"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = void 0;
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const deploymentmsg_1 = require("./deploymentmsg");
const groupmsg_1 = require("./groupmsg");
exports.MsgServiceName = 'akash.deployment.v1beta3.Msg';
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.MsgServiceName;
        this.rpc = rpc;
        this.CreateDeployment = this.CreateDeployment.bind(this);
        this.DepositDeployment = this.DepositDeployment.bind(this);
        this.UpdateDeployment = this.UpdateDeployment.bind(this);
        this.CloseDeployment = this.CloseDeployment.bind(this);
        this.CloseGroup = this.CloseGroup.bind(this);
        this.PauseGroup = this.PauseGroup.bind(this);
        this.StartGroup = this.StartGroup.bind(this);
    }
    CreateDeployment(request) {
        const data = deploymentmsg_1.MsgCreateDeployment.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CreateDeployment', data);
        return promise.then((data) => deploymentmsg_1.MsgCreateDeploymentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DepositDeployment(request) {
        const data = deploymentmsg_1.MsgDepositDeployment.encode(request).finish();
        const promise = this.rpc.request(this.service, 'DepositDeployment', data);
        return promise.then((data) => deploymentmsg_1.MsgDepositDeploymentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateDeployment(request) {
        const data = deploymentmsg_1.MsgUpdateDeployment.encode(request).finish();
        const promise = this.rpc.request(this.service, 'UpdateDeployment', data);
        return promise.then((data) => deploymentmsg_1.MsgUpdateDeploymentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CloseDeployment(request) {
        const data = deploymentmsg_1.MsgCloseDeployment.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CloseDeployment', data);
        return promise.then((data) => deploymentmsg_1.MsgCloseDeploymentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CloseGroup(request) {
        const data = groupmsg_1.MsgCloseGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CloseGroup', data);
        return promise.then((data) => groupmsg_1.MsgCloseGroupResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PauseGroup(request) {
        const data = groupmsg_1.MsgPauseGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PauseGroup', data);
        return promise.then((data) => groupmsg_1.MsgPauseGroupResponse.decode(minimal_1.default.Reader.create(data)));
    }
    StartGroup(request) {
        const data = groupmsg_1.MsgStartGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, 'StartGroup', data);
        return promise.then((data) => groupmsg_1.MsgStartGroupResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
