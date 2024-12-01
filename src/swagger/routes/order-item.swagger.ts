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
 *   post:
 *     summary: Return a orderItem
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
 *               $ref: '#/components/schemas/returnOrderItem'
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
 */

export const OrderItem = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property

    status: {
      type: 'string',
      enum: ['returned', 'notreturned'],
    },

    price: {
      type: 'number',
    },

    itemType: {
      type: 'string',
      enum: ['rent', 'purchase'],
    },

    quantity: {
      type: 'number',
    },

    productId: {
      type: 'string',
    },

    orderId: {
      type: 'string',
    },
  },
  example: {
    id: '5ebac534954b54139806c112',
    // property example
    status: 'returned',

    price: 3200,

    itemType: 'rent',

    quantity: 3,

    productId: '673c40cd59e293827f79e398',

    orderId: '673c40cd59e293827f79e398',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
export const createOrderItem = {
  type: 'object',
  properties: {
    // create property

    status: {
      type: 'string',
      enum: ['returned', 'notreturned'],
    },

    price: {
      type: 'number',
    },

    itemType: {
      type: 'string',
      enum: ['rent', 'purchase'],
    },

    quantity: {
      type: 'number',
    },

    productId: {
      type: 'string',
    },

    orderId: {
      type: 'string',
    },
  },
  example: {
    // create property example
    status: 'returned',

    price: 3200,

    itemType: 'rent',

    quantity: 3,

    productId: '673c40cd59e293827f79e398',

    orderId: '673c40cd59e293827f79e398',
  },
  required: [
    // required property

    'quantity',
  ],
};
export const updateOrderItem = {
  type: 'object',
  properties: {
    // update property

    status: {
      type: 'string',
      enum: ['returned', 'notreturned'],
    },

    price: {
      type: 'number',
    },

    itemType: {
      type: 'string',
      enum: ['rent', 'purchase'],
    },

    quantity: {
      type: 'number',
    },

    productId: {
      type: 'string',
    },

    orderId: {
      type: 'string',
    },
  },
  example: {
    // update property example
    status: 'returned',

    price: 3200,

    itemType: 'rent',

    quantity: 3,

    productId: '673c40cd59e293827f79e398',

    orderId: '673c40cd59e293827f79e398',
  },
};

export const returnOrderItem = {
  type: 'object',
  properties: {
    orderId: {
      type: 'string',
    },
  },
  example: {
    orderId: '673c40cd59e293827f79e398',
  },
};
