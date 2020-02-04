import path from 'path';
export default {
    secret: '@#)@!(*^',
    server: { // Express
        ip: 'localhost',
        port: 5000,
    },
    log: true, // show logs
    // Roles: if a user has multiple roles, will take the time of the greater role
    roles: [
        {
            role: 'user',
            ttl: '7200 minutes',
        }, {
            role: 'admin',
            ttl: '5 days'
        }
    ],
    mongoose: {
        // uri: mongodb://username:password@host:port/database?options
        uri: 'mongodb://localhost/admin',
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        seed: {
        },
    },
    oAuth: { // oAuth
        local: {
            enabled: true
        },
        facebook: {
            enabled: false,
            clientID: '',
            clientSecret: '',
            callbackURL: '/auth/facebook/callback'
        },
        google: {
            enabled: false,
            clientID: '',
            clientSecret: '',
            callbackURL: '/auth/google/callback'
        }
    },
    // globals
    mode: process.env.NODE_ENV || 'development', // mode
    base: path.normalize(`${__dirname}/..`)
}