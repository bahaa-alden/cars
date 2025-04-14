import { Router } from 'express';
import validator from '../middlewares/validator';
import featureSchema from '../schemas/feature.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { featureController } from '../controllers/feature.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';

const { USER, ADMIN } = RoleCode;

export class FeatureRoutes {
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

    // GET ALL FEATURES
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: featureSchema.featureAll }),
      featureController.getFeatures,
    );

    // GET FEATURE BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: featureSchema.featureId }),
      featureController.getFeature,
    );

    // CREATE FEATURE
    this.router.post(
      '/',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: featureSchema.featureCreate }),
      featureController.createFeature,
    );

    // UPDATE FEATURE BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({
        params: featureSchema.featureId,
        body: featureSchema.featureUpdate,
      }),
      featureController.updateFeature,
    );

    // DELETE FEATURE BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: featureSchema.featureId }),
      featureController.deleteFeature,
    );
  }
}

export const featureRoutes = new FeatureRoutes();
