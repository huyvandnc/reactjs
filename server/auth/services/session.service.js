import { result, invalid, error } from 'express-easy-helper';
import { calc, time } from 'role-calc';
import jwt from 'jsonwebtoken';
import config from '../../config';

// Initialize after login success
export async function initialize(err, user, res) {
    console.log('user', user);
    try {
        // Errors
        if (err)
            return invalid(res, { message: err });
        if (!user)
            return error(res, { message: 'Something went wrong, please try again.' });

        // Calculate expire by user roles, by default takes the role with the longest 'max'
        let expire = calc(time(config.roles, user.roles), 'max');

        let token = jwt.sign({
            _id: user._id,
            ip: res.req.headers['x-forwarded-for'] || res.req.connection.remoteAddress,
            agent: res.req.headers['user-agent']
        }, config.secret, { expiresIn: expire });

        res.req.header('x-access-token', token);

        // if local return token
        if (user.provider === 'local')
            return res.status(200).json({ success: true, token });

        // if Social redirect to..
        res.redirect(`/?token=${token}`);

    } catch (err) {
        return res.status(500).json({ success: false, message: err });
    }
}