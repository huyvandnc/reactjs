const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { User, Validate } = require('../models/user');

exports.getAll = async(req, res) => {
    let users = await User.find().select('-password').limit(0);
    return res.status(200).json({ success: true, users });
};

exports.addUser = async(req, res) => {
    let {email, password, name, phone} = req.body;

    const { error } = Validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }
    
    let user = await User.findOne({ email: email });
    if (user) {
        return res.json({
            success: false,
            message: "That user already exisits!"
        });
    }
    else
    {
        user = new User();
        user.email = email;
        user.password = Bcrypt.hashSync(password, 10);
        user.name = name ? name : email;
        user.phone = phone;
        await user.save();
        return res.json({
            success: true,
            message: "New user created!",
            user
        });
    }
};

exports.auth = async(req, res) => {
    let {email, password} = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        if(Bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ _id: user._id }, config.secret, { expiresIn: config.tokenLife });
            const refreshToken = jwt.sign({ _id: user._id }, config.secret, { expiresIn: config.refreshTokenLife})
            return res.status(200).header('x-access-token', token).json({
                success: true,
                message: 'Authentication successful!',
                user: { _id: user._id, email: user.email, name: user.name, role: user.role }
            });
        }
    }
    return res.status(400).json({ success: false, message: "The user does not exist" });
};

exports.token = async(req, res) => {
    let {refreshToken} = req.body;
    return res.status(400).json({ success: false, message: "The user does not exist" });
};

exports.getUser = async(req, res) => {
    let user = await User.findById(req.params.user_id).select('-password');
    if (user) {
        return res.status(200).json({
            success: true,
            user
        });
    }
    return res.status(400).json({ success: false, message: "The user does not exist" });
};

exports.updateUser = (req, res) => {
    User.findById(req.params.user_id, (err, user) => {
        if (err) res.send(err);
        user.email = req.body.email || req.query.email;
        user.password = req.body.password || req.query.password;
        user.name = req.body.name ? req.body.name : (req.body.name ? req.body.name : user.email);
        user.phone = req.body.phone || req.query.phone;
        user.save((err) => {
            res.json({
                success: true,
                message: 'User Info updated'
            });
        });
    });
};

exports.deleteUser = (req, res) => {
    User.remove({
        _id: req.params.user_id
    }, (err, user) => {
        res.json({
            success: true,
            message: 'User deleted'
        });
    });
};