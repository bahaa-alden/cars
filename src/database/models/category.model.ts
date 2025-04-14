import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';

export interface ICategory extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  name: string;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const categorySchema: Schema = new Schema<ICategory>(
  {
    // <creating-property-schema />
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
    collection: 'Category',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

export default model<ICategory>('Category', categorySchema);
