const express = require('express');
const router = express.Router();
const {LoginUsers} = require('./user');

/* Login page */
router.get('', function (req, res, next) {
  let hasUser = false;

  if (hasUser) {
    res.status(200).send({ code: 200, user: LoginUsers[0], msg: '请求成功'});
  } else {
    res.status(200).send({ code: 500, msg: '账号或密码错误'});
  }
});

module.exports = router;