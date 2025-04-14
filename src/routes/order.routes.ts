import { Router } from 'express';
import validator from '../middlewares/validator';
import orderSchema from '../schemas/order.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { orderController } from '../controllers/order.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';

const { USER, ADMIN } = RoleCode;

export class OrderRoutes {
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

    // GET ALL ORDERS
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: orderSchema.orderAll }),
      orderController.getOrders,
    );

    // GET ORDER BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: orderSchema.orderId }),
      orderController.getOrder,
    );

    // CREATE ORDER
    this.router.post(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: orderSchema.orderCreate }),
      orderController.createOrder,
    );

    // UPDATE ORDER BY ID
    this.router.patch(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: orderSchema.orderId, body: orderSchema.orderUpdate }),
      orderController.updateOrder,
    );

    // DELETE ORDER BY ID
    this.router.delete(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: orderSchema.orderId }),
      orderController.deleteOrder,
    );
  }
}

export const orderRoutes = new OrderRoutes();
