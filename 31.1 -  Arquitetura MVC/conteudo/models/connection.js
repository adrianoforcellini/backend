const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'adrianoforcellini',
  password: 'sqlAdri2021!#',
  database: 'mvc_example'
});

module.exports = connection;
