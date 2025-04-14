import { z, type TypeOf } from 'zod';
declare const productIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type IProductIdSchema = TypeOf<typeof productIdSchema>;
declare const productAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
    brandId: z.ZodOptional<z.ZodString>;
    dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    search?: string | undefined;
    fields?: string | undefined;
    userId?: string | undefined;
    brandId?: string | undefined;
    categoryId?: string | undefined;
    dateFrom?: Date | undefined;
    dateTo?: Date | undefined;
}, {
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    fields?: string | undefined;
    userId?: string | undefined;
    brandId?: string | undefined;
    categoryId?: string | undefined;
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
}>;
export type IProductAllSchema = TypeOf<typeof productAllSchema>;
declare const productCreateSchema: z.ZodObject<{
    featureIds: z.ZodArray<z.ZodString, "many">;
    userId: z.ZodString;
    brandId: z.ZodString;
    rentPrice: z.ZodNumber;
    purchasePrice: z.ZodNumber;
    quantity: z.ZodOptional<z.ZodNumber>;
    categoryId: z.ZodString;
    name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    featureIds: string[];
    userId: string;
    brandId: string;
    rentPrice: number;
    purchasePrice: number;
    categoryId: string;
    quantity?: number | undefined;
}, {
    name: string;
    featureIds: string[];
    userId: string;
    brandId: string;
    rentPrice: number;
    purchasePrice: number;
    categoryId: string;
    quantity?: number | undefined;
}>;
export type IProductCreateSchema = TypeOf<typeof productCreateSchema>;
declare const productUpdateSchema: z.ZodObject<{
    featureIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    userId: z.ZodOptional<z.ZodString>;
    brandId: z.ZodOptional<z.ZodString>;
    rentPrice: z.ZodOptional<z.ZodNumber>;
    purchasePrice: z.ZodOptional<z.ZodNumber>;
    quantity: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    categoryId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    quantity?: number | undefined;
    name?: string | undefined;
    featureIds?: string[] | undefined;
    userId?: string | undefined;
    brandId?: string | undefined;
    rentPrice?: number | undefined;
    purchasePrice?: number | undefined;
    categoryId?: string | undefined;
}, {
    quantity?: number | undefined;
    name?: string | undefined;
    featureIds?: string[] | undefined;
    userId?: string | undefined;
    brandId?: string | undefined;
    rentPrice?: number | undefined;
    purchasePrice?: number | undefined;
    categoryId?: string | undefined;
}>;
export type IProductUpdateSchema = TypeOf<typeof productUpdateSchema>;
declare const _default: {
    productId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    productAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
        categoryId: z.ZodOptional<z.ZodString>;
        brandId: z.ZodOptional<z.ZodString>;
        dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
        dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
        fields: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        search?: string | undefined;
        fields?: string | undefined;
        userId?: string | undefined;
        brandId?: string | undefined;
        categoryId?: string | undefined;
        dateFrom?: Date | undefined;
        dateTo?: Date | undefined;
    }, {
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        fields?: string | undefined;
        userId?: string | undefined;
        brandId?: string | undefined;
        categoryId?: string | undefined;
        dateFrom?: string | undefined;
        dateTo?: string | undefined;
    }>;
    productCreate: z.ZodObject<{
        featureIds: z.ZodArray<z.ZodString, "many">;
        userId: z.ZodString;
        brandId: z.ZodString;
        rentPrice: z.ZodNumber;
        purchasePrice: z.ZodNumber;
        quantity: z.ZodOptional<z.ZodNumber>;
        categoryId: z.ZodString;
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        featureIds: string[];
        userId: string;
        brandId: string;
        rentPrice: number;
        purchasePrice: number;
        categoryId: string;
        quantity?: number | undefined;
    }, {
        name: string;
        featureIds: string[];
        userId: string;
        brandId: string;
        rentPrice: number;
        purchasePrice: number;
        categoryId: string;
        quantity?: number | undefined;
    }>;
    productUpdate: z.ZodObject<{
        featureIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        userId: z.ZodOptional<z.ZodString>;
        brandId: z.ZodOptional<z.ZodString>;
        rentPrice: z.ZodOptional<z.ZodNumber>;
        purchasePrice: z.ZodOptional<z.ZodNumber>;
        quantity: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        categoryId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        quantity?: number | undefined;
        name?: string | undefined;
        featureIds?: string[] | undefined;
        userId?: string | undefined;
        brandId?: string | undefined;
        rentPrice?: number | undefined;
        purchasePrice?: number | undefined;
        categoryId?: string | undefined;
    }, {
        quantity?: number | undefined;
        name?: string | undefined;
        featureIds?: string[] | undefined;
        userId?: string | undefined;
        brandId?: string | undefined;
        rentPrice?: number | undefined;
        purchasePrice?: number | undefined;
        categoryId?: string | undefined;
    }>;
};
export default _default;
