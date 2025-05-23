/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: API to authentication users
 */

/**
 * @swagger
 *   /users/register:
 *   post:
 *     summary: Register as user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signUp'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWQ4ZDJjZjBkMmM5NWNiOTM5OTgyZSIsImlhdCI6MTcxMzIxMjcxNywiZXhwIjoxNzIwOTg4NzE3fQ.FbARIC4jDWtOb0koNJK69F2MTu8j9LeS3RaFrT-AP7c
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 */

//                                                      login

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               email: user@gmail.com
 *               password: "123454321"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                    type: string
 *                    exaple:
 *                      status: success
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWQ4ZDJjZjBkMmM5NWNiOTM5OTgyZSIsImlhdCI6MTcxMzIxMjcxNywiZXhwIjoxNzIwOTg4NzE3fQ.FbARIC4jDWtOb0koNJK69F2MTu8j9LeS3RaFrT-AP7c
 *       "401":
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               status: error
 *               message: Invalid email or password
 */

//NOTE                                                        forgotPassword
/**
 * @swagger
 *   /users/forgotPassword:
 *     post:
 *       summary: forgot password
 *       tags: [Auth]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *               properties:
 *                 email:
 *                   type: string
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "200":
 *           description: reset password token has been sent
 *           contents:
 *             application/json
 */

//NOTE                                              resetpassword
/**
 * @swagger
 *   /users/resetPassword:
 *     patch:
 *       summary: reset password
 *       tags: [Auth]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *          "200":
 *            description: OK
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                      example: success
 *                    token:
 *                      type: string
 *                      example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWQ4ZDJjZjBkMmM5NWNiOTM5OTgyZSIsImlhdCI6MTcxMzIxMjcxNywiZXhwIjoxNzIwOTg4NzE3fQ.FbARIC4jDWtOb0koNJK69F2MTu8j9LeS3RaFrT-AP7c
 *          "401":
 *            description: Password reset failed
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Error'
 *                example:
 *                  status: error
 *                  message: Password reset failed
 */

//NOTE                                       updateMyPassword

/**
 * @swagger
 *   /users/updateMyPassword:
 *     patch:
 *       summary: Update Current User
 *       tags: [Auth]
 *       security:
 *         - Bearer: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                  passwordCurrent:
 *                   type: string
 *                  password:
 *                   type: string
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "200":
 *           description: Created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: success
 *                   user:
 *                     $ref: '#/components/schemas/User'
 *                   token:
 *                     type: string
 *                     example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWQ4ZDJjZjBkMmM5NWNiOTM5OTgyZSIsImlhdCI6MTcxMzIxMjcxNywiZXhwIjoxNzIwOTg4NzE3fQ.FbARIC4jDWtOb0koNJK69F2MTu8j9LeS3RaFrT-AP7c
 */

export const signUp = {
  type: 'object',
  required: [
    // required property

    'name',
    'email',
    'password',
  ],
  properties: {
    //  property signup

    address: {
      type: 'object',
      properties: {
        // properties address
        country: { type: 'string' },
        street: { type: 'string' },
        city: { type: 'string' },
      },
    },
    phone: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
  },
  example: {
    // create property example

    // create property example address
    address: {
      // property example address
      country: 'syria',
      street: 'ibn-zaher',
      city: 'aleppo',
    },
    phone: '0950513333',

    name: 'Adel Seirafi',
    email: 'user@gmail.com',
    password: '123454321',
  },
};
