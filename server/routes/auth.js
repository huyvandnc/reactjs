var userController = require('../controllers/user');

module.exports = (router) => {
    router.route('/signin').post((req, res) => { return userController.signIn(req, res) });
    router.route('/signup').post((req, res) => { return userController.signUp(req, res) });
}