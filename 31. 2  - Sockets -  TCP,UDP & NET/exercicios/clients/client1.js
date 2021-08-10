const net = require('net');

const data = {
  id: 1,
  message: 'Bom dia Grupo'
}

const strData = JSON.stringify(data);

const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
  client.write(strData);
});
