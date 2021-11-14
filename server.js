const net = require('net');
const { setPrefix, cl } = require('./log');
setPrefix("Client");

const server = net.createServer(conn => {
  cl(`Connection: ${conn}`);

  conn.on('end', (client) => {
    cl(`Client disconnected: ${client}`);
  });

  conn.write("Welcome to the file server");
});

server.on('error', (err) => {
  cl(`Error: ${err}`);
});

server.listen(3000, (err) => {
  cl(`Server listenining: ${err}`);
});