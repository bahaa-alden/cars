"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = exports.CategoryController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const category_repository_1 = require("../database/repositories/category.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
class CategoryController {
    // Get all Categories by author
    getCategories = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
            // filters
            },
            search: req.valid.query.search,
            fields: req.valid.query.fields,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const categories = await category_repository_1.categoryRepository.findForAdmin(options);
        res.ok({ message: 'success', data: categories });
    });
    // Get category by Id for authenticated user
    getCategory = (0, asyncHandler_1.default)(async (req, res) => {
        const category = (0, record_1.needRecord)(await category_repository_1.categoryRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Category not found'));
        res.ok({ message: 'success', data: category });
    });
    // Create category handler
    createCategory = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newCategory = req.valid.body;
        const category = await category_repository_1.categoryRepository.insert(newCategory);
        if (category === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'Category has been created', data: category });
    });
    // Update category by Id for authenticated user
    updateCategory = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const category = (0, record_1.needRecord)(await category_repository_1.categoryRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Category not found'));
        const data = await category_repository_1.categoryRepository.patchById(category.id, updateBody);
        res.ok({ message: 'Category has been updated', data });
    });
    // Delete category by Id for authenticated user
    deleteCategory = (0, asyncHandler_1.default)(async (req, res) => {
        const category = (0, record_1.needRecord)(await category_repository_1.categoryRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Category not found'));
        await category_repository_1.categoryRepository.deleteById(category.id);
        res.noContent({ message: 'Category deleted successfully' });
    });
}
exports.CategoryController = CategoryController;
exports.categoryController = new CategoryController();
//# sourceMappingURL=category.controller.js.map