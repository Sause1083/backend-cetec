/* Declaramos las variables, para utilizar las rutas */
const express = require('express');
const router = express.Router();

/* Declaramos las variables traendo las funciones del archivo controlador */
const operacionesAdmin = require('./../controllers/userAdministrador.controller');
const Admin = require('./../controllers/userAdministrador.controller');


/* Declaramos las rutas de las peticiones de la API */
router.post('/registrar-admin', operacionesAdmin.registrar );
router.post('/login-admin', operacionesAdmin.login );
router.post('/listar-admin', operacionesAdmin.listarUnAdmin);


module.exports = router;