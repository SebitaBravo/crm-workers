const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gestor_trabajadores',
  port: 8889,
});

module.exports = connection;