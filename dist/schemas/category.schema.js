"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const common_1 = require("./common");
const categoryIdSchema = zod_1.z.object({
    id: common_1.objectId,
});
const categoryAllSchema = zod_1.z.object({
    page: common_1.page,
    pageSize: common_1.pageSize,
    orderColumn: common_1.orderColumn,
    orderDirection: common_1.orderDirection,
    search: zod_1.z.string().optional(),
    fields: zod_1.z.string().optional(),
});
const categoryCreateSchema = zod_1.z
    .object({
    // <creating-property-create-schema />
    name: zod_1.z.string(),
})
    .strict();
const categoryUpdateSchema = zod_1.z
    .object({
    // <creating-property-update-schema />
    name: zod_1.z.string().optional(),
})
    .strict();
exports.default = {
    categoryId: categoryIdSchema,
    categoryAll: categoryAllSchema,
    categoryCreate: categoryCreateSchema,
    categoryUpdate: categoryUpdateSchema,
};
//# sourceMappingURL=category.schema.js.map