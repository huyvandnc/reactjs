const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = validateRegisterInput = (data) => {
    let errors = '';
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.mobile = !isEmpty(data.mobile) ? data.mobile : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.repassword = !isEmpty(data.repassword) ? data.repassword : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors = 'Name must be between 2 to 30 chars';
    }
    else if (Validator.isEmpty(data.name)) {
        errors = 'Name field is required';
    }
    else if (!Validator.isEmail(data.email)) {
        errors = 'Email is invalid';
    }
    else if (Validator.isEmpty(data.email)) {
        errors = 'Email is required';
    }
    else if (Validator.isEmpty(data.mobile)) {
        errors = 'Mobile is required';
    }
    else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors = 'Password must have 6 chars';
    }
    else if (Validator.isEmpty(data.password)) {
        errors = 'Password is required';
    }
    else if (!Validator.isLength(data.repassword, { min: 6, max: 30 })) {
        errors = 'Password must have 6 chars';
    }
    else if (!Validator.equals(data.password, data.repassword)) {
        errors = 'Password and Confirm Password must match';
    }
    else if (Validator.isEmpty(data.repassword)) {
        errors = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}