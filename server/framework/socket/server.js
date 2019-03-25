const net = require('net');

module.exports= f = function(port = 4096) {
  const server = net.createServer();

  // emitted when new client connects
  server.on('connection', (socket) => {
    /*    this property shows the number of characters currently buffered to be
      written. (Number of characters is approximately equal to the number
      of bytes to be written, but the buffer may contain strings, and the
      strings are lazily encoded, so the exact number of bytes is not known.)
      Users who experience large or growing bufferSize should attempt to
     "throttle" the data flows in their program with pause() and resume(). */

    console.log('Buffer size : ' + socket.bufferSize);

    console.log('------------------ remote client info ------------------');
    console.log(`REMOTE Socket is listening at : ${socket.remotePort}`);
    console.log(`REMOTE Socket ip              : ${socket.remoteAddress}`);
    console.log(`REMOTE Socket is IP4/IP6      : ${socket.remoteFamily}`);
    console.log('--------------------------------------------------------');

    socket.on('data', (data) => {
      console.log(`Server Revieved: ${data}`);
      // socket.write('hello, here is server');
      socket.write(new Buffer('4e66001721037b22726f626f74223a312c22737461747573223a307d3f6e5dbc', 'hex'));
    });
  });

  server.on('error', (err) => {
    throw err;
  });

  // emits when server is bound with server.listen
  server.on('listening', () => {
    console.log('Server is started!');
  });

  server.maxConnections = 10;

  // emitted when server closes ...not emitted until all connections closes.
  server.on('close', () => {
    console.log('Server closed !');
  });

  server.listen(port, () => {
    const address = server.address();
    const port = address.port;
    const family = address.family;
    const ipaddr = address.address;
    console.log(`Server is listening at: ${port}`);
    console.log(`Server ip             : ${ipaddr}`);
    console.log(`Server is IP4/IP6     : ${family}`);
  });
};

// f()