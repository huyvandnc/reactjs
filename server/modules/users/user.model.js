import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { passwordReg } from './user.validation';
import configs from '../../configs';

const schema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        default: ''
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email không được để trống!'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: 'Email "{VALUE}" không hợp lệ!',
        },
    },
    mobile: {
        type: String,
        required: [true, 'Số điện thoại không được để trống!'],
        minlength: [10, 'Số điện thoại cần phải dài hơn!'],
        trim: true,
    },
    fullName: {
        type: String,
        required: [true, 'Tên không được để trống!'],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Mật khẩu không được để trống!'],
        trim: true,
        minlength: [6, 'Mật khẩu cần phải dài hơn!'],
        validate: {
            validator(password) {
                return passwordReg.test(password);
            },
            message: 'Mật khẩu phải có chữ hoa, chữ thường hoặc số!',
        },
    },
    role: {
        type: String,
        default: 'user'
    },
    token: {
        type: String,
        trim: true,
        default: ''
    },
    createDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

schema.methods.setPassword = function (password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

schema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

schema.methods.createToken = function () {
    const token = jwt.sign({ _id: this._id }, configs.secret);
    this.token = token;
    return token;
}

schema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this.setPassword(this.password);
    }
    return next();
});

schema.plugin(uniqueValidator, { message: '{VALUE} đã được sử dụng.' });
//export default mongoose.model('users', schema);
const User = mongoose.model('users', schema);
exports.schema = schema;
exports.User = User;