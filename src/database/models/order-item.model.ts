import { OrderItemStatus } from './../../utils/enum';

import { ItemType } from './../../utils/enum';

import { IProduct } from './product.model';

import { IOrder } from './order.model';

import mongoose from 'mongoose';

import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';

export interface IOrderItem extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  rentDurationInWeeks: number;

  status?: OrderItemStatus;

  price: number;

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

const orderItemSchema: Schema = new Schema<IOrderItem>(
  {
    // <creating-property-schema />
    rentDurationInWeeks: {
      type: Number,
      default: 1,
    },
    status: {
      type: String,
      enum: Object.values(OrderItemStatus),
      default: OrderItemStatus.notreturned,
    },
    price: {
      type: Number,
    },
    itemType: {
      type: String,
      enum: Object.values(ItemType),
    },

    quantity: {
      type: Number,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },

    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'OrderItem',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

orderItemSchema.virtual('order', {
  localField: 'orderId',
  foreignField: '_id',
  ref: 'Order',
  justOne: true,
  match: { deletedAt: null },
});

orderItemSchema.virtual('product', {
  localField: 'productId',
  foreignField: '_id',
  ref: 'Product',
  justOne: true,
  match: { deletedAt: null },
});

export default model<IOrderItem>('OrderItem', orderItemSchema);
