const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const { json } = require('body-parser');

const User = mongoose.model('user-alumno');

//Al ser uso administrativo, problemente esta función no sea implementada
module.exports.register = (req, res, next) => {
    let user = new User();

    user.credencial = req.body.credencial;
    //user.email = req.body.email;
    user.password = req.body.password;

    user.save((err, doc) => {
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

module.exports.hola = function(req,res){
    res.send(["Hola bienvenido al servidor del SIC"])
}

//Autenticación de usuario para login
module.exports.login = (req, res, next) => {
    // Llamada a la autenticación
    
    passport.authenticate('local', (err, user, info) => {       
        
        
        
        // Error de passport
        if (err) return res.status(400).json(err);
        // Registra el usuario y devuelve el token generado
        else if (user) return res.status(200).json({ "token": user.generateJwt(), "credencial": req.body.credencial } );
        // Usuario no encontrado o contraseña incorrecta
        else return res.status(404).json(info);
    })(req, res);
    
}


module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'Usuario no encontrado' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['credencial']) });
        }
    );
}
module.exports.listarUser = async (req,res,next)=>{
    let usuario = await User.find();
    if(!usuario){
        return res.status(404).json({ status: false, message: 'Usuario no encontrado' });
    }else{
        res.json(usuario);
    }
}
