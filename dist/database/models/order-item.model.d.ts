import { ItemType } from './../../utils/enum';
import { IProduct } from './product.model';
import { IOrder } from './order.model';
import mongoose from 'mongoose';
import { type Document as MongooseDocument } from 'mongoose';
export interface IOrderItem extends MongooseDocument {
    id: string;
    price?: number;
    itemType: ItemType;
    quantity: number;
    productId: IProduct['_id'];
    product: IProduct;
    orderId: IOrder['_id'];
    order: IOrder;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: mongoose.Model<IOrderItem, {}, {}, {}, mongoose.Document<unknown, {}, IOrderItem> & IOrderItem & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
