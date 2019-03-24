const socketClient = require('./client');
const client = socketClient();
client.on('data', (data) => {
  console.log(`Client Receive: ${data.toString()}`);
  //   calllback && calllback(data.toString());
  //   client.destroy();
});

// client.on('end', () => {
//   console.log('disconnected from server');
// });

// setInterval(() => {
//   const msg = 'running ...';
//   client.write(msg, () => {
//     console.log(`Client Sent: ${msg}`);
//   });
// }, 2000);
client.send('asd');
