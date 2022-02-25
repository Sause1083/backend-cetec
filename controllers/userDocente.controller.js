/* Se declaran las variables globales */
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const { json } = require('body-parser');
const User = require('./../models/users/profesor-user.model');

/* Registra los docentes a la base de datos en la coleccion Docentes */
module.exports.registrar = ( req, res, next ) => {
    
    let user = new User(req.body);
    user.save( (err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(["El usuario ya existe"]);
            else
                return next(err);
        }

    } );

}

/* Loggea a los alumnos a su dashboard o menu principal */
module.exports.login = async (req,res,next) =>{
    let user = await User.find({"credencial":req.body.credencial, "password": req.body.password});
    if(!user){
        res.status(404).json({msg: "Docente no encontrado"});
    }
    res.json(user);

}
/* ========================================== */
/*          LISTAR TODOS DOCENTES            */
/* ======================================== */
module.exports.listarDocentes = async ( req,res ) =>{
    let docente = await User.find();
    if(!docente){
        res.status(404).json({ msg:"No se encuentran registros" });
    }else{
        res.json(docente);
    }
}
/* ====================================== */
/*      Listar Docente por ID             */
/* ===================================== */
module.exports.listarDocentesID = async ( req,res ) =>{
    let docente = await User.findById(req.params.id);
    if(!docente){
        res.status(404).json({ msg:"No se encuentran registros" });
    }else{
        res.json(docente);
    }
}

/*|=====================================|*/
/*|Listar docentes según su especialidad| */
/*|=====================================| */
module.exports.listarTI = async ( req, res ) =>{
    let docenteEspecialidad = await User.find( { "especialidad": req.body.especialidad } );
    if( !docenteEspecialidad ){
        res.status(404).json({msg:"Especialidad no encontrada"});
    }else{
        res.json(docenteEspecialidad);
    }
     
}


/* ============================================= */
/* ============================================== */
/*            editar campo docente */
/* ============================================== */
module.exports.editarDocente = async ( req,res )=>{
    
    try{

    const { credencial,password,nombre,apellido_paterno,apellido_materno,especialidad } = req.body;
    let docente = await User.findById(req.params.id);
    
    if( !docente ){
        res.status(404).json({msg:"Docente no encontrado"});
    }
    //Actualizar valores
    docente.credencial = credencial;
    docente.password = password;
    docente.nombre = nombre;
    docente.apellido_paterno = apellido_paterno;
    docente.apellido_materno = apellido_materno;
    docente.especialidad = especialidad;

    docente = await User.findByIdAndUpdate({ _id:req.params.id }, docente, { new:true });
    res.json(docente);

    }catch(error){
        res.status(500).send("Ocurrio un error")
    }

}
/* ============================================== */
/* ============================================== */
/*            eliminar campo docente */
/* ============================================== */
module.exports.eliminarDocente = async (req,res)=>{
    try{
        let docente = await User.findById( req.params.id );
        if(!docente){
            res.status(404).json({msg:"Docente inexistente"});
        }else{
            await User.findByIdAndRemove({_id:req.params.id});
            res.json("Docente eliminado correctamente");
        }
    }catch(error){
        res.status(500).send("Ha ocurrido un error");
    }
}
module.exports.listarUno = async function(req,res){
    let docente = await User.find({credencial: req.body.credencial});
    if(!docente){
        res.status(404).json({msg:"Docente inexistente"});
    }else{
        res.json(docente);
    }
};
/* ======================================================= */
