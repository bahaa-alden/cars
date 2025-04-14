"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerJsdoc = require("swagger-jsdoc");
const order_item_swagger_1 = require("./routes/order-item.swagger");
const order_swagger_1 = require("./routes/order.swagger");
const product_swagger_1 = require("./routes/product.swagger");
const feature_swagger_1 = require("./routes/feature.swagger");
const brand_swagger_1 = require("./routes/brand.swagger");
const category_swagger_1 = require("./routes/category.swagger");
const auth_swagger_1 = require("./routes/auth.swagger");
const config_1 = require("../config");
const components_1 = require("./components");
const user_swagger_1 = require("./routes/user.swagger");
const options = {
    url: '',
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'REST API Docs',
            version: '1.0.0',
            description: 'This is an API store application made with Express and documented with Swagger',
        },
        servers: [
            {
                url: `${config_1.env_vars.env === 'development'
                    ? `http://localhost:${config_1.env_vars.port}`
                    : config_1.env_vars.apiUrl}/api/v1`,
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                OrderItem: order_item_swagger_1.OrderItem,
                createOrderItem: order_item_swagger_1.createOrderItem,
                updateOrderItem: order_item_swagger_1.updateOrderItem,
                Order: order_swagger_1.Order,
                createOrder: order_swagger_1.createOrder,
                updateOrder: order_swagger_1.updateOrder,
                Product: product_swagger_1.Product,
                createProduct: product_swagger_1.createProduct,
                updateProduct: product_swagger_1.updateProduct,
                Feature: feature_swagger_1.Feature,
                createFeature: feature_swagger_1.createFeature,
                updateFeature: feature_swagger_1.updateFeature,
                Brand: brand_swagger_1.Brand,
                createBrand: brand_swagger_1.createBrand,
                updateBrand: brand_swagger_1.updateBrand,
                Category: category_swagger_1.Category,
                createCategory: category_swagger_1.createCategory,
                updateCategory: category_swagger_1.updateCategory,
                signUp: auth_swagger_1.signUp,
                createUser: user_swagger_1.createUser,
                updateMe: user_swagger_1.updateMe,
                updateUser: user_swagger_1.updateUser,
                User: user_swagger_1.User,
                Error: components_1.Error,
            },
            securitySchemes: {
                Bearer: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Enter the token : abcde12345".',
                },
            },
            responses: {
                DuplicateEmail: components_1.DuplicateEmail,
                Forbidden: components_1.Forbidden,
                NotFound: components_1.NotFound,
                Unauthorized: components_1.Unauthorized,
                201: {
                    description: 'created',
                },
                200: {
                    description: 'ok',
                },
                204: {
                    description: 'No content',
                },
                400: {
                    description: 'Bad request',
                },
                401: {
                    description: 'Unauthorized',
                },
                500: {
                    description: 'Internal server error',
                },
            },
        },
    },
    apis: [__dirname + '/routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map