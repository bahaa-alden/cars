import { Router } from 'express';
import validator from '../middlewares/validator';
import productSchema from '../schemas/product.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { productController } from '../controllers/product.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';

const { USER, ADMIN } = RoleCode;

export class ProductRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    // PROTECTED ROUTES
    this.router.use(
      validator({ headers: authSchema.auth }),
      authMiddleware.authenticateJWT,
    );

    // GET ALL PRODUCTS
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: productSchema.productAll }),
      productController.getProducts,
    );

    // GET PRODUCT BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: productSchema.productId }),
      productController.getProduct,
    );

    // CREATE PRODUCT
    this.router.post(
      '/',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: productSchema.productCreate }),
      productController.createProduct,
    );

    // UPDATE PRODUCT BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({
        params: productSchema.productId,
        body: productSchema.productUpdate,
      }),
      productController.updateProduct,
    );

    // DELETE PRODUCT BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: productSchema.productId }),
      productController.deleteProduct,
    );
  }
}

export const productRoutes = new ProductRoutes();
