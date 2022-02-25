const mongoose = require('mongoose');

let f = new Date();
let dia = f.getDate();
let mes = f.getUTCMonth() + 1;
let anio = f.getUTCFullYear();


let administradorUserSchema = mongoose.Schema({
    credencial: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        requiered: true
    },

    nombre:{
        type:String,
        required: false
    },
    apellidos:{
        type:String,
        required: false
    },
    
    fecha_registro: {
        type: String,
        required:false,
        default: ''+ dia + '/' + mes + '/' + anio 

    }
});

module.exports = mongoose.model('usuariosAdmin', administradorUserSchema );