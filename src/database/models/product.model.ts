import { IFeature } from './feature.model';

import { IUser } from './user.model';

import { IBrand } from './brand.model';

import { ICategory } from './category.model';

import mongoose from 'mongoose';

import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';

export interface IProduct extends MongooseDocument {
  id: string;
  // <creating-property-interface />

  featureIds: Array<IFeature['_id']>;
  features: Array<IFeature>;

  userId: IUser['_id'];
  user: IUser;

  brandId: IBrand['_id'];
  brand: IBrand;

  rentPrice: number;

  purchasePrice: number;

  quantity?: number;
  categoryId: ICategory['_id'];
  category: ICategory;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const productSchema: Schema = new Schema<IProduct>(
  {
    // <creating-property-schema />
    featureIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Feature',
          default: [],
        },
      ],
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
    },

    rentPrice: {
      type: Number,
    },
    purchasePrice: {
      type: Number,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    name: {
      type: String,
      index: 'text',
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'Product',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

productSchema.virtual('category', {
  localField: 'categoryId',
  foreignField: '_id',
  ref: 'Category',
  justOne: true,
  match: { deletedAt: null },
});

productSchema.virtual('brand', {
  localField: 'brandId',
  foreignField: '_id',
  ref: 'Brand',
  justOne: true,
  match: { deletedAt: null },
});

productSchema.virtual('user', {
  localField: 'userId',
  foreignField: '_id',
  ref: 'User',
  justOne: true,
  match: { deletedAt: null },
});

productSchema.virtual('features', {
  localField: 'featureIds',
  foreignField: '_id',
  ref: 'Feature',
  match: { deletedAt: null },
});

export default model<IProduct>('Product', productSchema);
