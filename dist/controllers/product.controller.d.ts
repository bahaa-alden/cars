import { Response } from 'express';
export declare class ProductController {
    getProducts: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getProduct: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createProduct: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateProduct: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteProduct: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const productController: ProductController;
