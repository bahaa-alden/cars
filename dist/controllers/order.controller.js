"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = exports.OrderController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const order_repository_1 = require("../database/repositories/order.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
class OrderController {
    // Get all Orders by author
    getOrders = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
                // filters
                userId: req.valid.query.userId,
                dateFrom: req.valid.query.dateFrom,
                dateTo: req.valid.query.dateTo,
            },
            search: req.valid.query.search,
            fields: req.valid.query.fields,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const orders = await order_repository_1.orderRepository.findForAdmin(options);
        res.ok({ message: 'success', data: orders });
    });
    // Get order by Id for authenticated user
    getOrder = (0, asyncHandler_1.default)(async (req, res) => {
        const order = (0, record_1.needRecord)(await order_repository_1.orderRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Order not found'));
        res.ok({ message: 'success', data: order });
    });
    // Create order handler
    createOrder = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newOrder = req.valid.body;
        const order = await order_repository_1.orderRepository.insert(newOrder);
        if (order === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'Order has been created', data: order });
    });
    // Update order by Id for authenticated user
    updateOrder = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const order = (0, record_1.needRecord)(await order_repository_1.orderRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Order not found'));
        const data = await order_repository_1.orderRepository.patchById(order.id, updateBody);
        res.ok({ message: 'Order has been updated', data });
    });
    // Delete order by Id for authenticated user
    deleteOrder = (0, asyncHandler_1.default)(async (req, res) => {
        const order = (0, record_1.needRecord)(await order_repository_1.orderRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Order not found'));
        await order_repository_1.orderRepository.deleteById(order.id);
        res.noContent({ message: 'Order deleted successfully' });
    });
}
exports.OrderController = OrderController;
exports.orderController = new OrderController();
//# sourceMappingURL=order.controller.js.map