/**
 * @swagger
 * tags:
 *   name: products
 *   description: Product management and retrieval
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a product
 *     description: ADMIN can create product.
 *     tags: [products]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createProduct'
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
 *                     $ref: '#/components/schemas/Product'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all products
 *     description: USER,ADMIN can retrieve all products.
 *     tags: [products]
 *     security:
 *       - Bearer: []
 *     parameters:
  # filters
 *       - in: query
 *         name: price
 *         schema:
 *           type: number
 *         description: filter for  price field

 *       - in: query
 *         name: rentPriceGte
 *         schema:
 *           type: number
 *         description: filter for  rentPriceGte field

 *       - in: query
 *         name: rentPriceLte
 *         schema:
 *           type: number
 *         description: filter for  rentPriceLte field

 *       - in: query
 *         name: purchasePriceGte
 *         schema:
 *           type: number
 *         description: filter for  purchasePriceGte field

 *       - in: query
 *         name: purchasePriceLte
 *         schema:
 *           type: number
 *         description: filter for  purchasePriceLte field

 *       - in: query
 *         name: productionYear
 *         schema:
 *           type: string
 *         description: filter for  productionYear field

 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: filter for  type field

 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         description: filter for categoryId field

 *       - in: query
 *         name: brandId
 *         schema:
 *           type: string
 *         description: filter for brandId field

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
 *         description: Maximum number of products
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
 *                     $ref: '#/components/schemas/Product'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product
 *     description: USER,ADMIN can use this router.
 *     tags: [products]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product id
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
 *                     $ref: '#/components/schemas/Product'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a product
 *     description: ADMIN can use this router.
 *     tags: [products]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateProduct'
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
 *                     $ref: '#/components/schemas/Product'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  product.
 *     description: ADMIN can use this router.
 *     tags: [products]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product id
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

export const Product = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property

    colors: {
      type: 'array',
      items: {
        type: 'string',
      },
    },

    productionYear: {
      type: 'string',
    },

    type: {
      type: 'string',
      enum: ['piece', 'car'],
    },

    featureIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },

    brandId: { type: 'string' },
    rentPrice: { type: 'number' },
    purchasePrice: { type: 'number' },
    quantity: { type: 'number' },
    categoryId: { type: 'string' },
    name: { type: 'string' },
  },
  example: {
    id: '5ebac534954b54139806c112',
    // property example

    colors: ['yellow'],

    productionYear: '2023',

    type: 'piece',

    featureIds: ['673c40cd59e293827f79e398', '673c40cd59e293827f79e399'],

    brandId: '673c40cd59e293827f79e398',

    rentPrice: 200,

    purchasePrice: 2000,

    quantity: 3,

    categoryId: '673c40cd59e293827f79e398',

    name: 'bmw 320m',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
export const createProduct = {
  type: 'object',
  properties: {
    // create property

    colors: {
      type: 'array',
      items: {
        type: 'string',
      },
    },

    productionYear: {
      type: 'string',
      default: '',
    },
    type: {
      type: 'string',
      enum: ['piece', 'car'],
    },

    featureIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },

    brandId: { type: 'string' },
    rentPrice: { type: 'number' },
    purchasePrice: { type: 'number' },
    quantity: { type: 'number' },
    categoryId: { type: 'string' },
    name: { type: 'string' },
  },
  example: {
    // create property example

    colors: ['yellow'],

    productionYear: '2023',

    type: 'piece',

    featureIds: ['673c40cd59e293827f79e398', '673c40cd59e293827f79e399'],

    brandId: '673c40cd59e293827f79e398',

    rentPrice: 200,

    purchasePrice: 2000,

    quantity: 3,

    categoryId: '673c40cd59e293827f79e398',

    name: 'bmw 320m',
  },
  required: [
    // required property

    'productionYear',

    'brandId',

    'rentPrice',

    'purchasePrice',

    'categoryId',

    'name',
  ],
};
export const updateProduct = {
  type: 'object',
  properties: {
    // update property

    colors: {
      type: 'array',
      items: {
        type: 'string',
      },
    },

    productionYear: {
      type: 'string',
    },

    type: {
      type: 'string',
      enum: ['piece', 'car'],
    },

    featureIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },

    brandId: { type: 'string' },
    rentPrice: { type: 'number' },
    purchasePrice: { type: 'number' },
    quantity: { type: 'number' },
    categoryId: { type: 'string' },
    name: { type: 'string' },
  },
  example: {
    // update property example

    colors: ['yellow'],

    productionYear: '2023',

    type: 'piece',

    featureIds: ['673c40cd59e293827f79e398', '673c40cd59e293827f79e399'],

    brandId: '673c40cd59e293827f79e398',

    rentPrice: 200,

    purchasePrice: 2000,

    quantity: 3,

    categoryId: '673c40cd59e293827f79e398',

    name: 'bmw 320m',
  },
};
