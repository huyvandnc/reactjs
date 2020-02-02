import Joi from 'joi';
export const passwordReg = /^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;
export default {
    signin: {
        email: Joi.string().email().required(),
        password: Joi.string().regex(passwordReg).required()
    },
    signup: {
        email: Joi.string().email().required(),
        password: Joi.string().regex(passwordReg).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        userName: Joi.string(),
    },
    errors: (err) => {
        const error = {};
        const keys = Object.keys(err.errors);

        keys.forEach((key) => {
            let message = err.errors[key].message;

            if (err.errors[key].properties && err.errors[key].properties.message) {
                message = err.errors[key].properties.message.replace('`{PATH}`', key);
            }

            message = message.replace('Path ', '').replace(key, '').trim();
            error[key] = message;
        });
        return error;
    }
}