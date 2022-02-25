const mongoose = require('mongoose');

let calificacionesIngles = new mongoose.Schema({
    numero_credencial:{
        type:String,
        required:true,
        unique:true
    },
    especialidad:{
        type: String,
        required: true
    },
    grupo:{
        type:String,
        required:true
    },
    interchanguefull_introA4ED:{
        type:String,
        required:false,
        default:'NA'
    },
    interchanguefull_introB4ED:{
        type:String,
        required:false,
        default:'NA'
    },
    interchanguefull_1A4ED:{
        type:String,
        required:false,
        default:'NA'
    },
    interchanguefull_1B4ED:{
        type:String,
        required:false,
        default:'NA'
    },
    interchanguefull_2A4ED:{
        type:String,
        required:false,
        default:'NA'
    },
    interchanguefull_2B4ED:{
        type:String,
        required:false,
        default:'NA'
    },
    interchanguefull_3A4ED:{
        type:String,
        required:false,
        default:'NA'
    },
    interchanguefull_3B4ED:{
        type:String,
        required:false,
        default:'NA'
    },
    interchanguefull_passages:{
        type:String,
        required:false,
        default:'NA'
    }
});

module.exports = mongoose.model('calificacionesIngles', calificacionesIngles );