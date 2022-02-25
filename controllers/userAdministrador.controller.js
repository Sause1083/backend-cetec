/* Declaro mis variables globales para los modelos que se ocupen */
const User = require('./../models/users/administrador-user.model');
const CrearGrupo = require('./../models/grupos/RegistrarGrupo-admin.model');

/* Registra un nuevo rol de administrador */
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

    });

}

/* Ayuda al inicio de sesion de los admins */
module.exports.login = async (req, res, next) => {
    let user = await User.find({ "credencial": req.body.credencial, "password": req.body.password });
    if (!user) {
        res.status(404).json({ msg: "Administrador no encontrado" });
    }
    res.json(user);

}

/* Manda a llamar a un solo administrador */
module.exports.listarUnAdmin = async (req,res,next) => {
    let user = await  User.find({ "credencial": req.body.credencial });
    if(!user){
        res.status(404).json({ msg: "Administrador no encontrado" });
    }else{
        res.json(user);
    }
}

/* Segmento para registrar grupos desde el home Admin */
module.exports.registrarGrupo = ( req, res, next ) => {
    
    let user = new CrearGrupo(req.body);
    
    user.save( (err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(["El Grupo ya existe"]);
            else
                return next(err);
        }

    });

}
