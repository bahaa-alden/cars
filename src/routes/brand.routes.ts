import { Router } from 'express';
import validator from '../middlewares/validator';
import brandSchema from '../schemas/brand.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { brandController } from '../controllers/brand.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';

const { USER, ADMIN } = RoleCode;

export class BrandRoutes {
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

    // GET ALL BRANDS
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: brandSchema.brandAll }),
      brandController.getBrands,
    );

    // GET BRAND BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: brandSchema.brandId }),
      brandController.getBrand,
    );

    // CREATE BRAND
    this.router.post(
      '/',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: brandSchema.brandCreate }),
      brandController.createBrand,
    );

    // UPDATE BRAND BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: brandSchema.brandId, body: brandSchema.brandUpdate }),
      brandController.updateBrand,
    );

    // DELETE BRAND BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: brandSchema.brandId }),
      brandController.deleteBrand,
    );
  }
}

export const brandRoutes = new BrandRoutes();
