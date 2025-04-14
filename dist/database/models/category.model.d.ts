import { type Document as MongooseDocument } from 'mongoose';
export interface ICategory extends MongooseDocument {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: import("mongoose").Model<ICategory, {}, {}, {}, MongooseDocument<unknown, {}, ICategory> & ICategory & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default _default;
