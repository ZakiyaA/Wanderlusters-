// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 3000;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// const registerRouter = require("./routes/register");
// const loginRouter = require("./routes/login");
// const userRouter = require("./routes/user");

// app.use('/register', registerRouter(db));
// app.use('/login', loginRouter(db));
// app.use('/user', userRouter(db));

module.exports = app;