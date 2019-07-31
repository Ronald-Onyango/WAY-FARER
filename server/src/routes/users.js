import express from 'express';
import UserController from '../controllers/userController';

const userRoutes = express.Router();

userRoutes.post('/signup', UserController.create);

export default userRoutes;
