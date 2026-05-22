const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
<<<<<<< HEAD
    port: process.env.DB_PORT
=======
    port: 3307
>>>>>>> ad6f0b5055634c92c96965f4874369017b4c5cb8
});

connection.connect((err) => {

    if (err) {
        console.log('Error BD:', err);
    } else {
        console.log('MySQL conectado');
    }

});

module.exports = connection;