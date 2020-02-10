import path from 'path';

export default {
    secret: process.env.SECRET || '@#)@!(*^',
    server: {
        ip: process.env.IP || 'localhost',
        port: process.env.PORT || 5000,
    },
    log: process.env.LOG || true,
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
        uri: process.env.MONGODB_URL || 'mongodb://localhost/admin',
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        seed: {
        },
    },
    email: {
        from: process.env.EMAIL_FROM || 'huyvan.dnc@gmail.com',
        server: process.env.EMAIL_SERVER || 'smtp.gmail.com',
        port: process.env.EMAIL_PORT || 465,
        secure: process.env.EMAIL_SECURE || true,
    },
    oAuth: {
        local: {
            enabled: process.env.LOCAL_ENABLED || true
        },
        facebook: {
            enabled: process.env.FACEBOOK_ENABLED || false,
            clientID: process.env.FACEBOOK_ID || '',
            clientSecret: process.env.FACEBOOK_SECRET || '',
            callbackURL: process.env.FACEBOOK_CALLBACK || '/api/v1/auth/facebook/callback'
        },
        google: {
            enabled: process.env.GOOGLE_ENABLED || true,
            clientID: process.env.GOOGLE_ID || '1070591685553-0gfd9vqb2a30p32qn8fd6jbtvtcranaq.apps.googleusercontent.com',
            clientSecret: process.env.GOOGLE_SECRET || 'zB2gthK-kuRKQRkAN73PvINF',
            callbackURL: process.env.GOOGLE_CALLBACK || '/api/v1/auth/google/callback'
        }
    },
    mode: process.env.NODE_ENV || 'development',
    base: path.normalize(`${__dirname}/..`)
}