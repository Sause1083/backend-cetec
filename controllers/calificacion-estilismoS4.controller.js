const calificacionesS4 = require('./../models/calificaciones/calificacion-estilismoS4.mode');

module.exports.registrarCalificacion = function(req,res){
    let modelo = new calificacionesS4(req.body);
    modelo.save( function(err,doc){
        if(!err){
            res.send(doc);
        }else{
            if (err.code == 11000) {
                res.status(422).send(["¡La calificacion de este alumno ya existe!"]);
            } else {
                return next(err);
            }
        }
    });
}

module.exports.traerCalificacion = async (req,res) => {
    let modelo = await calificacionesS4.find({numero_credencial:req.body.numero_credencial});
    if(!modelo){
        res.status(404).json(["No se encontro registro"]);
    }
    res.json(modelo);
}

module.exports.actualizarCalificaciones = async (req,res)=>{
    try{

        const {

            numero_credencial,
            especialidad,
            grupo,
            peinado4_S4_1,
            automaquillaje_S4_1,
            administracion_S4_1,
            desarrollo_humano_S4_1,
            cosmetologia2_S4_1,
            imagen_S4_1,
            brigadas_S4_1,
            automaquillaje_4_2,
            colorimetria_S4_2,
            extensiones_cabello_S4_2,
            diseño_imagen_computadora_S4_2,
            imagen_S4_2,
            brigadas_S4_2,
            automaquillaje_S4_3,
            corte_cabello_S4_3,
            peinado4_S4_3,
            colorimetria4_S4_3,
            tratamientos_faciales_S4_3,
            maquillaje_social_S4_3,
            depilacion_corporal_S4_3,
            masajes_S4_3,
            diseño_imagen_computadora_S4_3,
            imagen_S3_3,
            brigadas_S3_3

        } = req.body;

        let modelo = await calificacionesS4.findById(req.params.id);
        if(!modelo){
            res.status(404).json({ msg:"No se encontro registro" });
        }

       /*  modelo.numero_credencial = numero_credencial; */
        /* modelo.especialidad = especialidad; */
        /* modelo.grupo = grupo; */
        modelo.peinado4_S4_1 = peinado4_S4_1;
        modelo.automaquillaje_S4_1 = automaquillaje_S4_1;
        modelo.administracion_S4_1 = administracion_S4_1;
        modelo.desarrollo_humano_S4_1 = desarrollo_humano_S4_1;
        modelo.cosmetologia2_S4_1 = cosmetologia2_S4_1;
        modelo.imagen_S4_1 = imagen_S4_1;
        modelo.brigadas_S4_1 = brigadas_S4_1;
        modelo.automaquillaje_4_2 = automaquillaje_4_2;
        modelo.colorimetria_S4_2 = colorimetria_S4_2;
        modelo.extensiones_cabello_S4_2 = extensiones_cabello_S4_2;
        modelo.diseño_imagen_computadora_S4_2 = diseño_imagen_computadora_S4_2;
        modelo.imagen_S4_2 = imagen_S4_2;
        modelo.brigadas_S4_2 = brigadas_S4_2;
        modelo.automaquillaje_S4_3 = automaquillaje_S4_3;
        modelo.corte_cabello_S4_3 = corte_cabello_S4_3;
        modelo.peinado4_S4_3 = peinado4_S4_3;
        modelo.colorimetria4_S4_3 = colorimetria4_S4_3;
        modelo.tratamientos_faciales_S4_3 = tratamientos_faciales_S4_3;
        modelo.maquillaje_social_S4_3 = maquillaje_social_S4_3;
        modelo.depilacion_corporal_S4_3 = depilacion_corporal_S4_3;
        modelo.masajes_S4_3 = masajes_S4_3;
        modelo.diseño_imagen_computadora_S4_3 = diseño_imagen_computadora_S4_3;
        modelo.imagen_S3_3 = imagen_S3_3;
        modelo.brigadas_S3_3 = brigadas_S3_3;

        modelo  = await calificacionesS4.findByIdAndUpdate( {_id:req.params.id}, modelo, { new:true } );
        res.json(modelo);

    }catch(err){

        res.status(505).json(["No se encontro calificacion rn la coleccion"]);

    }
}

module.exports.eliminarCalificacion = async (req,res)=>{
    try{
        let modelo = await calificacionesS4.findById(req.params.id);
        if(!modelo){
            res.status(404).json(["No se encontro registro"]);
        }
        await calificacionesS4.findByIdAndRemove(req.params.id);
        res.send(["Registro eliminado"]);
    }catch(err){

    }
}