import { type Document as MongooseDocument } from 'mongoose';
export interface IFeature extends MongooseDocument {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: import("mongoose").Model<IFeature, {}, {}, {}, MongooseDocument<unknown, {}, IFeature> & IFeature & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default _default;
