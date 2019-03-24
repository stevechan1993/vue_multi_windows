const net = require('net');


/**
 * send messages.
 * @param {string} host host.
 * @param {string} port port.
 * @param {string} msg Message to send.
 * @param {Function} calllback callback when receive msg from server.
//  * @return {object} socket client.
 */
module.exports = function(host = 'localhost', port = 4096, msg, calllback) {
  console.log(`connecting to ${host}:${port}`);
  const client = net.createConnection({host, port}, () => {
    console.log('connected !');
  });

  client.on('data', (data) => {
    console.log(`Client Receive: ${data.toString()}`);
    calllback && calllback(data.toString());
    client.destroy();
  });

  client.on('end', () => {
    console.log('disconnected from server');
  });

  client.write(msg, () => {
    console.log(`Client Sent: ${msg}`);
  });
};
