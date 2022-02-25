const mongoose = require('mongoose');

let CrearGrupoAdmin = mongoose.Schema({
    ID_grupo:{
        type:String,
        required:true
    },
    Especialidad:{
        type:String,
        required:true
    },
    Docente_cargo:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('grupos', CrearGrupoAdmin);