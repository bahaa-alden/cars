"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureRoutes = exports.FeatureRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const feature_schema_1 = require("../schemas/feature.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const feature_controller_1 = require("../controllers/feature.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN } = enum_1.RoleCode;
class FeatureRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL FEATURES
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: feature_schema_1.default.featureAll }), feature_controller_1.featureController.getFeatures);
        // GET FEATURE BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: feature_schema_1.default.featureId }), feature_controller_1.featureController.getFeature);
        // CREATE FEATURE
        this.router.post('/', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: feature_schema_1.default.featureCreate }), feature_controller_1.featureController.createFeature);
        // UPDATE FEATURE BY ID
        this.router.patch('/:id', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: feature_schema_1.default.featureId,
            body: feature_schema_1.default.featureUpdate,
        }), feature_controller_1.featureController.updateFeature);
        // DELETE FEATURE BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: feature_schema_1.default.featureId }), feature_controller_1.featureController.deleteFeature);
    }
}
exports.FeatureRoutes = FeatureRoutes;
exports.featureRoutes = new FeatureRoutes();
//# sourceMappingURL=feature.routes.js.map