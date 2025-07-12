/**
 * @swagger
 * tags:
 *   - name: Content
 */

/**
 * @swagger
 * /api/content:
 *   get:
 *     tags: [Content]
 *     summary: Get content based on membership
 *     parameters:
 *       - in: query
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [article, video]
 *         description: Type of content to retrieve
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully get list of content
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                       title:
 *                         type: string
 *                         example: Article Title
 *                       type:
 *                         type: string
 *                         enum: [article, video]
 *                       is_public:
 *                         type: boolean
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *       401:
 *         description: Unauthorized
 */
