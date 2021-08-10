const net = require('net');

const data = {
  id: 4,
  message: 'Oooriiiuuugeeeeeeennnn!!!'
}

const strData = JSON.stringify(data);

const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
  client.write(strData);
});
