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
 *         name: userId
 *         schema:
 *           type: string
 *         description: filter for userId field

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
export declare const Product: {
    type: string;
    properties: {
        id: {
            type: string;
        };
        featureIds: {
            type: string;
            items: {
                type: string;
            };
        };
        userId: {
            type: string;
        };
        brandId: {
            type: string;
        };
        rentPrice: {
            type: string;
        };
        purchasePrice: {
            type: string;
        };
        quantity: {
            type: string;
        };
        categoryId: {
            type: string;
        };
        name: {
            type: string;
        };
    };
    example: {
        id: string;
        featureIds: string[];
        userId: string;
        brandId: string;
        rentPrice: number;
        purchasePrice: number;
        quantity: number;
        categoryId: string;
        name: string;
        createdAt: string;
        updatedAt: string;
    };
};
export declare const createProduct: {
    type: string;
    properties: {
        featureIds: {
            type: string;
            items: {
                type: string;
            };
        };
        userId: {
            type: string;
        };
        brandId: {
            type: string;
        };
        rentPrice: {
            type: string;
        };
        purchasePrice: {
            type: string;
        };
        quantity: {
            type: string;
        };
        categoryId: {
            type: string;
        };
        name: {
            type: string;
        };
    };
    example: {
        featureIds: string[];
        userId: string;
        brandId: string;
        rentPrice: number;
        purchasePrice: number;
        quantity: number;
        categoryId: string;
        name: string;
    };
    required: string[];
};
export declare const updateProduct: {
    type: string;
    properties: {
        featureIds: {
            type: string;
            items: {
                type: string;
            };
        };
        userId: {
            type: string;
        };
        brandId: {
            type: string;
        };
        rentPrice: {
            type: string;
        };
        purchasePrice: {
            type: string;
        };
        quantity: {
            type: string;
        };
        categoryId: {
            type: string;
        };
        name: {
            type: string;
        };
    };
    example: {
        featureIds: string[];
        userId: string;
        brandId: string;
        rentPrice: number;
        purchasePrice: number;
        quantity: number;
        categoryId: string;
        name: string;
    };
};
