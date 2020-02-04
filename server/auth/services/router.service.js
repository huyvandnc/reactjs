import fs from "fs";
import config from '../../config';

// Passport's
if ("local" in config.oAuth && config.oAuth.local.enabled)
    require('../passports/local.passport');

if ("facebook" in config.oAuth && config.oAuth.facebook.enabled)
    require('../passports/facebook.passport');

if ("google" in config.oAuth && config.oAuth.google.enabled)
    require('../passports/google.passport');

export default async(app) => {
    fs.readdirSync(`${config.base}/api/routers`).forEach(child => {
        app.use('/api/v1', require(`${config.base}/api/routers/${child}`).default());
    });
    fs.readdirSync(`${config.base}/auth/routers`).forEach(child => {
        app.use('/api/v1', require(`${config.base}/auth/routers/${child}`).default());
    });
}