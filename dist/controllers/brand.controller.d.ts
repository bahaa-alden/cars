import { Response } from 'express';
export declare class BrandController {
    getBrands: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getBrand: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createBrand: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateBrand: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteBrand: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const brandController: BrandController;
