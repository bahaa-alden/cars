import { UpdateQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IOrder } from '../models/order.model';
export interface OrderFilterOptions {
    userId?: string;
    dateFrom?: Date;
    dateTo?: Date;
}
export interface OrderFindOptions extends FindOptions<OrderFilterOptions> {
    order: OrderOptions;
}
export declare class OrderRepository extends BaseRepository<IOrder> {
    constructor();
    patchById(id: string, data: UpdateQuery<IOrder>): Promise<IOrder | null>;
    findById(id: string): Promise<IOrder | null>;
    findForAdmin(options: OrderFindOptions): Promise<PaginatedList<IOrder>>;
}
export declare const orderRepository: OrderRepository;
