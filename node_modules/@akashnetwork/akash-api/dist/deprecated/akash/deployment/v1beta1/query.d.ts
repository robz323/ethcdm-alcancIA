import Long from 'long';
import { DeploymentFilters, DeploymentID, Deployment } from './deployment';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import * as _m0 from 'protobufjs/minimal';
import { Group, GroupID } from './group';
import { Account } from '../../../../generated/akash/escrow/v1beta1/types';
export declare const protobufPackage = "akash.deployment.v1beta1";
export interface QueryDeploymentsRequest {
    $type: 'akash.deployment.v1beta1.QueryDeploymentsRequest';
    filters: DeploymentFilters | undefined;
    pagination: PageRequest | undefined;
}
export interface QueryDeploymentsResponse {
    $type: 'akash.deployment.v1beta1.QueryDeploymentsResponse';
    deployments: QueryDeploymentResponse[];
    pagination: PageResponse | undefined;
}
export interface QueryDeploymentRequest {
    $type: 'akash.deployment.v1beta1.QueryDeploymentRequest';
    id: DeploymentID | undefined;
}
export interface QueryDeploymentResponse {
    $type: 'akash.deployment.v1beta1.QueryDeploymentResponse';
    deployment: Deployment | undefined;
    groups: Group[];
    escrowAccount: Account | undefined;
}
export interface QueryGroupRequest {
    $type: 'akash.deployment.v1beta1.QueryGroupRequest';
    id: GroupID | undefined;
}
export interface QueryGroupResponse {
    $type: 'akash.deployment.v1beta1.QueryGroupResponse';
    group: Group | undefined;
}
export declare const QueryDeploymentsRequest: {
    $type: "akash.deployment.v1beta1.QueryDeploymentsRequest";
    encode(message: QueryDeploymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsRequest;
    fromJSON(object: any): QueryDeploymentsRequest;
    toJSON(message: QueryDeploymentsRequest): unknown;
    fromPartial<I extends {
        filters?: {
            owner?: string;
            dseq?: string | number | Long;
            state?: string;
        };
        pagination?: {
            key?: Uint8Array;
            reverse?: boolean;
            offset?: string | number | Long;
            limit?: string | number | Long;
            countTotal?: boolean;
        };
    } & {
        filters?: {
            owner?: string;
            dseq?: string | number | Long;
            state?: string;
        } & {
            owner?: string;
            dseq?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["filters"]["dseq"], "$type" | keyof Long>, never>);
            state?: string;
        } & Record<Exclude<keyof I["filters"], "$type" | "owner" | "dseq" | "state">, never>;
        pagination?: {
            key?: Uint8Array;
            reverse?: boolean;
            offset?: string | number | Long;
            limit?: string | number | Long;
            countTotal?: boolean;
        } & {
            key?: Uint8Array;
            reverse?: boolean;
            offset?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["pagination"]["offset"], "$type" | keyof Long>, never>);
            limit?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["pagination"]["limit"], "$type" | keyof Long>, never>);
            countTotal?: boolean;
        } & Record<Exclude<keyof I["pagination"], "$type" | "key" | "reverse" | "offset" | "limit" | "countTotal">, never>;
    } & Record<Exclude<keyof I, "$type" | "filters" | "pagination">, never>>(object: I): QueryDeploymentsRequest;
};
export declare const QueryDeploymentsResponse: {
    $type: "akash.deployment.v1beta1.QueryDeploymentsResponse";
    encode(message: QueryDeploymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsResponse;
    fromJSON(object: any): QueryDeploymentsResponse;
    toJSON(message: QueryDeploymentsResponse): unknown;
    fromPartial<I extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: string | number | Long;
        };
        deployments?: {
            groups?: {
                groupId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                    gseq?: number;
                };
                state?: import("./group").Group_State;
                groupSpec?: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                };
                createdAt?: string | number | Long;
            }[];
            deployment?: {
                state?: import("./deployment").Deployment_State;
                createdAt?: string | number | Long;
                version?: Uint8Array;
                deploymentId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                };
            };
            escrowAccount?: {
                owner?: string;
                id?: {
                    scope?: string;
                    xid?: string;
                };
                state?: import("../../../../generated/akash/escrow/v1beta1/types").Account_State;
                balance?: {
                    denom?: string;
                    amount?: string;
                };
                transferred?: {
                    denom?: string;
                    amount?: string;
                };
                settledAt?: string | number | Long;
            };
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: string | number | Long;
        } & {
            nextKey?: Uint8Array;
            total?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["pagination"]["total"], "$type" | keyof Long>, never>);
        } & Record<Exclude<keyof I["pagination"], "$type" | "nextKey" | "total">, never>;
        deployments?: {
            groups?: {
                groupId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                    gseq?: number;
                };
                state?: import("./group").Group_State;
                groupSpec?: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                };
                createdAt?: string | number | Long;
            }[];
            deployment?: {
                state?: import("./deployment").Deployment_State;
                createdAt?: string | number | Long;
                version?: Uint8Array;
                deploymentId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                };
            };
            escrowAccount?: {
                owner?: string;
                id?: {
                    scope?: string;
                    xid?: string;
                };
                state?: import("../../../../generated/akash/escrow/v1beta1/types").Account_State;
                balance?: {
                    denom?: string;
                    amount?: string;
                };
                transferred?: {
                    denom?: string;
                    amount?: string;
                };
                settledAt?: string | number | Long;
            };
        }[] & ({
            groups?: {
                groupId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                    gseq?: number;
                };
                state?: import("./group").Group_State;
                groupSpec?: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                };
                createdAt?: string | number | Long;
            }[];
            deployment?: {
                state?: import("./deployment").Deployment_State;
                createdAt?: string | number | Long;
                version?: Uint8Array;
                deploymentId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                };
            };
            escrowAccount?: {
                owner?: string;
                id?: {
                    scope?: string;
                    xid?: string;
                };
                state?: import("../../../../generated/akash/escrow/v1beta1/types").Account_State;
                balance?: {
                    denom?: string;
                    amount?: string;
                };
                transferred?: {
                    denom?: string;
                    amount?: string;
                };
                settledAt?: string | number | Long;
            };
        } & {
            groups?: {
                groupId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                    gseq?: number;
                };
                state?: import("./group").Group_State;
                groupSpec?: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                };
                createdAt?: string | number | Long;
            }[] & ({
                groupId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                    gseq?: number;
                };
                state?: import("./group").Group_State;
                groupSpec?: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                };
                createdAt?: string | number | Long;
            } & {
                groupId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                    gseq?: number;
                } & {
                    owner?: string;
                    dseq?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupId"]["dseq"], "$type" | keyof Long>, never>);
                    gseq?: number;
                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupId"], "$type" | "owner" | "dseq" | "gseq">, never>;
                state?: import("./group").Group_State;
                groupSpec?: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                } & {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    } & {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        } & {
                            allOf?: string[] & string[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["signedBy"]["allOf"], "$type" | keyof string[]>, never>;
                            anyOf?: string[] & string[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["signedBy"]["anyOf"], "$type" | keyof string[]>, never>;
                        } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["signedBy"], "$type" | "allOf" | "anyOf">, never>;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[] & ({
                            key?: string;
                            value?: string;
                        } & {
                            key?: string;
                            value?: string;
                        } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"], "$type" | "signedBy" | "attributes">, never>;
                    resources?: {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[] & ({
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    } & {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        } & {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            } & {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[] & ({
                                    key?: string;
                                    value?: string;
                                } & {
                                    key?: string;
                                    value?: string;
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"], "$type" | keyof {
                                    key?: string;
                                    value?: string;
                                }[]>, never>;
                                units?: {
                                    val?: Uint8Array;
                                } & {
                                    val?: Uint8Array;
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["units"], "$type" | "val">, never>;
                            } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"], "$type" | "attributes" | "units">, never>;
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            } & {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[] & ({
                                    key?: string;
                                    value?: string;
                                } & {
                                    key?: string;
                                    value?: string;
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"], "$type" | keyof {
                                    key?: string;
                                    value?: string;
                                }[]>, never>;
                                quantity?: {
                                    val?: Uint8Array;
                                } & {
                                    val?: Uint8Array;
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["quantity"], "$type" | "val">, never>;
                            } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"], "$type" | "attributes" | "quantity">, never>;
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            } & {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[] & ({
                                    key?: string;
                                    value?: string;
                                } & {
                                    key?: string;
                                    value?: string;
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"]["attributes"], "$type" | keyof {
                                    key?: string;
                                    value?: string;
                                }[]>, never>;
                                quantity?: {
                                    val?: Uint8Array;
                                } & {
                                    val?: Uint8Array;
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"]["quantity"], "$type" | "val">, never>;
                            } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"], "$type" | "attributes" | "quantity">, never>;
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[] & ({
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            } & {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["endpoints"], "$type" | keyof {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[]>, never>;
                        } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"], "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>;
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["price"], "$type" | "denom" | "amount">, never>;
                    } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number], "$type" | "resources" | "count" | "price">, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"], "$type" | keyof {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"], "$type" | "name" | "requirements" | "resources">, never>;
                createdAt?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["createdAt"], "$type" | keyof Long>, never>);
            } & Record<Exclude<keyof I["deployments"][number]["groups"][number], "$type" | "groupId" | "state" | "groupSpec" | "createdAt">, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"], "$type" | keyof {
                groupId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                    gseq?: number;
                };
                state?: import("./group").Group_State;
                groupSpec?: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                };
                createdAt?: string | number | Long;
            }[]>, never>;
            deployment?: {
                state?: import("./deployment").Deployment_State;
                createdAt?: string | number | Long;
                version?: Uint8Array;
                deploymentId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                };
            } & {
                state?: import("./deployment").Deployment_State;
                createdAt?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["deployments"][number]["deployment"]["createdAt"], "$type" | keyof Long>, never>);
                version?: Uint8Array;
                deploymentId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                } & {
                    owner?: string;
                    dseq?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & Record<Exclude<keyof I["deployments"][number]["deployment"]["deploymentId"]["dseq"], "$type" | keyof Long>, never>);
                } & Record<Exclude<keyof I["deployments"][number]["deployment"]["deploymentId"], "$type" | "owner" | "dseq">, never>;
            } & Record<Exclude<keyof I["deployments"][number]["deployment"], "$type" | "state" | "createdAt" | "version" | "deploymentId">, never>;
            escrowAccount?: {
                owner?: string;
                id?: {
                    scope?: string;
                    xid?: string;
                };
                state?: import("../../../../generated/akash/escrow/v1beta1/types").Account_State;
                balance?: {
                    denom?: string;
                    amount?: string;
                };
                transferred?: {
                    denom?: string;
                    amount?: string;
                };
                settledAt?: string | number | Long;
            } & {
                owner?: string;
                id?: {
                    scope?: string;
                    xid?: string;
                } & {
                    scope?: string;
                    xid?: string;
                } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"]["id"], "$type" | "scope" | "xid">, never>;
                state?: import("../../../../generated/akash/escrow/v1beta1/types").Account_State;
                balance?: {
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"]["balance"], "$type" | "denom" | "amount">, never>;
                transferred?: {
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"]["transferred"], "$type" | "denom" | "amount">, never>;
                settledAt?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"]["settledAt"], "$type" | keyof Long>, never>);
            } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"], "$type" | "owner" | "id" | "state" | "balance" | "transferred" | "settledAt">, never>;
        } & Record<Exclude<keyof I["deployments"][number], "$type" | "groups" | "deployment" | "escrowAccount">, never>)[] & Record<Exclude<keyof I["deployments"], "$type" | keyof {
            groups?: {
                groupId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                    gseq?: number;
                };
                state?: import("./group").Group_State;
                groupSpec?: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                units?: {
                                    val?: Uint8Array;
                                };
                            };
                            memory?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            storage?: {
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                                quantity?: {
                                    val?: Uint8Array;
                                };
                            };
                            endpoints?: {
                                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                };
                createdAt?: string | number | Long;
            }[];
            deployment?: {
                state?: import("./deployment").Deployment_State;
                createdAt?: string | number | Long;
                version?: Uint8Array;
                deploymentId?: {
                    owner?: string;
                    dseq?: string | number | Long;
                };
            };
            escrowAccount?: {
                owner?: string;
                id?: {
                    scope?: string;
                    xid?: string;
                };
                state?: import("../../../../generated/akash/escrow/v1beta1/types").Account_State;
                balance?: {
                    denom?: string;
                    amount?: string;
                };
                transferred?: {
                    denom?: string;
                    amount?: string;
                };
                settledAt?: string | number | Long;
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, "$type" | "pagination" | "deployments">, never>>(object: I): QueryDeploymentsResponse;
};
export declare const QueryDeploymentRequest: {
    $type: "akash.deployment.v1beta1.QueryDeploymentRequest";
    encode(message: QueryDeploymentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentRequest;
    fromJSON(object: any): QueryDeploymentRequest;
    toJSON(message: QueryDeploymentRequest): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string;
            dseq?: string | number | Long;
        };
    } & {
        id?: {
            owner?: string;
            dseq?: string | number | Long;
        } & {
            owner?: string;
            dseq?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["id"]["dseq"], "$type" | keyof Long>, never>);
        } & Record<Exclude<keyof I["id"], "$type" | "owner" | "dseq">, never>;
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): QueryDeploymentRequest;
};
export declare const QueryDeploymentResponse: {
    $type: "akash.deployment.v1beta1.QueryDeploymentResponse";
    encode(message: QueryDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentResponse;
    fromJSON(object: any): QueryDeploymentResponse;
    toJSON(message: QueryDeploymentResponse): unknown;
    fromPartial<I extends {
        groups?: {
            groupId?: {
                owner?: string;
                dseq?: string | number | Long;
                gseq?: number;
            };
            state?: import("./group").Group_State;
            groupSpec?: {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                };
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            };
            createdAt?: string | number | Long;
        }[];
        deployment?: {
            state?: import("./deployment").Deployment_State;
            createdAt?: string | number | Long;
            version?: Uint8Array;
            deploymentId?: {
                owner?: string;
                dseq?: string | number | Long;
            };
        };
        escrowAccount?: {
            owner?: string;
            id?: {
                scope?: string;
                xid?: string;
            };
            state?: import("../../../../generated/akash/escrow/v1beta1/types").Account_State;
            balance?: {
                denom?: string;
                amount?: string;
            };
            transferred?: {
                denom?: string;
                amount?: string;
            };
            settledAt?: string | number | Long;
        };
    } & {
        groups?: {
            groupId?: {
                owner?: string;
                dseq?: string | number | Long;
                gseq?: number;
            };
            state?: import("./group").Group_State;
            groupSpec?: {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                };
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            };
            createdAt?: string | number | Long;
        }[] & ({
            groupId?: {
                owner?: string;
                dseq?: string | number | Long;
                gseq?: number;
            };
            state?: import("./group").Group_State;
            groupSpec?: {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                };
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            };
            createdAt?: string | number | Long;
        } & {
            groupId?: {
                owner?: string;
                dseq?: string | number | Long;
                gseq?: number;
            } & {
                owner?: string;
                dseq?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["groups"][number]["groupId"]["dseq"], "$type" | keyof Long>, never>);
                gseq?: number;
            } & Record<Exclude<keyof I["groups"][number]["groupId"], "$type" | "owner" | "dseq" | "gseq">, never>;
            state?: import("./group").Group_State;
            groupSpec?: {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                };
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            } & {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                } & {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    } & {
                        allOf?: string[] & string[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["signedBy"]["allOf"], "$type" | keyof string[]>, never>;
                        anyOf?: string[] & string[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["signedBy"]["anyOf"], "$type" | keyof string[]>, never>;
                    } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["signedBy"], "$type" | "allOf" | "anyOf">, never>;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[] & ({
                        key?: string;
                        value?: string;
                    } & {
                        key?: string;
                        value?: string;
                    } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["attributes"], "$type" | keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"], "$type" | "signedBy" | "attributes">, never>;
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[] & ({
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                } & {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    } & {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        } & {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[] & ({
                                key?: string;
                                value?: string;
                            } & {
                                key?: string;
                                value?: string;
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"], "$type" | keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                            units?: {
                                val?: Uint8Array;
                            } & {
                                val?: Uint8Array;
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["units"], "$type" | "val">, never>;
                        } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"], "$type" | "attributes" | "units">, never>;
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        } & {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[] & ({
                                key?: string;
                                value?: string;
                            } & {
                                key?: string;
                                value?: string;
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"], "$type" | keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                            quantity?: {
                                val?: Uint8Array;
                            } & {
                                val?: Uint8Array;
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["quantity"], "$type" | "val">, never>;
                        } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"], "$type" | "attributes" | "quantity">, never>;
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        } & {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[] & ({
                                key?: string;
                                value?: string;
                            } & {
                                key?: string;
                                value?: string;
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"]["attributes"], "$type" | keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                            quantity?: {
                                val?: Uint8Array;
                            } & {
                                val?: Uint8Array;
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"]["quantity"], "$type" | "val">, never>;
                        } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"], "$type" | "attributes" | "quantity">, never>;
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[] & ({
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        } & {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["endpoints"], "$type" | keyof {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"], "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>;
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["price"], "$type" | "denom" | "amount">, never>;
                } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number], "$type" | "resources" | "count" | "price">, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"], "$type" | keyof {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["groups"][number]["groupSpec"], "$type" | "name" | "requirements" | "resources">, never>;
            createdAt?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["groups"][number]["createdAt"], "$type" | keyof Long>, never>);
        } & Record<Exclude<keyof I["groups"][number], "$type" | "groupId" | "state" | "groupSpec" | "createdAt">, never>)[] & Record<Exclude<keyof I["groups"], "$type" | keyof {
            groupId?: {
                owner?: string;
                dseq?: string | number | Long;
                gseq?: number;
            };
            state?: import("./group").Group_State;
            groupSpec?: {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                };
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            };
            createdAt?: string | number | Long;
        }[]>, never>;
        deployment?: {
            state?: import("./deployment").Deployment_State;
            createdAt?: string | number | Long;
            version?: Uint8Array;
            deploymentId?: {
                owner?: string;
                dseq?: string | number | Long;
            };
        } & {
            state?: import("./deployment").Deployment_State;
            createdAt?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["deployment"]["createdAt"], "$type" | keyof Long>, never>);
            version?: Uint8Array;
            deploymentId?: {
                owner?: string;
                dseq?: string | number | Long;
            } & {
                owner?: string;
                dseq?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["deployment"]["deploymentId"]["dseq"], "$type" | keyof Long>, never>);
            } & Record<Exclude<keyof I["deployment"]["deploymentId"], "$type" | "owner" | "dseq">, never>;
        } & Record<Exclude<keyof I["deployment"], "$type" | "state" | "createdAt" | "version" | "deploymentId">, never>;
        escrowAccount?: {
            owner?: string;
            id?: {
                scope?: string;
                xid?: string;
            };
            state?: import("../../../../generated/akash/escrow/v1beta1/types").Account_State;
            balance?: {
                denom?: string;
                amount?: string;
            };
            transferred?: {
                denom?: string;
                amount?: string;
            };
            settledAt?: string | number | Long;
        } & {
            owner?: string;
            id?: {
                scope?: string;
                xid?: string;
            } & {
                scope?: string;
                xid?: string;
            } & Record<Exclude<keyof I["escrowAccount"]["id"], "$type" | "scope" | "xid">, never>;
            state?: import("../../../../generated/akash/escrow/v1beta1/types").Account_State;
            balance?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["escrowAccount"]["balance"], "$type" | "denom" | "amount">, never>;
            transferred?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["escrowAccount"]["transferred"], "$type" | "denom" | "amount">, never>;
            settledAt?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["escrowAccount"]["settledAt"], "$type" | keyof Long>, never>);
        } & Record<Exclude<keyof I["escrowAccount"], "$type" | "owner" | "id" | "state" | "balance" | "transferred" | "settledAt">, never>;
    } & Record<Exclude<keyof I, "$type" | "groups" | "deployment" | "escrowAccount">, never>>(object: I): QueryDeploymentResponse;
};
export declare const QueryGroupRequest: {
    $type: "akash.deployment.v1beta1.QueryGroupRequest";
    encode(message: QueryGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupRequest;
    fromJSON(object: any): QueryGroupRequest;
    toJSON(message: QueryGroupRequest): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string;
            dseq?: string | number | Long;
            gseq?: number;
        };
    } & {
        id?: {
            owner?: string;
            dseq?: string | number | Long;
            gseq?: number;
        } & {
            owner?: string;
            dseq?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["id"]["dseq"], "$type" | keyof Long>, never>);
            gseq?: number;
        } & Record<Exclude<keyof I["id"], "$type" | "owner" | "dseq" | "gseq">, never>;
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): QueryGroupRequest;
};
export declare const QueryGroupResponse: {
    $type: "akash.deployment.v1beta1.QueryGroupResponse";
    encode(message: QueryGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupResponse;
    fromJSON(object: any): QueryGroupResponse;
    toJSON(message: QueryGroupResponse): unknown;
    fromPartial<I extends {
        group?: {
            groupId?: {
                owner?: string;
                dseq?: string | number | Long;
                gseq?: number;
            };
            state?: import("./group").Group_State;
            groupSpec?: {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                };
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            };
            createdAt?: string | number | Long;
        };
    } & {
        group?: {
            groupId?: {
                owner?: string;
                dseq?: string | number | Long;
                gseq?: number;
            };
            state?: import("./group").Group_State;
            groupSpec?: {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                };
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            };
            createdAt?: string | number | Long;
        } & {
            groupId?: {
                owner?: string;
                dseq?: string | number | Long;
                gseq?: number;
            } & {
                owner?: string;
                dseq?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & Record<Exclude<keyof I["group"]["groupId"]["dseq"], "$type" | keyof Long>, never>);
                gseq?: number;
            } & Record<Exclude<keyof I["group"]["groupId"], "$type" | "owner" | "dseq" | "gseq">, never>;
            state?: import("./group").Group_State;
            groupSpec?: {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                };
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            } & {
                name?: string;
                requirements?: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                } & {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    } & {
                        allOf?: string[] & string[] & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["signedBy"]["allOf"], "$type" | keyof string[]>, never>;
                        anyOf?: string[] & string[] & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["signedBy"]["anyOf"], "$type" | keyof string[]>, never>;
                    } & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["signedBy"], "$type" | "allOf" | "anyOf">, never>;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[] & ({
                        key?: string;
                        value?: string;
                    } & {
                        key?: string;
                        value?: string;
                    } & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["attributes"], "$type" | keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"], "$type" | "signedBy" | "attributes">, never>;
                resources?: {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[] & ({
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                } & {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    } & {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        } & {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[] & ({
                                key?: string;
                                value?: string;
                            } & {
                                key?: string;
                                value?: string;
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"], "$type" | keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                            units?: {
                                val?: Uint8Array;
                            } & {
                                val?: Uint8Array;
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["cpu"]["units"], "$type" | "val">, never>;
                        } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["cpu"], "$type" | "attributes" | "units">, never>;
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        } & {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[] & ({
                                key?: string;
                                value?: string;
                            } & {
                                key?: string;
                                value?: string;
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"], "$type" | keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                            quantity?: {
                                val?: Uint8Array;
                            } & {
                                val?: Uint8Array;
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["memory"]["quantity"], "$type" | "val">, never>;
                        } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["memory"], "$type" | "attributes" | "quantity">, never>;
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        } & {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[] & ({
                                key?: string;
                                value?: string;
                            } & {
                                key?: string;
                                value?: string;
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["storage"]["attributes"], "$type" | keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                            quantity?: {
                                val?: Uint8Array;
                            } & {
                                val?: Uint8Array;
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["storage"]["quantity"], "$type" | "val">, never>;
                        } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["storage"], "$type" | "attributes" | "quantity">, never>;
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[] & ({
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        } & {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["endpoints"], "$type" | keyof {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"], "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>;
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["price"], "$type" | "denom" | "amount">, never>;
                } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number], "$type" | "resources" | "count" | "price">, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"], "$type" | keyof {
                    resources?: {
                        cpu?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            units?: {
                                val?: Uint8Array;
                            };
                        };
                        memory?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        storage?: {
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                            quantity?: {
                                val?: Uint8Array;
                            };
                        };
                        endpoints?: {
                            kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["group"]["groupSpec"], "$type" | "name" | "requirements" | "resources">, never>;
            createdAt?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["group"]["createdAt"], "$type" | keyof Long>, never>);
        } & Record<Exclude<keyof I["group"], "$type" | "groupId" | "state" | "groupSpec" | "createdAt">, never>;
    } & Record<Exclude<keyof I, "$type" | "group">, never>>(object: I): QueryGroupResponse;
};
export interface Query {
    Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;
export {};
