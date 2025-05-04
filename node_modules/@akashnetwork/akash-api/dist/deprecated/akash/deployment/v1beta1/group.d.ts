import Long from 'long';
import { PlacementRequirements } from '../../base/v1beta1/attribute';
import { ResourceUnits } from '../../base/v1beta1/resource';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "akash.deployment.v1beta1";
export interface MsgCloseGroup {
    $type: 'akash.deployment.v1beta1.MsgCloseGroup';
    id: GroupID | undefined;
}
export interface MsgCloseGroupResponse {
    $type: 'akash.deployment.v1beta1.MsgCloseGroupResponse';
}
export interface MsgPauseGroup {
    $type: 'akash.deployment.v1beta1.MsgPauseGroup';
    id: GroupID | undefined;
}
export interface MsgPauseGroupResponse {
    $type: 'akash.deployment.v1beta1.MsgPauseGroupResponse';
}
export interface MsgStartGroup {
    $type: 'akash.deployment.v1beta1.MsgStartGroup';
    id: GroupID | undefined;
}
export interface MsgStartGroupResponse {
    $type: 'akash.deployment.v1beta1.MsgStartGroupResponse';
}
export interface GroupID {
    $type: 'akash.deployment.v1beta1.GroupID';
    owner: string;
    dseq: Long;
    gseq: number;
}
export interface GroupSpec {
    $type: 'akash.deployment.v1beta1.GroupSpec';
    name: string;
    requirements: PlacementRequirements | undefined;
    resources: Resource[];
}
export interface Group {
    $type: 'akash.deployment.v1beta1.Group';
    groupId: GroupID | undefined;
    state: Group_State;
    groupSpec: GroupSpec | undefined;
    createdAt: Long;
}
export declare enum Group_State {
    invalid = 0,
    open = 1,
    paused = 2,
    insufficient_funds = 3,
    closed = 4,
    UNRECOGNIZED = -1
}
export declare function group_StateFromJSON(object: any): Group_State;
export declare function group_StateToJSON(object: Group_State): string;
export interface Resource {
    $type: 'akash.deployment.v1beta1.Resource';
    resources: ResourceUnits | undefined;
    count: number;
    price: Coin | undefined;
}
export declare const MsgCloseGroup: {
    $type: "akash.deployment.v1beta1.MsgCloseGroup";
    encode(message: MsgCloseGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroup;
    fromJSON(object: any): MsgCloseGroup;
    toJSON(message: MsgCloseGroup): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): MsgCloseGroup;
};
export declare const MsgCloseGroupResponse: {
    $type: "akash.deployment.v1beta1.MsgCloseGroupResponse";
    encode(_: MsgCloseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroupResponse;
    fromJSON(_: any): MsgCloseGroupResponse;
    toJSON(_: MsgCloseGroupResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): MsgCloseGroupResponse;
};
export declare const MsgPauseGroup: {
    $type: "akash.deployment.v1beta1.MsgPauseGroup";
    encode(message: MsgPauseGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroup;
    fromJSON(object: any): MsgPauseGroup;
    toJSON(message: MsgPauseGroup): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): MsgPauseGroup;
};
export declare const MsgPauseGroupResponse: {
    $type: "akash.deployment.v1beta1.MsgPauseGroupResponse";
    encode(_: MsgPauseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroupResponse;
    fromJSON(_: any): MsgPauseGroupResponse;
    toJSON(_: MsgPauseGroupResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): MsgPauseGroupResponse;
};
export declare const MsgStartGroup: {
    $type: "akash.deployment.v1beta1.MsgStartGroup";
    encode(message: MsgStartGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroup;
    fromJSON(object: any): MsgStartGroup;
    toJSON(message: MsgStartGroup): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): MsgStartGroup;
};
export declare const MsgStartGroupResponse: {
    $type: "akash.deployment.v1beta1.MsgStartGroupResponse";
    encode(_: MsgStartGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroupResponse;
    fromJSON(_: any): MsgStartGroupResponse;
    toJSON(_: MsgStartGroupResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): MsgStartGroupResponse;
};
export declare const GroupID: {
    $type: "akash.deployment.v1beta1.GroupID";
    encode(message: GroupID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupID;
    fromJSON(object: any): GroupID;
    toJSON(message: GroupID): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["dseq"], "$type" | keyof Long>, never>);
        gseq?: number;
    } & Record<Exclude<keyof I, "$type" | "owner" | "dseq" | "gseq">, never>>(object: I): GroupID;
};
export declare const GroupSpec: {
    $type: "akash.deployment.v1beta1.GroupSpec";
    encode(message: GroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec;
    fromJSON(object: any): GroupSpec;
    toJSON(message: GroupSpec): unknown;
    fromPartial<I extends {
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
                allOf?: string[] & string[] & Record<Exclude<keyof I["requirements"]["signedBy"]["allOf"], "$type" | keyof string[]>, never>;
                anyOf?: string[] & string[] & Record<Exclude<keyof I["requirements"]["signedBy"]["anyOf"], "$type" | keyof string[]>, never>;
            } & Record<Exclude<keyof I["requirements"]["signedBy"], "$type" | "allOf" | "anyOf">, never>;
            attributes?: {
                key?: string;
                value?: string;
            }[] & ({
                key?: string;
                value?: string;
            } & {
                key?: string;
                value?: string;
            } & Record<Exclude<keyof I["requirements"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["requirements"]["attributes"], "$type" | keyof {
                key?: string;
                value?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["requirements"], "$type" | "signedBy" | "attributes">, never>;
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
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["resources"][number]["resources"]["cpu"]["attributes"], "$type" | keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                    units?: {
                        val?: Uint8Array;
                    } & {
                        val?: Uint8Array;
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["cpu"]["units"], "$type" | "val">, never>;
                } & Record<Exclude<keyof I["resources"][number]["resources"]["cpu"], "$type" | "attributes" | "units">, never>;
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
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["resources"][number]["resources"]["memory"]["attributes"], "$type" | keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                    quantity?: {
                        val?: Uint8Array;
                    } & {
                        val?: Uint8Array;
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["memory"]["quantity"], "$type" | "val">, never>;
                } & Record<Exclude<keyof I["resources"][number]["resources"]["memory"], "$type" | "attributes" | "quantity">, never>;
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
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["resources"][number]["resources"]["storage"]["attributes"], "$type" | keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                    quantity?: {
                        val?: Uint8Array;
                    } & {
                        val?: Uint8Array;
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["storage"]["quantity"], "$type" | "val">, never>;
                } & Record<Exclude<keyof I["resources"][number]["resources"]["storage"], "$type" | "attributes" | "quantity">, never>;
                endpoints?: {
                    kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                }[] & ({
                    kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                } & {
                    kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                } & Record<Exclude<keyof I["resources"][number]["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["resources"][number]["resources"]["endpoints"], "$type" | keyof {
                    kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                }[]>, never>;
            } & Record<Exclude<keyof I["resources"][number]["resources"], "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>;
            count?: number;
            price?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["resources"][number]["price"], "$type" | "denom" | "amount">, never>;
        } & Record<Exclude<keyof I["resources"][number], "$type" | "resources" | "count" | "price">, never>)[] & Record<Exclude<keyof I["resources"], "$type" | keyof {
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
    } & Record<Exclude<keyof I, "$type" | "name" | "requirements" | "resources">, never>>(object: I): GroupSpec;
};
export declare const Group: {
    $type: "akash.deployment.v1beta1.Group";
    encode(message: Group, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Group;
    fromJSON(object: any): Group;
    toJSON(message: Group): unknown;
    fromPartial<I extends {
        groupId?: {
            owner?: string;
            dseq?: string | number | Long;
            gseq?: number;
        };
        state?: Group_State;
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
            } & Record<Exclude<keyof I["groupId"]["dseq"], "$type" | keyof Long>, never>);
            gseq?: number;
        } & Record<Exclude<keyof I["groupId"], "$type" | "owner" | "dseq" | "gseq">, never>;
        state?: Group_State;
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
                    allOf?: string[] & string[] & Record<Exclude<keyof I["groupSpec"]["requirements"]["signedBy"]["allOf"], "$type" | keyof string[]>, never>;
                    anyOf?: string[] & string[] & Record<Exclude<keyof I["groupSpec"]["requirements"]["signedBy"]["anyOf"], "$type" | keyof string[]>, never>;
                } & Record<Exclude<keyof I["groupSpec"]["requirements"]["signedBy"], "$type" | "allOf" | "anyOf">, never>;
                attributes?: {
                    key?: string;
                    value?: string;
                }[] & ({
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["groupSpec"]["requirements"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groupSpec"]["requirements"]["attributes"], "$type" | keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["groupSpec"]["requirements"], "$type" | "signedBy" | "attributes">, never>;
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
                        } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        units?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["cpu"]["units"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["cpu"], "$type" | "attributes" | "units">, never>;
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
                        } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        quantity?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["memory"]["quantity"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["memory"], "$type" | "attributes" | "quantity">, never>;
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
                        } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["storage"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        quantity?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["storage"]["quantity"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["storage"], "$type" | "attributes" | "quantity">, never>;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    }[] & ({
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    } & {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"]["endpoints"], "$type" | keyof {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    }[]>, never>;
                } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["resources"], "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>;
                count?: number;
                price?: {
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["groupSpec"]["resources"][number]["price"], "$type" | "denom" | "amount">, never>;
            } & Record<Exclude<keyof I["groupSpec"]["resources"][number], "$type" | "resources" | "count" | "price">, never>)[] & Record<Exclude<keyof I["groupSpec"]["resources"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["groupSpec"], "$type" | "name" | "requirements" | "resources">, never>;
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
    } & Record<Exclude<keyof I, "$type" | "groupId" | "state" | "groupSpec" | "createdAt">, never>>(object: I): Group;
};
export declare const Resource: {
    $type: "akash.deployment.v1beta1.Resource";
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial<I extends {
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
                } & Record<Exclude<keyof I["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["resources"]["cpu"]["attributes"], "$type" | keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
                units?: {
                    val?: Uint8Array;
                } & {
                    val?: Uint8Array;
                } & Record<Exclude<keyof I["resources"]["cpu"]["units"], "$type" | "val">, never>;
            } & Record<Exclude<keyof I["resources"]["cpu"], "$type" | "attributes" | "units">, never>;
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
                } & Record<Exclude<keyof I["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["resources"]["memory"]["attributes"], "$type" | keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
                quantity?: {
                    val?: Uint8Array;
                } & {
                    val?: Uint8Array;
                } & Record<Exclude<keyof I["resources"]["memory"]["quantity"], "$type" | "val">, never>;
            } & Record<Exclude<keyof I["resources"]["memory"], "$type" | "attributes" | "quantity">, never>;
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
                } & Record<Exclude<keyof I["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["resources"]["storage"]["attributes"], "$type" | keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
                quantity?: {
                    val?: Uint8Array;
                } & {
                    val?: Uint8Array;
                } & Record<Exclude<keyof I["resources"]["storage"]["quantity"], "$type" | "val">, never>;
            } & Record<Exclude<keyof I["resources"]["storage"], "$type" | "attributes" | "quantity">, never>;
            endpoints?: {
                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
            }[] & ({
                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
            } & {
                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
            } & Record<Exclude<keyof I["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["resources"]["endpoints"], "$type" | keyof {
                kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
            }[]>, never>;
        } & Record<Exclude<keyof I["resources"], "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>;
        count?: number;
        price?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["price"], "$type" | "denom" | "amount">, never>;
    } & Record<Exclude<keyof I, "$type" | "resources" | "count" | "price">, never>>(object: I): Resource;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;
export {};
