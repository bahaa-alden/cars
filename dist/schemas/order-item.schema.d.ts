import { ItemType } from './../utils/enum';
import { z, type TypeOf } from 'zod';
declare const orderItemIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type IOrderItemIdSchema = TypeOf<typeof orderItemIdSchema>;
declare const orderItemAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    itemType: z.ZodOptional<z.ZodNativeEnum<typeof ItemType>>;
    orderId: z.ZodOptional<z.ZodString>;
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    search?: string | undefined;
    itemType?: ItemType | undefined;
    orderId?: string | undefined;
    fields?: string | undefined;
}, {
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    itemType?: ItemType | undefined;
    orderId?: string | undefined;
    fields?: string | undefined;
}>;
export type IOrderItemAllSchema = TypeOf<typeof orderItemAllSchema>;
declare const orderItemCreateSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodNumber>;
    itemType: z.ZodNativeEnum<typeof ItemType>;
    quantity: z.ZodNumber;
    productId: z.ZodString;
    orderId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    itemType: ItemType;
    orderId: string;
    quantity: number;
    productId: string;
    price?: number | undefined;
}, {
    itemType: ItemType;
    orderId: string;
    quantity: number;
    productId: string;
    price?: number | undefined;
}>;
export type IOrderItemCreateSchema = TypeOf<typeof orderItemCreateSchema>;
declare const orderItemUpdateSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    itemType: z.ZodOptional<z.ZodNativeEnum<typeof ItemType>>;
    quantity: z.ZodOptional<z.ZodNumber>;
    productId: z.ZodOptional<z.ZodString>;
    orderId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    itemType?: ItemType | undefined;
    orderId?: string | undefined;
    price?: number | undefined;
    quantity?: number | undefined;
    productId?: string | undefined;
}, {
    itemType?: ItemType | undefined;
    orderId?: string | undefined;
    price?: number | undefined;
    quantity?: number | undefined;
    productId?: string | undefined;
}>;
export type IOrderItemUpdateSchema = TypeOf<typeof orderItemUpdateSchema>;
declare const _default: {
    orderItemId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    orderItemAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        itemType: z.ZodOptional<z.ZodNativeEnum<typeof ItemType>>;
        orderId: z.ZodOptional<z.ZodString>;
        fields: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        search?: string | undefined;
        itemType?: ItemType | undefined;
        orderId?: string | undefined;
        fields?: string | undefined;
    }, {
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        itemType?: ItemType | undefined;
        orderId?: string | undefined;
        fields?: string | undefined;
    }>;
    orderItemCreate: z.ZodObject<{
        price: z.ZodOptional<z.ZodNumber>;
        itemType: z.ZodNativeEnum<typeof ItemType>;
        quantity: z.ZodNumber;
        productId: z.ZodString;
        orderId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        itemType: ItemType;
        orderId: string;
        quantity: number;
        productId: string;
        price?: number | undefined;
    }, {
        itemType: ItemType;
        orderId: string;
        quantity: number;
        productId: string;
        price?: number | undefined;
    }>;
    orderItemUpdate: z.ZodObject<{
        price: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        itemType: z.ZodOptional<z.ZodNativeEnum<typeof ItemType>>;
        quantity: z.ZodOptional<z.ZodNumber>;
        productId: z.ZodOptional<z.ZodString>;
        orderId: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        itemType?: ItemType | undefined;
        orderId?: string | undefined;
        price?: number | undefined;
        quantity?: number | undefined;
        productId?: string | undefined;
    }, {
        itemType?: ItemType | undefined;
        orderId?: string | undefined;
        price?: number | undefined;
        quantity?: number | undefined;
        productId?: string | undefined;
    }>;
};
export default _default;
