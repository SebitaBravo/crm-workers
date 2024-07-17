const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gestor_trabajadores',
  port: 8889,
});

module.exports = pool;