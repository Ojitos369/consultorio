window.onscroll = function() {
    let frase = document.getElementById("frase");
    let y = window.scrollY;
    if(y > 0){
        frase.classList.remove("frase3");
        frase.classList.add("frase2");
    }else{
        frase.classList.add("frase3");
        frase.classList.remove("frase2");
    }
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