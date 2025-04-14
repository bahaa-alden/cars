"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = exports.CategoryRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const category_schema_1 = require("../schemas/category.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const category_controller_1 = require("../controllers/category.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN } = enum_1.RoleCode;
class CategoryRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL CATEGORIES
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: category_schema_1.default.categoryAll }), category_controller_1.categoryController.getCategories);
        // GET CATEGORY BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: category_schema_1.default.categoryId }), category_controller_1.categoryController.getCategory);
        // CREATE CATEGORY
        this.router.post('/', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: category_schema_1.default.categoryCreate }), category_controller_1.categoryController.createCategory);
        // UPDATE CATEGORY BY ID
        this.router.patch('/:id', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: category_schema_1.default.categoryId,
            body: category_schema_1.default.categoryUpdate,
        }), category_controller_1.categoryController.updateCategory);
        // DELETE CATEGORY BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: category_schema_1.default.categoryId }), category_controller_1.categoryController.deleteCategory);
    }
}
exports.CategoryRoutes = CategoryRoutes;
exports.categoryRoutes = new CategoryRoutes();
//# sourceMappingURL=category.routes.js.map