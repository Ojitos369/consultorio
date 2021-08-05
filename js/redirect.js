function logo(){
    let fondo = document.getElementById("img_fondo");
    let alto = fondo.offsetHeight;
    let ancho = fondo.offsetWidth;
    let porcentaje_arriba = alto * 0.1;
    let porcentaje_abajo = alto * 0.15;
    let imagen = document.getElementById('img-logo');
    let container =  document.getElementById('main-container');
    let logo =  document.getElementById('logo');
    let frase = document.getElementById('insta_text');
    let footer = document.getElementById('footer');
    let qr = document.getElementById('img-qr');
    let total =  alto * 0.65;

    // estilo imagen
    imagen.style.height = `${total * 0.18}px`
    imagen.style.top = 0;
    imagen.style.marginBottom = `${porcentaje_abajo * 0.1}px`;
    // widh auto to iamgen
    imagen.style.width = "auto";

    // height to container
    container.style.position = 'fixed';
    container.style.height = `${total}px`;
    container.style.top = `${alto * 0.15}px`;

    // margintop to logo
    logo.style.marginTop = `${total * 0.07}px`;
    

    // qr height 60% to container
    qr.style.height = `${total * 0.50}px`;
    
    frase.style.marginBottom = `${total * 0.04}px`;    

    if(ancho >= 1120){
        frase.style.fontSize = "30px";
    }else if (ancho < 1120 && ancho >= 800){
        frase.style.fontSize = "27px";
    }else{
        frase.style.fontSize = "24px";
    }

    //container.style.border = "#f00 2px solid";
    //logo.style.border = "#00f 1px solid";
}

window.addEventListener("resize", function(event){
    logo();
});