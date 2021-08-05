function ajustar(){
    let fondo = document.getElementById("img-fondo");
    let alto = fondo.offsetHeight;
    let container = document.getElementById("container");
    let total =  alto * 0.70;
    
    // style to container
    container.style.position = 'fixed';
    container.style.height = `${total}px`;
    container.style.top = `${alto * 0.15}px`;

    // border to container
    container.style.border = "#f00 8px solid";
}