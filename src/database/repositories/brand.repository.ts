import { type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Brand, { type IBrand } from '../models/brand.model';
import { selectedFields } from '../../utils/projection';

export interface BrandFilterOptions {
  //filters
}

export interface BrandFindOptions extends FindOptions<BrandFilterOptions> {
  order: OrderOptions;
}

export class BrandRepository extends BaseRepository<IBrand> {
  constructor() {
    super(Brand);
  }

  async findForAdmin(
    options: BrandFindOptions,
  ): Promise<PaginatedList<IBrand>> {
    const { order, pagination, search, fields } = options;

    const query: FilterQuery<IBrand> = { deletedAt: null };
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
      .skip((pagination.page - 1) * pagination.pageSize);

    if (fields) {
      queryResult.select(selectedFields(fields));
    }

    const results = await queryResult;
    return { results, total };
  }
}

export const brandRepository = new BrandRepository();
