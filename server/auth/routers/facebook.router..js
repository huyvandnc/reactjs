import { Router } from 'express';
import * as controller from './../controllers/facebook.controller';

export default () => {
    const router = new Router();
    router.get('/auth/facebook', controller.index);
    router.get('/auth/facebook/callback', controller.callback);
    //router.post('/connect/facebook', controller.connect);
    //router.post('/unlink/facebook', controller.unlink);
    return router;
}