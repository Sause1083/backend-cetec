var mongoose = require('mongoose');


let f = new Date();
let dia = f.getDate();
let mes = f.getUTCMonth() + 1;
let anio = f.getUTCFullYear();

var docenteUserSchema =  mongoose.Schema({
    credencial:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nombre:{
        type:String,
        required: true
    },
    apellido_paterno:{
        type:String,
        required: true
    },
    apellido_materno:{
        type: String,
        required: false
    },
    especialidad: {
        type: String,
        required: false
    },
    fecha_registro:{
        type: String,
        required:false,
        default: dia+'/'+mes+'/'+anio
    }
});

module.exports = mongoose.model('docenteusers', docenteUserSchema );
