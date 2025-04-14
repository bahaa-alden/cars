import { Router } from 'express';
import validator from '../middlewares/validator';
import orderItemSchema from '../schemas/order-item.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { orderItemController } from '../controllers/order-item.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';

const { USER, ADMIN } = RoleCode;

export class OrderItemRoutes {
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

    // GET ALL ORDERITEMS
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: orderItemSchema.orderItemAll }),
      orderItemController.getOrderItems,
    );

    // GET ORDERITEM BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: orderItemSchema.orderItemId }),
      orderItemController.getOrderItem,
    );

    // CREATE ORDERITEM
    this.router.post(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: orderItemSchema.orderItemCreate }),
      orderItemController.createOrderItem,
    );

    // UPDATE ORDERITEM BY ID
    this.router.patch(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({
        params: orderItemSchema.orderItemId,
        body: orderItemSchema.orderItemUpdate,
      }),
      orderItemController.updateOrderItem,
    );

    // DELETE ORDERITEM BY ID
    this.router.delete(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: orderItemSchema.orderItemId }),
      orderItemController.deleteOrderItem,
    );
  }
}

export const orderItemRoutes = new OrderItemRoutes();
