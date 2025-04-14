"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderItemRepository = exports.OrderItemRepository = void 0;
const order_1 = require("../../utils/order");
const base_repository_1 = require("./base.repository");
const order_item_model_1 = require("../models/order-item.model");
const projection_1 = require("../../utils/projection");
class OrderItemRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(order_item_model_1.default);
    }
    async findForAdmin(options) {
        const { order, pagination, search, fields, filter } = options;
        const query = { deletedAt: null };
        if (filter?.itemType) {
            query.itemType = filter.itemType;
        }
        if (filter?.orderId) {
            query.orderId = filter.orderId;
        }
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
            .skip((pagination.page - 1) * pagination.pageSize)
            .populate(['product']);
        if (fields) {
            queryResult.select((0, projection_1.selectedFields)(fields));
        }
        const results = await queryResult;
        return { results, total };
    }
}
exports.OrderItemRepository = OrderItemRepository;
exports.orderItemRepository = new OrderItemRepository();
//# sourceMappingURL=order-item.repository.js.map