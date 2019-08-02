import express from 'express';
import ValidationHandler from '../middlewares/ValidationHandler';
import UserController from '../controllers/userController';
import UserValidation from '../validations/userValidation';

const userRoutes = express.Router();

const validation = [ValidationHandler.validate];


userRoutes.post('/signup', UserValidation.signup, validation, UserController.create);


export default userRoutes;
/**
 * @swagger
 * definitions:
 *   NewUser:
 *     type: object
 *     required:
 *       - first_name
 *       - last_name
 *       - email
 *       - password
 *     properties:
 *       first_name:
 *         type: string
 *       last_name:
 *         type: string
 *       email:
 *         type: string
 *         format: email
 *       password:
 *         type: string
 *         format: password
 *       confirm_Password:
 *         type: string
 *         format: password
 *       isAdmin:
 *         type: boolean
 *         default: false
 *
 *
 *   Errors:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         location:
 *           type: string
 *           description: source of the data
 *         param:
 *           type: string
 *           descriptionnode_modules: name of the field
 *         value:
 *           type: string
 *           description: value of the field
 *         msg:
 *           type: string
 *           description: information on the error
 *
 *
 *   User:
 *     type: object
 *     required:
 *       - id
 *       - isAdmin
 *       - email
 *       - token
 *       - first_name
 *       - last_name
 *     properties:
 *       id:
 *         type: int
 *       isAdmin:
 *         type: boolean
 *         default: false
 *       email:
 *         type: string
 *         format: email
 *       last_name:
 *         type: string
 *       first_name:
 *         type: string
 *       token:
 *         type: any
 *
 *
 */

/**
 * @swagger
 *
 * /api/v1/auth/signup:
 *   post:
 *     description: Creates a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewUser'
 *     responses:
 *       201:
 *         description: Created
 *         schema:
 *           $ref: '#/definitions/User'
 *       400:
 *         description: Bad request
 *         schema:
 *           $ref: '#/definitions/Errors'
 *
 *
 */
