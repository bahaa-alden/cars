import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type ICategory } from '../models/category.model';
export interface CategoryFilterOptions {
}
export interface CategoryFindOptions extends FindOptions<CategoryFilterOptions> {
    order: OrderOptions;
}
export declare class CategoryRepository extends BaseRepository<ICategory> {
    constructor();
    findForAdmin(options: CategoryFindOptions): Promise<PaginatedList<ICategory>>;
}
export declare const categoryRepository: CategoryRepository;
