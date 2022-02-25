const modeloCalificacionS2 = require('./../models/calificaciones/calificacion-estilismoS2.model');

module.exports.registrarCalificacionesS2 = function(req,res){
    let modeloDatos = new modeloCalificacionS2(req.body);
    modeloDatos.save(
        function( err,doc ){
            if( !err ){
                res.send(doc);
            }else{
                if (err.code == 11000) {
                    res.status(422).send(["¡La calificacion de este alumno ya existe!"]);
                } else {
                    return next(err);
                }
            }
        }
    );
}

module.exports.traerCalificacion = async (req,res) => {
    let modelo = await modeloCalificacionS2.find({numero_credencial:req.body.numero_credencial});
    if(!modelo){
        res.status(404).json(["No se encontro registro"]);
    }
    res.json(modelo);
}

module.exports.actualizarCalificacionesEstilismoS2 = async (req,res)=>{
    try{
        
        const { 
            numero_credencial,
            especialidad,
            grupo,
            peinado_S2,
            automaquillaje_S2,
            permacologia_S2,
            sistemaSPA,
            colorimetria_1,
            imagen_S2,
            brigada_s2,
            desarrollo_humano_S2,
            peinado_S2_2,
            automaquillaje_S2_2,
            cejas_pestañas_S2_2,
            permacologia_1,
            permacologia_S2_2,
            uñas_acrilicas_S2,
            dibujo_diseño1_S2,
            imagen_S2_2,
            brigadas_s2_2,
            introduccion_faciales_maquillaje_S2_3,
            brushing_S2_3,
            planchado_expres_S2_3,
            peinado2_S2_3,
            trensado_S2_3,
            automaquillaje_S2_3,
            diseño_ceja_S2_3,
            tratamientos_capilares_S2_3,
            corte_cabello2_S2_3,
            sistemaSPA_S2_3,
            colorimetria1_S2_3,
            quimica_S2_3,       
            imagen_S2_3,
            brigadas_S2_3
         } = req.body;

         let Datos = await modeloCalificacionS2.findById(req.params.id);
         if(!Datos){
            res.status(404).json({ msg: "Calificación del estudiante no encontrada." });
         }
        Datos.numero_credencial = numero_credencial;
        Datos.grupo = grupo;
        Datos.peinado_S2 = peinado_S2;
        Datos.automaquillaje_S2 = automaquillaje_S2;
        Datos.permacologia_S2 = permacologia_S2;
        Datos.sistemaSPA = sistemaSPA;
        Datos.colorimetria_1 = colorimetria_1;
        Datos.imagen_S2 = imagen_S2;
        Datos.brigada_s2 = brigada_s2;
        Datos.desarrollo_humano_S2 = desarrollo_humano_S2;
        Datos.peinado_S2_2 = peinado_S2_2;
        Datos.automaquillaje_S2_2 = automaquillaje_S2_2;
        Datos.cejas_pestañas_S2_2= cejas_pestañas_S2_2;
        Datos.permacologia_1 = permacologia_1;
        Datos.permacologia_S2_2 = permacologia_S2_2;
        Datos.uñas_acrilicas_S2 = uñas_acrilicas_S2;
        Datos.dibujo_diseño1_S2 = dibujo_diseño1_S2;
        Datos.imagen_S2_2 = imagen_S2_2;
        Datos.brigadas_s2_2 = brigadas_s2_2;
        Datos.introduccion_faciales_maquillaje_S2_3 = introduccion_faciales_maquillaje_S2_3;
        Datos.brushing_S2_3 = brushing_S2_3;
        Datos.planchado_expres_S2_3 = planchado_expres_S2_3;
        Datos.peinado2_S2_3 = peinado2_S2_3;
        Datos.trensado_S2_3 = trensado_S2_3;
        Datos.automaquillaje_S2_3 = automaquillaje_S2_3;
        Datos.diseño_ceja_S2_3 = diseño_ceja_S2_3;
        Datos.tratamientos_capilares_S2_3 = tratamientos_capilares_S2_3;
        Datos.corte_cabello2_S2_3 = corte_cabello2_S2_3;
        Datos.sistemaSPA_S2_3 = sistemaSPA_S2_3;
        Datos.colorimetria1_S2_3 = colorimetria1_S2_3;
        Datos.quimica_S2_3= quimica_S2_3;       
        Datos.imagen_S2_3 = imagen_S2_3;
        Datos.brigadas_S2_3 = brigadas_S2_3;

        Datos = await modeloCalificacionS2.findByIdAndUpdate({_id:req.params.id}, Datos, {new:true});
        res.json(Datos);
         

    }catch(err){
        res.status(505).json(["No se pudo realizar la solicitud accionada."]);
    }

}
module.exports.eliminarCalificacion = async (req,res)=>{
    try{
        
        let modelo = await modeloCalificacionS2.findById(req.params.id);
        if(!modelo){
            res.status(404).json(["No se encontro documento"]);
        }
        await modeloCalificacionS2.findByIdAndRemove(req.params.id);

    }catch(err){
        res.status(505).json(["No se encontro documento"]);
    }
}