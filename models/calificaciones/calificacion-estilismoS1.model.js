const mongoose = require('mongoose');

let calificacionEstilismoS1 = new mongoose.Schema({

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
    /* =========*/
    /* UNIDAD 1 */
    /* ======= */
    manicure:{
        type:String,
        required:false,
        default:'NA'
    },
    pedicure:{
        type:String,
        required:false,
        default:'NA'
    },
    historia_belleza:{
        type:String,
        required:false,
        default:'NA'
    },
    desarrollo_humano:{
        type:String,
        required:false,
        default:'NA'
    },
    one_shot:{
        type:String,
        required:false,
        default:'NA'
    },
    seguridad_higiene:{
        type:String,
        required:false,
        default:'NA'
    },
    anatomia:{
        type:String,
        required:false,
        default:'NA'
    },
    auto_maquillaje:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen:{
        type:String,
        required:false,
        default:'NA'
    },
    brigadas:{
        type:String,
        required:false,
        default:'NA'
    },
    /* =========*/
    /* UNIDAD 2 */
    /* ======= */
    peinado:{
        type:String,
        required:false,
        default:'NA'
    },
    manicure2:{
        type:String,
        required:false,
        default:'NA'
    },
    pedicure2:{
        type:String,
        required:false,
        default:'NA'
    },
    oneshot2:{
        type:String,
        required:false,
        default:'NA'
    },
    automaquillage2:{
        type:String,
        required:false,
        default:'NA'
    },
    diseño_cejas:{
        type:String,
        required:false,
        default:'NA'
    },
    cejas_pestañas:{
        type:String,
        required:false,
        default:'NA'
    },
    quimica1:{
        type:String,
        required:false,
        default:'NA'
    },
    dermatologia:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen2:{
        type:String,
        required:false,
        default:'NA'
    },
    brigada2:{
        type:String,
        required:false,
        default:'NA'
    },
    /* =========*/
    /* UNIDAD 3 */
    /* ======= */
    manicure3:{
        type:String,
        required:false,
        default:'NA'
    },
    pedicure3:{
        type:String,
        required:false,
        default:'NA'
    },
    brushing:{
        type:String,
        required:false,
        default:'NA'
    },
    planchado_expres:{
        type:String,
        required:false,
        default:'NA'
    },
    
    peinados3:{
        type:String,
        required:false,
        default:'NA'
    },
    
    trensados3:{
        type:String,
        required:false,
        default:'NA'
    },
    
    automaquillage3:{
        type:String,
        required:false,
        default:'NA'

    },
    
    diseño_ceja3:{
        type:String,
        required:false,
        default:'NA'
    },
    permacologia_1:{
        type:String,
        required:false,
        default:'NA'
    },
    tratamientos_capilares:{
        type:String,
        required:false,
        default:'NA'
    },
    corte_cabello:{
        type:String,
        required:false,
        default:'NA'
    },
    imagen3:{
        type:String,
        required:false,
        default:'NA'
    },
    brigadas3:{
        type:String,
        required:false,
        default:'NA'
    }
});

module.exports = mongoose.model('calificacionEstilismoS1', calificacionEstilismoS1 );