"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = exports.ProductRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const product_schema_1 = require("../schemas/product.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const product_controller_1 = require("../controllers/product.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN } = enum_1.RoleCode;
class ProductRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL PRODUCTS
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: product_schema_1.default.productAll }), product_controller_1.productController.getProducts);
        // GET PRODUCT BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: product_schema_1.default.productId }), product_controller_1.productController.getProduct);
        // CREATE PRODUCT
        this.router.post('/', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: product_schema_1.default.productCreate }), product_controller_1.productController.createProduct);
        // UPDATE PRODUCT BY ID
        this.router.patch('/:id', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: product_schema_1.default.productId,
            body: product_schema_1.default.productUpdate,
        }), product_controller_1.productController.updateProduct);
        // DELETE PRODUCT BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: product_schema_1.default.productId }), product_controller_1.productController.deleteProduct);
    }
}
exports.ProductRoutes = ProductRoutes;
exports.productRoutes = new ProductRoutes();
//# sourceMappingURL=product.routes.js.map