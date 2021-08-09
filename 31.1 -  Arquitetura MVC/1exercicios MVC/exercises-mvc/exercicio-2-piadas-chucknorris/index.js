const express = require('express');
const { urlencoded } = require('body-parser');
const categoriesController = require('./controller/categoriesControler')

const app = express();

app.use(urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => res.redirect('/categories'));
app.get('/categories', categoriesController.getCategories);
app.get('/jokes/:category', categoriesController.getCategoriesBySubject );
app.get('/jokes', categoriesController.getRandomJoke )

const PORT_ACESS = 3,
  PORT = PORT_ACESS * 1000,
  PORT_NAME = `${PORT_ACESS}K`


app.listen(PORT, () => {
  console.log(`O Pai tá ON!!! ( Lá na ${PORT_NAME}!!!)`);
});
