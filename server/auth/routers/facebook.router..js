import { Router } from 'express';
import * as controller from './../controllers/facebook.controller';

export default () => {
    const router = new Router();
    router.get('/auth/facebook', controller.index);
    router.get('/auth/facebook/callback', controller.callback);
    return router;
}