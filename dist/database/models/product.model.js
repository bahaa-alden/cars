"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const productSchema = new mongoose_2.Schema({
    // <creating-property-schema />
    featureIds: {
        type: [
            {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'Feature',
                default: [],
            },
        ],
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
    brandId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Brand',
    },
    rentPrice: {
        type: Number,
    },
    purchasePrice: {
        type: Number,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    categoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Category',
    },
    name: {
        type: String,
        index: 'text',
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    collection: 'Product',
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => (0, lodash_1.omit)(ret, ['deletedAt', '__v', '_id']),
    },
});
productSchema.virtual('category', {
    localField: 'categoryId',
    foreignField: '_id',
    ref: 'Category',
    justOne: true,
    match: { deletedAt: null },
});
productSchema.virtual('brand', {
    localField: 'brandId',
    foreignField: '_id',
    ref: 'Brand',
    justOne: true,
    match: { deletedAt: null },
});
productSchema.virtual('user', {
    localField: 'userId',
    foreignField: '_id',
    ref: 'User',
    justOne: true,
    match: { deletedAt: null },
});
productSchema.virtual('features', {
    localField: 'featureIds',
    foreignField: '_id',
    ref: 'Feature',
    match: { deletedAt: null },
});
exports.default = (0, mongoose_2.model)('Product', productSchema);
//# sourceMappingURL=product.model.js.map