require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const { PORT } = process.env;
const controllers = require('./controllers');
const middlewares = require('./middlewares');
const fileExists = require('./service');

const storage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads') },
  filename: (req, file, callback) => { callback(null, `${Date.now()}-${file.originalname}`) }
})
const upload = multer({ storage });

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    return cb(null, false);
  }
  if (fileExists(file.originalname)) {
    //Colocar uma flag de erro na requisição
    req.fileDuplicated = true;
    //Rejeitar o arquivo
    return cb(null, false);
  }
  cb(null, true);
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.use(express.static(`${__dirname}/uploads`));

app.use(middlewares.error);

app.post('/upload', upload.single('file'), controllers.upload);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
