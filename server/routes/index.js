const user = require('./user');
const auth = require('./auth');
module.exports = (router) => {
    user(router),
    auth(router)
}