const socketClient = require('./client');
const socketServer = require('./server');

module.exports = {socketClient, socketServer};


// msg = 'hello, here is client';

// socketClient(host = 'localhost', port = 4096, msg, (params) => {
//   console.log(params);
// });
