import express from 'express';
import ValidationHandler from '../middlewares/ValidationHandler';
import UserController from '../controllers/userController';
import UserValidation from '../validations/userValidation';

const userRoutes = express.Router();
const validation = [ValidationHandler.validate];


userRoutes.post('/signup', UserValidation.signup, validation, UserController.create);


export default userRoutes;
