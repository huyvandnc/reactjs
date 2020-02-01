const Bcrypt = require('bcryptjs');
const yup = require('yup');
const { User } = require('./../models/user');

exports.getAll = async (req, res) => {
    let users = await User.find().select('-password').limit(0);
    return res.status(200).json({ success: true, users });
};

exports.signIn = async (req, res) => {
    const schema = yup.object({
        email: yup.string().email('Email không hợp lệ.')
            .required('Vui lòng nhập Email.'),
        password: yup.string()
            .min(6, 'Mật khẩu có độ dài ít nhất 6 ký tự.')
            .max(32, 'Mật khẩu có độ dài nhiều nhất 32 ký tự.')
            .required('Vui lòng nhập một Mật khẩu.'),
    });

    const { error, message } = await schema.validate(req.body).catch(error => Promise.resolve({ message: error.message, error: true }));
    if (error) {
        return res.status(400).json({ success: false, message: message });
    }

    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        const compare = await Bcrypt.compare(password, user.password);
        if (compare) {
            const token = user.generateAuthToken();
            return res.status(200).header('x-access-token', token).json({
                success: true,
                message: 'Xác thực thành công!',
                user: { _id: user._id, email: user.email, mobile: user.mobile, name: user.name, role: user.role },
                token: token
            });
        }
        else {
            return res.status(400).json({ success: false, message: "Mật khẩu không hợp lệ" });
        }
    }
    return res.status(400).json({ success: false, message: "Người dùng không tồn tại" });
};

exports.signUp = async (req, res) => {
    const schema = yup.object({
        name: yup.string()
            .required('Tên không được để trống.'),
        email: yup.string().email('Email không hợp lệ.')
            .required('Email không được để trống.'),
        mobile: yup.string()
            .required('Số điện thoại không được để trống.'),
        password: yup.string()
            .min(6, 'Mật khẩu phải có ít nhất 6 ký tự.')
            .max(32, 'Mật khẩu phải có nhiều nhất 32 ký tự.')
            .required('Mật khẩu không được để trống.'),
    });

    const { error, message } = await schema.validate(req.body).catch(error => Promise.resolve({ message: error.message, error: true }));
    if (error) {
        return res.status(400).json({ success: false, message: message });
    }

    let { name, email, mobile, password, repassword } = req.body;
    if (password != "" && password !== repassword) {
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

exports.token = async (req, res) => {
    let { refreshToken } = req.body;
    return res.status(400).json({ success: false, message: "Người dùng không tồn tại" });
};

exports.getUser = async (req, res) => {
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