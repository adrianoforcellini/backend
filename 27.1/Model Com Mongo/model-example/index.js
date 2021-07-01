const express = require('express');

const app = express();
const Author = require('./models/Author')
// const findById = require('./models/Author')

app.get('/authors', async (_req, res) => {
    try {
        const authors = await Author.getAll();
        res.status(200).json(authors);
    } catch (error) {
        return res.status(404).send(error);
    }
});

app.get('/authors/:id', async (req, res) => {
        const {id} = req.params;
        const author = await Author.findById();
        if (!author) return res.status(404).json({message: 'ID Not Found'});
        res.status(200).json(author);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`O Pai tá ON!!!`);
});