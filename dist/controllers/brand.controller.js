"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandController = exports.BrandController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const brand_repository_1 = require("../database/repositories/brand.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
class BrandController {
    // Get all Brands by author
    getBrands = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
            // filters
            },
            search: req.valid.query.search,
            fields: req.valid.query.fields,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const brands = await brand_repository_1.brandRepository.findForAdmin(options);
        res.ok({ message: 'success', data: brands });
    });
    // Get brand by Id for authenticated user
    getBrand = (0, asyncHandler_1.default)(async (req, res) => {
        const brand = (0, record_1.needRecord)(await brand_repository_1.brandRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Brand not found'));
        res.ok({ message: 'success', data: brand });
    });
    // Create brand handler
    createBrand = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newBrand = req.valid.body;
        const brand = await brand_repository_1.brandRepository.insert(newBrand);
        if (brand === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'Brand has been created', data: brand });
    });
    // Update brand by Id for authenticated user
    updateBrand = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const brand = (0, record_1.needRecord)(await brand_repository_1.brandRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Brand not found'));
        const data = await brand_repository_1.brandRepository.patchById(brand.id, updateBody);
        res.ok({ message: 'Brand has been updated', data });
    });
    // Delete brand by Id for authenticated user
    deleteBrand = (0, asyncHandler_1.default)(async (req, res) => {
        const brand = (0, record_1.needRecord)(await brand_repository_1.brandRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Brand not found'));
        await brand_repository_1.brandRepository.deleteById(brand.id);
        res.noContent({ message: 'Brand deleted successfully' });
    });
}
exports.BrandController = BrandController;
exports.brandController = new BrandController();
//# sourceMappingURL=brand.controller.js.map