import { UpdateQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IProduct } from '../models/product.model';
export interface ProductFilterOptions {
    userId?: string;
    categoryId?: string;
    brandId?: string;
    dateFrom?: Date;
    dateTo?: Date;
}
export interface ProductFindOptions extends FindOptions<ProductFilterOptions> {
    order: OrderOptions;
}
export declare class ProductRepository extends BaseRepository<IProduct> {
    constructor();
    patchById(id: string, data: UpdateQuery<IProduct>): Promise<IProduct | null>;
    findById(id: string): Promise<IProduct | null>;
    findForAdmin(options: ProductFindOptions): Promise<PaginatedList<IProduct>>;
}
export declare const productRepository: ProductRepository;
