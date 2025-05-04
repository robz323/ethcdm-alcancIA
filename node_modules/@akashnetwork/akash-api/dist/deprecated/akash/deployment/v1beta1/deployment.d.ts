import Long from 'long';
import { GroupSpec, MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from './group';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "akash.deployment.v1beta1";
export interface MsgCreateDeployment {
    $type: 'akash.deployment.v1beta1.MsgCreateDeployment';
    id: DeploymentID | undefined;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit: Coin | undefined;
}
export interface MsgCreateDeploymentResponse {
    $type: 'akash.deployment.v1beta1.MsgCreateDeploymentResponse';
}
export interface MsgDepositDeployment {
    $type: 'akash.deployment.v1beta1.MsgDepositDeployment';
    id: DeploymentID | undefined;
    amount: Coin | undefined;
}
export interface MsgDepositDeploymentResponse {
    $type: 'akash.deployment.v1beta1.MsgDepositDeploymentResponse';
}
export interface MsgUpdateDeployment {
    $type: 'akash.deployment.v1beta1.MsgUpdateDeployment';
    id: DeploymentID | undefined;
    groups: GroupSpec[];
    version: Uint8Array;
}
export interface MsgUpdateDeploymentResponse {
    $type: 'akash.deployment.v1beta1.MsgUpdateDeploymentResponse';
}
export interface MsgCloseDeployment {
    $type: 'akash.deployment.v1beta1.MsgCloseDeployment';
    id: DeploymentID | undefined;
}
export interface MsgCloseDeploymentResponse {
    $type: 'akash.deployment.v1beta1.MsgCloseDeploymentResponse';
}
export interface DeploymentID {
    $type: 'akash.deployment.v1beta1.DeploymentID';
    owner: string;
    dseq: Long;
}
export interface Deployment {
    $type: 'akash.deployment.v1beta1.Deployment';
    deploymentId: DeploymentID | undefined;
    state: Deployment_State;
    version: Uint8Array;
    createdAt: Long;
}
export declare enum Deployment_State {
    invalid = 0,
    active = 1,
    closed = 2,
    UNRECOGNIZED = -1
}
export declare function deployment_StateFromJSON(object: any): Deployment_State;
export declare function deployment_StateToJSON(object: Deployment_State): string;
export interface DeploymentFilters {
    $type: 'akash.deployment.v1beta1.DeploymentFilters';
    owner: string;
    dseq: Long;
    state: string;
}
export declare const MsgCreateDeployment: {
    $type: "akash.deployment.v1beta1.MsgCreateDeployment";
    encode(message: MsgCreateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeployment;
    fromJSON(object: any): MsgCreateDeployment;
    toJSON(message: MsgCreateDeployment): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string;
            dseq?: string | number | Long;
        };
        groups?: {
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
        }[];
        version?: Uint8Array;
        deposit?: {
            denom?: string;
            amount?: string;
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
        groups?: {
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
        }[] & ({
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
                    allOf?: string[] & string[] & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"]["allOf"], "$type" | keyof string[]>, never>;
                    anyOf?: string[] & string[] & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"]["anyOf"], "$type" | keyof string[]>, never>;
                } & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"], "$type" | "allOf" | "anyOf">, never>;
                attributes?: {
                    key?: string;
                    value?: string;
                }[] & ({
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["groups"][number]["requirements"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["requirements"]["attributes"], "$type" | keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["groups"][number]["requirements"], "$type" | "signedBy" | "attributes">, never>;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        units?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["units"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"], "$type" | "attributes" | "units">, never>;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        quantity?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["quantity"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"], "$type" | "attributes" | "quantity">, never>;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        quantity?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"]["quantity"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"], "$type" | "attributes" | "quantity">, never>;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    }[] & ({
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    } & {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["endpoints"], "$type" | keyof {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    }[]>, never>;
                } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"], "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>;
                count?: number;
                price?: {
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["groups"][number]["resources"][number]["price"], "$type" | "denom" | "amount">, never>;
            } & Record<Exclude<keyof I["groups"][number]["resources"][number], "$type" | "resources" | "count" | "price">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["groups"][number], "$type" | "name" | "requirements" | "resources">, never>)[] & Record<Exclude<keyof I["groups"], "$type" | keyof {
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
        }[]>, never>;
        version?: Uint8Array;
        deposit?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["deposit"], "$type" | "denom" | "amount">, never>;
    } & Record<Exclude<keyof I, "$type" | "id" | "groups" | "version" | "deposit">, never>>(object: I): MsgCreateDeployment;
};
export declare const MsgCreateDeploymentResponse: {
    $type: "akash.deployment.v1beta1.MsgCreateDeploymentResponse";
    encode(_: MsgCreateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeploymentResponse;
    fromJSON(_: any): MsgCreateDeploymentResponse;
    toJSON(_: MsgCreateDeploymentResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): MsgCreateDeploymentResponse;
};
export declare const MsgDepositDeployment: {
    $type: "akash.deployment.v1beta1.MsgDepositDeployment";
    encode(message: MsgDepositDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeployment;
    fromJSON(object: any): MsgDepositDeployment;
    toJSON(message: MsgDepositDeployment): unknown;
    fromPartial<I extends {
        amount?: {
            denom?: string;
            amount?: string;
        };
        id?: {
            owner?: string;
            dseq?: string | number | Long;
        };
    } & {
        amount?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"], "$type" | "denom" | "amount">, never>;
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
    } & Record<Exclude<keyof I, "$type" | "amount" | "id">, never>>(object: I): MsgDepositDeployment;
};
export declare const MsgDepositDeploymentResponse: {
    $type: "akash.deployment.v1beta1.MsgDepositDeploymentResponse";
    encode(_: MsgDepositDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeploymentResponse;
    fromJSON(_: any): MsgDepositDeploymentResponse;
    toJSON(_: MsgDepositDeploymentResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): MsgDepositDeploymentResponse;
};
export declare const MsgUpdateDeployment: {
    $type: "akash.deployment.v1beta1.MsgUpdateDeployment";
    encode(message: MsgUpdateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeployment;
    fromJSON(object: any): MsgUpdateDeployment;
    toJSON(message: MsgUpdateDeployment): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string;
            dseq?: string | number | Long;
        };
        groups?: {
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
        }[];
        version?: Uint8Array;
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
        groups?: {
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
        }[] & ({
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
                    allOf?: string[] & string[] & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"]["allOf"], "$type" | keyof string[]>, never>;
                    anyOf?: string[] & string[] & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"]["anyOf"], "$type" | keyof string[]>, never>;
                } & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"], "$type" | "allOf" | "anyOf">, never>;
                attributes?: {
                    key?: string;
                    value?: string;
                }[] & ({
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["groups"][number]["requirements"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["requirements"]["attributes"], "$type" | keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["groups"][number]["requirements"], "$type" | "signedBy" | "attributes">, never>;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        units?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["units"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"], "$type" | "attributes" | "units">, never>;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        quantity?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["quantity"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"], "$type" | "attributes" | "quantity">, never>;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        quantity?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"]["quantity"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"], "$type" | "attributes" | "quantity">, never>;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    }[] & ({
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    } & {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["endpoints"], "$type" | keyof {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    }[]>, never>;
                } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"], "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>;
                count?: number;
                price?: {
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["groups"][number]["resources"][number]["price"], "$type" | "denom" | "amount">, never>;
            } & Record<Exclude<keyof I["groups"][number]["resources"][number], "$type" | "resources" | "count" | "price">, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["groups"][number], "$type" | "name" | "requirements" | "resources">, never>)[] & Record<Exclude<keyof I["groups"], "$type" | keyof {
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
        }[]>, never>;
        version?: Uint8Array;
    } & Record<Exclude<keyof I, "$type" | "id" | "groups" | "version">, never>>(object: I): MsgUpdateDeployment;
};
export declare const MsgUpdateDeploymentResponse: {
    $type: "akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
    encode(_: MsgUpdateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeploymentResponse;
    fromJSON(_: any): MsgUpdateDeploymentResponse;
    toJSON(_: MsgUpdateDeploymentResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): MsgUpdateDeploymentResponse;
};
export declare const MsgCloseDeployment: {
    $type: "akash.deployment.v1beta1.MsgCloseDeployment";
    encode(message: MsgCloseDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeployment;
    fromJSON(object: any): MsgCloseDeployment;
    toJSON(message: MsgCloseDeployment): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): MsgCloseDeployment;
};
export declare const MsgCloseDeploymentResponse: {
    $type: "akash.deployment.v1beta1.MsgCloseDeploymentResponse";
    encode(_: MsgCloseDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeploymentResponse;
    fromJSON(_: any): MsgCloseDeploymentResponse;
    toJSON(_: MsgCloseDeploymentResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): MsgCloseDeploymentResponse;
};
export declare const DeploymentID: {
    $type: "akash.deployment.v1beta1.DeploymentID";
    encode(message: DeploymentID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentID;
    fromJSON(object: any): DeploymentID;
    toJSON(message: DeploymentID): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["dseq"], "$type" | keyof Long>, never>);
    } & Record<Exclude<keyof I, "$type" | "owner" | "dseq">, never>>(object: I): DeploymentID;
};
export declare const Deployment: {
    $type: "akash.deployment.v1beta1.Deployment";
    encode(message: Deployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deployment;
    fromJSON(object: any): Deployment;
    toJSON(message: Deployment): unknown;
    fromPartial<I extends {
        state?: Deployment_State;
        createdAt?: string | number | Long;
        version?: Uint8Array;
        deploymentId?: {
            owner?: string;
            dseq?: string | number | Long;
        };
    } & {
        state?: Deployment_State;
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
        } & Record<Exclude<keyof I["createdAt"], "$type" | keyof Long>, never>);
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
            } & Record<Exclude<keyof I["deploymentId"]["dseq"], "$type" | keyof Long>, never>);
        } & Record<Exclude<keyof I["deploymentId"], "$type" | "owner" | "dseq">, never>;
    } & Record<Exclude<keyof I, "$type" | "state" | "createdAt" | "version" | "deploymentId">, never>>(object: I): Deployment;
};
export declare const DeploymentFilters: {
    $type: "akash.deployment.v1beta1.DeploymentFilters";
    encode(message: DeploymentFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentFilters;
    fromJSON(object: any): DeploymentFilters;
    toJSON(message: DeploymentFilters): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["dseq"], "$type" | keyof Long>, never>);
        state?: string;
    } & Record<Exclude<keyof I, "$type" | "owner" | "dseq" | "state">, never>>(object: I): DeploymentFilters;
};
export interface Msg {
    CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
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
