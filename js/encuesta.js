/* window.onscroll = function() {
    
}: */

function animaciones(){
    let imagen = document.getElementById('img-logo');
    let alto = screen.height/4;
    let largo = alto * 3;
    imagen.style.height = (`${alto}px`);
    imagen.style.width = (`${largo}px`);

    setTimeout(() => {
        let imagen = document.getElementById("img-logo");
        imagen.style.left = '0px';
    },3000);
    setTimeout(() => {
        let frase = document.getElementById("frase");
        frase.style.right = '0px';
        frase.classList.remove("frase");
        frase.classList.add("frase3");
    },3000);
    setTimeout(() => {
        let formulario = document.getElementById("formulario");
        formulario.style.opacity = 1;
    },6000);
}

// function for logo style
function logo(){
    let alto = screen.height;
    let ancho = screen.width;
    let porcentaje_arriba = alto * 0.1;
    let porcentaje_abajo = alto * 0.15;
    let imagen = document.getElementById('img-logo');
    let container =  document.getElementById('main-container');
    let logo =  document.getElementById('logo');
    let frase = document.getElementById('frase');
    let total =  alto * 0.65;

    // estilo imagen
    imagen.style.height = `${total * 0.25}px`
    imagen.style.top = 0;
    imagen.style.marginBottom = `${porcentaje_abajo / 10}px`;
    // widh auto to iamgen
    imagen.style.width = "auto";

    // height to container
    container.style.position = 'fixed';
    container.style.height = `${total}px`;
    container.style.top = `${alto * 0.09}px`;

    // dinamic margin bottmo to logo
    logo.style.paddingBottom = `${total * 0.04}px`;
    
    if(ancho >= 1120){
        frase.style.fontSize = "20px";
    }else if (ancho < 1120 && ancho >= 800){
        frase.style.fontSize = "18px";
    }else{
        frase.style.fontSize = "15px";
    }

    //container.style.border = "#f00 2px solid";
    //logo.style.border = "#00f 1px solid";
}

function formulario(){
    let formulario =  document.getElementById('formulario');
    let container =  document.getElementById('main-container');
    let comentario = document.getElementsByClassName('opinion')[0];
    let qr = document.getElementById('img-qr');

    // get height of container
    let alto = container.offsetHeight;

    let alto_form = alto * 0.6

    //border to formulario
    formulario.style.height = `${alto_form}px`;

    // set padding to comentario
    comentario.style.paddingBottom = `${alto * 0.1}px`;    

    // height to qr 80% alto_form
    qr.style.height = `${alto_form * 0.8}px`;
    // qr widht auto
    qr.style.width = "auto";
    
    //formulario.style.border = "#0f0 1px solid";
    //comentario.style.border = "#f00 1px solid";
}

function posicion_flecha(){
    console.log('');
    /* for(let i = inicio; i < fin; i++){
        let pregunta = document.getElementById(`cont_${i}`);
        let flecha = document.getElementById(`siguiente_${i}`);
        // obtain width of pregunta
        let ancho_pregunta = pregunta.offsetWidth;
        // set flecha position at end of pregunta max position 500px
        flecha.style.left = `${ancho_pregunta/2}px`;
    } */
}

function tamanios(){
    logo();
    formulario();
    if(flecha){
        posicion_flecha();
    }
}

window.addEventListener("resize", function(event){
    tamanios();
});