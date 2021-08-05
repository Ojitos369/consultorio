function ocultar(){
    let fondo = document.getElementById('img_fondo');
    let protector = document.getElementById('protector');
    let logo = document.getElementById('frase');
    let img = document.getElementById('img-logo');
    logo.style.fontSize = "30px";
    logo.style.display = 'block';
    img.style.display = 'none';
    setTimeout(()=>{
        fondo.style.zIndex = -1000
        protector.style.display = 'none';
        setTimeout(()=>{
            let fondo = document.getElementById('img_fondo');
            let protector = document.getElementById('protector');
            logo.style.display = 'none';
            img.style.display = 'block';
            fondo.style.zIndex = 9
            protector.style.display = 'flex';
        },40000);
    },3000);
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