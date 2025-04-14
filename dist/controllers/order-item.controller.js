"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderItemController = exports.OrderItemController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const order_item_repository_1 = require("../database/repositories/order-item.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
const product_repository_1 = require("../database/repositories/product.repository");
const enum_1 = require("../utils/enum");
class OrderItemController {
    // Get all OrderItems by author
    getOrderItems = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
                // filters
                itemType: req.valid.query.itemType,
                orderId: req.valid.query.orderId,
            },
            search: req.valid.query.search,
            fields: req.valid.query.fields,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const orderItems = await order_item_repository_1.orderItemRepository.findForAdmin(options);
        res.ok({ message: 'success', data: orderItems });
    });
    // Get orderItem by Id for authenticated user
    getOrderItem = (0, asyncHandler_1.default)(async (req, res) => {
        const orderItem = (0, record_1.needRecord)(await order_item_repository_1.orderItemRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('OrderItem not found'));
        res.ok({ message: 'success', data: orderItem });
    });
    // Create orderItem handler
    createOrderItem = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newOrderItem = req.valid.body;
        const product = (0, record_1.needRecord)(await product_repository_1.productRepository.findById(newOrderItem.productId), new ApiError_1.NotFoundError('Product not found'));
        if (!newOrderItem.price) {
            const servicePrice = newOrderItem.itemType === enum_1.ItemType.purchase
                ? product.purchasePrice
                : product.rentPrice;
            newOrderItem.price = servicePrice * newOrderItem.quantity;
        }
        const orderItem = await order_item_repository_1.orderItemRepository.insert(newOrderItem);
        if (orderItem === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'OrderItem has been created', data: orderItem });
    });
    // Update orderItem by Id for authenticated user
    updateOrderItem = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const orderItem = (0, record_1.needRecord)(await order_item_repository_1.orderItemRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('OrderItem not found'));
        const data = await order_item_repository_1.orderItemRepository.patchById(orderItem.id, updateBody);
        res.ok({ message: 'OrderItem has been updated', data });
    });
    // Delete orderItem by Id for authenticated user
    deleteOrderItem = (0, asyncHandler_1.default)(async (req, res) => {
        const orderItem = (0, record_1.needRecord)(await order_item_repository_1.orderItemRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('OrderItem not found'));
        await order_item_repository_1.orderItemRepository.deleteById(orderItem.id);
        res.noContent({ message: 'OrderItem deleted successfully' });
    });
}
exports.OrderItemController = OrderItemController;
exports.orderItemController = new OrderItemController();
//# sourceMappingURL=order-item.controller.js.map