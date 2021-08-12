module.exports = (io) => io.on('connection', (socket) => {
  let currentLikes = 0;

  socket.on('like', () => {
    currentLikes += 1;

    io.emit('updateLikes', currentLikes);
  })
});