function ocultar(){
    let fondo = document.getElementById('protector');
    fondo.style.display = 'none';
    setTimeout(()=>{
        let fondo = document.getElementById('protector');
        fondo.style.display = 'flex';
    },10000);
}

function mostrar_formulario(){
    setTimeout(()=>{
        let formulario = document.getElementById('protector');
        formulario.style.visibility = 'visible';
    },3000);
}