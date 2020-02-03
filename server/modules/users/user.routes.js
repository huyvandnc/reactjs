import { Router } from 'express';
import validate from 'express-validation';
import * as userController from './user.controller';
import validation from './user.validation';
import { authLocal, authJwt } from '../../services/auth.services';

const routes = new Router();
//routes.get('/:id', authJwt, userController.getUser);
//routes.post('/signin', validate(validation.signin), userController.signIn);
//routes.post('/signup', validate(validation.signup), userController.signUp);
routes.post('/create', userController.create);

export default routes;