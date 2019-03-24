const crc32 = require('./crc-32');

const head = '4e66';


// eslint-disable-next-line require-jsdoc
function encrypt(command, data) {
  return head + _prefix4hex(data.length.toString(16)) +
        command + _str2hex(data) + _crc32(data);
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
 * str to hex crc value.
 * @param {string} data number.
 * @return {string} hex crc32 value
 */
function _crc32(data) {
  return crc32.str('00172103' + data).toString(16);
}


// eslint-disable-next-line require-jsdoc
function _str2hex(data) {
  const arr = [];
  for (let i = 0, l = data.length; i < l; i++) {
    const hex = Number(data.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  return arr.join('');
}

module.exports = {encrypt};
