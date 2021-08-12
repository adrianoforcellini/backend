const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nodeMySQL',
  password: 'nodeMySQL',
  database: 'databasename'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});