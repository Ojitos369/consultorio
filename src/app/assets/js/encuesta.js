window.onscroll = function() {
    let frase = document.getElementById("frase");
    let y = window.scrollY;
    verificar_scroll();
};

function animaciones(){
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

function verificar_scroll(){
    let ini = parseInt(inicio);
    let fi = parseInt(fin);
    let logo = document.getElementById(`logo`);
    for(i=ini; i<=fi; i++){
        let elemento = document.getElementById(`cont_${i}`);
        let coords = elemento.getBoundingClientRect();
        console.log(`cont_${i}: `+coords.top);
        if(coords.top < (logo.clientHeight + 30)){
            elemento.classList.add("ocultar_form");
        }else{
            elemento.classList.remove("ocultar_form");
        }
    }
}