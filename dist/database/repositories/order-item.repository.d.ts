import { ItemType } from './../../utils/enum';
import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IOrderItem } from '../models/order-item.model';
export interface OrderItemFilterOptions {
    itemType?: ItemType;
    orderId?: string;
}
export interface OrderItemFindOptions extends FindOptions<OrderItemFilterOptions> {
    order: OrderOptions;
}
export declare class OrderItemRepository extends BaseRepository<IOrderItem> {
    constructor();
    findForAdmin(options: OrderItemFindOptions): Promise<PaginatedList<IOrderItem>>;
}
export declare const orderItemRepository: OrderItemRepository;
