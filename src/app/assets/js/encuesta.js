window.onscroll = function() {
    if(encuesta = 'incial'){
        let frase = document.getElementById("frase");
        let y = window.scrollY;
        if (checar){
            verificar_scroll();
        }
    }
    else if(encuest = 'final'){
        let frase = document.getElementById("frase");
        let y = window.scrollY;
        if(y > 0){
            frase.classList.remove("frase3");
            frase.classList.add("frase2");
        }else{
            frase.classList.add("frase3");
            frase.classList.remove("frase2");
        }
    }
};

window.addEventListener("resize", function(event){
    let imagen = document.getElementById('img-logo');
    let alto = screen.height/4;
    let largo = alto * 3;
    imagen.style.height = (`${alto}px`);
    imagen.style.width = (`${largo}px`);
    /* let ancho_total = screen.width;
    let ancho = (imagen.clientWidth / ancho_total * 100) * 2;
    console.clear();
    console.log(`ancho %: ${ancho}`);
    console.log(`ancho total: ${ancho_total}`);
    let ini = parseInt(inicio);
    let fi = parseInt(fin);
    let frase = document.getElementById('frase');
    frase.style.width = (`${ancho}%`);
    for(i=ini; i<=fi; i++){
        let elemento = document.getElementById(`cont_${i}`);
        elemento.style.width = (`${ancho}%`);
    } */
});


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

function verificar_scroll(){
    let ini = parseInt(inicio);
    let fi = parseInt(fin);
    let logo = document.getElementById(`logo`);
    for(i=ini; i<=fi; i++){
        let elemento = document.getElementById(`cont_${i}`);
        let coords = elemento.getBoundingClientRect();
        if(coords.top < (logo.clientHeight)){
            elemento.classList.add("ocultar_form");
        }else{
            elemento.classList.remove("ocultar_form");
        }
    }
}