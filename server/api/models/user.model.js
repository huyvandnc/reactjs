import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../../config';

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: [
            true, 'Username is required.'
        ],
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    email: {
        type: String,
        lowercase: true
    },
    mobile: String,
    name: {
        type: String
    },
    lastname: String,
    photo: String,
    provider: {
        type: String,
        default: 'local'
    },
    roles: {
        type: Array,
        default: ['user']
    },
    status: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date
    },
    social: {
        id: String,
        info: {}
    }
}, {
    versionKey: false
});

schema.path('username').index({ unique: true });

schema.methods.setPassword = function (password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

schema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

schema.methods.createToken = function () {
    return jwt.sign({ _id: this._id }, config.secret);
}

// Trigger method's before save
schema.pre('save', async function (next) {
    let user = this;
    // if username from social network exists then new username!
    if (user.provider !== 'local' && (user.isNew || user.isModified('username'))) {
        let username = await new Promise((resolve, reject) => {
            (function calc(username) {
                user.constructor.findOneByUsername(username)
                    .then(exists => exists ? calc(`${username}1`) : resolve(username))
                    .catch(err => reject(err));
            })(user.username);
        });
        user.username = username; // set new username
    }
    if (user.isModified('password')) {
        user.password = user.setPassword(user.password);
    }
});

// Trigger method's after save
schema.post('save', function (err, doc, next) {
    if (err.name === 'MongoError' && err.code === 11000) {
        return next(`'username "${doc.username}" not available.'`);
    } else {
        return next(err);
    }
});

schema.statics = {
    loginByLocal(username, password) {
        return new Promise((resolve, reject) => {
            const User = this;
            User.findOne({
                username: username,
                provider: 'local'
            }).select("+password").exec().then(user => {
                if (!user)
                    reject(`${username}' is not registered.`); // You can register user here
                if (!user.validPassword(password)) {
                    reject(`This password is not correct.`);
                }
                else {
                    user.lastLogin = Date.now();
                    user.save().then(_user => resolve(_user)).catch(err => reject(err));
                }
            }).catch(err => reject(err));
        });
    },

    loginBySocial(provider, profile) {
        return new Promise((resolve, reject) => {
            const User = this;
            User.findOne({
                provider,
                'social.id': profile.id
            }).exec().then(user => {
                if (!user) {
                    user = new User({
                        provider: provider,
                        name: profile.displayName,
                        username: profile.username,
                        email: profile.email || '',
                        photo: profile.photo || '',
                        'social.id': profile.id,
                        'social.info': profile._json
                    });
                } else {
                    user.social.info = profile._json;
                    user.photo = profile.photo || '';
                }
                user.lastLogin = Date.now();
                user.save().then(_user => resolve(_user)).catch(err => reject(err));
            }).catch(err => reject(err));
        });
    },

    findOneByUsername(username) {
        return new Promise((resolve, reject) => {
            this.findOne({ username }).count().exec().then(found => {
                resolve(found);
            });
        });
    }
}

export default mongoose.model('User', schema);