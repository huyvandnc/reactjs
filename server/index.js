require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const middleware = require('./middleware');
const routes = require('./routes');
const app = express();
const router = express.Router();
const port = 5000;

const url = process.env.MONGODB_URI || "mongodb://localhost/admin"
try {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Db connected successfully");
} catch (error) {
    console.log("Error connecting db");
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

routes(router);
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
