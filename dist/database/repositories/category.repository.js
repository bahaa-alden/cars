"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRepository = exports.CategoryRepository = void 0;
const order_1 = require("../../utils/order");
const base_repository_1 = require("./base.repository");
const category_model_1 = require("../models/category.model");
const projection_1 = require("../../utils/projection");
class CategoryRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(category_model_1.default);
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
exports.CategoryRepository = CategoryRepository;
exports.categoryRepository = new CategoryRepository();
//# sourceMappingURL=category.repository.js.map