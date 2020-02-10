
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import User from '../../api/models/user.model';
import config from '../../config';

passport.use(new GoogleStrategy({
    clientID: config.oAuth.google.clientID,
    clientSecret: config.oAuth.google.clientSecret,
    callbackURL: config.oAuth.google.callbackURL,
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
    User.findOne({ 'social.id': profile.id }, function (err, user) {
        if (err) {
            done(err);
        }
        if (!err && user !== null) {
            user.provider = 'google';
            user.social.info = profile._json;
        } else {
            user = new User({
                provider: 'google',
                name: profile.displayName,
                photo: profile._json.picture,
                email: profile._json.email,
                'social.id': profile.id,
                'social.info': profile._json
            });
        }
        user.lastLogin = Date.now();
        user.save(function (err) {
            if (err) {
                console.log(err);
                done(err);
            } else {
                done(null, user);
            }
        });
    });
    //done(null, user);
    // let social = profile;
    // social.photo = profile._json.picture;
    // User.loginBySocial('google', social)
    //     .then(user => done(null, user))
    //     .catch(err => done(err));
}));