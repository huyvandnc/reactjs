import { unauthorized, forbidden } from 'express-easy-helper';
import User from '../../users/models/user.model';
import jwt from 'jsonwebtoken';
import configs from '../../../configs';

// VerifyToken
export function mw(requiredRoles) {
    return async (req, res, next) => {
        // Extract Token
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        if (token) {
            try {
                let session = jwt.verify(token, configs.secret);
                // Extract info user from MongoDB
                let _user = await User.findById(session._id).select('-social').exec();
                if (!_user)
                    return res.status(403).json({ success: false, message: "You don't have permission to access / on this server" });

                // If id's not equals
                if (_user._id.toString() !== session._id.toString())
                    return res.status(401).json({ success: false, message: 'Token không hợp lệ' });

                // User is enabled?
                if (!_user.status)
                    return res.status(403).json({ success: false, message: "This user has been blocked by the system" });

                // Verify Roles
                if (requiredRoles)
                    if (!has(requiredRoles, _user.roles))
                        return res.status(403).json({ success: false, message: "You don't have permission to access / on this server" });
                // Success
                req.user = Object.assign({ session }, _user._doc);
                return next();
            }
            catch {
                return res.status(401).json({ success: false, message: 'Token không hợp lệ' });
            }
        } else {
            return res.status(403).json({ success: false, message: 'Token không hợp lệ' });
        }
    }
}