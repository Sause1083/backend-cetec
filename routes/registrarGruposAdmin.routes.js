const express = require('express');
const router = express.Router();

const registrar = require('./../controllers/crearGrupos.controller');

router.get('/listar-grupos', registrar.listarGrupos);
router.post('/registrar-grupos',registrar.registrarGrupo);
router.post('/consulta-grupo', registrar.encontrarGrupo);
router.post('/grupos-docente', registrar.traerGrupoDocente);

router.get('/grupo/:id', registrar.TraerUnGrupo );
router.put('/editar-grupo/:id', registrar.editorGrupo);
router.delete('/eliminar-grupo/:id',registrar.eliminarGrupo);


module.exports = router;