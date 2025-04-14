import { type Document as MongooseDocument } from 'mongoose';
export interface IBrand extends MongooseDocument {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: import("mongoose").Model<IBrand, {}, {}, {}, MongooseDocument<unknown, {}, IBrand> & IBrand & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default _default;
