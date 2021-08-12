function siguiente(numero){
    let id = 'cont_'+numero;
    let sig = 'siguiente_'+numero;
    let ant = 'anterior_'+numero;
    let input = 'input_'+numero;
    let siguiente_act = document.getElementById(sig);
    let ant_act = document.getElementById(ant);
    let elemento = document.getElementById(id);
    let valor = document.getElementsByName(input)[0];
    //console.log(valor);
    valor = valor.value;
    let enviar = document.getElementById('enviar');
    //console.log(`pregunta: ${numero} - valor: ${valor}`)
    if(valor == '' || valor == undefined){
        alert('El campo no puede ir vacio')
    }else{
        let siguiente = null
        //let anterior = null
        let siguiente_sig = null
        let ante_sig = null
        if(parseInt(numero)<fin){
            let id_siguiente = 'cont_'+String(parseInt(numero) + 1);
            //let id_anterior = 'cont_'+String(parseInt(numero) - 1);
            let sig_sig = 'siguiente_'+String(parseInt(numero) + 1);
            let ant_sig = 'anterior_'+String(parseInt(numero) + 1);
            siguiente = document.getElementById(id_siguiente);
            //anterior = document.getElementById(id_anterior);
            siguiente_sig = document.getElementById(sig_sig);
            ante_sig = document.getElementById(ant_sig);
        }
        if(siguiente){
            let final = false;
            if(parseInt(numero)+1 == fin){
                final = true
                enviar.classList.add('animacion_abajo');
            }
            elemento.classList.add('animacion_arriba');
            //siguiente_act.classList.add('animacion_arriba');
            setTimeout(() => {
                elemento.style.display = 'none';
                siguiente_act.style.display = 'none';
                try {
                    ant_act.style.display = 'none';
                } catch (error) {
                    console.log(error)
                }
                siguiente.classList.add('animacion_abajo');
                //anterior.classList.add('animacion_abajo');
                //siguiente_sig.classList.add('animacion_abajo');
                siguiente.style.display = 'block';
                //anterior.style.display = 'block';
                if(!final){
                    siguiente_sig.style.display = 'block';
                    ante_sig.style.display = 'block';
                }
                elemento.classList.remove('animacion_arriba');
                //siguiente_act.classList.remove('animacion_arriba');
                setTimeout(() => {
                    if(final){
                        enviar.style.display = 'block';
                        enviar.classList.remove('animacion_abajo');
                        ante_sig.style.display = 'block';
                        ante_sig.style.width = '50px'
                        ante_sig.style.height = '50px'
                    }
                    siguiente.classList.remove('animacion_abajo');
                    //anterior.classList.remove('animacion_abajo');
                    //siguiente_sig.classList.remove('animacion_abajo');
                }, 1000);
            }, 1000);
        }
    }
    let opiniones = document.getElementsByClassName("opinion")
    for(i=0; i<opiniones.length; i++){
        opiniones[i].style.height = "150px"
    }
    let ele = document.getElementById("cuantos");
    let cont = document.getElementById("cuantos_cont");
    ele.style.display = 'none';
    cont.style.display = 'none';
}

function anterior(numero){
    let id = 'cont_'+numero;
    let ant = 'anterior_'+numero;
    let input = 'input_'+numero;
    let ant_act = document.getElementById(ant);
    let elemento = document.getElementById(id);
    let valor = document.getElementsByName(input)[0];
    //console.log(valor);
    valor = valor.value;
    let enviar = document.getElementById('enviar');
    //console.log(`pregunta: ${numero} - valor: ${valor}`)
    if(valor == '' || valor == undefined){
        alert('El campo no puede ir vacio')
    }else{
        let anterior = null
        let ant_ant = null
        if(parseInt(numero)<fin){
            let id_anterior = 'cont_'+String(parseInt(numero) - 1);
            let ant_ant = 'siguiente_'+String(parseInt(numero) - 1);
            siguiente = document.getElementById(id_anterior);
            ant_ant = document.getElementById(ant_ant);
        }
        if(anterior){
            let final = false;
            if(parseInt(numero)-11 == fin){
                final = true
                enviar.classList.add('animacion_abajo');
            }
            elemento.classList.add('animacion_arriba');
            //ant_act.classList.add('animacion_arriba');
            setTimeout(() => {
                elemento.style.display = 'none';
                ant_act.style.display = 'none';
                siguiente.classList.add('animacion_abajo');
                //ant_ant.classList.add('animacion_abajo');
                siguiente.style.display = 'block';
                if(!final){
                    ant_ant.style.display = 'block';
                }
                elemento.classList.remove('animacion_arriba');
                //ant_act.classList.remove('animacion_arriba');
                setTimeout(() => {
                    if(final){
                        enviar.style.display = 'block';
                        enviar.classList.remove('animacion_abajo');
                    }
                    siguiente.classList.remove('animacion_abajo');
                    //ant_ant.classList.remove('animacion_abajo');
                }, 1000);
            }, 1000);
        }
    }
    let opiniones = document.getElementsByClassName("opinion")
    for(i=0; i<opiniones.length; i++){
        opiniones[i].style.height = "150px"
    }
    let ele = document.getElementById("cuantos");
    let cont = document.getElementById("cuantos_cont");
    ele.style.display = 'none';
    cont.style.display = 'none';
}

function leerOpciones(id){
    let ele = document.getElementById("cuantos");
    let cont = document.getElementById("cuantos_cont");
    let text = document.getElementById("cuantos_text");
    if(id == '3'){
        ele.value = '';
        ele.style.display = 'block';
        cont.style.display = 'block';
        console.log("MOSTRADO");
    }else{
        ele.value = 'No';
        ele.style.display = 'none';
        cont.style.display = 'none';
    }
}