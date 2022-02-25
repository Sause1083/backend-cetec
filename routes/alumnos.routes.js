const express = require('express');
const router = express.Router();

const alumnoController = require("./../controllers/alumnos.controller");
const jwtHelper = require('../config/jwtHelper');

router.post('/registrar-alumno', alumnoController.registrarAlumno);
router.get('/listar-alumno', alumnoController.listarAlumnos);
router.get('/user-profile', alumnoController.userProfile);
router.get('/alumnos-count', alumnoController.TotalAlumnos );
router.post('/solo', alumnoController.solo);
router.post('/contar-alumnos', alumnoController.contarAlumnos);
router.post('/alumno-grupo',alumnoController.alumnoGrupo);

router.get('/listar-alumnoID/:id', alumnoController.listarAlumnoID);
router.put('/editar-alumnos/:id', alumnoController.editarAlumnoID);
router.delete('/eliminar-alumno/:id', alumnoController.eliminarAlumno);

module.exports = router;