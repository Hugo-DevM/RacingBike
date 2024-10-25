const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

//Ruta de inicio
router.get('/', controller.index)
router.get('/ranking', controller.ranking)
router.get('/races', controller.races)
router.get('/sponsors', controller.sponsors)
router.get('/login', controller.login)
router.get('/register', controller.register)

//Consultas
const crud = require('../controllers/crud');
router.post('/userRegister', crud.userRegister);
router.post('/userProfiles', crud.userProfiles);

module.exports = router;
