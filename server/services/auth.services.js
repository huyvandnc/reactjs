import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { User } from '../modules/users/user.model';
import config from '../config';

const localOpts = { usernameField: 'email', };
const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        const userClone = await User.findOne({ email }).select('-password');
        if (user && user.validPassword(password)) {
            return done(null, { success: true, message: `Thông tin của ${user.fullName}`, user: userClone });
        }
        return done(null, { success: false, message: 'Người dùng không tồn tại!' });
    } catch (e) {
        return done(e, false);
    }
});

const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
    secretOrKey: config.secret,
};

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
    try {
        //If the token has expiration, raise unauthorized
        // var expirationDate = new Date(payload.exp * 1000);
        // if (expirationDate < new Date()) {
        //     return done(null, false);
        // }
        const user = await User.findById(payload._id).select('-password');
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (e) {
        return done(e, false);
    }
});

passport.use(localStrategy);
passport.use(jwtStrategy);
export const authLocal = passport.authenticate('local', { session: false });
export const authJwt = passport.authenticate('jwt', { session: false });