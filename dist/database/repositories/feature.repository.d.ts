import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IFeature } from '../models/feature.model';
export interface FeatureFilterOptions {
}
export interface FeatureFindOptions extends FindOptions<FeatureFilterOptions> {
    order: OrderOptions;
}
export declare class FeatureRepository extends BaseRepository<IFeature> {
    constructor();
    findForAdmin(options: FeatureFindOptions): Promise<PaginatedList<IFeature>>;
}
export declare const featureRepository: FeatureRepository;
