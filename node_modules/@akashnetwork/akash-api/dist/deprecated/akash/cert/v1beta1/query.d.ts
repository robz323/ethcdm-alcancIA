import _m0 from 'protobufjs/minimal';
import { Certificate, CertificateFilter } from '../../../akash/cert/v1beta1/cert';
import Long from 'long';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "akash.cert.v1beta1";
export interface CertificateResponse {
    $type: 'akash.cert.v1beta1.CertificateResponse';
    certificate?: Certificate;
    serial: string;
}
export interface QueryCertificatesRequest {
    $type: 'akash.cert.v1beta1.QueryCertificatesRequest';
    filter?: CertificateFilter;
    pagination?: PageRequest;
}
export interface QueryCertificatesResponse {
    $type: 'akash.cert.v1beta1.QueryCertificatesResponse';
    certificates: CertificateResponse[];
    pagination?: PageResponse;
}
export declare const CertificateResponse: {
    $type: "akash.cert.v1beta1.CertificateResponse";
    encode(message: CertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateResponse;
    fromJSON(object: any): CertificateResponse;
    toJSON(message: CertificateResponse): unknown;
    fromPartial<I extends {
        serial?: string;
        certificate?: {
            state?: import("../../../akash/cert/v1beta1/cert").Certificate_State;
            cert?: Uint8Array;
            pubkey?: Uint8Array;
        };
    } & {
        serial?: string;
        certificate?: {
            state?: import("../../../akash/cert/v1beta1/cert").Certificate_State;
            cert?: Uint8Array;
            pubkey?: Uint8Array;
        } & {
            state?: import("../../../akash/cert/v1beta1/cert").Certificate_State;
            cert?: Uint8Array;
            pubkey?: Uint8Array;
        } & Record<Exclude<keyof I["certificate"], "$type" | "state" | "cert" | "pubkey">, never>;
    } & Record<Exclude<keyof I, "$type" | "serial" | "certificate">, never>>(object: I): CertificateResponse;
};
export declare const QueryCertificatesRequest: {
    $type: "akash.cert.v1beta1.QueryCertificatesRequest";
    encode(message: QueryCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesRequest;
    fromJSON(object: any): QueryCertificatesRequest;
    toJSON(message: QueryCertificatesRequest): unknown;
    fromPartial<I extends {
        filter?: {
            owner?: string;
            state?: string;
            serial?: string;
        };
        pagination?: {
            key?: Uint8Array;
            reverse?: boolean;
            offset?: string | number | Long;
            limit?: string | number | Long;
            countTotal?: boolean;
        };
    } & {
        filter?: {
            owner?: string;
            state?: string;
            serial?: string;
        } & {
            owner?: string;
            state?: string;
            serial?: string;
        } & Record<Exclude<keyof I["filter"], "$type" | "owner" | "state" | "serial">, never>;
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
    } & Record<Exclude<keyof I, "$type" | "filter" | "pagination">, never>>(object: I): QueryCertificatesRequest;
};
export declare const QueryCertificatesResponse: {
    $type: "akash.cert.v1beta1.QueryCertificatesResponse";
    encode(message: QueryCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesResponse;
    fromJSON(object: any): QueryCertificatesResponse;
    toJSON(message: QueryCertificatesResponse): unknown;
    fromPartial<I extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: string | number | Long;
        };
        certificates?: {
            serial?: string;
            certificate?: {
                state?: import("../../../akash/cert/v1beta1/cert").Certificate_State;
                cert?: Uint8Array;
                pubkey?: Uint8Array;
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
        certificates?: {
            serial?: string;
            certificate?: {
                state?: import("../../../akash/cert/v1beta1/cert").Certificate_State;
                cert?: Uint8Array;
                pubkey?: Uint8Array;
            };
        }[] & ({
            serial?: string;
            certificate?: {
                state?: import("../../../akash/cert/v1beta1/cert").Certificate_State;
                cert?: Uint8Array;
                pubkey?: Uint8Array;
            };
        } & {
            serial?: string;
            certificate?: {
                state?: import("../../../akash/cert/v1beta1/cert").Certificate_State;
                cert?: Uint8Array;
                pubkey?: Uint8Array;
            } & {
                state?: import("../../../akash/cert/v1beta1/cert").Certificate_State;
                cert?: Uint8Array;
                pubkey?: Uint8Array;
            } & Record<Exclude<keyof I["certificates"][number]["certificate"], "$type" | "state" | "cert" | "pubkey">, never>;
        } & Record<Exclude<keyof I["certificates"][number], "$type" | "serial" | "certificate">, never>)[] & Record<Exclude<keyof I["certificates"], "$type" | keyof {
            serial?: string;
            certificate?: {
                state?: import("../../../akash/cert/v1beta1/cert").Certificate_State;
                cert?: Uint8Array;
                pubkey?: Uint8Array;
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, "$type" | "pagination" | "certificates">, never>>(object: I): QueryCertificatesResponse;
};
export interface Query {
    Certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
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
