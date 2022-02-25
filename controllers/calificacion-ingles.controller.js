const modeloCalificacionIngles = require('./../models/calificaciones/calificacion-ingles.model');

module.exports.registrarCalificacionIngles = (req,res)=>{
    let campos = new modeloCalificacionIngles( req.body );
    campos.save( (err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            if(err.code == 11000){
                res.status(422).send(["¡La calificacion de este alumno ya existe!"]);
            }else{
                return next(err);
            }
        }
    });
};
module.exports.listarCalificacion = async (req,res)=>{
    let campos = await modeloCalificacionIngles.find({numero_credencial:req.body.numero_credencial});
    if(!campos){
        res.status(422).send(["No se encontro registro alguno."]);
    }else{
        res.json(campos);
    }

};



module.exports.editarCalificacion = async (req,res)=>{
    try{

        const { 
            numero_credencial,
            especialidad,
            grupo,
            interchanguefull_introA4ED,
            interchanguefull_introB4ED,
            interchanguefull_1A4ED,
            interchanguefull_1B4ED,
            interchanguefull_2A4ED,
            interchanguefull_2B4ED,
            interchanguefull_3A4ED,
            interchanguefull_3B4ED,
            interchanguefull_passages
         } = req.body;

         let Datos = await modeloCalificacionIngles.findById(req.params.id);
         if(!Datos){
            res.status(404).json({ msg: "Calificación del estudiante no encontrada." });
         }
         Datos.numero_credencial = numero_credencial;
         Datos.especialidad = especialidad;
         Datos.grupo = grupo;
         Datos.interchanguefull_introA4ED = interchanguefull_introA4ED;
         Datos.interchanguefull_introB4ED =  interchanguefull_introB4ED;
         Datos.interchanguefull_1A4ED = interchanguefull_1A4ED;
         Datos.interchanguefull_1B4ED = interchanguefull_1B4ED;
         Datos.interchanguefull_2A4ED = interchanguefull_2A4ED;
         Datos.interchanguefull_2B4ED=interchanguefull_2B4ED;
         Datos.interchanguefull_3A4ED=interchanguefull_3A4ED;
         Datos.interchanguefull_3B4ED=interchanguefull_3B4ED;
         Datos.interchanguefull_passages=interchanguefull_passages;

         //Datos = await modeloCalificacionIngles.findByIdAndUpdate({_id:req.params.id}, Datos, {new : true});
         Datos = await modeloCalificacionIngles.findByIdAndUpdate({_id:req.params.id}, Datos, {new:true});
         res.json(Datos);




    }catch(error){
        res.status(500).send("Ocurrio Un error al actualizar las calificaciones");
    }
}

module.exports.eliminar = async function(req,res){
    try{
        let Datos = await modeloCalificacionIngles.findById(req.params.id);
        if( !Datos ){
            res.status(422).send(["No se encontro registro que borrar"]);
        }
        await modeloCalificacionIngles.findByIdAndRemove({_id:req.params.id});
    }catch(err){
        res.status(505).send("Ocurrio Un error al borrar las calificaciones");
    }
};