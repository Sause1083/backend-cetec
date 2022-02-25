const modeloCarreras = require('./../models/carreras/carreras.model');

module.exports.registrarCarrera = ( req,res,next ) =>{
    let carrera = new modeloCarreras(req.body);
    carrera.save( (err,doc)=>{
        if( !err ){
            res.send(doc);
        }else{
            if(err.code == 11000){
                res.status(422).send(["¡La carrera ya existe!"]);
            }else{
                return next(err);
            }
        }
    });
}

module.exports.listarCarrera = async (req,res,next) =>{
    let carreras = await modeloCarreras.find();
    if(!carreras){
        res.status(404).json({msg:"No obtuvimos datos"});
    }else{
        res.json(carreras);
    }
}