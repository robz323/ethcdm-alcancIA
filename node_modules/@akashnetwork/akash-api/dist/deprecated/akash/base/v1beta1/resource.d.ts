import Long from 'long';
import { ResourceValue } from './resourcevalue';
import { Attribute } from './attribute';
import { Endpoint } from './endpoint';
import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "akash.base.v1beta1";
export interface CPU {
    $type: 'akash.base.v1beta1.CPU';
    units: ResourceValue | undefined;
    attributes: Attribute[];
}
export interface Memory {
    $type: 'akash.base.v1beta1.Memory';
    quantity: ResourceValue | undefined;
    attributes: Attribute[];
}
export interface Storage {
    $type: 'akash.base.v1beta1.Storage';
    quantity: ResourceValue | undefined;
    attributes: Attribute[];
}
export interface ResourceUnits {
    $type: 'akash.base.v1beta1.ResourceUnits';
    cpu: CPU | undefined;
    memory: Memory | undefined;
    storage: Storage | undefined;
    endpoints: Endpoint[];
}
export declare const CPU: {
    $type: "akash.base.v1beta1.CPU";
    encode(message: CPU, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CPU;
    fromJSON(object: any): CPU;
    toJSON(message: CPU): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["attributes"], "$type" | keyof {
            key?: string;
            value?: string;
        }[]>, never>;
        units?: {
            val?: Uint8Array;
        } & {
            val?: Uint8Array;
        } & Record<Exclude<keyof I["units"], "$type" | "val">, never>;
    } & Record<Exclude<keyof I, "$type" | "attributes" | "units">, never>>(object: I): CPU;
};
export declare const Memory: {
    $type: "akash.base.v1beta1.Memory";
    encode(message: Memory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Memory;
    fromJSON(object: any): Memory;
    toJSON(message: Memory): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["attributes"], "$type" | keyof {
            key?: string;
            value?: string;
        }[]>, never>;
        quantity?: {
            val?: Uint8Array;
        } & {
            val?: Uint8Array;
        } & Record<Exclude<keyof I["quantity"], "$type" | "val">, never>;
    } & Record<Exclude<keyof I, "$type" | "attributes" | "quantity">, never>>(object: I): Memory;
};
export declare const Storage: {
    $type: "akash.base.v1beta1.Storage";
    encode(message: Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Storage;
    fromJSON(object: any): Storage;
    toJSON(message: Storage): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["attributes"], "$type" | keyof {
            key?: string;
            value?: string;
        }[]>, never>;
        quantity?: {
            val?: Uint8Array;
        } & {
            val?: Uint8Array;
        } & Record<Exclude<keyof I["quantity"], "$type" | "val">, never>;
    } & Record<Exclude<keyof I, "$type" | "attributes" | "quantity">, never>>(object: I): Storage;
};
export declare const ResourceUnits: {
    $type: "akash.base.v1beta1.ResourceUnits";
    encode(message: ResourceUnits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnits;
    fromJSON(object: any): ResourceUnits;
    toJSON(message: ResourceUnits): unknown;
    fromPartial<I extends {
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
            kind?: import("./endpoint").Endpoint_Kind;
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
            } & Record<Exclude<keyof I["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["cpu"]["attributes"], "$type" | keyof {
                key?: string;
                value?: string;
            }[]>, never>;
            units?: {
                val?: Uint8Array;
            } & {
                val?: Uint8Array;
            } & Record<Exclude<keyof I["cpu"]["units"], "$type" | "val">, never>;
        } & Record<Exclude<keyof I["cpu"], "$type" | "attributes" | "units">, never>;
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
            } & Record<Exclude<keyof I["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["memory"]["attributes"], "$type" | keyof {
                key?: string;
                value?: string;
            }[]>, never>;
            quantity?: {
                val?: Uint8Array;
            } & {
                val?: Uint8Array;
            } & Record<Exclude<keyof I["memory"]["quantity"], "$type" | "val">, never>;
        } & Record<Exclude<keyof I["memory"], "$type" | "attributes" | "quantity">, never>;
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
            } & Record<Exclude<keyof I["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["storage"]["attributes"], "$type" | keyof {
                key?: string;
                value?: string;
            }[]>, never>;
            quantity?: {
                val?: Uint8Array;
            } & {
                val?: Uint8Array;
            } & Record<Exclude<keyof I["storage"]["quantity"], "$type" | "val">, never>;
        } & Record<Exclude<keyof I["storage"], "$type" | "attributes" | "quantity">, never>;
        endpoints?: {
            kind?: import("./endpoint").Endpoint_Kind;
        }[] & ({
            kind?: import("./endpoint").Endpoint_Kind;
        } & {
            kind?: import("./endpoint").Endpoint_Kind;
        } & Record<Exclude<keyof I["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["endpoints"], "$type" | keyof {
            kind?: import("./endpoint").Endpoint_Kind;
        }[]>, never>;
    } & Record<Exclude<keyof I, "$type" | "cpu" | "memory" | "storage" | "endpoints">, never>>(object: I): ResourceUnits;
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
