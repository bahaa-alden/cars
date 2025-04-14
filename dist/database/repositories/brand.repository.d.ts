import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IBrand } from '../models/brand.model';
export interface BrandFilterOptions {
}
export interface BrandFindOptions extends FindOptions<BrandFilterOptions> {
    order: OrderOptions;
}
export declare class BrandRepository extends BaseRepository<IBrand> {
    constructor();
    findForAdmin(options: BrandFindOptions): Promise<PaginatedList<IBrand>>;
}
export declare const brandRepository: BrandRepository;
