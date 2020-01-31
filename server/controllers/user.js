const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const {User, validate, validateName, validateEmail, validateMobile, validatePassword} = require('./../models/user');

exports.getAll = async(req, res) => {
    let users = await User.find().select('-password').limit(0);
    return res.status(200).json({ success: true, users });
};

exports.addUser = async(req, res) => {
    let {email, password, name, mobile} = req.body;

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
        user.mobile = mobile;
        await user.save();
        return res.json({
            success: true,
            message: "New user created!",
            user
        });
    }
};

exports.signin = async(req, res) => {
    const { error } = validate(req.body);
    //console.log('error', error);
    if(error) return res.status(400).json({ success: false, message: error.details[0].message });

    let {email, password} = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        if(Bcrypt.compare(password, user.password)) {
            const token = user.generateAuthToken();
            return res.status(200).header('x-access-token', token).json({
                success: true,
                message: 'Xác thực thành công!',
                user: { _id: user._id, email: user.email, name: user.name, role: user.role },
                token: token
            });
        }
    }
    return res.status(400).json({ success: false, message: "Người dùng không tồn tại" });
};

exports.signup = async(req, res) => {
    const { error } = validate(req.body);
    console.log('error', error);
    if(error) return res.status(400).json({ success: false, message: error.details[0].message });

    let {name, email, mobile, password, repassword} = req.body;
    if(password != "" && password !== repassword)
    {
        return res.status(400).json({ success: false, message: "Mật khẩu xác nhận không hợp lệ" });
    }
    let user = await User.findOne({ email: email });
    if (user) {
        return res.status(400).json({ success: false, message: "Người dùng đã tồn tại" });
    }

    user = new User({
        name: name,
        email: email,
        mobile: mobile,
        password: password
    });

    const salt = await Bcrypt.genSalt(10);
    user.password = await Bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();
    return res.status(200).header('x-access-token', token).json({
        success: true,
        message: 'Đăng ký thành công!',
        user: { _id: user._id, email: user.email, mobile: user.mobile, name: user.name, role: user.role },
        token: token
    });
};

//https://github.com/simpletut/Universal-React-Redux-Registration/blob/master/Backend/middleware/auth.js

exports.token = async(req, res) => {
    let {refreshToken} = req.body;
    return res.status(400).json({ success: false, message: "Người dùng không tồn tại" });
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
        user.mobile = req.body.mobile || req.query.mobile;
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