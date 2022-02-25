const mongoose = require('mongoose');

var carrerasSchema = mongoose.Schema({
    ID_carrera:{
        type:String,
        required:true,
        unique:true
    },
    matricula_carrera:{
        type:String,
        required:true
    },
    nombre_carrera:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('carreras', carrerasSchema);