import * as swaggerJsdoc from 'swagger-jsdoc';
import {
  OrderItem,
  createOrderItem,
  returnOrderItem,
  updateOrderItem,
} from './routes/order-item.swagger';
import { Order, createOrder, updateOrder } from './routes/order.swagger';
import {
  Product,
  createProduct,
  updateProduct,
} from './routes/product.swagger';
import {
  Feature,
  createFeature,
  updateFeature,
} from './routes/feature.swagger';
import { Brand, createBrand, updateBrand } from './routes/brand.swagger';
import {
  Category,
  createCategory,
  updateCategory,
} from './routes/category.swagger';
import { signUp } from './routes/auth.swagger';
import { env_vars } from '../config';
import {
  DuplicateEmail,
  Forbidden,
  NotFound,
  Unauthorized,
  Error,
} from './components';
import { createUser, updateMe, updateUser, User } from './routes/user.swagger';
const options = {
  url: '',
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version: '1.0.0',
      description:
        'This is an API store application made with Express and documented with Swagger',
    },
    servers: [
      {
        url: `${
          env_vars.env === 'development'
            ? `http://localhost:${env_vars.port}`
            : env_vars.apiUrl
        }/api/v1`,
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        returnOrderItem,
        OrderItem,
        createOrderItem,
        updateOrderItem,
        Order,
        createOrder,
        updateOrder,
        Product,
        createProduct,
        updateProduct,
        Feature,
        createFeature,
        updateFeature,
        Brand,
        createBrand,
        updateBrand,
        Category,
        createCategory,
        updateCategory,
        signUp,
        createUser,
        updateMe,
        updateUser,
        User,
        Error,
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
        DuplicateEmail,
        Forbidden,
        NotFound,
        Unauthorized,
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
export default swaggerSpec;
