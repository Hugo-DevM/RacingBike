const { escapeXML } = require('ejs');
const conexion = require('../database/dbmysql');


//Create User
exports.userRegister = (req, res)=>{
    //DataUser For Create Account
    const full_name = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password
    //Sentence Insert Data
    var sql = "INSERT INTO Users (full_name, email, password, user_type, registration_date) VALUES (?,?,?,?, NOW())";
    const values = [full_name, email, password, 'user'];
    //Conexion For Sentences
    conexion.query(sql, values, (err, result)=>{
        if (err) {
            console.log(err);
          } else {
            console.log(result);
            res.redirect('/register');
          }
    });
}