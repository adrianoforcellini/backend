const net = require('net');

const server = net.createServer((conn) => {
  console.log('Cliente Conectado')
  
  conn.on('end', () => {
    console.log('Cliente desconectado');
  });

  conn.on('data', (data) => {
    console.log(`O cliente disse: ${data}`);
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

