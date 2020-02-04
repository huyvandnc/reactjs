import { Router } from 'express';
import * as localController from '../controllers/local.controller';
import { authLocal } from '../../../services/auth.services';

const routes = new Router();
routes.post('/auth/local', authLocal, (req, res) => localController.login(req, res));
export default routes;