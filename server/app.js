const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const inexbotRouter = require('./api/inexbot');
const loginRouter = require('./api/login');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.
//
// join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  // res.send('please add command to /inexbot');
  next();
});

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/inexbot', inexbotRouter);
app.use('/admin', loginRouter);

module.exports = app;
