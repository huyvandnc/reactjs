const User = require('./../controllers/user');

module.exports = (router) => {
    router.route('/users').get((req, res) => { return User.getAll(req, res) });
    router.route('/user').post((req, res) => { return User.addUser(req, res) });
    router.route('/user/:user_id')
        .get((req, res) => { return User.getUser(req, res) })
        .patch((req, res) => { return User.updateUser(req, res) })
        .put((req, res) => { return User.updateUser(req, res) })
        .delete((req, res) => { return User.deleteUser(req, res) });
}