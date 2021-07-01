
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// const Author = require('../models/Author');
// Importamos o modelo `Book`
const Book = require('./models/Book');

app.get('/books', async (req, res) => {
    // Obtém o ID do autor da query string
    const { q } = req.query;
    const books = (q)
    // Caso o ID tenha sido informado, busca livros daquele autor
    ? await Book.getByAuthorId(q)
    // Caso o ID não tenha sido infomado, busca todos os livros
    : await Book.getAll();
    // Agora, com os resultados em mão, enviamos o status http e os resultados.
    res.status(200).json(books);
  });

  app.post('/books', async (req, res) => {
    // Extraímos title e author_id do corpo da requisição
    const { title, author_id } = req.body;
    // Caso o livro não seja válido
    if (!await Book.isValid(title, author_id)) {
      // Devolvemos o status 400 Bad Request, com a mensagem "Dados Inválidos"
      return res.status(400).json({ message: 'Dados inválidos' });
    }
    // Caso o livro seja válido, pedimos ao model para criá-lo no banco de dados.
    await Book.create(title, author_id);
    // Após criar o livro, devolvemos o status 201 Created, e uma mensasgem informando o sucesso
    // da operação
    res.status(201).json({ message: 'Livro criado com sucesso! '});
    });

   
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`O Pai tá ON!!!`);
});