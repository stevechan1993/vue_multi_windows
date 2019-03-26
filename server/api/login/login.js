const express = require('express');
const router = express.Router();
const {LoginUsers} = require('./user');

/* Login page */
router.get('/login', function (req, res, next) {
  let {username, password} = req.query;
  console.log(req.query.username);
  let hasUser = LoginUsers.some(u => {
    if (u.username === username && u.password === password) {
      user = JSON.parse(JSON.stringify(u));
      user.password = undefined;
      return true;
    }
  });
  if (hasUser) {
    res.send({ code: 200, msg: '请求成功', user });
  } else {
    res.send({ code: 500, msg: '账号或密码错误' });
  }
});

module.exports = router;
