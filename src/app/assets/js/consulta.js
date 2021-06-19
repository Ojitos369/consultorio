function autocompletado(datos){
    let consulta = JSON.parse(datos);
    let n = consulta.length;
    let tabla = document.getElementById("table");
    let preguntas = [];
    for(i=0; i<n; i++){
        preguntas.push(consulta[i]);
    }

    document.getElementById("table").innerHTML = '';

    let pal = document.getElementById("buscar-pal").value;
    
    let tam = pal.length;
    if(pal == ''){
        tablaCompleta(datos);
    }else{
        crearTabla(tabla);
        let tbody = document.createElement("tbody");
        for(i in preguntas){
            let nombre = preguntas[i].nombre;
            let encuesta = preguntas[i].encuesta;
            let pregunta = preguntas[i].pregunta;
            let respuesta = preguntas[i].respuesta;
            let str = [nombre.substring(0,tam), encuesta.substring(0,tam),pregunta.substring(0,tam), respuesta.substring(0,tam)];
            if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
                if((pal.toLowerCase() == str[0].toLowerCase()) || (pal.toLowerCase() == str[1].toLowerCase()) || (pal.toLowerCase() == str[2].toLowerCase()) || (pal.toLowerCase() == str[3].toLowerCase())){
                    let tr = document.createElement("tr");
                    let tdNombre = document.createElement("td");
                    let tdEncuesta = document.createElement("td");
                    let tdPregunta = document.createElement("td");
                    let tdRespuesta = document.createElement("td");
                    let txNombre = document.createTextNode(nombre);
                    let txEncuesta = document.createTextNode(encuesta);
                    let txPregunta = document.createTextNode(pregunta);
                    let txRespuesta = document.createTextNode(respuesta);
                    tdNombre.appendChild(txNombre);
                    tdEncuesta.appendChild(txEncuesta);
                    tdPregunta.appendChild(txPregunta);
                    tdRespuesta.appendChild(txRespuesta);
                    tdNombre.scope = "row";
                    tr.appendChild(tdNombre);
                    tr.appendChild(tdEncuesta);
                    tr.appendChild(tdPregunta);
                    tr.appendChild(tdRespuesta);
                    tr.className = "broder border-bottom border-dark"
                    tbody.appendChild(tr);
                } else {
                    console.log('no');
                }
            }
        tabla.appendChild(tbody);
        }
    }
}

function tablaCompleta(datos){
    let tabla = document.getElementById("table");
    let consulta = JSON.parse(datos);

    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let thNombre = document.createElement("th");
    let thEncuesta = document.createElement("th");
    let thPregunta = document.createElement("th");
    let thRespuesta = document.createElement("th");
    let txNombre = document.createTextNode('Nombre');
    let txEncuesta = document.createTextNode('Encuesta');
    let txPregunta = document.createTextNode('Pregunta');
    let txRespuesta = document.createTextNode('Respuesta');
    thNombre.appendChild(txNombre);
    thEncuesta.appendChild(txEncuesta);
    thPregunta.appendChild(txPregunta);
    thRespuesta.appendChild(txRespuesta);
    thNombre.scope = "row";
    thEncuesta.scope = "row";
    thPregunta.scope = "row";
    thRespuesta.scope = "row";
    tr.appendChild(thNombre);
    tr.appendChild(thEncuesta);
    tr.appendChild(thPregunta);
    tr.appendChild(thRespuesta);
    thead.appendChild(tr);
    tabla.appendChild(thead);
    let tbody = document.createElement("tbody");
    for(i in consulta){
        let bnombre = consulta[i].nombre;
        let bencuesta = consulta[i].encuesta;
        let bpregunta = consulta[i].pregunta;
        let brespuesta = consulta[i].respuesta;
        let btr = document.createElement("tr");
        let bthNombre = document.createElement("th");
        let bthEncuesta = document.createElement("th");
        let btdPregunta = document.createElement("td");
        let btdRespuesta = document.createElement("td");
        let btxNombre = document.createTextNode(bnombre);
        let btxEncuesta = document.createTextNode(bencuesta);
        let btxPregunta = document.createTextNode(bpregunta);
        let btxRespuesta = document.createTextNode(brespuesta);
        bthNombre.appendChild(btxNombre);
        bthEncuesta.appendChild(btxEncuesta);
        btdPregunta.appendChild(btxPregunta);
        btdRespuesta.appendChild(btxRespuesta);
        bthNombre.scope = "row";
        btr.appendChild(bthNombre);
        btr.appendChild(bthEncuesta);
        btr.appendChild(btdPregunta);
        btr.appendChild(btdRespuesta);
        btr.className = "broder border-bottom border-dark"
        tbody.appendChild(btr);
    }
    tabla.appendChild(tbody);
}

function crearTabla(tabla){
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let tdNombre = document.createElement("th");
    let tdEncuesta = document.createElement("th");
    let tdPregunta = document.createElement("th");
    let tdRespuesta = document.createElement("th");
    let txNombre = document.createTextNode('Nombre');
    let txEncuesta = document.createTextNode('Encuesta');
    let txPregunta = document.createTextNode('Pregunta');
    let txRespuesta = document.createTextNode('Respuesta');
    tdNombre.appendChild(txNombre);
    tdEncuesta.appendChild(txEncuesta);
    tdPregunta.appendChild(txPregunta);
    tdRespuesta.appendChild(txRespuesta);
    tdNombre.scope = "row";
    tdEncuesta.scope = "row";
    tdPregunta.scope = "row";
    tdRespuesta.scope = "row";
    tr.appendChild(tdNombre);
    tr.appendChild(tdEncuesta);
    tr.appendChild(tdPregunta);
    tr.appendChild(tdRespuesta);
    thead.appendChild(tr);
    tabla.appendChild(thead);
}

function bajarxls(tableID, filename=''){
    let pal = document.getElementById("buscar-pal").value;
    if (pal != '') pal = '-'+pal;
    filename = filename+pal;
    var downloadLink;
    var dataType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename?filename+'.xlsx':'excel_data.xlsx';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}