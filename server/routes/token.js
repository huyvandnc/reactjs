var userController = require('../controllers/user');

module.exports = (router) => {
    router.route('/token').post(userController.token);
}