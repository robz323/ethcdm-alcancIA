"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryGroupResponse = exports.QueryGroupRequest = exports.QueryDeploymentResponse = exports.QueryDeploymentRequest = exports.QueryDeploymentsResponse = exports.QueryDeploymentsRequest = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const typeRegistry_1 = require("../../../typeRegistry");
const types_1 = require("../../escrow/v1beta3/types");
const deployment_1 = require("./deployment");
const group_1 = require("./group");
const groupid_1 = require("./groupid");
function createBaseQueryDeploymentsRequest() {
    return {
        $type: 'akash.deployment.v1beta3.QueryDeploymentsRequest',
        filters: undefined,
        pagination: undefined,
    };
}
exports.QueryDeploymentsRequest = {
    $type: 'akash.deployment.v1beta3.QueryDeploymentsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filters !== undefined) {
            deployment_1.DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filters = deployment_1.DeploymentFilters.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryDeploymentsRequest.$type,
            filters: isSet(object.filters)
                ? deployment_1.DeploymentFilters.fromJSON(object.filters)
                : undefined,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filters !== undefined) {
            obj.filters = deployment_1.DeploymentFilters.toJSON(message.filters);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDeploymentsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDeploymentsRequest();
        message.filters =
            object.filters !== undefined && object.filters !== null
                ? deployment_1.DeploymentFilters.fromPartial(object.filters)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryDeploymentsRequest.$type, exports.QueryDeploymentsRequest);
function createBaseQueryDeploymentsResponse() {
    return {
        $type: 'akash.deployment.v1beta3.QueryDeploymentsResponse',
        deployments: [],
        pagination: undefined,
    };
}
exports.QueryDeploymentsResponse = {
    $type: 'akash.deployment.v1beta3.QueryDeploymentsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.deployments) {
            exports.QueryDeploymentResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.deployments.push(exports.QueryDeploymentResponse.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryDeploymentsResponse.$type,
            deployments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.deployments)
                ? object.deployments.map((e) => exports.QueryDeploymentResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.deployments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.deployments = message.deployments.map((e) => exports.QueryDeploymentResponse.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDeploymentsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDeploymentsResponse();
        message.deployments =
            ((_a = object.deployments) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryDeploymentResponse.fromPartial(e))) ||
                [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryDeploymentsResponse.$type, exports.QueryDeploymentsResponse);
function createBaseQueryDeploymentRequest() {
    return {
        $type: 'akash.deployment.v1beta3.QueryDeploymentRequest',
        id: undefined,
    };
}
exports.QueryDeploymentRequest = {
    $type: 'akash.deployment.v1beta3.QueryDeploymentRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryDeploymentRequest.$type,
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = deployment_1.DeploymentID.toJSON(message.id);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDeploymentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDeploymentRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryDeploymentRequest.$type, exports.QueryDeploymentRequest);
function createBaseQueryDeploymentResponse() {
    return {
        $type: 'akash.deployment.v1beta3.QueryDeploymentResponse',
        deployment: undefined,
        groups: [],
        escrowAccount: undefined,
    };
}
exports.QueryDeploymentResponse = {
    $type: 'akash.deployment.v1beta3.QueryDeploymentResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deployment !== undefined) {
            deployment_1.Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            types_1.Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.deployment = deployment_1.Deployment.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.escrowAccount = types_1.Account.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryDeploymentResponse.$type,
            deployment: isSet(object.deployment)
                ? deployment_1.Deployment.fromJSON(object.deployment)
                : undefined,
            groups: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.groups)
                ? object.groups.map((e) => group_1.Group.fromJSON(e))
                : [],
            escrowAccount: isSet(object.escrowAccount)
                ? types_1.Account.fromJSON(object.escrowAccount)
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.deployment !== undefined) {
            obj.deployment = deployment_1.Deployment.toJSON(message.deployment);
        }
        if ((_a = message.groups) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groups = message.groups.map((e) => group_1.Group.toJSON(e));
        }
        if (message.escrowAccount !== undefined) {
            obj.escrowAccount = types_1.Account.toJSON(message.escrowAccount);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDeploymentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDeploymentResponse();
        message.deployment =
            object.deployment !== undefined && object.deployment !== null
                ? deployment_1.Deployment.fromPartial(object.deployment)
                : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => group_1.Group.fromPartial(e))) || [];
        message.escrowAccount =
            object.escrowAccount !== undefined && object.escrowAccount !== null
                ? types_1.Account.fromPartial(object.escrowAccount)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryDeploymentResponse.$type, exports.QueryDeploymentResponse);
function createBaseQueryGroupRequest() {
    return { $type: 'akash.deployment.v1beta3.QueryGroupRequest', id: undefined };
}
exports.QueryGroupRequest = {
    $type: 'akash.deployment.v1beta3.QueryGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryGroupRequest.$type,
            id: isSet(object.id) ? groupid_1.GroupID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = groupid_1.GroupID.toJSON(message.id);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGroupRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryGroupRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? groupid_1.GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGroupRequest.$type, exports.QueryGroupRequest);
function createBaseQueryGroupResponse() {
    return {
        $type: 'akash.deployment.v1beta3.QueryGroupResponse',
        group: undefined,
    };
}
exports.QueryGroupResponse = {
    $type: 'akash.deployment.v1beta3.QueryGroupResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.group !== undefined) {
            group_1.Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.group = group_1.Group.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryGroupResponse.$type,
            group: isSet(object.group) ? group_1.Group.fromJSON(object.group) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.group !== undefined) {
            obj.group = group_1.Group.toJSON(message.group);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryGroupResponse();
        message.group =
            object.group !== undefined && object.group !== null
                ? group_1.Group.fromPartial(object.group)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGroupResponse.$type, exports.QueryGroupResponse);
exports.QueryServiceName = 'akash.deployment.v1beta3.Query';
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.QueryServiceName;
        this.rpc = rpc;
        this.Deployments = this.Deployments.bind(this);
        this.Deployment = this.Deployment.bind(this);
        this.Group = this.Group.bind(this);
    }
    Deployments(request) {
        const data = exports.QueryDeploymentsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Deployments', data);
        return promise.then((data) => exports.QueryDeploymentsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Deployment(request) {
        const data = exports.QueryDeploymentRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Deployment', data);
        return promise.then((data) => exports.QueryDeploymentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Group(request) {
        const data = exports.QueryGroupRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Group', data);
        return promise.then((data) => exports.QueryGroupResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
