import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../modules/users/user.model';

const localOpts = {
    usernameField: 'username',
    passwordField: 'password',
};

const localStrategy = new LocalStrategy(localOpts, async (username, password, done) => {
    User.loginByLocal(username, password)
        .then(user => done(null, user))
        .catch(err => done(err));
});

passport.use(localStrategy);

export const authLocal = passport.authenticate('local', {
    session: false
});