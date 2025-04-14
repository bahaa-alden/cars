import { Router } from 'express';
import validator from '../middlewares/validator';
import categorySchema from '../schemas/category.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { categoryController } from '../controllers/category.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';

const { USER, ADMIN } = RoleCode;

export class CategoryRoutes {
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

    // GET ALL CATEGORIES
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: categorySchema.categoryAll }),
      categoryController.getCategories,
    );

    // GET CATEGORY BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: categorySchema.categoryId }),
      categoryController.getCategory,
    );

    // CREATE CATEGORY
    this.router.post(
      '/',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: categorySchema.categoryCreate }),
      categoryController.createCategory,
    );

    // UPDATE CATEGORY BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({
        params: categorySchema.categoryId,
        body: categorySchema.categoryUpdate,
      }),
      categoryController.updateCategory,
    );

    // DELETE CATEGORY BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: categorySchema.categoryId }),
      categoryController.deleteCategory,
    );
  }
}

export const categoryRoutes = new CategoryRoutes();
