function hola(datos){
    let consulta = JSON.parse(datos);
    console.log('consulta desde js\n');
    console.log(consulta.length);
    console.log(consulta[0].nombre);
}

function autocompletado(datos){
    let consulta = JSON.parse(datos);
    let n = consulta.length;
    document.getElementById("demo").innerHTML = '';
    var preguntas = [];
    for(i=0; i<n; i++){
        preguntas.push(consulta[i]);
    }

    var pal = document.getElementById("buscar-pal").value;
    var tam = pal.length;
    for(i in preguntas){
        var nombre = preguntas[i].nombre;
        var pregunta = preguntas[i].pregunta;
        var respuesta = preguntas[i].respuesta;
        var str = [nombre.substring(0,tam), pregunta.substring(0,tam), respuesta.substring(0,tam)];
        if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
            if((pal.toLowerCase() == str[0].toLowerCase()) || (pal.toLowerCase() == str[1].toLowerCase()) || (pal.toLowerCase() == str[2].toLowerCase())){
                texto = (`${preguntas[i].nombre} | ${preguntas[i].pregunta} | ${preguntas[i].respuesta}`)
                var node = document.createElement("LI");
                var textnode = document.createTextNode(texto);
                node.appendChild(textnode);
                document.getElementById("demo").appendChild(node);
            } else {
                console.log('no');
            }
        }
    }
}