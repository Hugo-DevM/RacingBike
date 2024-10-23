const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: "localhost",
    user: "Hugo",
    password: '123456',
    database: "racingbike",
});

conexion.connect((error)=>{
    if (error) {
        throw error;
    } else {
        console.log("Conexion Exitosa");
    }
});

module.exports = conexion;