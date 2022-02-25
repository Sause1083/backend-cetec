const CrearGrupo = require('./../models/grupos/RegistrarGrupo-admin.model');

/* Registra un nuevo rol de administrador */


module.exports.registrarGrupo = ( req, res, next ) => {
    
   let grupo_new = new CrearGrupo(req.body);
    
    grupo_new.save( (err,doc) => {
       
        if( !err ){
            res.send(doc);
        }else{
            if(err.code == 11000){
                res.status(422).send(["¡El grupo ya existe!"]);
            }else{
                return next(err);
            }
        }
    }); 

}

module.exports.traerGrupoDocente = async (req,res)=>{
    let modelo = await CrearGrupo.find({Docente_cargo:req.body.Docente_cargo});
    if(!modelo){
        res.status(404).json(["No se encuentra grupo"]);
    }else{
        res.json(modelo);
    }
}

module.exports.encontrarGrupo = async (req,res,next) =>{
    let grupo = await CrearGrupo.find({ ID_grupo: req.body.ID_grupo });
    if( !grupo ){
        res.status(404).json({ msg: "Grupo no encontrado" });
    }else{
        res.json(grupo);
    }
}

module.exports.listarGrupos = async (req,res,next) => {
    let user = await  CrearGrupo.find();
    if(!user){
        res.status(404).json({ msg: "Administrador no encontrado" });
    }else{
        res.json(user);
    }

}
module.exports.TraerUnGrupo = async (req,res,next) =>{
    let grupo = await CrearGrupo.findById(req.params.id);
    if( !grupo ){
        res.send(["No se encontro registro"]);
    }else{
        res.json(grupo);
    }
}
module.exports.editorGrupo = async ( req, res ,next ) =>{
    try{

        const { ID_grupo, Especialidad, Docente_cargo } = req.body;
        let grupo = await CrearGrupo.findById(req.params.id);
        if( !grupo ){
            res.status(404).json({msg:"Grupo no encontrado"});
        }
        grupo.ID_grupo = ID_grupo;
        grupo.Especialidad = Especialidad;
        grupo.Docente_cargo = Docente_cargo;
        grupo = await CrearGrupo.findByIdAndUpdate({ _id:req.params.id }, grupo, {new:true});
        res.json(grupo);

    }catch(error){
        res.status(500).send("Ocurrio un error en la actualización");
    }
}
module.exports.eliminarGrupo = async (req,res)=>{
    try{
        let grupo = await CrearGrupo.findById(req.params.id);
        if(!grupo){
            res.status(404).json({msg: "No se encontro registro "});
        }else{
            await CrearGrupo.findByIdAndRemove({_id:req.params.id});
            res.json("Grupo eliminado correctamente");
        }
    }catch(err){
        res.status(500).send("Ha ocurrido un error");
    }
}