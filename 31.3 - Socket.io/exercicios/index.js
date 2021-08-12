const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  // cors: {
  //   origin: 'http://localhost:3000', // url aceita pelo cors
  //   methods: ['GET', 'POST'], // Métodos aceitos pela url
  // },
});


// require(`${__dirname}/sockets/feed`)(io);
require(`./sockets/feed`)(io);

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/css'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Pai tá on!!!');
});
