/**
 * @swagger
 * tags:
 *   - name: Auth
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Registration User
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password, membership]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               membership:
 *                 type: string
 *                 enum: [A, B, C]
 *     responses:
 *       201:
 *         description: Successfully Registered
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login user
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
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: Successfully Logged In
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/auth/login/google:
 *   post:
 *     tags: [Auth]
 *     summary: Login user via Google OAuth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 example: ya29.A0ARrdaM...
 *     responses:
 *       201:
 *         description: Successfully Logged In
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/auth/login/facebook:
 *   post:
 *     tags: [Auth]
 *     summary: Login user via Facebook OAuth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 example: EAAGm0PX4ZCpsBA...
 *     responses:
 *       201:
 *         description: Successfully Logged In
 *       401:
 *         description: Unauthorized
 */
