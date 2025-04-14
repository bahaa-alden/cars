"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureController = exports.FeatureController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const feature_repository_1 = require("../database/repositories/feature.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
class FeatureController {
    // Get all Features by author
    getFeatures = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
            // filters
            },
            search: req.valid.query.search,
            fields: req.valid.query.fields,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const features = await feature_repository_1.featureRepository.findForAdmin(options);
        res.ok({ message: 'success', data: features });
    });
    // Get feature by Id for authenticated user
    getFeature = (0, asyncHandler_1.default)(async (req, res) => {
        const feature = (0, record_1.needRecord)(await feature_repository_1.featureRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Feature not found'));
        res.ok({ message: 'success', data: feature });
    });
    // Create feature handler
    createFeature = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newFeature = req.valid.body;
        const feature = await feature_repository_1.featureRepository.insert(newFeature);
        if (feature === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'Feature has been created', data: feature });
    });
    // Update feature by Id for authenticated user
    updateFeature = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const feature = (0, record_1.needRecord)(await feature_repository_1.featureRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Feature not found'));
        const data = await feature_repository_1.featureRepository.patchById(feature.id, updateBody);
        res.ok({ message: 'Feature has been updated', data });
    });
    // Delete feature by Id for authenticated user
    deleteFeature = (0, asyncHandler_1.default)(async (req, res) => {
        const feature = (0, record_1.needRecord)(await feature_repository_1.featureRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Feature not found'));
        await feature_repository_1.featureRepository.deleteById(feature.id);
        res.noContent({ message: 'Feature deleted successfully' });
    });
}
exports.FeatureController = FeatureController;
exports.featureController = new FeatureController();
//# sourceMappingURL=feature.controller.js.map