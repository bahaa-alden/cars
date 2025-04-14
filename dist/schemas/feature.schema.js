"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const common_1 = require("./common");
const featureIdSchema = zod_1.z.object({
    id: common_1.objectId,
});
const featureAllSchema = zod_1.z.object({
    page: common_1.page,
    pageSize: common_1.pageSize,
    orderColumn: common_1.orderColumn,
    orderDirection: common_1.orderDirection,
    search: zod_1.z.string().optional(),
    fields: zod_1.z.string().optional(),
});
const featureCreateSchema = zod_1.z
    .object({
    // <creating-property-create-schema />
    name: zod_1.z.string(),
})
    .strict();
const featureUpdateSchema = zod_1.z
    .object({
    // <creating-property-update-schema />
    name: zod_1.z.string().optional(),
})
    .strict();
exports.default = {
    featureId: featureIdSchema,
    featureAll: featureAllSchema,
    featureCreate: featureCreateSchema,
    featureUpdate: featureUpdateSchema,
};
//# sourceMappingURL=feature.schema.js.map