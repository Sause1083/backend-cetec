const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let fecha = new Date(Date.now());

var alumnoSchema = new mongoose.Schema({
    numero_credencial: {
        type: String,
        required: true,
        unique: true
    },
    nombre:{
        type: String,
        required: false
    },
    apellido_paterno:{
        type: String,
        required: false
    },

    apellido_materno:{
        type: String,
        required: false
    },
    
    fecha_registro:{
        type: String,
        required:false,
        default: fecha.getDate() + '/' + (fecha.getUTCMonth()+1) + '/' + fecha.getFullYear()
    },
    especialidad:{
        type:String,
        required:true
    },
    grupo:{
        type:String,
        required:true
    }

    
    
});


mongoose.model('Alumno', alumnoSchema);