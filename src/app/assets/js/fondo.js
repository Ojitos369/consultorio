function ocultar(){
    let fondo = document.getElementById('img_fondo');
    let protector = document.getElementById('protector');
    fondo.style.zIndex = -1000
    protector.style.display = 'none';
    setTimeout(()=>{
        let fondo = document.getElementById('img_fondo');
        let protector = document.getElementById('protector');
        fondo.style.zIndex = 9
        protector.style.display = 'flex';
    },10000);
}

function inicio(){
    let fondo = document.getElementById('img_fondo');
    fondo.style.zIndex = 9
}

function mostrar_formulario(){
    setTimeout(()=>{
        let formulario = document.getElementById('protector');
        formulario.style.visibility = 'visible';
    },3000);
}