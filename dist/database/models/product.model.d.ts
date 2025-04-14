import { IFeature } from './feature.model';
import { IUser } from './user.model';
import { IBrand } from './brand.model';
import { ICategory } from './category.model';
import mongoose from 'mongoose';
import { type Document as MongooseDocument } from 'mongoose';
export interface IProduct extends MongooseDocument {
    id: string;
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
declare const _default: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct> & IProduct & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
