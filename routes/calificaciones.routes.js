/* =============================== */
/* IMPORTAMOS VARIABLES GENERALES */
/* ============================= */
const express = require('express');
const router = express.Router();

/* ===================================== */
/* IMPORTAMOS EL ARCHIVO DE CONTROLADOR */
/* =================================== */
const calificaciones_computo = require('./../controllers/calificacion-computacion.controller');
const calificaciones_ingles = require('./../controllers/calificacion-ingles.controller');

const calificaciones_estilismoS1 = require('./../controllers/calificacion-estilismoS1.controller');
const calificaciones_estilismoS2 = require('./../controllers/calificacion-estilismoS2.controller');
const calificaciones_estilismoS3 = require('./../controllers/calificacion-estilismoS3.controller');
const calificaciones_estilismoS4 = require('./../controllers/calificacion-estilismoS4.controller');

/* =============================== */
/* RUTAS PARA OPERACIONES COMPUTO */
/* ============================= */
router.post('/registrar-computo', calificaciones_computo.registrarCalificación );
router.post('/traer-calificacionesComputo', calificaciones_computo.UnDato);
router.put('/editar-calificacionesComputo/:id', calificaciones_computo.editarCalificacion);
router.delete('/eliminar-calificacionesComputo/:id', calificaciones_computo.eliminarCalificacionAlumno);

/* =============================== */
/* RUTAS PARA OPERACIONES Ingles */
/* ============================= */
router.post('/registrar-ingles',  calificaciones_ingles.registrarCalificacionIngles);
router.post('/traer-calificacionIngles', calificaciones_ingles.listarCalificacion);
router.put('/editar-ingles/:id', calificaciones_ingles.editarCalificacion );
router.delete('/eliminar-ingles/:id', calificaciones_ingles.eliminar);

/* ================================ */
/* RUTAS PARA OPERACIONES ESTILISMO */
/* ================================ */
/* semestre 1 */
router.post('/registrar-estilismoS1', calificaciones_estilismoS1.registrarCalificacionEsteticaS1);
router.post('/traer-calificacionS1', calificaciones_estilismoS1.traerCalificacion);
router.put('/editar-estilismoS1/:id', calificaciones_estilismoS1.actualizarCalificacionEsteticaS1);
router.delete('/eliminar-estilismoS1/:id', calificaciones_estilismoS1.eliminarCalificacion);

/* semestre 2 */
router.post('/registrar-estilismoS2', calificaciones_estilismoS2.registrarCalificacionesS2);
router.post('/traer-calificacionS2',  calificaciones_estilismoS2.traerCalificacion);
router.put('/editar-estilismoS2/:id', calificaciones_estilismoS2.actualizarCalificacionesEstilismoS2);
router.delete('/eliminar-estilismoS2/:id', calificaciones_estilismoS2.eliminarCalificacion);

/* semestre 3 */
router.post( '/registrar-estilismoS3', calificaciones_estilismoS3.registrarCalificacion );
router.post('/traer-calificacionS3', calificaciones_estilismoS3.traerCalificacion);
router.put('/editar-estilismoS3/:id', calificaciones_estilismoS3.actualizarCalificaciones);
router.delete('/eliminar-estilismoS3/:id', calificaciones_estilismoS3.eliminarcalificacion);

/* semestre 4 */
router.post('/registrar-estilismoS4', calificaciones_estilismoS4.registrarCalificacion);
router.post('/traer-calificacionS4', calificaciones_estilismoS4.traerCalificacion);
router.put('/editar-calificacionS4/:id', calificaciones_estilismoS4.actualizarCalificaciones);
router.delete('/eliminar-estilismoS4/:id', calificaciones_estilismoS4.eliminarCalificacion);

module.exports = router;