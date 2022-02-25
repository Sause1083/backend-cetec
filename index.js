//Importamos las configuraciones de la carpeta config.
require('./config/config');
require('./models/db');
require('./config/passportConfig');

//Declaramos las variables objetos que traeran los datos de las clases
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const router = express.Router();

const operacionesUser = require('./routes/user.route');
const operacionesAlumno = require("./routes/alumnos.routes");
const operacionesDocente = require('./routes/docente.routes');
const opAdmin = require('./routes/admin.routes');
const registrarG = require('./routes/registrarGruposAdmin.routes');
const opCarreras = require('./routes/carreras.routes');
const opCalificaciones = require('./routes/calificaciones.routes');

const app = express();

app.use(bodyParser.json()); 
app.use(cors());

// Passport Middleware
app.use(passport.initialize());

//Rutas en las cuales ofrecemos los servicios

/* Invoca las rutas */
//localhost:3000/api/registrar-alumno
app.use('/', operacionesUser );
app.use('/api', operacionesAlumno );
app.use('/api', operacionesDocente);
app.use('/api', opAdmin );
app.use('/api/grupos', registrarG);
app.use('/api', opCarreras);
app.use('/api', opCalificaciones);




// Manejador de errores
app.use((err, req, res, next) => {
    if (err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});

//Inicialización del servicio
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.PORT}`);
});

