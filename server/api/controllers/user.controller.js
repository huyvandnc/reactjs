import User from '../models/user.model';
import validation from '../validation/user.validation';

export const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);
    } catch (e) {
        return res.status(500).json(e);
    }
}

export const read = async (req, res) => {
    let { id } = req.params;
    if (!id) return res.status(400).json({ success: false, message: "Dữ liệu không hợp lệ!" });
    try {
        let user = await User.findOne({ _id: id }, {
            social: 0
        }).select('-email');
        if (user) {
            user = Object.assign({ success: true }, user._doc);
            return res.status(200).json(user);
        }
        return res.status(400).json({ success: false, message: "Người dùng không tồn tại!" });
    } catch (e) {
        return res.status(500).json(e);
    }
}

export const update = (req, res) => {
    let user = req.user;
    delete user.session._id;
    return res.status(200).json(user);
}

export const me = (req, res) => {
    let user = req.user;
    delete user.session._id;
    return res.status(200).json(user);
}

export const login = (req, res) => {
    return res.status(200).json(req.user);
}

export const signIn = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!password) return res.status(400).json({ success: false, message: "Mật khẩu không được để trống!" });
        let user = await User.findOne({ email: email });
        if (user) {
            const compare = user.validPassword(password);
            if (compare) {
                const token = user.createToken();
                //user.updateOne({ _id: user._id }, { token: token });
                return res.status(200).header('x-access-token', token).json({
                    success: true,
                    message: 'Xác thực thành công!',
                    user: user
                });
            }
            else {
                return res.status(400).json({ success: false, message: "Mật khẩu không hợp lệ!" });
            }
        }
        return res.status(400).json({ success: false, message: "Người dùng không tồn tại!" });
    } catch (e) {
        if (e.errors)
            return res.status(500).json(validation.errors(e));
        return res.status(500).json(e);
    }
}

export const signUp = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const token = user.createToken();
        user.updateOne({ _id: user._id }, { token: token });
        return res.status(201).json(user);
    } catch (e) {
        if (e.errors)
            return res.status(500).json(validation.errors(e));
        return res.status(500).json(e);
    }
}