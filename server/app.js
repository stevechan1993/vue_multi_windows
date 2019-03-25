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

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','http://localhost:8080');
  res.header('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
  res.header('Access-Control-Allow-Headers','Content-Type,Accept');
  res.header('Access-Control-Allow-Credentials','true');
  if(req.method == 'OPTIONS'){
    res.end();
  }else{
    next();
  }
});

app.use('/inexbot', inexbotRouter);
app.use('/login', loginRouter);

module.exports = app;
