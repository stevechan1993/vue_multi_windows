/* eslint-disable valid-jsdoc */
const net = require('net');
const {decrypt} = require('../tlv/decrypt')

/**
 * send messages.
 * @param {string} host host.
 * @param {string} port port.
 * @param {string} msg Message to send.
 * @param {Function} calllback callback when receive msg from server.
//  * @return {object} socket client.
 */
function client(host = 'localhost', port = 4096) {
  console.log(`connecting to ${host}:${port} ....`);
  this.connection = net.createConnection({host, port}, () => {
    console.log(`Connected success ${host}: ${port}`);
  });

  this.connection.on('data', (data) => {
    console.log(`Client Receive hex: ${data.toString('hex')}`);
    console.log(`Client Receive ascii: ${decrypt(data.toString('hex'))}`);
    // calllback && calllback(data.toString());
    // client.destroy();
  });

  this.connection.on('end', () => {
    console.log('Disconnected from contraller.');
  });

};

client.prototype.send = function(msg) {
  msg = _hex2buffer(msg)
  this.connection.write(msg, () => {
    console.log(`Client Sent: ${msg.toString('hex')}`);
  });
};

function _hex2buffer(data) {
  return new Buffer(data, 'hex')
}

module.exports = client;

// c = new client()
// c.send('4e66001721037b22726f626f74223a312c22737461747573223a307d3f6e5dbc')
// console.log('001721037b22726f626f74223a312c22737461747573223a307d0a'.toString('ascii'))