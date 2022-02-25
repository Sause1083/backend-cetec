const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let fecha = new Date(Date.now());
let d_ingles = [ "Basico", "Intermedio", "Avanzado" ];
    var calificacionAlumnoSchema = new mongoose.Schema({
    numero_credencial: {
        type: String,
        required: true,
        unique: true
    },
    carreras: [{
        nombre_carrera: {type: String, required: false , default: ''},
        Diplomados:[{
            diplomado1:[{
                nombre_diplomado: {type: String, required: false, default: ''  },
                modulos: [{
                    modulo_1: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_2: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_3: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_4: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_5: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_6: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_7: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }]
                }]
            }],
            diplomado2:[{
                nombre_diplomado: {type: String, required: false, default: ''  },
                modulos: [{
                    modulo_1: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_2: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_3: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_4: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_5: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_6: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_7: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }]
                }]
            }],
            diplomado3:[{
                nombre_diplomado: {type: String, required: false, default: ''  },
                modulos: [{
                    modulo_1: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_2: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_3: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_4: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_5: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_6: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_7: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }]
                }]
            }],
            diplomado4:[{
                nombre_diplomado: {type: String, required: false, default: ''  },
                modulos: [{
                    modulo_1: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_2: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_3: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_4: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_5: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_6: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }],
                    modulo_7: [{
                        nombre_modulo:{type: String, required: false, default: ''},
                        calificacion_modulo: { type:String, required:false, default:'0' }
                    }]
                }]
            }],

        }]
    }]
});

mongoose.model('calificaciones', calificacionAlumnoSchema);