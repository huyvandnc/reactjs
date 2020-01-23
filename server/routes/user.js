const User = require('./../controllers/user');

module.exports = (router) => {
    router.route('/users').get(User.getAll);
    router.route('/user').post(User.addUser);
    router.route('/user/:user_id')
        .get(User.getUser)
        .patch(User.updateUser)
        .put(User.updateUser)
        .delete(User.deleteUser);
}