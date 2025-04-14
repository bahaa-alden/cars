import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';

export interface IFeature extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  name: string;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const featureSchema: Schema = new Schema<IFeature>(
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
    collection: 'Feature',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

export default model<IFeature>('Feature', featureSchema);
