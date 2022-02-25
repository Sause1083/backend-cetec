const modeloCalificacionComputacon = require('./../models/calificaciones/calificacion-computacion.model');

module.exports.exportarTodo = async (req,res,next) =>{
    let mcc = await modeloCalificacionComputacon().find();
    if(!mcc){
        res.json({msg:"Calificaciones no encontrados"});
    }else{
        res.json(mcc);
    }
}
module.exports.UnDato = async (req,res)=>{
    let modeloDatos = await modeloCalificacionComputacon.find({ numero_credencial:req.body.numero_credencial });
    if(!modeloDatos){
        res.status(422).send(["No se encontro registro alguno."]);
    }else{
        res.json(modeloDatos);
    }
}
module.exports.registrarCalificación = (req,res)=>{
    let camposCC = new modeloCalificacionComputacon(req.body);
    camposCC.save( (err,doc)=>{
        if( !err ){
            res.send(doc);
        }else{
            if(err.code == 11000){
                res.status(422).send(["¡La calificacion de este alumno ya existe!"]);
            }else{
                return next(err);
            }
        }
    });
}
module.exports.editarCalificacion = async ( req,res )=>{
    try{
        const { 
            numero_credencial, 
            especialidad,
            grupo,
            windows10,
            word2016,
            internet,
            powerpoint2016,
            publisher2016,
            excel2016,
            adobe_acrobat9,
            corel_drawX5,
            adobephotoshop,
            adobe_illustrator,
            adobe_indesign,
            adobe_flash,
            adobe_fireworks,
            adobe_dreamweaver,
            access2016,
            visual_basic,
            html5
        } = req.body;

        let Datos = await modeloCalificacionComputacon.findById(req.params.id);
        if( !Datos ){
            res.status(404).json({ msg: "Calificación del estudiante no encontrada." });
        }
        /* Actualizar datos  */
        Datos.numero_credencial = numero_credencial;
        Datos.especialidad = especialidad;
        Datos.grupo = grupo;
        Datos.windows10 = windows10;
        Datos.word2016 = word2016;
        Datos.internet = internet;
        Datos.powerpoint2016 = powerpoint2016;
        Datos.publisher2016 = publisher2016;
        Datos.excel2016 = excel2016;
        Datos.adobe_acrobat9= adobe_acrobat9;
        Datos.corel_drawX5 = corel_drawX5;
        Datos.adobephotoshop = adobephotoshop;
        Datos.adobe_illustrator = adobe_illustrator;
        Datos.adobe_indesign = adobe_indesign;
        Datos.adobe_flash = adobe_flash;
        Datos.adobe_fireworks = adobe_fireworks;
        Datos.adobe_dreamweaver = adobe_dreamweaver;
        Datos.access2016 = access2016;
        Datos.visual_basic = visual_basic;
        Datos.html5 = html5;

        Datos = await modeloCalificacionComputacon.findByIdAndUpdate({ _id:req.params.id }, Datos,{new:true} );
        res.json(Datos);


    }
    catch(error){
        res.status(500).send("Ocurrio Un error al actualizar las calificaciones");
    }
}

module.exports.eliminarCalificacionAlumno = async function(req,res){
    
    try{
        let modeloDatos = await modeloCalificacionComputacon.findById( req.params.id );
        if(!modeloDatos){
            res.status(422).send(["No se encontro registro  del dato"]);
        }
        await modeloCalificacionComputacon.findByIdAndRemove({_id:req.params.id});

    }catch(err){
        res.status(505).send("Ocurrio Un error al borrar las calificaciones");
    }

}
