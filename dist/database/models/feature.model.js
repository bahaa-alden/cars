"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const lodash_1 = require("lodash");
const featureSchema = new mongoose_1.Schema({
    // <creating-property-schema />
    name: {
        type: String,
        index: 'text',
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    collection: 'Feature',
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => (0, lodash_1.omit)(ret, ['deletedAt', '__v', '_id']),
    },
});
exports.default = (0, mongoose_1.model)('Feature', featureSchema);
//# sourceMappingURL=feature.model.js.map