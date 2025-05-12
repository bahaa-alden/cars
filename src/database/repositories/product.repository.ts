import { ProductType } from './../../utils/enum';

import { endOfDay, startOfDay } from 'date-fns';

import { UpdateQuery, type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Product, { type IProduct } from '../models/product.model';
import { selectedFields } from '../../utils/projection';

export interface ProductFilterOptions {
  //filters
  rentPriceGte?: number;

  rentPriceLte?: number;

  purchasePriceGte?: number;

  purchasePriceLte?: number;

  productionYear?: string;

  type?: ProductType;

  categoryId?: string;

  brandId?: string;

  dateFrom?: Date;
  dateTo?: Date;
}

export interface ProductFindOptions extends FindOptions<ProductFilterOptions> {
  order: OrderOptions;
}

export class ProductRepository extends BaseRepository<IProduct> {
  constructor() {
    super(Product);
  }

  async patchById(
    id: string,
    data: UpdateQuery<IProduct>,
  ): Promise<IProduct | null> {
    return await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .populate(['brand', 'features', 'category']);
  }

  async findById(id: string): Promise<IProduct | null> {
    return await this.model
      .findOne({ _id: id, deletedAt: null })
      .populate(['brand', 'features', 'category']);
  }

  async findForAdmin(
    options: ProductFindOptions,
  ): Promise<PaginatedList<IProduct>> {
    const { order, pagination, search, fields, filter } = options;

    const query: FilterQuery<IProduct> = { deletedAt: null };
    if (filter?.rentPriceGte) {
      query.rentPrice = { $gte: filter.rentPriceGte };
    }

    if (filter?.rentPriceLte) {
      query.rentPrice = { $lte: filter.rentPriceLte };
    }

    if (filter?.purchasePriceGte) {
      query.purchasePrice = { $gte: filter.purchasePriceGte };
    }

    if (filter?.purchasePriceLte) {
      query.purchasePrice = { $lte: filter.purchasePriceLte };
    }

    if (filter?.productionYear) {
      query.productionYear = filter.productionYear;
    }

    if (filter?.type) {
      query.type = filter.type;
    }

    if (filter?.categoryId) {
      query.categoryId = filter.categoryId;
    }

    if (filter?.brandId) {
      query.brandId = filter.brandId;
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
      .populate(['brand', 'features', 'category']);

    if (fields) {
      queryResult.select(selectedFields(fields));
    }

    const results = await queryResult;
    return { results, total };
  }
}

export const productRepository = new ProductRepository();
