const express = require('express');
const jokeController = require ('./controller/jokeController.js')

const app = express();


app.get('/jokes', jokeController.getJoke );

const PORT_ACESS = 3,
  PORT = process.env.PORT || PORT_ACESS*1000,
  PORT_NAME = `${PORT_ACESS}K`


app.listen(PORT, () => {
  console.log(`O Pai tá ON!!! ( Lá na ${PORT_NAME}!!!)`);
});
