"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./../utils/enum");
const common_1 = require("./common");
const zod_1 = require("zod");
const common_2 = require("./common");
const orderItemIdSchema = zod_1.z.object({
    id: common_1.objectId,
});
const orderItemAllSchema = zod_1.z.object({
    page: common_2.page,
    pageSize: common_2.pageSize,
    orderColumn: common_2.orderColumn,
    orderDirection: common_2.orderDirection,
    search: zod_1.z.string().optional(),
    itemType: zod_1.z.nativeEnum(enum_1.ItemType).optional(),
    orderId: common_1.objectId.optional(),
    fields: zod_1.z.string().optional(),
});
const orderItemCreateSchema = zod_1.z
    .object({
    // <creating-property-create-schema />
    price: zod_1.z.number().optional(),
    itemType: zod_1.z.nativeEnum(enum_1.ItemType),
    quantity: zod_1.z.number(),
    productId: common_1.objectId,
    orderId: common_1.objectId,
})
    .strict();
const orderItemUpdateSchema = zod_1.z
    .object({
    // <creating-property-update-schema />
    price: zod_1.z.number().optional().optional(),
    itemType: zod_1.z.nativeEnum(enum_1.ItemType).optional(),
    quantity: zod_1.z.number().optional(),
    productId: common_1.objectId.optional(),
    orderId: common_1.objectId.optional(),
})
    .strict();
exports.default = {
    orderItemId: orderItemIdSchema,
    orderItemAll: orderItemAllSchema,
    orderItemCreate: orderItemCreateSchema,
    orderItemUpdate: orderItemUpdateSchema,
};
//# sourceMappingURL=order-item.schema.js.map