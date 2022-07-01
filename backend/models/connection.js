const mysql = require('mysql2/promise');
require('dotenv').config(); // não se esqueça de configurar suas variáveis de ambiente aqui na configuração

const connection = mysql.createPool({
  // verificar o motivo de não funcionameto do dotenv
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: '123456',
  // database: process.env.MYSQL_DATABASE || 'Ebytr',
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: '123456',
  database: 'Ebytr',
});

module.exports = connection;