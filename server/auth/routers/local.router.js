// import { Router } from 'express';
// import * as localController from '../controllers/local.controller';
// import { authLocal } from '../../../services/auth.services';

// const routes = new Router();
// routes.post('/auth/local', authLocal, (req, res) => localController.login(req, res));
// export default routes;
import { Router } from 'express';
import * as controller from './../controllers/local.controller';

export default () => {
    const router = new Router();
    router.post('/auth/local', controller.callback);
    //router.post('/connect/local', controller.connect);
    //router.post('/unlink/local', controller.unlink);
    return router;
}