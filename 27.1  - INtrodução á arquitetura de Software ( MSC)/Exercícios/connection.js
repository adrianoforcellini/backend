const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'nodeMySQL',
    password: 'nodeMySQL',
    database: 'model_example'});

module.exports = connection;
