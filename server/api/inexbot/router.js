const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const {socketClient} = require('../../framework/socket');
const {encrypt, decrypt} = require('../../framework/tlv');

const host = '192.168.1.13';
const port = '6000';
// const host = 'localhost';
// const port = '4096';
const heartBeatCmd = '7266';
const client = new socketClient(host, port);
let heart;
const example = '4e66001721037b22726f626f74223a312c22737461747573223a307d3f6e5dbc';

/* GET inexbot page. */
router.get('/:cmd/:data', function(req, res, next) {
  const cmd = req.params.cmd;
  const data = req.params.data;
  const msg = encrypt(cmd, data);
  console.log(msg);
  client.send(msg);
  res.status(200)
      .send(`Express received: ${cmd}, ${data} >>> ${msg}`);
});

/* GET inexbot page. */
router.get('/heartbeat', function(req, res, next) {
  heartBeat(1000);
  res.status(200).send('heart beat now');
  // .send(`Express received: ${cmd}, ${data} >>> ${msg}`);
});

/* GET inexbot page. */
router.get('/example', function(req, res, next) {
  // heartBeat(1000);
  client.send(example);

  res.status(200).send('send example');
  // .send(`Express received: ${cmd}, ${data} >>> ${msg}`);
});


// eslint-disable-next-line require-jsdoc
function heartBeat(interval) {
  if (heart) clearInterval(heart);
  heart = setInterval(() => {
    const timestamp = new Date().getTime();
    // console.log(timestamp);
    const msg = encrypt(heartBeatCmd, `{"time":${timestamp}}`);
    // console.log(`heart beat cmd: ${msg}`);
    client.send(msg);
  }, interval);
}

module.exports = router;
