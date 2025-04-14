import { Response } from 'express';
export declare class OrderController {
    getOrders: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getOrder: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createOrder: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateOrder: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteOrder: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const orderController: OrderController;
