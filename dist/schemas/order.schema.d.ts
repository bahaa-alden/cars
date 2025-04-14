import { z, type TypeOf } from 'zod';
declare const orderIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type IOrderIdSchema = TypeOf<typeof orderIdSchema>;
declare const orderAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
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
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
}>;
export type IOrderAllSchema = TypeOf<typeof orderAllSchema>;
declare const orderCreateSchema: z.ZodObject<{
    totalPrice: z.ZodOptional<z.ZodNumber>;
    orderDate: z.ZodEffects<z.ZodString, Date, string>;
    userId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    userId: string;
    orderDate: Date;
    totalPrice?: number | undefined;
}, {
    userId: string;
    orderDate: string;
    totalPrice?: number | undefined;
}>;
export type IOrderCreateSchema = TypeOf<typeof orderCreateSchema>;
declare const orderUpdateSchema: z.ZodObject<{
    totalPrice: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    orderDate: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    userId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    userId?: string | undefined;
    totalPrice?: number | undefined;
    orderDate?: Date | undefined;
}, {
    userId?: string | undefined;
    totalPrice?: number | undefined;
    orderDate?: string | undefined;
}>;
export type IOrderUpdateSchema = TypeOf<typeof orderUpdateSchema>;
declare const _default: {
    orderId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    orderAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
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
        dateFrom?: string | undefined;
        dateTo?: string | undefined;
    }>;
    orderCreate: z.ZodObject<{
        totalPrice: z.ZodOptional<z.ZodNumber>;
        orderDate: z.ZodEffects<z.ZodString, Date, string>;
        userId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        userId: string;
        orderDate: Date;
        totalPrice?: number | undefined;
    }, {
        userId: string;
        orderDate: string;
        totalPrice?: number | undefined;
    }>;
    orderUpdate: z.ZodObject<{
        totalPrice: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        orderDate: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        userId?: string | undefined;
        totalPrice?: number | undefined;
        orderDate?: Date | undefined;
    }, {
        userId?: string | undefined;
        totalPrice?: number | undefined;
        orderDate?: string | undefined;
    }>;
};
export default _default;
