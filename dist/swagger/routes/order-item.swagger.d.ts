/**
 * @swagger
 * tags:
 *   name: order-items
 *   description: OrderItem management and retrieval
 */
/**
 * @swagger
 * /order-items:
 *   post:
 *     summary: Create a orderItem
 *     description: USER,ADMIN can create orderItem.
 *     tags: [order-items]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createOrderItem'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                     $ref: '#/components/schemas/OrderItem'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all order-items
 *     description: USER,ADMIN can retrieve all order-items.
 *     tags: [order-items]
 *     security:
 *       - Bearer: []
 *     parameters:
  # filters
 *       - in: query
 *         name: itemType
 *         schema:
 *           type: string
 *         description: filter for  itemType field
 *       - in: query
 *         name: orderId
 *         schema:
 *           type: string
 *         description: filter for orderId field

 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: what fields do you want to show (ex. name,price)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of order-items
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: key-words you want to search about it
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name,-price)
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/OrderItem'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
/**
 * @swagger
 * /order-items/{id}:
 *   get:
 *     summary: Get a orderItem
 *     description: USER,ADMIN can use this router.
 *     tags: [order-items]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: OrderItem id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                     $ref: '#/components/schemas/OrderItem'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a orderItem
 *     description: USER,ADMIN can use this router.
 *     tags: [order-items]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: OrderItem id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateOrderItem'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                     $ref: '#/components/schemas/OrderItem'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  orderItem.
 *     description: USER,ADMIN can use this router.
 *     tags: [order-items]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: OrderItem id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   example: null
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
export declare const OrderItem: {
    type: string;
    properties: {
        id: {
            type: string;
        };
        price: {
            type: string;
        };
        itemType: {
            type: string;
            enum: string[];
        };
        quantity: {
            type: string;
        };
        productId: {
            type: string;
        };
        orderId: {
            type: string;
        };
    };
    example: {
        id: string;
        price: number;
        itemType: string;
        quantity: number;
        productId: string;
        orderId: string;
        createdAt: string;
        updatedAt: string;
    };
};
export declare const createOrderItem: {
    type: string;
    properties: {
        price: {
            type: string;
        };
        itemType: {
            type: string;
            enum: string[];
        };
        quantity: {
            type: string;
        };
        productId: {
            type: string;
        };
        orderId: {
            type: string;
        };
    };
    example: {
        price: number;
        itemType: string;
        quantity: number;
        productId: string;
        orderId: string;
    };
    required: string[];
};
export declare const updateOrderItem: {
    type: string;
    properties: {
        price: {
            type: string;
        };
        itemType: {
            type: string;
            enum: string[];
        };
        quantity: {
            type: string;
        };
        productId: {
            type: string;
        };
        orderId: {
            type: string;
        };
    };
    example: {
        price: number;
        itemType: string;
        quantity: number;
        productId: string;
        orderId: string;
    };
};
