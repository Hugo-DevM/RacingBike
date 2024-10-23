const express = require('express');
const app = express();
// const mysql = require('mysql');
// const ejs = require('ejs');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./src/routes/router'));
app.use(express.static(path.join(__dirname, 'components')));

//Puerto de la pagina en localhost
app.listen(3000, ()=>{
    console.log("Server corriendo en http://localhost:3000");
});