// eslint-disable-next-line require-jsdoc
function decrypt(data) {
  const hex = data.toString();// force conversion
  let str = '';
  for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
}

module.exports = {decrypt};

const b = decrypt('4e66000e21037b2274696d65223a31323133347d9efb02e7');
console.log(b);