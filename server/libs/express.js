import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';
import morgan from 'morgan';
import config from '../config';

export function index(app) {
    return new Promise((resolve, reject) => {
        app.use(bodyParser.json({ limit: '5mb' }));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cookieParser());
        app.use(compression());
        app.use(helmet());
        app.use(cors({ origin: true, credentials: true }));

        // passport.serializeUser((user, done) => {
        //     done(null, user);
        // });
        // passport.deserializeUser((user, done) => {
        //     done(null, user);
        // });

        app.use(passport.initialize());
        app.use(passport.session());

        if (config.log)
            app.use(morgan('dev'));

        resolve();
    })
};