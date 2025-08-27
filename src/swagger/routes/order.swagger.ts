/**
 * @swagger
 * tags:
 *   name: orders
 *   description: Order management and retrieval
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a order
 *     description: USER,ADMIN can create order.
 *     tags: [orders]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createOrder'
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
 *                     $ref: '#/components/schemas/Order'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all orders
 *     description: USER,ADMIN can retrieve all orders.
 *     tags: [orders]
 *     security:
 *       - Bearer: []
 *     parameters:
  # filters
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         description: filter for userId field
 *       - in: query
 *         name: fromDate
 *         schema:
 *           type: string
 *         description: from date
 *       - in: query
 *         name: toDate
 *         schema:
 *           type: string
 *         description: to date

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
 *         description: Maximum number of orders
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
 *                     $ref: '#/components/schemas/Order'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get a order
 *     description: USER,ADMIN can use this router.
 *     tags: [orders]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id
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
 *                     $ref: '#/components/schemas/Order'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a order
 *     description: USER,ADMIN can use this router.
 *     tags: [orders]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateOrder'
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
 *                     $ref: '#/components/schemas/Order'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  order.
 *     description: USER,ADMIN can use this router.
 *     tags: [orders]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id
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

export const Order = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property

    orderItems: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          // properties orderItems
          rentDurationInWeeks: { type: 'number' },

          quantity: { type: 'number' },
          price: { type: 'number' },
          itemType: { type: 'string', enum: ['rent', 'purchase'] },
          product: { type: 'string' },
        },
      },
    },

    totalPrice: {
      type: 'number',
    },
    userId: {
      type: 'string',
    },
  },
  example: {
    id: '5ebac534954b54139806c112',
    // property example
    orderItems: [
      {
        // property example orderItems
        rentDurationInWeeks: 1,

        productId: '673c40cd59e293827f79e398',

        quantity: 1,

        itemType: '',

        price: 2500,
      },
    ],
    totalPrice: 2500,
    userId: '673c40cd59e293827f79e398',
    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
export const createOrder = {
  type: 'object',
  properties: {
    // create property

    orderItems: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          // create properties orderItems
          rentDurationInWeeks: { type: 'number' },

          product: { type: 'string' },
          price: { type: 'number' },
          itemType: { type: 'string', enum: ['rent', 'purchase'] },
          quantity: { type: 'number' },
        },
      },
    },

    totalPrice: {
      type: 'number',
    },

    userId: {
      type: 'string',
    },
  },
  example: {
    // create property example
    orderItems: [
      {
        // create property example orderItems
        rentDurationInWeeks: 1,

        productId: '673c40cd59e293827f79e398',

        quantity: 1,

        itemType: '',

        price: 2500,
      },
    ],

    totalPrice: 2500,

    userId: '673c40cd59e293827f79e398',
  },
  required: [
    // required property

    'orderItems.product',

    'orderItems.quantity',

    'totalPrice',
  ],
};
export const updateOrder = {
  type: 'object',
  properties: {
    // update property
    orderItems: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          // update properties orderItems
          rentDurationInWeeks: { type: 'number' },

          product: { type: 'string' },
          price: { type: 'number' },
          itemType: { type: 'string', enum: ['rent', 'purchase'] },
          quantity: { type: 'number' },
        },
      },
    },

    totalPrice: {
      type: 'number',
    },
    userId: {
      type: 'string',
    },
  },
  example: {
    // update property example
    orderItems: [
      {
        // update property example orderItems
        rentDurationInWeeks: 1,

        productId: '673c40cd59e293827f79e398',

        quantity: 1,

        itemType: '',

        price: 2500,
      },
    ],

    totalPrice: 2500,
    userId: '673c40cd59e293827f79e398',
  },
};
