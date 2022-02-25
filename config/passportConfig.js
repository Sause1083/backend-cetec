const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('user-alumno');

passport.use(
    new localStrategy({ usernameField: 'credencial' },
        (username, password, done) => {
            User.findOne({ credencial: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!user)
                        return done(null, false, { message: 'El usuario no está registrado' });
                    // wrong password
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'La contraseña es incorrecta' });
                    // authentication succeeded
                    else
                        return done(null, user);
                });
        })
);
