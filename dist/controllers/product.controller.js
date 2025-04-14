"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = exports.ProductController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const product_repository_1 = require("../database/repositories/product.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
class ProductController {
    // Get all Products by author
    getProducts = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
                // filters
                userId: req.valid.query.userId,
                categoryId: req.valid.query.categoryId,
                brandId: req.valid.query.brandId,
                dateFrom: req.valid.query.dateFrom,
                dateTo: req.valid.query.dateTo,
            },
            search: req.valid.query.search,
            fields: req.valid.query.fields,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const products = await product_repository_1.productRepository.findForAdmin(options);
        res.ok({ message: 'success', data: products });
    });
    // Get product by Id for authenticated user
    getProduct = (0, asyncHandler_1.default)(async (req, res) => {
        const product = (0, record_1.needRecord)(await product_repository_1.productRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Product not found'));
        res.ok({ message: 'success', data: product });
    });
    // Create product handler
    createProduct = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newProduct = req.valid.body;
        const product = await product_repository_1.productRepository.insert(newProduct);
        if (product === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'Product has been created', data: product });
    });
    // Update product by Id for authenticated user
    updateProduct = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const product = (0, record_1.needRecord)(await product_repository_1.productRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Product not found'));
        const data = await product_repository_1.productRepository.patchById(product.id, updateBody);
        res.ok({ message: 'Product has been updated', data });
    });
    // Delete product by Id for authenticated user
    deleteProduct = (0, asyncHandler_1.default)(async (req, res) => {
        const product = (0, record_1.needRecord)(await product_repository_1.productRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Product not found'));
        await product_repository_1.productRepository.deleteById(product.id);
        res.noContent({ message: 'Product deleted successfully' });
    });
}
exports.ProductController = ProductController;
exports.productController = new ProductController();
//# sourceMappingURL=product.controller.js.map