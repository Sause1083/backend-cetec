const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {
        console.log('Conexión exitosa');
    }
    else {
        console.log('Error al conectar la base de datos : ' + JSON.stringify(err, undefined, 2));
    }
});

require('./users/user.model');
