const Joi = require('@hapi/joi');
const config = require('../config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 32
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 11
    },
    role: {
        type: String,
        default: 'user'
    },
    create_date: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
});

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id: this._id}, config.secret);
    return token;
}
const User = mongoose.model('Users', userSchema);

const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        mobile: Joi.string().required(),
        password: Joi.string().required()
    });
    return schema.validate(user);
}

const validateName = (name) => {
    const schema = {
        name: Joi.string().required()
    }
    return schema.validate(name);
}

const validateEmail = (email) => {
    const schema = Joi.object({
        email: Joi.string().required().email()
    });
    return schema.validate(email);
}

const validateMobile = (mobile) => {
    const schema = Joi.object({
        mobile: Joi.string().required().email()
    });
    return schema.validate(mobile);
}

const validatePassword = (password) => {
    const schema = {
        password: Joi.string().required()
    }
    return schema.validate(password);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validate;
exports.validateName = validateName;
exports.validateEmail = validateEmail;
exports.validateMobile = validateMobile;
exports.validatePassword = validatePassword;