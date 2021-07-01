const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./controllers/Author');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id',Author.findById);

app.post('/authors', Author.create);

app.listen(port, () => console.log('O Pai tá ON!!!'))