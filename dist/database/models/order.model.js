"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const orderSchema = new mongoose_2.Schema({
    // <creating-property-schema />
    totalPrice: {
        type: Number,
    },
    orderDate: {
        type: Date,
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    collection: 'Order',
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => (0, lodash_1.omit)(ret, ['deletedAt', '__v', '_id']),
    },
});
orderSchema.virtual('user', {
    localField: 'userId',
    foreignField: '_id',
    ref: 'User',
    justOne: true,
    match: { deletedAt: null },
});
orderSchema.virtual('orderItems', {
    localField: '_id',
    foreignField: 'orderId',
    ref: 'OrderItem',
    match: { deletedAt: null },
});
exports.default = (0, mongoose_2.model)('Order', orderSchema);
//# sourceMappingURL=order.model.js.map