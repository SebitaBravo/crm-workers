import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gestor_trabajadores',
  port: 8889,
});

const SECRET_KEY = 'tu_clave_secreta_aqui';

export { pool, SECRET_KEY };