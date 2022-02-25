const express = require('express');
const router = express.Router();

const carreras = require('./../controllers/carreras.controller');


router.get('/carreras', carreras.listarCarrera );
router.post('/carrera', carreras.registrarCarrera);

module.exports = router;