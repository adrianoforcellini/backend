const express = require('express');
const userController = require('./controllers/UsersController');
const productsController = require('./controllers/ProductsController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.listen(PORT, () => console.log('O Pai tá ON!!!'))

app.get('/users', userController.listAll);

app.get('/products', productsController.listAll);
