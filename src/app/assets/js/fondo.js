function ocultar(){
    let fondo = document.getElementById('container-fondo');
    fondo.style.display = 'none';
    setTimeout(()=>{
        let fondo = document.getElementById('container-fondo');
        fondo.style.display = 'block';
    },10000);
}

function mostrar_formulario(){
    setTimeout(()=>{
        let formulario = document.getElementById('container-form');
        formulario.style.visibility = 'visible';
    },3000);
}