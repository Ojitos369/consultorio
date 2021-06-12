const db = require('../../config/conexion');
const path = require('path')

module.exports = (app, datos) => {
    let ruta = path.join(__dirname, '../assets/css/');
    let fs = require('fs');
    let myCss = {
        estilo: fs.readFileSync(ruta+'estilo.css'),
        index: fs.readFileSync(ruta+'index.css'),
        normalize: fs.readFileSync(ruta+'normalize.css')
    }
    const conexion = db(datos);
    app.get('/inicial', (req, res) => {
        conexion.query('select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=1)', (err, preguntas) => {
            conexion.query('select * from respuestas', (err, respuestas) => {
                res.render('encuesta',{
                    preguntas: preguntas,
                    respuestas: respuestas,
                    myCss: myCss
                });
            });
        });
    });

    app.get('/final', (req, res) => {
        conexion.query('select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=2)', (err, preguntas) => {
            conexion.query('select * from respuestas', (err, respuestas) => {
                console.log('Preguntas');
                console.log(preguntas);
                console.log('\n');
                console.log('Respuestas');
                console.log(respuestas);
                res.render('encuesta',{
                    preguntas: preguntas,
                    respuestas: respuestas,
                    myCss: myCss
                });
            });
        });
    });

    app.get('/', (req, res) => {
        res.render('index',{
            myCss: myCss
        });
    });
}