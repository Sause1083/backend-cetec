const mongoose = require('mongoose');

let calificacionEstilismoS4 = new mongoose.Schema({
    numero_credencial:{
        required:true,
        type:String,
        unique:true
    },
    especialidad:{
        type: String,
        required: true
    },grupo:{
        type:String,
        required:true
    },
    /* =========================== */
    /*       U N I D A D  1       */
    /* ========================= */
    
    peinado4_S4_1:{
        type:String,
        required:false,
        default:'NA'
    },
    automaquillaje_S4_1:{
        type:String,
        required:false,
        default:'NA'
    },
    administracion_S4_1:{
        type:String,
        required:false,
        default:'NA'
    },
    desarrollo_humano_S4_1:{
        type:String,
        required:false,
        default:'NA'
    },
    cosmetologia2_S4_1:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen_S4_1:{
        type:String,
        required:false,
        default:'NA'
    },
    brigadas_S4_1:{
        type:String,
        required:false,
        default:'NA'
    },
    /* ================== */
    /*   U N I D A D 2   */
    /* ================ */
    automaquillaje_4_2:{
        type:String,
        required:false,
        default:'NA'
    },
    colorimetria_S4_2:{
        type:String,
        required:false,
        default:'NA'
    },
    extensiones_cabello_S4_2:{
        type:String,
        required:false,
        default:'NA'
    },
    diseño_imagen_computadora_S4_2:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen_S4_2:{
        type:String,
        required:false,
        default:'NA'
    },
    brigadas_S4_2:{
        type:String,
        required:false,
        default:'NA'
    },
     /* ================= */
    /*   U N I D A D 3   */
    /* ================ */
    automaquillaje_S4_3:{
        type:String,
        required:false,
        default:'NA'
    },
    corte_cabello_S4_3:{
        type:String,
        required:false,
        default:'NA'
    },
    peinado4_S4_3:{
        type:String,
        required:false,
        default:'NA'
    },
    colorimetria4_S4_3:{
        type:String,
        required:false,
        default:'NA'
    },
    tratamientos_faciales_S4_3:{
        type:String,
        required:false,
        default:'NA'
    },
    maquillaje_social_S4_3:{
        type:String,
        required:false,
        default:'NA'
    },
    depilacion_corporal_S4_3:{
        type:String,
        required:false,
        default:'NA'
    },
    masajes_S4_3:{
        type:String,
        required:false,
        default:'NA'
    },
    diseño_imagen_computadora_S4_3:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    brigadas_S3_3:{
        type:String,
        required:false,
        default:'NA'
    }

});

module.exports = mongoose.model('calificacionEstilismoS4', calificacionEstilismoS4 );