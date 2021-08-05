function cambio(clase){
    let clase_id = parseInt(clase)
    let siguiente = document.getElementById('siguiente');
    let valor = document.getElementById('cont_16').value;
    if(valor == '' || valor == undefined){
        alert('El campo no puede ir vacio')
    }else if (clase_id == 17){
        siguiente.style.display = 'none';
        let pregunta1 = document.getElementById('cont_'+String(clase_id));
        let pregunta2 = document.getElementById('cont_'+String(clase_id - 1));
        let pregunta3 = document.getElementById('cont_'+String(clase_id + 1));
        pregunta1.style.display = 'none';
        pregunta2.style.display = 'none';
        pregunta3.style.display = 'block';
    }
    else if (clase_id == 18){
        siguiente.style.display = 'none';
        let pregunta_Actual = document.getElementById('cont_'+String(clase_id));
        let pregunta_Siguiente = document.getElementById('cont_'+String(clase_id + 1));
        pregunta_Actual.style.display = 'none';
        pregunta_Siguiente.style.display = 'block';
        let enviar = document.getElementById('enviar');
        enviar.style.display = 'block';
    }
    else{
        siguiente.style.display = 'none';
        let pregunta_Actual = document.getElementById('cont_'+String(clase_id));
        let pregunta_Siguiente = document.getElementById('cont_'+String(clase_id + 1));
        pregunta_Actual.style.display = 'none';
        pregunta_Siguiente.style.display = 'block';
    }
    //19 maximo
}