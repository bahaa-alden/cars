"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./../../utils/enum");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const orderItemSchema = new mongoose_2.Schema({
    // <creating-property-schema />
    price: {
        type: Number,
    },
    itemType: {
        type: String,
        enum: Object.values(enum_1.ItemType),
    },
    quantity: {
        type: Number,
    },
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Product',
    },
    orderId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Order',
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    collection: 'OrderItem',
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => (0, lodash_1.omit)(ret, ['deletedAt', '__v', '_id']),
    },
});
orderItemSchema.virtual('order', {
    localField: 'orderId',
    foreignField: '_id',
    ref: 'Order',
    justOne: true,
    match: { deletedAt: null },
});
orderItemSchema.virtual('product', {
    localField: 'productId',
    foreignField: '_id',
    ref: 'Product',
    justOne: true,
    match: { deletedAt: null },
});
exports.default = (0, mongoose_2.model)('OrderItem', orderItemSchema);
//# sourceMappingURL=order-item.model.js.map