"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandRepository = exports.BrandRepository = void 0;
const order_1 = require("../../utils/order");
const base_repository_1 = require("./base.repository");
const brand_model_1 = require("../models/brand.model");
const projection_1 = require("../../utils/projection");
class BrandRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(brand_model_1.default);
    }
    async findForAdmin(options) {
        const { order, pagination, search, fields } = options;
        const query = { deletedAt: null };
        if (search) {
            query.$or = [];
        }
        const total = await this.model.where(query).countDocuments();
        const queryResult = this.model
            .find(query)
            .sort({
            [order.column]: order.direction === order_1.OrderDirection.asc ? 1 : -1,
        })
            .limit(pagination.pageSize)
            .skip((pagination.page - 1) * pagination.pageSize);
        if (fields) {
            queryResult.select((0, projection_1.selectedFields)(fields));
        }
        const results = await queryResult;
        return { results, total };
    }
}
exports.BrandRepository = BrandRepository;
exports.brandRepository = new BrandRepository();
//# sourceMappingURL=brand.repository.js.map