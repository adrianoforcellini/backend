const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello Fucking World!'); // 4
}