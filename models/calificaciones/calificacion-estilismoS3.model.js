const mongoose = require('mongoose');

let calificacionEstilismoS3 = new mongoose.Schema({
    numero_credencial:{
        required:true,
        type:String,
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
    /* =========================== */
    /*       U N I D A D  1       */
    /* ========================= */
    maquillaje_artistico_S3_1:{
        type:String,
        required:false,
        default:'NA'
    },
    peinado3_S3_1:{
        type:String,
        required:false,
        default:'NA'
    },
    automaquillaje_S3_1:{
        type:String,
        required:false,
        default:'NA'
    },
    desarrollo_S3_1:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen_S3_1:{
        type:String,
        required:false,
        default:'NA'
    },
    brigadas_S3_1:{
        type:String,
        required:false,
        default:'NA'
    },
    /* ================== */
    /*   U N I D A D 2   */
    /* ================ */
    peinado3_S3_2:{
        type:String,
        required:false,
        default:'NA'
    },

    trensados_S3_2:{
        type:String,
        required:false,
        default:'NA'
    },
    automaquillaje_S3_2:{
        type:String,
        required:false,
        default:'NA'
    } ,
    dibujo_diseño2_S3_2:{
        type:String,
        required:false,
        default:'NA'
    },
    tratamientos_faciales_quimicos_naturales_S3_2:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen_S3_2:{
        type:String,
        required:false,
        default:'NA'
    },
    brigadas_S3_2:{
        type:String,
        required:false,
        default:'NA'
    },
     /* ================= */
    /*   U N I D A D 3   */
    /* ================ */
    brushing_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    planchado_expres_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    peinado3_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    automaquillaje_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    diseño_cejas_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    corte_cabello3_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    colorimetria2_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    tratamientos_faciales_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    cosmetologia1_S3_3:{
        type:String,
        required:false,
        default:'NA'
    },
    maquillaje_social_S3_3:{
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

module.exports = mongoose.model('calificacionEstilismoS3', calificacionEstilismoS3 );