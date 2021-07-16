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
    let porcentaje_abajo = alto * 0.13;
    let imagen = document.getElementById('img-logo');
    let container =  document.getElementById('main-container');
    let logo =  document.getElementById('logo');
    let frase = document.getElementById('frase')
    // border to container
    //container.style.border = "#fff 1px solid";
    //logo.style.border = "#00f 1px solid";
    let total =  alto - porcentaje_abajo - porcentaje_arriba;

    // estilo imagen
    imagen.style.height = `${total * 0.35}px`
    imagen.style.top = 0;
    imagen.style.marginBottom = `${porcentaje_abajo / 10}px`;
    // widh auto to iamgen
    imagen.style.width = "auto";

    // height to container
    container.style.position = 'fixed';
    container.style.height = `${total}px`;
    container.style.top = `${porcentaje_arriba * 0.9}px`;

    // dinamic margin bottmo to logo
    logo.style.marginBottom = `${total * 0.04}px`;
    
    if(ancho >= 1120){
        frase.style.fontSize = "20px";
    }else if (ancho < 1120 && ancho >= 800){
        frase.style.fontSize = "18px";
    }else{
        frase.style.fontSize = "15px";
    }
}

function formulario(){
    let formulario =  document.getElementById('formulario');
    let container =  document.getElementById('main-container');
    let comentario = document.getElementsByClassName('opinion')[0];
    let qr = document.getElementById('img-qr');

    // get height of container
    let alto = container.offsetHeight;

    let alto_form = alto * 0.54

    //border to formulario
    //formulario.style.border = "#0f0 1px solid";
    formulario.style.height = `${alto_form}px`;
    formulario.style.paddingBottom = `${alto * 0.1}px`;

    // set padding to comentario
    comentario.style.paddingBottom = `${alto * 0.1}px`;    
    //comentario.style.border = "#f00 1px solid";

    // height to qr 80% alto_form
    qr.style.height = `${alto_form * 0.8}px`;
    // qr widht auto
    qr.style.width = "auto";

}

function tamanios(){
    logo();
    formulario();
}

window.addEventListener("resize", function(event){
    tamanios();
});