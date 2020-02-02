const Joi = require('@hapi/joi');
const config = require('../configs');
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

exports.userSchema = userSchema;
exports.User = User;