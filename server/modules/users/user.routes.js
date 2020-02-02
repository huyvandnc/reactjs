import { Router } from 'express';
import validate from 'express-validation';
import * as userController from './user.controllers';
import validation from './user.validation';
const routes = new Router();
routes.get('/:id', userController.getUser);
routes.post('/signin', validate(validation.signin), userController.signIn);
routes.post('/signup', validate(validation.signup), userController.signUp);
export default routes;