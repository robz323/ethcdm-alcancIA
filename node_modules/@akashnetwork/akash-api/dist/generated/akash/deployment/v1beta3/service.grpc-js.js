"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClient = exports.MsgService = exports.protobufPackage = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const deploymentmsg_1 = require("./deploymentmsg");
const groupmsg_1 = require("./groupmsg");
exports.protobufPackage = 'akash.deployment.v1beta3';
exports.MsgService = {
    createDeployment: {
        path: '/akash.deployment.v1beta3.Msg/CreateDeployment',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(deploymentmsg_1.MsgCreateDeployment.encode(value).finish()),
        requestDeserialize: (value) => deploymentmsg_1.MsgCreateDeployment.decode(value),
        responseSerialize: (value) => Buffer.from(deploymentmsg_1.MsgCreateDeploymentResponse.encode(value).finish()),
        responseDeserialize: (value) => deploymentmsg_1.MsgCreateDeploymentResponse.decode(value),
    },
    depositDeployment: {
        path: '/akash.deployment.v1beta3.Msg/DepositDeployment',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(deploymentmsg_1.MsgDepositDeployment.encode(value).finish()),
        requestDeserialize: (value) => deploymentmsg_1.MsgDepositDeployment.decode(value),
        responseSerialize: (value) => Buffer.from(deploymentmsg_1.MsgDepositDeploymentResponse.encode(value).finish()),
        responseDeserialize: (value) => deploymentmsg_1.MsgDepositDeploymentResponse.decode(value),
    },
    updateDeployment: {
        path: '/akash.deployment.v1beta3.Msg/UpdateDeployment',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(deploymentmsg_1.MsgUpdateDeployment.encode(value).finish()),
        requestDeserialize: (value) => deploymentmsg_1.MsgUpdateDeployment.decode(value),
        responseSerialize: (value) => Buffer.from(deploymentmsg_1.MsgUpdateDeploymentResponse.encode(value).finish()),
        responseDeserialize: (value) => deploymentmsg_1.MsgUpdateDeploymentResponse.decode(value),
    },
    closeDeployment: {
        path: '/akash.deployment.v1beta3.Msg/CloseDeployment',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(deploymentmsg_1.MsgCloseDeployment.encode(value).finish()),
        requestDeserialize: (value) => deploymentmsg_1.MsgCloseDeployment.decode(value),
        responseSerialize: (value) => Buffer.from(deploymentmsg_1.MsgCloseDeploymentResponse.encode(value).finish()),
        responseDeserialize: (value) => deploymentmsg_1.MsgCloseDeploymentResponse.decode(value),
    },
    closeGroup: {
        path: '/akash.deployment.v1beta3.Msg/CloseGroup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(groupmsg_1.MsgCloseGroup.encode(value).finish()),
        requestDeserialize: (value) => groupmsg_1.MsgCloseGroup.decode(value),
        responseSerialize: (value) => Buffer.from(groupmsg_1.MsgCloseGroupResponse.encode(value).finish()),
        responseDeserialize: (value) => groupmsg_1.MsgCloseGroupResponse.decode(value),
    },
    pauseGroup: {
        path: '/akash.deployment.v1beta3.Msg/PauseGroup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(groupmsg_1.MsgPauseGroup.encode(value).finish()),
        requestDeserialize: (value) => groupmsg_1.MsgPauseGroup.decode(value),
        responseSerialize: (value) => Buffer.from(groupmsg_1.MsgPauseGroupResponse.encode(value).finish()),
        responseDeserialize: (value) => groupmsg_1.MsgPauseGroupResponse.decode(value),
    },
    startGroup: {
        path: '/akash.deployment.v1beta3.Msg/StartGroup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(groupmsg_1.MsgStartGroup.encode(value).finish()),
        requestDeserialize: (value) => groupmsg_1.MsgStartGroup.decode(value),
        responseSerialize: (value) => Buffer.from(groupmsg_1.MsgStartGroupResponse.encode(value).finish()),
        responseDeserialize: (value) => groupmsg_1.MsgStartGroupResponse.decode(value),
    },
};
exports.MsgClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MsgService, 'akash.deployment.v1beta3.Msg');
