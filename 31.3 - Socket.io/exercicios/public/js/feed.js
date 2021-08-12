const socket = window.io();

document.querySelector('#likeIcon').addEventListener('click', () => {
  socket.emit('likePost');
});

socket.on('updateLikes', (countLikes) => {
  document.querySelector('#currentLikes').innerHTML = countLikes;
});

document.querySelector('#starIcon').addEventListener('click', () => {
  console.log('starclick')
  const currentStarsElement = document.querySelector('#currentStars');
  let currentStars = parseInt(currentStarsElement.innerHTML);
  
  currentStarsElement.innerHTML = currentStars + 1;

  socket.emit('starPost');
});

socket.on('updateStars', (countStars) => {
  document.querySelector('#currentStars').innerHTML = countStars;
});