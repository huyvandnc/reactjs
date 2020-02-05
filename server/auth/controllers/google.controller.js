import passport from 'passport';
import { initialize } from '../services/session.service';

// Init passport
export function index(req, res, next) {
  passport.authenticate('google', { scope: ['email', 'profile', 'openid'] })(req, res, next);
}

// Callback passport
export function callback(req, res, next) {
  passport.authenticate('google', (err, user) => initialize(err, user, res))(req, res, next);
}

export function connect(req, res, next) {
}

export function unlink(req, res, next) {
}