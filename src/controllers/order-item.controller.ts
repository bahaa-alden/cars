import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  OrderItemFindOptions,
  orderItemRepository,
} from '../database/repositories/order-item.repository';
import {
  IOrderItemAllSchema,
  IOrderItemIdSchema,
  IOrderItemCreateSchema,
  IOrderItemUpdateSchema,
} from '../schemas/order-item.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { needRecord } from '../utils/record';
import { productRepository } from '../database/repositories/product.repository';
import { ItemType } from '../utils/enum';

export class OrderItemController {
  // Get all OrderItems by author
  public getOrderItems = asyncHandler(
    async (
      req: ParsedRequest<void, IOrderItemAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: OrderItemFindOptions = {
        filter: {
          // filters
          itemType: req.valid.query.itemType,

          orderId: req.valid.query.orderId,
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
      const orderItems = await orderItemRepository.findForAdmin(options);

      res.ok({ message: 'success', data: orderItems });
    },
  );

  // Get orderItem by Id for authenticated user
  public getOrderItem = asyncHandler(
    async (
      req: ParsedRequest<void, void, IOrderItemIdSchema>,
      res: Response,
    ): Promise<void> => {
      const orderItem = needRecord(
        await orderItemRepository.findById(req.valid.params.id),
        new NotFoundError('OrderItem not found'),
      );

      res.ok({ message: 'success', data: orderItem });
    },
  );

  // Create orderItem handler
  public createOrderItem = asyncHandler(
    async (
      req: ParsedRequest<IOrderItemCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newOrderItem = req.valid.body;
      const product = needRecord(
        await productRepository.findById(newOrderItem.productId),
        new NotFoundError('Product not found'),
      );

      if (!newOrderItem.price) {
        const servicePrice =
          newOrderItem.itemType === ItemType.purchase
            ? product.purchasePrice
            : product.rentPrice;
        newOrderItem.price = servicePrice * newOrderItem.quantity;
      }

      const orderItem = await orderItemRepository.insert(newOrderItem);
      if (orderItem === null) {
        throw new InternalError();
      }
      res.created({ message: 'OrderItem has been created', data: orderItem });
    },
  );

  // Update orderItem by Id for authenticated user
  public updateOrderItem = asyncHandler(
    async (
      req: ParsedRequest<IOrderItemUpdateSchema, void, IOrderItemIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const orderItem = needRecord(
        await orderItemRepository.findById(req.valid.params.id),
        new NotFoundError('OrderItem not found'),
      );

      const data = await orderItemRepository.patchById(
        orderItem.id,
        updateBody,
      );

      res.ok({ message: 'OrderItem has been updated', data });
    },
  );

  // Delete orderItem by Id for authenticated user
  public deleteOrderItem = asyncHandler(
    async (
      req: ParsedRequest<void, void, IOrderItemIdSchema>,
      res: Response,
    ): Promise<void> => {
      const orderItem = needRecord(
        await orderItemRepository.findById(req.valid.params.id),
        new NotFoundError('OrderItem not found'),
      );

      await orderItemRepository.deleteById(orderItem.id);
      res.noContent({ message: 'OrderItem deleted successfully' });
    },
  );
}

export const orderItemController = new OrderItemController();
