import { Router } from 'express';
import * as controller from './../controllers/google.controller';

export default () => {
    const router = new Router();
    router.get('/auth/google', controller.index);
    router.get('/auth/google/callback', controller.callback);
    //router.post('/connect/google', controller.connect);
    //router.post('/unlink/google', controller.unlink);
    return router;
}