const modeloCalificacionesS1 = require('./../models/calificaciones/calificacion-estilismoS1.model');

module.exports.registrarCalificacionEsteticaS1 = function (req, res) {
    let modelo = new modeloCalificacionesS1(req.body);
    modelo.save(
        function (err, doc) {
            if (!err) {
                res.send(doc);
            } else {
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
    let modelo = await modeloCalificacionesS1.find({numero_credencial:req.body.numero_credencial});
    if(!modelo){
        res.status(404).json(["No se encontro registro"]);
    }
    res.json(modelo);
}

module.exports.actualizarCalificacionEsteticaS1 = async (req, res) => {
    try {
        const {
            numero_credencial,
            especialidad,
            grupo,
            manicure,
            pedicure,
            historia_belleza,
            desarrollo_humano,
            one_shot,
            seguridad_higiene,
            anatomia,
            auto_maquillaje,
            imagen,
            brigadas,
            peinado,
            manicure2,
            pedicure2,
            oneshot2,
            automaquillage2,
            diseño_cejas,
            cejas_pestañas,
            quimica1,
            dermatologia,
            imagen2,
            brigada2,
            manicure3,
            pedicure3,
            brushing,
            planchado_expres,
            peinados3,
            trensados3,
            automaquillage3,
            diseño_ceja3,
            permacologia_1,
            tratamientos_capilares,
            corte_cabello,
            imagen3,
            brigadas3
        } = req.body;

        let Datos = await modeloCalificacionesS1.findById(req.params.id);
        if(!Datos){
            res.status(404).json({ msg: "Calificación del estudiante no encontrada." });
        }
        Datos.numero_credencial = numero_credencial;
        Datos.especialidad = especialidad;
        Datos.grupo = grupo;
        Datos.manicure = manicure;
        Datos.pedicure = pedicure;
        Datos.historia_belleza = historia_belleza;
        Datos.desarrollo_humano = desarrollo_humano;
        Datos.one_shot=one_shot;
        Datos.seguridad_higiene=seguridad_higiene;
        Datos.anatomia = anatomia;
        Datos.auto_maquillaje = auto_maquillaje;
        Datos.imagen = imagen;
        Datos.brigadas = brigadas;
        Datos.peinado = peinado;
        Datos.manicure2 = manicure2;
        Datos.pedicure2 = pedicure2;
        Datos.oneshot2 = oneshot2;
        Datos.automaquillage2 = automaquillage2;
        Datos.diseño_cejas=diseño_cejas;
        Datos.cejas_pestañas = cejas_pestañas;
        Datos.quimica1 = quimica1;
        Datos.dermatologia = dermatologia;
        Datos.imagen2 = imagen2;
        Datos.brigada2 = brigada2;
        Datos.manicure3 = manicure3;
        Datos.pedicure3 = pedicure3;
        Datos.brushing = brushing;
        Datos.planchado_expres = planchado_expres;
        Datos.peinados3 = peinados3;
        Datos.trensados3 = trensados3;
        Datos.automaquillage3 = automaquillage3;
        Datos.diseño_ceja3 = diseño_ceja3;
        Datos.permacologia_1 = permacologia_1;
        Datos.tratamientos_capilares = tratamientos_capilares;
        Datos.corte_cabello = corte_cabello;
        Datos.imagen3 = imagen3;
        Datos.brigadas3 = brigadas3;

        Datos = await modeloCalificacionesS1.findByIdAndUpdate({ _id:req.params.id }, Datos, {new:true});
        res.json(Datos);

    }catch(err){
        res.status(505).json(["No se pudo realizar la solicitud accionada."]);
    }

}

module.exports.eliminarCalificacion = async function(req,res,next){
    try{
        let Datos = await modeloCalificacionesS1.findById(req.params.id);
        if(!Datos){
            res.status(404).json(["No se pudo encontrar registro"]);
        }
        await modeloCalificacionesS1.findOneAndRemove(req.params.id);

    }catch(err){
        res.status(505).json(["No se pudo realizar la accion solicitada"])
    }
}
