const express = require('express');
const { urlencoded } = require('body-parser');

const authorController = require('./controllers/authorController');

const app = express();
app.use(urlencoded({ extended: true }));
/* Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type 
header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic 
inflation of gzip and deflate encodings;
extended
The extended option allows to choose between parsing the URL-encoded data with the querystring library 
(when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be 
encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. 
Defaults to true, but using the default has been deprecated. 
*/


app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/authors', authorController.listAuthors);
app.post('/authors', authorController.createAuthor);
app.get('/authors/new', authorController.newAuthor);
app.get('/authors/:id', authorController.showAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
