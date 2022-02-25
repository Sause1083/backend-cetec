const mongoose = require('mongoose');

let calificacionEstilismoS2 = new mongoose.Schema({
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
    /* ============= */
    /*   UNIDAD 1   */
    /* ============ */
    peinado_S2:{
        type:String,
        required:false,
        default:'NA'
    },
    automaquillaje_S2:{
        type:String,
        required:false,
        default:'NA'
    },
    permacologia_S2:{
        type:String,
        required:false,
        default:'NA'
    },
    sistemaSPA:{
        type:String,
        required:false,
        default:'NA'
    },
    colorimetria_1:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen_S2:{
        type:String,
        required:false,
        default:'NA'
    },
    brigada_s2:{
        type:String,
        required:false,
        default:'NA'
    },
    /* ================ */
    /*  U N I D A D  2 */
    /* ============== */ 
    desarrollo_humano_S2:{
        type:String,
        required:false,
        default:'NA'
    },
    peinado_S2_2:{
        type:String,
        required:false,
        default:'NA'
    },
    automaquillaje_S2_2:{
        type:String,
        required:false,
        default:'NA'
    },
    cejas_pestañas_S2_2:{
        type:String,
        required:false,
        default:'NA'
    },
    permacologia_1:{
        type:String,
        required:false,
        default:'NA'
    },
    permacologia_S2_2:{
        type:String,
        required:false,
        default:'NA'
    },
    uñas_acrilicas_S2:{
        type:String,
        required:false,
        default:'NA'
    },
    dibujo_diseño1_S2:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen_S2_2:{
        type:String,
        required:false,
        default:'NA'
    },
    brigadas_s2_2:{
        type:String,
        required:false,
        default:'NA'
    },
    /* ================= */
    /*   U N I D A D 3  */
    /* =============== */

    introduccion_faciales_maquillaje_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    brushing_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    planchado_expres_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    peinado2_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    trensado_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    automaquillaje_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    diseño_ceja_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    tratamientos_capilares_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    corte_cabello2_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    sistemaSPA_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    colorimetria1_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    quimica_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },       
    imagen_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    brigadas_S2_3:{
        type:String,
        required:false,
        default:'NA'
    },
    
});

module.exports = mongoose.model('calificacionEstilismoS2', calificacionEstilismoS2 );