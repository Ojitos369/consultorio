function preguntas(numero){
    let id = 'cont_'+numero;
    let sig = 'siguiente_'+numero;
    let input = 'input_'+numero;
    let siguiente_act = document.getElementById(sig);
    let elemento = document.getElementById(id);
    let valor = document.getElementsByName(input)[0];
    console.log(valor);
    valor = valor.value;
    let enviar = document.getElementById('enviar');
    let qr = document.getElementById('footer');
    console.log(`pregunta: ${numero} - valor: ${valor}`)
    if(valor == '' || valor == undefined){
        alert('El campo no puede ir vacio')
    }else{
        let siguiente = null
        let siguiente_sig = null
        if(parseInt(numero)<fin){
            let id_siguiente = 'cont_'+String(parseInt(numero) +1);
            let sig_sig = 'siguiente_'+String(parseInt(numero) + 1);
            siguiente = document.getElementById(id_siguiente);
            siguiente_sig = document.getElementById(sig_sig);
        }
        if(siguiente){
            let final = false;
            if(parseInt(numero)+1 == fin){
                final = true
                enviar.classList.add('animacion_abajo');
                qr.classList.add('animacion_abajo');
            }
            elemento.classList.add('animacion_arriba');
            siguiente_act.classList.add('animacion_arriba');
            setTimeout(() => {
                elemento.style.display = 'none';
                siguiente_act.style.display = 'none';
                siguiente.classList.add('animacion_abajo');
                siguiente_sig.classList.add('animacion_abajo');
                siguiente.style.display = 'block';
                if(!final){
                    siguiente_sig.style.display = 'block';
                }
                elemento.classList.remove('animacion_arriba');
                siguiente_act.classList.remove('animacion_arriba');
                setTimeout(() => {
                    if(final){
                        enviar.style.display = 'block';
                        qr.style.display = 'flex';
                        enviar.classList.remove('animacion_abajo');
                        qr.classList.remove('animacion_abajo');
                    }
                    siguiente.classList.remove('animacion_abajo');
                    siguiente_sig.classList.remove('animacion_abajo');
                }, 1000);
            }, 1000);
        }
    }

}