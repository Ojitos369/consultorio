const db = require('../../config/conexion');
const path = require('path')

module.exports = (app, datos) => {
    const conexion = db(datos);
    app.get('/inicial', (req, res) => {
        conexion.query('select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=1)', (err, preguntas) => {
            conexion.query('select * from respuestas', (err, respuestas) => {
                res.render('encuesta',{
                    preguntas: preguntas,
                    respuestas: respuestas
                });
            });
        });
    });

    app.get('/final', (req, res) => {
        conexion.query('select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=2)', (err, preguntas) => {
            conexion.query('select * from respuestas', (err, respuestas) => {
                res.render('encuesta',{
                    preguntas: preguntas,
                    respuestas: respuestas
                });
            });
        });
    });

    app.get('/respuestas', (req, res) => {
        res.render('respuestas');
    });

    app.get('/', (req, res) => {
        res.render('index');
    });
}