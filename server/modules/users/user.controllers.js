import { User } from './user.model';
import validation from './user.validation';
import bcrypt from 'bcryptjs';

export const signIn = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!password) return res.status(400).json({ success: false, message: "Mật khẩu không được để trống!" });
        let user = await User.findOne({ email: email });
        if (user) {
            const compare = user.validPassword(password);
            if (compare) {
                const token = user.generateJWT();
                return res.status(200).header('x-access-token', token).json({
                    success: true,
                    message: 'Xác thực thành công!',
                    user: user,
                    token: token
                });
            }
            else {
                return res.status(400).json({ success: false, message: "Mật khẩu không hợp lệ!" });
            }
        }
        return res.status(400).json({ success: false, message: "Người dùng không tồn tại!" });
    } catch (e) {
        console.log(e);
        if (e.errors)
            return res.status(500).json(validation.errors(e));
        return res.status(500).json(e);
    }
}

export const signUp = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);
    } catch (e) {
        if (e.errors)
            return res.status(500).json(validation.errors(e));
        return res.status(500).json(e);
    }
}

export const getUser = async (req, res) => {
    try {
        let { id } = req.params;
        if (!id) return res.status(400).json({ success: false, message: "Dữ liệu không hợp lệ!" });
        let user = await User.findById(id).select('-password');
        if (user)
            return res.status(200).json({ success: true, message: `Thông tin của ${user.fullName}`, user: user });
        return res.status(400).json({ success: false, message: "Người dùng không tồn tại!" });
    } catch (e) {
        return res.status(500).json(e);
    }
}