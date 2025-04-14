"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = exports.OrderRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const order_schema_1 = require("../schemas/order.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const order_controller_1 = require("../controllers/order.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN } = enum_1.RoleCode;
class OrderRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL ORDERS
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: order_schema_1.default.orderAll }), order_controller_1.orderController.getOrders);
        // GET ORDER BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: order_schema_1.default.orderId }), order_controller_1.orderController.getOrder);
        // CREATE ORDER
        this.router.post('/', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: order_schema_1.default.orderCreate }), order_controller_1.orderController.createOrder);
        // UPDATE ORDER BY ID
        this.router.patch('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: order_schema_1.default.orderId, body: order_schema_1.default.orderUpdate }), order_controller_1.orderController.updateOrder);
        // DELETE ORDER BY ID
        this.router.delete('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: order_schema_1.default.orderId }), order_controller_1.orderController.deleteOrder);
    }
}
exports.OrderRoutes = OrderRoutes;
exports.orderRoutes = new OrderRoutes();
//# sourceMappingURL=order.routes.js.map