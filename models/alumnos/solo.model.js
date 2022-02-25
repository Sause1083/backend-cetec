const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var soloAlumnoSchema = new mongoose.Schema({
    numero_credencial:{
        type:String,
        required:true
    }
});

mongoose.model('Alumno', alumnoSchema);