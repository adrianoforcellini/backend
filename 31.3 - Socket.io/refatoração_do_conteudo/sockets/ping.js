module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('ola', 'Namastê, caro visitante. :)');
    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`);
      io.emit('pong', `Já chegou o Ping voooadoooorrr!!`);
    });
  });
};