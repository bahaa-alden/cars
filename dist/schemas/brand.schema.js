"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const common_1 = require("./common");
const brandIdSchema = zod_1.z.object({
    id: common_1.objectId,
});
const brandAllSchema = zod_1.z.object({
    page: common_1.page,
    pageSize: common_1.pageSize,
    orderColumn: common_1.orderColumn,
    orderDirection: common_1.orderDirection,
    search: zod_1.z.string().optional(),
    fields: zod_1.z.string().optional(),
});
const brandCreateSchema = zod_1.z
    .object({
    // <creating-property-create-schema />
    name: zod_1.z.string(),
})
    .strict();
const brandUpdateSchema = zod_1.z
    .object({
    // <creating-property-update-schema />
    name: zod_1.z.string().optional(),
})
    .strict();
exports.default = {
    brandId: brandIdSchema,
    brandAll: brandAllSchema,
    brandCreate: brandCreateSchema,
    brandUpdate: brandUpdateSchema,
};
//# sourceMappingURL=brand.schema.js.map