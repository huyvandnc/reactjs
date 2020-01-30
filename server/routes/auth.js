var userController = require('../controllers/user');

module.exports = (router) => {
    router.route('/signin').post(userController.signin);
    router.route('/signup').post(userController.signup);
}