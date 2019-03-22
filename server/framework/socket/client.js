const net = require('net');

const host = 'localhost';
const port = 4096;

/**
 * send messages.
 * @param {String} msg Message to send.
 */
function send(msg) {
  const client = net.createConnection({host, port}, () => {
    console.log('connected to server!');
  });

  client.on('data', (data) => {
    console.log(`Client Receive: ${data.toString()}`);
    client.destroy();
  });

  client.on('end', () => {
    console.log('disconnected from server');
  });

  client.write(`${msg}\r\n`, () => {
    console.log(`Client Sent: ${msg}`);
  });
}


send('hahaha');
