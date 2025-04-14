"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandRoutes = exports.BrandRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const brand_schema_1 = require("../schemas/brand.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const brand_controller_1 = require("../controllers/brand.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN } = enum_1.RoleCode;
class BrandRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL BRANDS
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: brand_schema_1.default.brandAll }), brand_controller_1.brandController.getBrands);
        // GET BRAND BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: brand_schema_1.default.brandId }), brand_controller_1.brandController.getBrand);
        // CREATE BRAND
        this.router.post('/', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: brand_schema_1.default.brandCreate }), brand_controller_1.brandController.createBrand);
        // UPDATE BRAND BY ID
        this.router.patch('/:id', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: brand_schema_1.default.brandId, body: brand_schema_1.default.brandUpdate }), brand_controller_1.brandController.updateBrand);
        // DELETE BRAND BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: brand_schema_1.default.brandId }), brand_controller_1.brandController.deleteBrand);
    }
}
exports.BrandRoutes = BrandRoutes;
exports.brandRoutes = new BrandRoutes();
//# sourceMappingURL=brand.routes.js.map