const db = require('../../config/conexion');
const path = require('path');

module.exports = (app, datos) => {
    const conexion = db(datos);
    app.get('/inicial', (req, res) => {
        conexion.query('select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=1)', (err, preguntas) => {
            conexion.query('select * from respuestas', (err, respuestas) => {
                res.render('encuesta',{
                    preguntas: preguntas,
                    respuestas: respuestas,
                    seccion: 1,
                    accion: 'respuesta_entrada'
                });
            });
        });
    });

    app.get('/final', (req, res) => {
        conexion.query('select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=2)', (err, preguntas) => {
            conexion.query('select * from respuestas', (err, respuestas) => {
                res.render('encuesta_fin',{
                    preguntas: preguntas,
                    respuestas: respuestas,
                    seccion: 2,
                    accion: 'respuesta_salida'
                });
            });
        });
    });

    app.post('/respuesta_entrada', (req, res) => {
        const respuesta = req.body;
        console.clear();
        console.log(respuesta);
        console.log('\n');
        conexion.query(`insert into usuario (nombre) values ("${respuesta['1']}")`, (err, result) => {
            let id_usuario = result['insertId'];
            for(elemento in respuesta){
                if(elemento != "id_encuesta"){
                    conexion.query(`insert into contestado (id_usuario, id_encuesta, id_pregunta, respuesta) values (${id_usuario}, ${respuesta["id_encuesta"]}, ${elemento}, "${respuesta[elemento]}")`, (error, res_exitoso) => {
                        console.log('Insertado');
                    });
                }else{
                    console.log('id_encuesta');
                }
            }
        });
        res.redirect('/');
    });

    app.post('/respuesta_salida', (req, res) => {
        const respuesta = req.body;
        console.clear();
        console.log(respuesta);
        console.log('\n');
        conexion.query(`insert into usuario (nombre) values ("${respuesta['17']}")`, (err, result) => {
            let id_usuario = result['insertId'];
            for(elemento in respuesta){
                if(elemento != "id_encuesta"){
                    conexion.query(`insert into contestado (id_usuario, id_encuesta, id_pregunta, respuesta) values (${id_usuario}, ${respuesta["id_encuesta"]}, ${elemento}, "${respuesta[elemento]}")`, (error, res_exitoso) => {
                        console.log('Insertado');
                    });
                }else{
                    console.log('id_encuesta');
                }
            }
        });
        res.redirect('/');
    });

    app.get('/consulta', (req, res) => {
        let query = 'select us.nombre, enc.nombre as encuesta, pre.pregunta, con.respuesta from  contestado as con inner join usuario as us on con.id_usuario=us.id inner join encuesta as enc on enc.id=con.id_encuesta inner join preguntas as pre on pre.id=con.id_pregunta inner join usuario as us2 on us2.id=con.id_usuario';
        conexion.query(query, (err, consulta) => {
            //console.clear();
            //console.log('\n');
            //console.log(consulta);
            res.render('consultar',{
                consulta: consulta
            });
        });
    });

    app.get('/', (req, res) => {
        res.render('index');
    });
}