const express = require('express');
const router = express.Router();

const operacionesDocentes = require('./../controllers/userDocente.controller');

router.post('/registrar-docente', operacionesDocentes.registrar);
router.post('/login-docente', operacionesDocentes.login);
/* Listar especialidades */
router.post('/buscar-docente', operacionesDocentes.listarTI);
router.post('/traer-docente', operacionesDocentes.listarUno);
router.get('/listar-docentes', operacionesDocentes.listarDocentes)

//Editar docente
router.get('/docente/:id', operacionesDocentes.listarDocentesID);
router.put('/editar-docente/:id', operacionesDocentes.editarDocente );
router.delete('/eliminar-docente/:id', operacionesDocentes.eliminarDocente);

module.exports = router;