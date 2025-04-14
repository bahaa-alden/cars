import { type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Feature, { type IFeature } from '../models/feature.model';
import { selectedFields } from '../../utils/projection';

export interface FeatureFilterOptions {
  //filters
}

export interface FeatureFindOptions extends FindOptions<FeatureFilterOptions> {
  order: OrderOptions;
}

export class FeatureRepository extends BaseRepository<IFeature> {
  constructor() {
    super(Feature);
  }

  async findForAdmin(
    options: FeatureFindOptions,
  ): Promise<PaginatedList<IFeature>> {
    const { order, pagination, search, fields } = options;

    const query: FilterQuery<IFeature> = { deletedAt: null };
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

export const featureRepository = new FeatureRepository();
