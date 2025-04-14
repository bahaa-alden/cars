"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderItemRoutes = exports.OrderItemRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const order_item_schema_1 = require("../schemas/order-item.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const order_item_controller_1 = require("../controllers/order-item.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN } = enum_1.RoleCode;
class OrderItemRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL ORDERITEMS
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: order_item_schema_1.default.orderItemAll }), order_item_controller_1.orderItemController.getOrderItems);
        // GET ORDERITEM BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: order_item_schema_1.default.orderItemId }), order_item_controller_1.orderItemController.getOrderItem);
        // CREATE ORDERITEM
        this.router.post('/', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: order_item_schema_1.default.orderItemCreate }), order_item_controller_1.orderItemController.createOrderItem);
        // UPDATE ORDERITEM BY ID
        this.router.patch('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: order_item_schema_1.default.orderItemId,
            body: order_item_schema_1.default.orderItemUpdate,
        }), order_item_controller_1.orderItemController.updateOrderItem);
        // DELETE ORDERITEM BY ID
        this.router.delete('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: order_item_schema_1.default.orderItemId }), order_item_controller_1.orderItemController.deleteOrderItem);
    }
}
exports.OrderItemRoutes = OrderItemRoutes;
exports.orderItemRoutes = new OrderItemRoutes();
//# sourceMappingURL=order-item.routes.js.map