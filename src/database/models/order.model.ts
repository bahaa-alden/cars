import { IUser } from './user.model';

import mongoose from 'mongoose';

import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';
import { IOrderItem } from './order-item.model';

export interface IOrder extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  totalPrice?: number;

  orderDate: Date;
  userId: IUser['_id'];
  user: IUser;
  orderItems: IOrderItem[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const orderSchema: Schema = new Schema<IOrder>(
  {
    // <creating-property-schema />
    totalPrice: {
      type: Number,
    },
    orderDate: {
      type: Date,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'Order',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

orderSchema.virtual('user', {
  localField: 'userId',
  foreignField: '_id',
  ref: 'User',
  justOne: true,
  match: { deletedAt: null },
});

orderSchema.virtual('orderItems', {
  localField: '_id',
  foreignField: 'orderId',
  ref: 'OrderItem',
  match: { deletedAt: null },
});

export default model<IOrder>('Order', orderSchema);
