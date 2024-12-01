import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  OrderFindOptions,
  orderRepository,
} from '../database/repositories/order.repository';
import {
  IOrderAllSchema,
  IOrderIdSchema,
  IOrderCreateSchema,
  IOrderUpdateSchema,
} from '../schemas/order.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { needRecord } from '../utils/record';
import { createOrderItem } from '../services/internal/create-order-item';

export class OrderController {
  // Get all Orders by author
  public getOrders = asyncHandler(
    async (
      req: ParsedRequest<void, IOrderAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: OrderFindOptions = {
        filter: {
          // filters
          userId: req.valid.query.userId,

          dateFrom: req.valid.query.dateFrom,
          dateTo: req.valid.query.dateTo,
        },
        search: req.valid.query.search,
        fields: req.valid.query.fields,
        order: defaultOrderParams(
          req.valid.query.orderColumn,
          req.valid.query.orderDirection,
        ),
        pagination: defaultPaginationParams(
          req.valid.query.page,
          req.valid.query.pageSize,
        ),
      };
      const orders = await orderRepository.findForAdmin(options);

      res.ok({ message: 'success', data: orders });
    },
  );

  // Get order by Id for authenticated user
  public getOrder = asyncHandler(
    async (
      req: ParsedRequest<void, void, IOrderIdSchema>,
      res: Response,
    ): Promise<void> => {
      const order = needRecord(
        await orderRepository.findById(req.valid.params.id),
        new NotFoundError('Order not found'),
      );

      res.ok({ message: 'success', data: order });
    },
  );

  // Create order handler
  public createOrder = asyncHandler(
    async (
      req: ParsedRequest<IOrderCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newOrder = req.valid.body;
      const order = await orderRepository.insert(newOrder);

      if (newOrder.orderItems) {
        await Promise.all(
          newOrder.orderItems.map(
            async (item) => await createOrderItem(item, order.id),
          ),
        );
      }

      if (order === null) {
        throw new InternalError();
      }
      res.created({ message: 'Order has been created', data: order });
    },
  );

  // Update order by Id for authenticated user
  public updateOrder = asyncHandler(
    async (
      req: ParsedRequest<IOrderUpdateSchema, void, IOrderIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const order = needRecord(
        await orderRepository.findById(req.valid.params.id),
        new NotFoundError('Order not found'),
      );

      const data = await orderRepository.patchById(order.id, updateBody);

      res.ok({ message: 'Order has been updated', data });
    },
  );

  // Delete order by Id for authenticated user
  public deleteOrder = asyncHandler(
    async (
      req: ParsedRequest<void, void, IOrderIdSchema>,
      res: Response,
    ): Promise<void> => {
      const order = needRecord(
        await orderRepository.findById(req.valid.params.id),
        new NotFoundError('Order not found'),
      );

      await orderRepository.deleteById(order.id);
      res.noContent({ message: 'Order deleted successfully' });
    },
  );
}

export const orderController = new OrderController();
