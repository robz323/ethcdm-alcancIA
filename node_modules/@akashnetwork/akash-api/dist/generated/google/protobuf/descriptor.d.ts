import Long from 'long';
import _m0 from 'protobufjs/minimal';
export interface FileDescriptorSet {
    $type: 'google.protobuf.FileDescriptorSet';
    file: FileDescriptorProto[];
}
export interface FileDescriptorProto {
    $type: 'google.protobuf.FileDescriptorProto';
    name?: string | undefined;
    package?: string | undefined;
    dependency: string[];
    publicDependency: number[];
    weakDependency: number[];
    messageType: DescriptorProto[];
    enumType: EnumDescriptorProto[];
    service: ServiceDescriptorProto[];
    extension: FieldDescriptorProto[];
    options?: FileOptions | undefined;
    sourceCodeInfo?: SourceCodeInfo | undefined;
    syntax?: string | undefined;
}
export interface DescriptorProto {
    $type: 'google.protobuf.DescriptorProto';
    name?: string | undefined;
    field: FieldDescriptorProto[];
    extension: FieldDescriptorProto[];
    nestedType: DescriptorProto[];
    enumType: EnumDescriptorProto[];
    extensionRange: DescriptorProto_ExtensionRange[];
    oneofDecl: OneofDescriptorProto[];
    options?: MessageOptions | undefined;
    reservedRange: DescriptorProto_ReservedRange[];
    reservedName: string[];
}
export interface DescriptorProto_ExtensionRange {
    $type: 'google.protobuf.DescriptorProto.ExtensionRange';
    start?: number | undefined;
    end?: number | undefined;
    options?: ExtensionRangeOptions | undefined;
}
export interface DescriptorProto_ReservedRange {
    $type: 'google.protobuf.DescriptorProto.ReservedRange';
    start?: number | undefined;
    end?: number | undefined;
}
export interface ExtensionRangeOptions {
    $type: 'google.protobuf.ExtensionRangeOptions';
    uninterpretedOption: UninterpretedOption[];
}
export interface FieldDescriptorProto {
    $type: 'google.protobuf.FieldDescriptorProto';
    name?: string | undefined;
    number?: number | undefined;
    label?: FieldDescriptorProto_Label | undefined;
    type?: FieldDescriptorProto_Type | undefined;
    typeName?: string | undefined;
    extendee?: string | undefined;
    defaultValue?: string | undefined;
    oneofIndex?: number | undefined;
    jsonName?: string | undefined;
    options?: FieldOptions | undefined;
    proto3Optional?: boolean | undefined;
}
export declare enum FieldDescriptorProto_Type {
    TYPE_DOUBLE = 1,
    TYPE_FLOAT = 2,
    TYPE_INT64 = 3,
    TYPE_UINT64 = 4,
    TYPE_INT32 = 5,
    TYPE_FIXED64 = 6,
    TYPE_FIXED32 = 7,
    TYPE_BOOL = 8,
    TYPE_STRING = 9,
    TYPE_GROUP = 10,
    TYPE_MESSAGE = 11,
    TYPE_BYTES = 12,
    TYPE_UINT32 = 13,
    TYPE_ENUM = 14,
    TYPE_SFIXED32 = 15,
    TYPE_SFIXED64 = 16,
    TYPE_SINT32 = 17,
    TYPE_SINT64 = 18,
    UNRECOGNIZED = -1
}
export declare function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type;
export declare function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string;
export declare enum FieldDescriptorProto_Label {
    LABEL_OPTIONAL = 1,
    LABEL_REQUIRED = 2,
    LABEL_REPEATED = 3,
    UNRECOGNIZED = -1
}
export declare function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label;
export declare function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string;
export interface OneofDescriptorProto {
    $type: 'google.protobuf.OneofDescriptorProto';
    name?: string | undefined;
    options?: OneofOptions | undefined;
}
export interface EnumDescriptorProto {
    $type: 'google.protobuf.EnumDescriptorProto';
    name?: string | undefined;
    value: EnumValueDescriptorProto[];
    options?: EnumOptions | undefined;
    reservedRange: EnumDescriptorProto_EnumReservedRange[];
    reservedName: string[];
}
export interface EnumDescriptorProto_EnumReservedRange {
    $type: 'google.protobuf.EnumDescriptorProto.EnumReservedRange';
    start?: number | undefined;
    end?: number | undefined;
}
export interface EnumValueDescriptorProto {
    $type: 'google.protobuf.EnumValueDescriptorProto';
    name?: string | undefined;
    number?: number | undefined;
    options?: EnumValueOptions | undefined;
}
export interface ServiceDescriptorProto {
    $type: 'google.protobuf.ServiceDescriptorProto';
    name?: string | undefined;
    method: MethodDescriptorProto[];
    options?: ServiceOptions | undefined;
}
export interface MethodDescriptorProto {
    $type: 'google.protobuf.MethodDescriptorProto';
    name?: string | undefined;
    inputType?: string | undefined;
    outputType?: string | undefined;
    options?: MethodOptions | undefined;
    clientStreaming?: boolean | undefined;
    serverStreaming?: boolean | undefined;
}
export interface FileOptions {
    $type: 'google.protobuf.FileOptions';
    javaPackage?: string | undefined;
    javaOuterClassname?: string | undefined;
    javaMultipleFiles?: boolean | undefined;
    javaGenerateEqualsAndHash?: boolean | undefined;
    javaStringCheckUtf8?: boolean | undefined;
    optimizeFor?: FileOptions_OptimizeMode | undefined;
    goPackage?: string | undefined;
    ccGenericServices?: boolean | undefined;
    javaGenericServices?: boolean | undefined;
    pyGenericServices?: boolean | undefined;
    phpGenericServices?: boolean | undefined;
    deprecated?: boolean | undefined;
    ccEnableArenas?: boolean | undefined;
    objcClassPrefix?: string | undefined;
    csharpNamespace?: string | undefined;
    swiftPrefix?: string | undefined;
    phpClassPrefix?: string | undefined;
    phpNamespace?: string | undefined;
    phpMetadataNamespace?: string | undefined;
    rubyPackage?: string | undefined;
    uninterpretedOption: UninterpretedOption[];
}
export declare enum FileOptions_OptimizeMode {
    SPEED = 1,
    CODE_SIZE = 2,
    LITE_RUNTIME = 3,
    UNRECOGNIZED = -1
}
export declare function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode;
export declare function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string;
export interface MessageOptions {
    $type: 'google.protobuf.MessageOptions';
    messageSetWireFormat?: boolean | undefined;
    noStandardDescriptorAccessor?: boolean | undefined;
    deprecated?: boolean | undefined;
    mapEntry?: boolean | undefined;
    uninterpretedOption: UninterpretedOption[];
}
export interface FieldOptions {
    $type: 'google.protobuf.FieldOptions';
    ctype?: FieldOptions_CType | undefined;
    packed?: boolean | undefined;
    jstype?: FieldOptions_JSType | undefined;
    lazy?: boolean | undefined;
    unverifiedLazy?: boolean | undefined;
    deprecated?: boolean | undefined;
    weak?: boolean | undefined;
    uninterpretedOption: UninterpretedOption[];
}
export declare enum FieldOptions_CType {
    STRING = 0,
    CORD = 1,
    STRING_PIECE = 2,
    UNRECOGNIZED = -1
}
export declare function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType;
export declare function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string;
export declare enum FieldOptions_JSType {
    JS_NORMAL = 0,
    JS_STRING = 1,
    JS_NUMBER = 2,
    UNRECOGNIZED = -1
}
export declare function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType;
export declare function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string;
export interface OneofOptions {
    $type: 'google.protobuf.OneofOptions';
    uninterpretedOption: UninterpretedOption[];
}
export interface EnumOptions {
    $type: 'google.protobuf.EnumOptions';
    allowAlias?: boolean | undefined;
    deprecated?: boolean | undefined;
    uninterpretedOption: UninterpretedOption[];
}
export interface EnumValueOptions {
    $type: 'google.protobuf.EnumValueOptions';
    deprecated?: boolean | undefined;
    uninterpretedOption: UninterpretedOption[];
}
export interface ServiceOptions {
    $type: 'google.protobuf.ServiceOptions';
    deprecated?: boolean | undefined;
    uninterpretedOption: UninterpretedOption[];
}
export interface MethodOptions {
    $type: 'google.protobuf.MethodOptions';
    deprecated?: boolean | undefined;
    idempotencyLevel?: MethodOptions_IdempotencyLevel | undefined;
    uninterpretedOption: UninterpretedOption[];
}
export declare enum MethodOptions_IdempotencyLevel {
    IDEMPOTENCY_UNKNOWN = 0,
    NO_SIDE_EFFECTS = 1,
    IDEMPOTENT = 2,
    UNRECOGNIZED = -1
}
export declare function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel;
export declare function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string;
export interface UninterpretedOption {
    $type: 'google.protobuf.UninterpretedOption';
    name: UninterpretedOption_NamePart[];
    identifierValue?: string | undefined;
    positiveIntValue?: Long | undefined;
    negativeIntValue?: Long | undefined;
    doubleValue?: number | undefined;
    stringValue?: Uint8Array | undefined;
    aggregateValue?: string | undefined;
}
export interface UninterpretedOption_NamePart {
    $type: 'google.protobuf.UninterpretedOption.NamePart';
    namePart: string;
    isExtension: boolean;
}
export interface SourceCodeInfo {
    $type: 'google.protobuf.SourceCodeInfo';
    location: SourceCodeInfo_Location[];
}
export interface SourceCodeInfo_Location {
    $type: 'google.protobuf.SourceCodeInfo.Location';
    path: number[];
    span: number[];
    leadingComments?: string | undefined;
    trailingComments?: string | undefined;
    leadingDetachedComments: string[];
}
export interface GeneratedCodeInfo {
    $type: 'google.protobuf.GeneratedCodeInfo';
    annotation: GeneratedCodeInfo_Annotation[];
}
export interface GeneratedCodeInfo_Annotation {
    $type: 'google.protobuf.GeneratedCodeInfo.Annotation';
    path: number[];
    sourceFile?: string | undefined;
    begin?: number | undefined;
    end?: number | undefined;
}
export declare const FileDescriptorSet: {
    $type: "google.protobuf.FileDescriptorSet";
    encode(message: FileDescriptorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorSet;
    fromJSON(object: any): FileDescriptorSet;
    toJSON(message: FileDescriptorSet): unknown;
    create(base?: DeepPartial<FileDescriptorSet>): FileDescriptorSet;
    fromPartial(object: DeepPartial<FileDescriptorSet>): FileDescriptorSet;
};
export declare const FileDescriptorProto: {
    $type: "google.protobuf.FileDescriptorProto";
    encode(message: FileDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorProto;
    fromJSON(object: any): FileDescriptorProto;
    toJSON(message: FileDescriptorProto): unknown;
    create(base?: DeepPartial<FileDescriptorProto>): FileDescriptorProto;
    fromPartial(object: DeepPartial<FileDescriptorProto>): FileDescriptorProto;
};
export declare const DescriptorProto: {
    $type: "google.protobuf.DescriptorProto";
    encode(message: DescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto;
    fromJSON(object: any): DescriptorProto;
    toJSON(message: DescriptorProto): unknown;
    create(base?: DeepPartial<DescriptorProto>): DescriptorProto;
    fromPartial(object: DeepPartial<DescriptorProto>): DescriptorProto;
};
export declare const DescriptorProto_ExtensionRange: {
    $type: "google.protobuf.DescriptorProto.ExtensionRange";
    encode(message: DescriptorProto_ExtensionRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ExtensionRange;
    fromJSON(object: any): DescriptorProto_ExtensionRange;
    toJSON(message: DescriptorProto_ExtensionRange): unknown;
    create(base?: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange;
    fromPartial(object: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange;
};
export declare const DescriptorProto_ReservedRange: {
    $type: "google.protobuf.DescriptorProto.ReservedRange";
    encode(message: DescriptorProto_ReservedRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ReservedRange;
    fromJSON(object: any): DescriptorProto_ReservedRange;
    toJSON(message: DescriptorProto_ReservedRange): unknown;
    create(base?: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange;
    fromPartial(object: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange;
};
export declare const ExtensionRangeOptions: {
    $type: "google.protobuf.ExtensionRangeOptions";
    encode(message: ExtensionRangeOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionRangeOptions;
    fromJSON(object: any): ExtensionRangeOptions;
    toJSON(message: ExtensionRangeOptions): unknown;
    create(base?: DeepPartial<ExtensionRangeOptions>): ExtensionRangeOptions;
    fromPartial(object: DeepPartial<ExtensionRangeOptions>): ExtensionRangeOptions;
};
export declare const FieldDescriptorProto: {
    $type: "google.protobuf.FieldDescriptorProto";
    encode(message: FieldDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldDescriptorProto;
    fromJSON(object: any): FieldDescriptorProto;
    toJSON(message: FieldDescriptorProto): unknown;
    create(base?: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto;
    fromPartial(object: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto;
};
export declare const OneofDescriptorProto: {
    $type: "google.protobuf.OneofDescriptorProto";
    encode(message: OneofDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OneofDescriptorProto;
    fromJSON(object: any): OneofDescriptorProto;
    toJSON(message: OneofDescriptorProto): unknown;
    create(base?: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto;
    fromPartial(object: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto;
};
export declare const EnumDescriptorProto: {
    $type: "google.protobuf.EnumDescriptorProto";
    encode(message: EnumDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto;
    fromJSON(object: any): EnumDescriptorProto;
    toJSON(message: EnumDescriptorProto): unknown;
    create(base?: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto;
    fromPartial(object: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto;
};
export declare const EnumDescriptorProto_EnumReservedRange: {
    $type: "google.protobuf.EnumDescriptorProto.EnumReservedRange";
    encode(message: EnumDescriptorProto_EnumReservedRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange;
    fromJSON(object: any): EnumDescriptorProto_EnumReservedRange;
    toJSON(message: EnumDescriptorProto_EnumReservedRange): unknown;
    create(base?: DeepPartial<EnumDescriptorProto_EnumReservedRange>): EnumDescriptorProto_EnumReservedRange;
    fromPartial(object: DeepPartial<EnumDescriptorProto_EnumReservedRange>): EnumDescriptorProto_EnumReservedRange;
};
export declare const EnumValueDescriptorProto: {
    $type: "google.protobuf.EnumValueDescriptorProto";
    encode(message: EnumValueDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueDescriptorProto;
    fromJSON(object: any): EnumValueDescriptorProto;
    toJSON(message: EnumValueDescriptorProto): unknown;
    create(base?: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto;
    fromPartial(object: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto;
};
export declare const ServiceDescriptorProto: {
    $type: "google.protobuf.ServiceDescriptorProto";
    encode(message: ServiceDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDescriptorProto;
    fromJSON(object: any): ServiceDescriptorProto;
    toJSON(message: ServiceDescriptorProto): unknown;
    create(base?: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto;
    fromPartial(object: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto;
};
export declare const MethodDescriptorProto: {
    $type: "google.protobuf.MethodDescriptorProto";
    encode(message: MethodDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MethodDescriptorProto;
    fromJSON(object: any): MethodDescriptorProto;
    toJSON(message: MethodDescriptorProto): unknown;
    create(base?: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto;
    fromPartial(object: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto;
};
export declare const FileOptions: {
    $type: "google.protobuf.FileOptions";
    encode(message: FileOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileOptions;
    fromJSON(object: any): FileOptions;
    toJSON(message: FileOptions): unknown;
    create(base?: DeepPartial<FileOptions>): FileOptions;
    fromPartial(object: DeepPartial<FileOptions>): FileOptions;
};
export declare const MessageOptions: {
    $type: "google.protobuf.MessageOptions";
    encode(message: MessageOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions;
    fromJSON(object: any): MessageOptions;
    toJSON(message: MessageOptions): unknown;
    create(base?: DeepPartial<MessageOptions>): MessageOptions;
    fromPartial(object: DeepPartial<MessageOptions>): MessageOptions;
};
export declare const FieldOptions: {
    $type: "google.protobuf.FieldOptions";
    encode(message: FieldOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions;
    fromJSON(object: any): FieldOptions;
    toJSON(message: FieldOptions): unknown;
    create(base?: DeepPartial<FieldOptions>): FieldOptions;
    fromPartial(object: DeepPartial<FieldOptions>): FieldOptions;
};
export declare const OneofOptions: {
    $type: "google.protobuf.OneofOptions";
    encode(message: OneofOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OneofOptions;
    fromJSON(object: any): OneofOptions;
    toJSON(message: OneofOptions): unknown;
    create(base?: DeepPartial<OneofOptions>): OneofOptions;
    fromPartial(object: DeepPartial<OneofOptions>): OneofOptions;
};
export declare const EnumOptions: {
    $type: "google.protobuf.EnumOptions";
    encode(message: EnumOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumOptions;
    fromJSON(object: any): EnumOptions;
    toJSON(message: EnumOptions): unknown;
    create(base?: DeepPartial<EnumOptions>): EnumOptions;
    fromPartial(object: DeepPartial<EnumOptions>): EnumOptions;
};
export declare const EnumValueOptions: {
    $type: "google.protobuf.EnumValueOptions";
    encode(message: EnumValueOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueOptions;
    fromJSON(object: any): EnumValueOptions;
    toJSON(message: EnumValueOptions): unknown;
    create(base?: DeepPartial<EnumValueOptions>): EnumValueOptions;
    fromPartial(object: DeepPartial<EnumValueOptions>): EnumValueOptions;
};
export declare const ServiceOptions: {
    $type: "google.protobuf.ServiceOptions";
    encode(message: ServiceOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOptions;
    fromJSON(object: any): ServiceOptions;
    toJSON(message: ServiceOptions): unknown;
    create(base?: DeepPartial<ServiceOptions>): ServiceOptions;
    fromPartial(object: DeepPartial<ServiceOptions>): ServiceOptions;
};
export declare const MethodOptions: {
    $type: "google.protobuf.MethodOptions";
    encode(message: MethodOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MethodOptions;
    fromJSON(object: any): MethodOptions;
    toJSON(message: MethodOptions): unknown;
    create(base?: DeepPartial<MethodOptions>): MethodOptions;
    fromPartial(object: DeepPartial<MethodOptions>): MethodOptions;
};
export declare const UninterpretedOption: {
    $type: "google.protobuf.UninterpretedOption";
    encode(message: UninterpretedOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption;
    fromJSON(object: any): UninterpretedOption;
    toJSON(message: UninterpretedOption): unknown;
    create(base?: DeepPartial<UninterpretedOption>): UninterpretedOption;
    fromPartial(object: DeepPartial<UninterpretedOption>): UninterpretedOption;
};
export declare const UninterpretedOption_NamePart: {
    $type: "google.protobuf.UninterpretedOption.NamePart";
    encode(message: UninterpretedOption_NamePart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption_NamePart;
    fromJSON(object: any): UninterpretedOption_NamePart;
    toJSON(message: UninterpretedOption_NamePart): unknown;
    create(base?: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart;
    fromPartial(object: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart;
};
export declare const SourceCodeInfo: {
    $type: "google.protobuf.SourceCodeInfo";
    encode(message: SourceCodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo;
    fromJSON(object: any): SourceCodeInfo;
    toJSON(message: SourceCodeInfo): unknown;
    create(base?: DeepPartial<SourceCodeInfo>): SourceCodeInfo;
    fromPartial(object: DeepPartial<SourceCodeInfo>): SourceCodeInfo;
};
export declare const SourceCodeInfo_Location: {
    $type: "google.protobuf.SourceCodeInfo.Location";
    encode(message: SourceCodeInfo_Location, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo_Location;
    fromJSON(object: any): SourceCodeInfo_Location;
    toJSON(message: SourceCodeInfo_Location): unknown;
    create(base?: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location;
    fromPartial(object: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location;
};
export declare const GeneratedCodeInfo: {
    $type: "google.protobuf.GeneratedCodeInfo";
    encode(message: GeneratedCodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo;
    fromJSON(object: any): GeneratedCodeInfo;
    toJSON(message: GeneratedCodeInfo): unknown;
    create(base?: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo;
    fromPartial(object: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo;
};
export declare const GeneratedCodeInfo_Annotation: {
    $type: "google.protobuf.GeneratedCodeInfo.Annotation";
    encode(message: GeneratedCodeInfo_Annotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation;
    fromJSON(object: any): GeneratedCodeInfo_Annotation;
    toJSON(message: GeneratedCodeInfo_Annotation): unknown;
    create(base?: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation;
    fromPartial(object: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
