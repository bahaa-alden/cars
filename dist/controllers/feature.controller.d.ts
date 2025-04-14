import { Response } from 'express';
export declare class FeatureController {
    getFeatures: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getFeature: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createFeature: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateFeature: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteFeature: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const featureController: FeatureController;
