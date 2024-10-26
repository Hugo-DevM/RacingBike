const mysql = require('mysql');
require('dotenv').config();

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

conexion.connect((error)=>{
    if (error) {
        throw error;
    } else {
        console.log("Conexion Exitosa");
    }
});

module.exports = conexion;