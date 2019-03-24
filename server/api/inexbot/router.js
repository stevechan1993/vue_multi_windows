const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const {socketClient} = require('../../framework/socket');
const {encrypt, decrypt} = require('../../framework/tlv');

const host = '132.196.1.13';
const port = '6000';

/* GET inexbot page. */
router.get('/:cmd/:data', function(req, res, next) {
  const cmd = req.params.cmd;
  const data = req.params.data;
  const msg = encrypt(cmd, data);
  console.log(msg);

  socketClient(host, port, msg, (params) => {
    console.log(params);
  });
  res.status(200)
      .send(`Express received: ${cmd}, ${data} >>> ${msg}`);
});


module.exports = router;
