import dotenv from 'dotenv';
import express from 'express';
import config from './config';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

(async () => {
    await require('./libs/express').index(app);
    await require('./libs/mongoose').connect();
    await require('./auth/services/router.service').default(app);
    app.listen(config.server.port, config.server.ip, (err) => {
        if (err) {
            throw err;
        } else {
            console.log(`Server running on port: ${port}`);
        }
    });
})();
