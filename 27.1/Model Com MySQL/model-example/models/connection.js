const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'desafioSmarkio21',
    password: 'desafioSmarkio21!$',
    database: 'smarkio'});

module.exports = connection;

//  if you need, look that:
//  https://codeforgeek.com/nodejs-mysql-tutorial/

// CREATE USER 'desafioSmarkio21'@'localhost' IDENTIFIED BY 'desafioSmarkio21!$';