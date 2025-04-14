import { Response } from 'express';
export declare class CategoryController {
    getCategories: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getCategory: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createCategory: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateCategory: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteCategory: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const categoryController: CategoryController;
