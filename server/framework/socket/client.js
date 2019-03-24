/* eslint-disable valid-jsdoc */
const net = require('net');


/**
 * send messages.
 * @param {string} host host.
 * @param {string} port port.
 * @param {string} msg Message to send.
 * @param {Function} calllback callback when receive msg from server.
//  * @return {object} socket client.
 */
function client(host = 'localhost', port = 4096) {
  console.log(`connecting to ${host}:${port}`);
  const connection = net.createConnection({host, port}, () => {
    console.log('connected !');
  });
  connection.on('data', (data) => {
    console.log(`Client Receive: ${data.toString()}`);
    // calllback && calllback(data.toString());
    // client.destroy();
  });

  connection.on('end', () => {
    console.log('disconnected from server');
  });

  // client.write(msg, () => {
  //   console.log(`Client Sent: ${msg}`);
  // });
  return connection;
};


module.exports = client;
