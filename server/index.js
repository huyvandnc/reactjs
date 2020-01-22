require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let middleware = require('./middleware');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

let users = require("./routes/users");
let token = require("./routes/token");
let auth = require("./routes/auth");

app.use('/api/users', middleware.checkToken, users);
app.use('/api/token', middleware.checkToken, token);
app.use('/api/auth', auth);

app.listen(port, () => console.log(`Listening on port ${port}`));
