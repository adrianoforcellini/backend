const net = require('net');

const data = {
  id: 2,
  message: 'Vamos que vamos guerreiros, vamos que vamos!!!'
}

const strData = JSON.stringify(data);

const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
  client.write(strData);
});
