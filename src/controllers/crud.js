const { escapeXML } = require('ejs');
const conexion = require('../database/dbmysql');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const express = require('express');
const app = express();


app.use(session({
  secret: '12345678',
  resave: false,
  saveUninitialized: true
}));


//Create User
exports.userRegister = (req, res) => {
  //DataUser For Create Account
  const user_id = uuidv4();
  const full_name = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password
  //Sentence Insert Data
  var sqlUser = "INSERT INTO Users (id, full_name, email, password, user_type, registration_date) VALUES (?,?,?,?,?, NOW())";
  const valuesUser = [user_id, full_name, email, password, 'user'];
  //Conexion For Sentences
  conexion.query(sqlUser, valuesUser, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error al insertar el perfil");
    } else {
      console.log(`Usuario registrado con ID: ${user_id}`);
      res.redirect(`/register?user_id=${user_id}`);
    }
  });
}

//UserProfiles
exports.userProfiles = (req, res) => {
  const user_id = req.body.user_id;
  //USER_ID EXIST?
  if (!user_id) {
    console.error("user_id no está definido en la sesión");
    return res.status(400).send("user_id es requerido");
  }
  //DataUserProfiles
  const birth_date = req.body.birth_date;
  const age = req.body.age;
  const gender = req.body.gender;
  const team = req.body.team;
  const blood_type = req.body.blood_type;
  const phone = req.body.phone;
  const curp = req.body.curp;
  const city = req.body.city;
  const state = req.body.state;
  const category = req.body.category;
  //Sentence Insert data
  var sqlUserProfile = "INSERT INTO userprofiles (user_id, birth_date, age, gender, team, blood_type, phone, curp, city, state, category) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
  const valuesUserProfile = [user_id, birth_date, age, gender, team, blood_type, phone, curp, city, state, category];
  //Conexion For Sentences
  conexion.query(sqlUserProfile, valuesUserProfile, (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).send("Error al insertar el perfil");
    } else {
      res.redirect('/login');
    }
  });
}