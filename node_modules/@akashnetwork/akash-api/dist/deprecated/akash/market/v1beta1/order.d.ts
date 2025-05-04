import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { GroupSpec } from '../../../akash/deployment/v1beta1/group';
export declare const protobufPackage = "akash.market.v1beta1";
export interface OrderID {
    $type: 'akash.market.v1beta1.OrderID';
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
}
export interface Order {
    $type: 'akash.market.v1beta1.Order';
    orderId?: OrderID;
    state: Order_State;
    spec?: GroupSpec;
    createdAt: Long;
}
export declare enum Order_State {
    invalid = 0,
    open = 1,
    active = 2,
    closed = 3,
    UNRECOGNIZED = -1
}
export declare function order_StateFromJSON(object: any): Order_State;
export declare function order_StateToJSON(object: Order_State): string;
export interface OrderFilters {
    $type: 'akash.market.v1beta1.OrderFilters';
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    state: string;
}
export declare const OrderID: {
    $type: "akash.market.v1beta1.OrderID";
    encode(message: OrderID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderID;
    fromJSON(object: any): OrderID;
    toJSON(message: OrderID): unknown;
    fromPartial<I extends {
        owner?: string;
        dseq?: string | number | Long;
        gseq?: number;
        oseq?: number;
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
        oseq?: number;
    } & Record<Exclude<keyof I, "$type" | "owner" | "dseq" | "gseq" | "oseq">, never>>(object: I): OrderID;
};
export declare const Order: {
    $type: "akash.market.v1beta1.Order";
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    fromPartial<I extends {
        state?: Order_State;
        createdAt?: string | number | Long;
        orderId?: {
            owner?: string;
            dseq?: string | number | Long;
            gseq?: number;
            oseq?: number;
        };
        spec?: {
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
    } & {
        state?: Order_State;
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
        orderId?: {
            owner?: string;
            dseq?: string | number | Long;
            gseq?: number;
            oseq?: number;
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
            } & Record<Exclude<keyof I["orderId"]["dseq"], "$type" | keyof Long>, never>);
            gseq?: number;
            oseq?: number;
        } & Record<Exclude<keyof I["orderId"], "$type" | "owner" | "dseq" | "gseq" | "oseq">, never>;
        spec?: {
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
                    allOf?: string[] & string[] & Record<Exclude<keyof I["spec"]["requirements"]["signedBy"]["allOf"], "$type" | keyof string[]>, never>;
                    anyOf?: string[] & string[] & Record<Exclude<keyof I["spec"]["requirements"]["signedBy"]["anyOf"], "$type" | keyof string[]>, never>;
                } & Record<Exclude<keyof I["spec"]["requirements"]["signedBy"], "$type" | "allOf" | "anyOf">, never>;
                attributes?: {
                    key?: string;
                    value?: string;
                }[] & ({
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["spec"]["requirements"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["spec"]["requirements"]["attributes"], "$type" | keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["spec"]["requirements"], "$type" | "signedBy" | "attributes">, never>;
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
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["cpu"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        units?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["cpu"]["units"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["cpu"], "$type" | "attributes" | "units">, never>;
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
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["memory"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        quantity?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["memory"]["quantity"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["memory"], "$type" | "attributes" | "quantity">, never>;
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
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["storage"]["attributes"], "$type" | keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                        quantity?: {
                            val?: Uint8Array;
                        } & {
                            val?: Uint8Array;
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["storage"]["quantity"], "$type" | "val">, never>;
                    } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["storage"], "$type" | "attributes" | "quantity">, never>;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    }[] & ({
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    } & {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["endpoints"], "$type" | keyof {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind;
                    }[]>, never>;
                } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"], "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>;
                count?: number;
                price?: {
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["spec"]["resources"][number]["price"], "$type" | "denom" | "amount">, never>;
            } & Record<Exclude<keyof I["spec"]["resources"][number], "$type" | "resources" | "count" | "price">, never>)[] & Record<Exclude<keyof I["spec"]["resources"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["spec"], "$type" | "name" | "requirements" | "resources">, never>;
    } & Record<Exclude<keyof I, "$type" | "state" | "createdAt" | "orderId" | "spec">, never>>(object: I): Order;
};
export declare const OrderFilters: {
    $type: "akash.market.v1beta1.OrderFilters";
    encode(message: OrderFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderFilters;
    fromJSON(object: any): OrderFilters;
    toJSON(message: OrderFilters): unknown;
    fromPartial<I extends {
        owner?: string;
        dseq?: string | number | Long;
        gseq?: number;
        state?: string;
        oseq?: number;
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
        state?: string;
        oseq?: number;
    } & Record<Exclude<keyof I, "$type" | "owner" | "dseq" | "gseq" | "state" | "oseq">, never>>(object: I): OrderFilters;
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
