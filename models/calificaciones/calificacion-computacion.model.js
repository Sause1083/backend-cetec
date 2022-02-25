const mongoose = require('mongoose');

let calificacionComputacion =  new mongoose.Schema({
    numero_credencial:{
        type: String,
        required: true
    },
    especialidad:{
        type: String,
        required: true
    },
    grupo:{
        type: String,
        required:true
    },
    windows10:{
        type:String,
        required:false,
        default:'NA'
    },
    word2016:{
        type:String,
        required:false,
        default:'NA'
    },
    internet:{
        type:String,
        required:false,
        default:'NA'
    },
    powerpoint2016:{
        type:String,
        required:false,
        default:'NA'
    },
    publisher2016:{
        type:String,
        required:false,
        default:'NA'
    },
    excel2016:{
        type:String,
        required:false,
        default:'NA'
    },
    adobe_acrobat9:{
        type:String,
        required:false,
        default:'NA'

    },
    corel_drawX5:{
        type:String,
        required:false,
        default:'NA'
    },
    adobephotoshop:{
        type:String,
        required:false,
        default:'NA'
    },
    adobe_illustrator:{
        type:String,
        required:false,
        default:'NA'
    },
    adobe_indesign:{
        type:String,
        required:false,
        default:'NA'
    },
    adobe_flash:{
        type:String,
        required:false,
        default:'NA'
    },
    adobe_fireworks:{
        type:String,
        required:false,
        default:'NA'
    },
    adobe_dreamweaver:{
        type:String,
        required:false,
        default:'NA'
    },
    access2016:{
        type:String,
        required:false,
        default:'NA'
    },
    visual_basic:{
        type:String,
        required:false,
        default:'NA'
    },
    html5:{
        type:String,
        required:false,
        default:'NA'
    }

});

module.exports = mongoose.model('calificacionesComputacion', calificacionComputacion );