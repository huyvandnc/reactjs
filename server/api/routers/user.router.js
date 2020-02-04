// import * as controller from './../controllers/user.controller';
// import { mw } from '../../auth/services/mw.service';

// const routes = new Router();
// //routes.get('/:id', authJwt, userController.getUser);
// //routes.post('/signin', validate(validation.signin), userController.signIn);
// //routes.post('/signup', validate(validation.signup), userController.signUp);
// routes.get('/me', mw(), controller.me);
// routes.post('/user/create', controller.create);
// routes.put('/user/update', mw(), controller.update);
// routes.get('/user/:id', controller.read);

// export default routes;

import { Router } from 'express';
import * as controller from './../controllers/user.controller';
import { mw } from '../../auth/services/mw.service';

export default () => {
    const router = new Router();
    router.post('/user', controller.create);
    router.put('/user', mw(), controller.update);
    router.get('/user/me', mw(), controller.me);
    router.get('/user/:id', controller.read);

    //router.get('/user/admin', mw(['admin']), controller.listAdmin);
    //router.put('/user/admin/:id', mw(['admin']), controller.updateAdmin);
    //router.delete('/user/admin/:id', mw(['admin']), controller.destroyAdmin);
    return router;
}