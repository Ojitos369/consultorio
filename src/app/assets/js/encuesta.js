window.onscroll = function() {
    let frase = document.getElementById("frase");
    let y = window.scrollY;
    if(y > 0){
        frase.classList.remove("frase");
        frase.classList.add("frase2");
    }else{
        frase.classList.add("frase");
        frase.classList.remove("frase2");
    }
};