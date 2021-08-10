
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'nodeMySQL',
    password: '112@@3nodeMySQL23##41123',
    database: 'model_example'});

module.exports = connection;