import { ItemType, OrderItemStatus } from './../../utils/enum';

import { type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import OrderItem, { type IOrderItem } from '../models/order-item.model';
import { selectedFields } from '../../utils/projection';

export interface OrderItemFilterOptions {
  //filters
  itemType?: ItemType;
  orderId?: string;
}

export interface OrderItemFindOptions
  extends FindOptions<OrderItemFilterOptions> {
  order: OrderOptions;
}

export class OrderItemRepository extends BaseRepository<IOrderItem> {
  constructor() {
    super(OrderItem);
  }

  async findByIdToReturned(id: string): Promise<IOrderItem | null> {
    return this.model.findOne({
      _id: id,
      itemType: ItemType.rent,
      status: OrderItemStatus.notreturned,
    });
  }

  async findForAdmin(
    options: OrderItemFindOptions,
  ): Promise<PaginatedList<IOrderItem>> {
    const { order, pagination, search, fields, filter } = options;

    const query: FilterQuery<IOrderItem> = { deletedAt: null };
    if (filter?.itemType) {
      query.itemType = filter.itemType;
    }

    if (filter?.orderId) {
      query.orderId = filter.orderId;
    }

    if (search) {
      query.$or = [];
    }

    const total = await this.model.where(query).countDocuments();

    const queryResult = this.model
      .find(query)
      .sort({
        [order.column]: order.direction === OrderDirection.asc ? 1 : -1,
      })
      .limit(pagination.pageSize)
      .skip((pagination.page - 1) * pagination.pageSize)
      .populate(['product']);

    if (fields) {
      queryResult.select(selectedFields(fields));
    }

    const results = await queryResult;
    return { results, total };
  }
}

export const orderItemRepository = new OrderItemRepository();
