import { type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Category, { type ICategory } from '../models/category.model';
import { selectedFields } from '../../utils/projection';

export interface CategoryFilterOptions {
  //filters
}

export interface CategoryFindOptions
  extends FindOptions<CategoryFilterOptions> {
  order: OrderOptions;
}

export class CategoryRepository extends BaseRepository<ICategory> {
  constructor() {
    super(Category);
  }

  async findForAdmin(
    options: CategoryFindOptions,
  ): Promise<PaginatedList<ICategory>> {
    const { order, pagination, search, fields } = options;

    const query: FilterQuery<ICategory> = { deletedAt: null };
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

export const categoryRepository = new CategoryRepository();
