const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
//const socioController = require('../controllers/socio.controller');

const jwtHelper = require('../config/jwtHelper');

// Rutas para el usuario del sistema (Admin)
//Al acceder a /api/register se usa la funcion registrar usuario
router.get('/', userController.hola)
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/user-profile', jwtHelper.verifyJwtToken, userController.userProfile);
router.get('/listar-user', userController.listarUser);

module.exports = router;
