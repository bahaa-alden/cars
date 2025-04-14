import { IUser } from './user.model';
import mongoose from 'mongoose';
import { type Document as MongooseDocument } from 'mongoose';
import { IOrderItem } from './order-item.model';
export interface IOrder extends MongooseDocument {
    id: string;
    totalPrice?: number;
    orderDate: Date;
    userId: IUser['_id'];
    user: IUser;
    orderItems: IOrderItem[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: mongoose.Model<IOrder, {}, {}, {}, mongoose.Document<unknown, {}, IOrder> & IOrder & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
