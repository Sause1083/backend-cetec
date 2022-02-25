const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    credencial: {
        type: String,
        required: 'credencial requerido',
        unique: true
    },
    password: {
        type: String,
        required: 'Contraseña requerida',
        minlength: [8, 'La contraseña debe tener al menos 8 caracteres']
    },
    date: {
        type: Date,
        default: Date.now()
    },
    saltSecret: String
});

// INHABILITADO DEBIDO A QUE LA AUTENTICACION ES MEDIANTE NOMBRE DE USUARIO
// Validación para email con expresión regular
// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// Eventos

/*
Al usar la funcion save en el controlador, automaticamente
se ejecuta la función "pre" la cual encripta la contraseña
*/
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Al autenticar un usuario, compara la contraseña encriptada con la ingresada (no encriptada)
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
}


mongoose.model('user-alumno', userSchema);
