const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gestor_trabajadores',
  port: 8889,
});

connection.connect((err) => {
    if(err) {
        console.error('Error conexion con la db', err.stack);
        return;
    }
    console.log('Conexion con db');
});

module.exports = connection;