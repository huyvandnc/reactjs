const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const User = mongoose.model('users', new mongoose.Schema({
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
    phone: {
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
}));

const validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
        name: Joi.string().min(1).max(32).required(),
        phone: Joi.string().min(10).max(11).required()
    });
    return schema.validate(user);
}

module.exports.User = User;
module.exports.Validate = validateUser;