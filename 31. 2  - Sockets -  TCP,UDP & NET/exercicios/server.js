const net = require('net');

const server = net.createServer((conn) => {
  console.log('Cliente Conectado')
  
  conn.on('end', () => {
    console.log('Cliente desconectado');
  });

  conn.on('data', (strData) => {
    const data = JSON.parse(strData)
    console.log(`O cliente ${data.id} disse: ${data.message}`);
  });

  conn.write('Mensagem do servidor!\r\n');
  conn.pipe(conn);
});

server.getConnections((err, count) => { 
  console.log(`${count} clients connected to server` )
});
//  dosn't work. 

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});

