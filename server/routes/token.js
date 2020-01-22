let router = require('express').Router();
var userController = require('../controllers/userController');
router.route('/')
    .post(userController.token);

module.exports = router;