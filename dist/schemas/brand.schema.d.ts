import { z, type TypeOf } from 'zod';
declare const brandIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type IBrandIdSchema = TypeOf<typeof brandIdSchema>;
declare const brandAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    search?: string | undefined;
    fields?: string | undefined;
}, {
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    fields?: string | undefined;
}>;
export type IBrandAllSchema = TypeOf<typeof brandAllSchema>;
declare const brandCreateSchema: z.ZodObject<{
    name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type IBrandCreateSchema = TypeOf<typeof brandCreateSchema>;
declare const brandUpdateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
}, {
    name?: string | undefined;
}>;
export type IBrandUpdateSchema = TypeOf<typeof brandUpdateSchema>;
declare const _default: {
    brandId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    brandAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        fields: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        search?: string | undefined;
        fields?: string | undefined;
    }, {
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        fields?: string | undefined;
    }>;
    brandCreate: z.ZodObject<{
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>;
    brandUpdate: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        name?: string | undefined;
    }, {
        name?: string | undefined;
    }>;
};
export default _default;
