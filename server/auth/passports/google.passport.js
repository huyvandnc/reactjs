
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import User from '../../api/models/user.model';
import config from '../../config';

passport.use(new GoogleStrategy({
    clientID: config.oAuth.google.clientID,
    clientSecret: config.oAuth.google.clientSecret,
    callbackURL: config.oAuth.google.callbackURL,
    passReqToCallback   : true
}, (accessToken, refreshToken, profile, done) => {
    let social = profile;
    social.photo = profile._json.picture;
    User.loginBySocial('google', social)
        .then(user => done(null, user))
        .catch(err => done(err));
}));