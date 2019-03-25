const crc32 = require('./crc-32');

const head = '4e66';


// eslint-disable-next-line require-jsdoc
function encrypt(command, data) {
  _length = _prefix4hex(data.length.toString(16));
  _bufferCode = _hex2buffer(_length + command + _ascii2hex(data));
  return head + _length + command + _ascii2hex(data) + _crc32(_bufferCode);
}

/**
 * add zero tofixed 0000.
 * @param {int} num number.
 * @return {string} 00xx.
 */
function _prefix4hex(num) {
  return (Array(4).join(0) + num).slice(-4);
}

/**
 * buffer to hex crc value.
 * @param {buffer} buffer
 * @return {string} hex crc32 value
 */
function _crc32(buffer) {
  return crc32.buf(buffer).toString(16);
}

// eslint-disable-next-line require-jsdoc
function _hex2buffer(data) {
  return new Buffer(data, 'hex');
}

// eslint-disable-next-line require-jsdoc
function _ascii2hex(data) {
  const arr = [];
  for (let i = 0, l = data.length; i < l; i++) {
    const hex = Number(data.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  return arr.join('');
}

module.exports = {encrypt};


// console.log(encrypt('2103', '{"robot":1,"status":0}'));
// const ex = '001721037b22726f626f74223a312c22737461747573223a307d0a';

// console.log(crc32.buf(new Buffer(ex, 'hex')).toString(16));
