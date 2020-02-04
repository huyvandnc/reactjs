// export const login = (req, res) => {
//     let user = req.user;
//     let token = user.createToken();
//     return res.status(200).json({user, token});
// }

import passport from 'passport';
import { initialize } from '../services/session.service';

// Callback passport
export function callback(req, res, next) {
    passport.authenticate('local', (err, user) => initialize(err, user, res))(req, res, next);
}