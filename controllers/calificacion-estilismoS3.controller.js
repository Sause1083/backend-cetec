const calificacionesS3 = require('./../models/calificaciones/calificacion-estilismoS3.model');

module.exports.registrarCalificacion = function (req, res) {
    let modelo = new calificacionesS3(req.body);
    modelo.save(function (err, doc) {
        if (!err) {
            res.send(doc);
        } else {
            if (err.code == 11000) {
                res.status(422).send(["¡La calificacion de este alumno ya existe!"]);
            } else {
                return next(err);
            }
        }

    });
}

module.exports.traerCalificacion = async (req,res) => {
    let modelo = await calificacionesS3.find({numero_credencial:req.body.numero_credencial});
    if(!modelo){
        res.status(404).json(["No se encontro registro"]);
    }
    res.json(modelo);
}

module.exports.actualizarCalificaciones = async (req, res) => {
    try{

        const {
            numero_credencial,
            especialidad,
            grupo,
            maquillaje_artistico_S3_1,
            peinado3_S3_1,
            automaquillaje_S3_1,
            desarrollo_S3_1,
            imagen_S3_1,
            brigadas_S3_1,
            peinado3_S3_2,
            trensados_S3_2,
            automaquillaje_S3_2,
            dibujo_diseño2_S3_2,
            tratamientos_faciales_quimicos_naturales_S3_2,
            imagen_S3_2,
            brigadas_S3_2,
            brushing_S3_3,
            planchado_expres_S3_3,
            peinado3_S3_3,
            automaquillaje_S3_3,
            diseño_cejas_S3_3,
            corte_cabello3_S3_3,
            colorimetria2_S3_3,
            tratamientos_faciales_S3_3,
            cosmetologia1_S3_3,
            maquillaje_social_S3_3,
            imagen_S3_3,
            brigadas_S3_3
        } = req.body;
    
        let Datos = await calificacionesS3.findById(req.params.id);
        if (!Datos) {
            res.status(404).json({ msg: "Calificación del estudiante no encontrada." });
        }
        
    
        //Datos.numero_credencial = numero_credencial;
        //Dato.especialidad = especialidad;
        /* Datos.grupo = grupo; */
        Datos.maquillaje_artistico_S3_1 = maquillaje_artistico_S3_1;
        Datos.peinado3_S3_1 = peinado3_S3_1;
        Datos.automaquillaje_S3_1 = automaquillaje_S3_1;
        Datos.desarrollo_S3_1 = desarrollo_S3_1;
        Datos.imagen_S3_1 = imagen_S3_1;
        Datos.brigadas_S3_1 = brigadas_S3_1;
        Datos.peinado3_S3_2 = peinado3_S3_2;
        Datos.trensados_S3_2 = trensados_S3_2;
        Datos.automaquillaje_S3_2 = automaquillaje_S3_2;
        Datos.dibujo_diseño2_S3_2 = dibujo_diseño2_S3_2;
        Datos.tratamientos_faciales_quimicos_naturales_S3_2 = tratamientos_faciales_quimicos_naturales_S3_2;
        Datos.imagen_S3_2 = imagen_S3_2;
        Datos.brigadas_S3_2 = brigadas_S3_2;
        Datos.brushing_S3_3 = brushing_S3_3;
        Datos.planchado_expres_S3_3 = planchado_expres_S3_3;
        Datos.peinado3_S3_3 = peinado3_S3_3;
        Datos.automaquillaje_S3_3 = automaquillaje_S3_3;
        Datos.diseño_cejas_S3_3 = diseño_cejas_S3_3;
        Datos.corte_cabello3_S3_3 = corte_cabello3_S3_3;
        Datos.colorimetria2_S3_3 = colorimetria2_S3_3;
        Datos.tratamientos_faciales_S3_3 = tratamientos_faciales_S3_3;
        Datos.cosmetologia1_S3_3 = cosmetologia1_S3_3;
        Datos.maquillaje_social_S3_3 = maquillaje_social_S3_3;
        Datos.imagen_S3_3 = imagen_S3_3;
        Datos.brigadas_S3_3 = brigadas_S3_3;
    
        Datos = await calificacionesS3.findByIdAndUpdate( { _id:req.params.id }, Datos, { new:true } );
        res.json(Datos);
    
    }catch(err){
        res.status(505).json(["No se pudo realizar la solicitud accionada."]);
    }
}

module.exports.eliminarcalificacion = async function( req,res ){
    try{

        let modelo = await calificacionesS3.findById(req.params.id);
        if(!modelo){
            res.status(404).json(["No se encontro registro para borrar"]);
        }
        await calificacionesS3.findByIdAndRemove(req.params.id);

    }catch(err){
        res.status(505).json(["No se encontro documento"]);
    }
}