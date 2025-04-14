"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const common_2 = require("./common");
const zod_1 = require("zod");
const common_3 = require("./common");
const productIdSchema = zod_1.z.object({
    id: common_1.objectId,
});
const productAllSchema = zod_1.z.object({
    page: common_3.page,
    pageSize: common_3.pageSize,
    orderColumn: common_3.orderColumn,
    orderDirection: common_3.orderDirection,
    search: zod_1.z.string().optional(),
    userId: common_1.objectId.optional(),
    categoryId: common_1.objectId.optional(),
    brandId: common_1.objectId.optional(),
    dateFrom: common_2.stringToDate.optional(),
    dateTo: common_2.stringToDate.optional(),
    fields: zod_1.z.string().optional(),
});
const productCreateSchema = zod_1.z
    .object({
    // <creating-property-create-schema />
    featureIds: common_1.objectId.array(),
    userId: common_1.objectId,
    brandId: common_1.objectId,
    rentPrice: zod_1.z.number(),
    purchasePrice: zod_1.z.number(),
    quantity: zod_1.z.number().optional(),
    categoryId: common_1.objectId,
    name: zod_1.z.string(),
})
    .strict();
const productUpdateSchema = zod_1.z
    .object({
    // <creating-property-update-schema />
    featureIds: common_1.objectId.array().optional(),
    userId: common_1.objectId.optional(),
    brandId: common_1.objectId.optional(),
    rentPrice: zod_1.z.number().optional(),
    purchasePrice: zod_1.z.number().optional(),
    quantity: zod_1.z.number().optional().optional(),
    categoryId: common_1.objectId.optional(),
    name: zod_1.z.string().optional(),
})
    .strict();
exports.default = {
    productId: productIdSchema,
    productAll: productAllSchema,
    productCreate: productCreateSchema,
    productUpdate: productUpdateSchema,
};
//# sourceMappingURL=product.schema.js.map