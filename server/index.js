import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';

import routes from './routes';
import apiRoutes from './modules';

dotenv.config();
const app = express();
const router = express.Router();

const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost/admin";

try {
    mongoose.Promise = global.Promise;
    mongoose.set('useCreateIndex', true);
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} catch (error) {
    mongoose.createConnection(mongoUrl);
}
mongoose
    .connection
    .once('open', () => console.log('MongoDB Running'))
    .on('error', e => {
        throw e;
    });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

apiRoutes(app);
routes(router);
app.use('/api', router);

app.listen(port, err => {
    if (err) {
        throw err;
    } else {
        console.log(`Server running on port: ${port}`);
    }
});
