"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const common_2 = require("./common");
const zod_1 = require("zod");
const common_3 = require("./common");
const orderIdSchema = zod_1.z.object({
    id: common_1.objectId,
});
const orderAllSchema = zod_1.z.object({
    page: common_3.page,
    pageSize: common_3.pageSize,
    orderColumn: common_3.orderColumn,
    orderDirection: common_3.orderDirection,
    search: zod_1.z.string().optional(),
    userId: common_1.objectId.optional(),
    dateFrom: common_2.stringToDate.optional(),
    dateTo: common_2.stringToDate.optional(),
    fields: zod_1.z.string().optional(),
});
const orderCreateSchema = zod_1.z
    .object({
    // <creating-property-create-schema />
    totalPrice: zod_1.z.number().optional(),
    orderDate: common_2.stringToDate,
    userId: common_1.objectId,
})
    .strict();
const orderUpdateSchema = zod_1.z
    .object({
    // <creating-property-update-schema />
    totalPrice: zod_1.z.number().optional().optional(),
    orderDate: common_2.stringToDate.optional(),
    userId: common_1.objectId.optional(),
})
    .strict();
exports.default = {
    orderId: orderIdSchema,
    orderAll: orderAllSchema,
    orderCreate: orderCreateSchema,
    orderUpdate: orderUpdateSchema,
};
//# sourceMappingURL=order.schema.js.map