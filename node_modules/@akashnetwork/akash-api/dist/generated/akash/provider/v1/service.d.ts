import { Observable } from 'rxjs';
import { Empty } from '../../../google/protobuf/empty';
import { Status } from './status';
export interface ProviderRPC {
    GetStatus(request: Empty): Promise<Status>;
    StreamStatus(request: Empty): Observable<Status>;
}
export declare const ProviderRPCServiceName = "akash.provider.v1.ProviderRPC";
export declare class ProviderRPCClientImpl implements ProviderRPC {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetStatus(request: Empty): Promise<Status>;
    StreamStatus(request: Empty): Observable<Status>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
    clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
    serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
    bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
export {};
