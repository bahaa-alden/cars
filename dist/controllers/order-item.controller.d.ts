import { Response } from 'express';
export declare class OrderItemController {
    getOrderItems: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getOrderItem: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createOrderItem: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateOrderItem: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteOrderItem: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const orderItemController: OrderItemController;
