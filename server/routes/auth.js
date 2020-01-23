var userController = require('../controllers/user');

module.exports = (router) => {
    router.route('/').post(userController.auth);
}