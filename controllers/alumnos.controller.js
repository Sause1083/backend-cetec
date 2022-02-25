/* Segmento de variables globales */
const alumno = require('../models/alumnos/alumnos.model');
const mongoose = require('mongoose');
const Alumno = mongoose.model('Alumno');

/* Registramos en la base de datos a un alumno */
exports.registrarAlumno = async (req, res) => {
    try {
       
        let alumno;
        alumno = new Alumno(req.body);
        
        await alumno.save();
        res.send(alumno);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}
exports.alumnoGrupo = async function(req,res){
    let modelo = await Alumno.find({grupo:req.body.grupo});
    if( !modelo ){
        res.status(404).json(["No existe alumno"]);
    }else{
        res.json(modelo);
    }
}

exports.contarAlumnos = (req,res)=>{
    let numeroAlumnos = alumno.find({grupo:req.body.grupo}).count();
    if(!numeroAlumnos){
        res.status(404).json(["No se encontro registro"]);
    }
    res.json(numeroAlumnos);
}

/* Lista a los alumnos totales en la coleccion de la base datos */
exports.listarAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.json(alumnos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

/* Manda a llamar a un usuario en especifico dependiendo de su credencial */
module.exports.userProfile = async (req, res, next) =>{
    
    try{
        
        const alumno = await Alumno.find({ "credencial": req.body.credencial });
        res.json(alumno);
    }catch(error){
        res.status(500).send("Problema en tratado de datos");
    }

}

/* Total de alumnos registrados en la escuela*/

module.exports.TotalAlumnos = async ( req,res,next ) =>{
    try{
        const alumnos = await Alumno.find().count();
        res.json(alumnos);
    }catch(error){
        res.status(500).send("Problema en respuesta de datos");
    }
}

/* Busca especialmente a un usuario */
module.exports.solo = async (req, res) =>{
    
    try{
        let nc = req.body.numero_credencial;
        const alumno = await Alumno.find({"numero_credencial":nc});
        res.json(alumno);
    }catch(error){
        res.status(500).send("Problema en tratado de datos");
    }

}

module.exports.editarAlumnoID = async function(req,res){

    const { 
        numero_credencial,
        nombre,
        apellido_paterno,
        apellido_materno,
        especialidad,
        grupo
     } = req.body;

    let modelo = await Alumno.findById(req.params.id);
    if(!modelo){
        res.status(404).json(["No se encontro registro"])
    }
    modelo.numero_credencial = numero_credencial;
    modelo.nombre = nombre;
    modelo.apellido_paterno = apellido_paterno;
    modelo.apellido_materno = apellido_materno;
    modelo.especialidad = especialidad;
    modelo.grupo = grupo;

    modelo = await Alumno.findByIdAndUpdate({_id:req.params.id}, modelo , {new:true});
    res.json(modelo)
}

module.exports.listarAlumnoID = async (req,res)=>{
    let modelo = await Alumno.findById(req.params.id);
    if(!modelo){
        res.status(404).json(["No se encontro registro"])
    }else{
        res.json(modelo);
    }
}

module.exports.eliminarAlumno = async (req,res)=>{
    let modelo = await Alumno.findById(req.params.id);
    if(!modelo){
        res.status(404).json(["No se encontro registro"])
    }else{
        await Alumno.findByIdAndRemove({_id:req.params.id});
    }
}