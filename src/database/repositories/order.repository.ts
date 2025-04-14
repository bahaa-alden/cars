import { endOfDay, startOfDay } from 'date-fns';

import { UpdateQuery, type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Order, { type IOrder } from '../models/order.model';
import { selectedFields } from '../../utils/projection';

export interface OrderFilterOptions {
  //filters
  userId?: string;

  dateFrom?: Date;
  dateTo?: Date;
}

export interface OrderFindOptions extends FindOptions<OrderFilterOptions> {
  order: OrderOptions;
}

export class OrderRepository extends BaseRepository<IOrder> {
  constructor() {
    super(Order);
  }

  async patchById(
    id: string,
    data: UpdateQuery<IOrder>,
  ): Promise<IOrder | null> {
    return await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .populate(['user', 'orderItems']);
  }

  async findById(id: string): Promise<IOrder | null> {
    return await this.model
      .findOne({ _id: id, deletedAt: null })
      .populate(['user', 'orderItems']);
  }

  async findForAdmin(
    options: OrderFindOptions,
  ): Promise<PaginatedList<IOrder>> {
    const { order, pagination, search, fields, filter } = options;

    const query: FilterQuery<IOrder> = { deletedAt: null };
    if (filter?.userId) {
      query.userId = filter.userId;
    }

    if (filter?.dateFrom ?? filter?.dateTo) {
      query.createdAt = {};
      if (filter.dateFrom) {
        query.createdAt.$gte = startOfDay(filter.dateFrom);
      }
      if (filter.dateTo) {
        query.createdAt.$lte = endOfDay(filter.dateTo);
      }
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
      .populate(['user', 'orderItems']);

    if (fields) {
      queryResult.select(selectedFields(fields));
    }

    const results = await queryResult;
    return { results, total };
  }
}

export const orderRepository = new OrderRepository();
