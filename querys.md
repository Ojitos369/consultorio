<!-- Inicial -->
select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=1)
select * from respuestas

<!-- Final -->
select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=2)
select * from respuestas'

<!-- Res Entrada -->
insert into usuario (nombre) values ("${respuesta['input_1']}"
let id_usuario = result['insertId'];
insert into contestado (id_usuario, id_encuesta, id_pregunta, respuesta) values (${id_usuario}, ${respuesta["id_encuesta"]}, ${id_pregunta}, "${respuesta[elemento]}")

<!-- Res Salida -->
insert into usuario (nombre) values ("${respuesta['16']}")
let id_usuario = result['insertId']
<!-- for de salida -->
insert into contestado (id_usuario, id_encuesta, id_pregunta, respuesta) values (${id_usuario}, ${respuesta["id_encuesta"]}, ${elemento}, "${respuesta[elemento]}")

<!-- Consuta -->
let query = 'select us.nombre, enc.nombre as encuesta, pre.pregunta, con.respuesta from  contestado as con inner join usuario as us on con.id_usuario=us.id inner join encuesta as enc on enc.id=con.id_encuesta inner join preguntas as pre on pre.id=con.id_pregunta inner join usuario as us2 on us2.id=con.id_usuario';