//code in javaScript
function protector(){
    let alto = screen.height;
    let ancho = screen.width;
    let protector = document.getElementById("protector");
    let porcentaje_arriba = alto * 0.1;
    let porcentaje_abajo = alto * 0.1;
    let altura_protector = alto - porcentaje_abajo - porcentaje_arriba;
    let imagen = document.getElementsByClassName("img-logo")[0];
    let frase = document.getElementsByClassName("frase")[0];
    protector.style.height = `${altura_protector}px`
    protector.style.top = `${porcentaje_arriba / 6}px`;
    imagen.style.height = `${altura_protector * 0.45}px`
    imagen.style.top = 0;
    imagen.style.marginBottom = `${porcentaje_abajo / 10}px`;
    protector.style.paddingBottom = `${porcentaje_abajo / 5}px`;
    console.clear();
    console.log(`alto: ${alto}`);
    console.log(`ancho: ${ancho}`);
    console.log(`porcentaje_arriba: ${porcentaje_arriba}`);
    console.log(`porcentaje_abajo: ${porcentaje_abajo}`);
    console.log(`altura_protector: ${altura_protector}`);
}

function principal(){
    // get width and height of the screen
    let alto = screen.height;
    let ancho = screen.width;
    // procentaje of the top and bottom
    let porcentaje_arriba = alto * 0.1;
    let porcentaje_abajo = alto * 0.1;
    let altura_container = alto - porcentaje_abajo - porcentaje_arriba;
    // get img-logo from the DOM
    let imagen = document.getElementsByClassName("img-logo")[1];
    let frase = document.getElementsByClassName("frase")[1];
    let frase2 = document.getElementsByClassName("frase")[0];
    // get container from the DOM
    let container = document.getElementById("container");
    // set new heifht of the container
    container.style.height = `${altura_container}px`;
    // set atributter for img-logo
    imagen.style.height = `${altura_container * 0.35}px`
    imagen.style.top = 0;
    imagen.style.marginBottom = `${porcentaje_abajo / 10}px`;
    // set new top of the container
    container.style.top = `${porcentaje_arriba * 0.6}px`;
    // get encuestas from the DOM by id "encuestas"
    let encuestas = document.getElementById("encuestas");
    // set matgin top of the encuestas
    encuestas.style.marginTop = `${porcentaje_abajo / 2}px`;
    // get encuestas from the DOM by class "encuesta"
    let encuestas_class = document.getElementsByClassName("encuesta");
    // set encuesta height and width
    for (let i = 0; i < encuestas_class.length; i++) {
        let encuesta = encuestas_class[i];
        let altura_encuesta = altura_container * 0.14;
        encuesta.style.height = `${altura_encuesta}px`
        encuesta.style.width = `${ancho * 0.2}px`;
        if(ancho >= 1120){
            encuesta.style.fontSize = "30px"
            frase.style.fontSize = "30px"
            frase2.style.fontSize = "40px"
        }else if (ancho < 1120 && ancho >= 800){
            encuesta.style.fontSize = "25px"
            frase.style.fontSize = "25px"
            frase2.style.fontSize = "37px"
        }else{
            encuesta.style.fontSize = "20px"
            frase.style.fontSize = "20px"
            frase2.style.fontSize = "25px"
        }
        encuesta.style.paddingTop = `${altura_encuesta * 0.2}px`;
    }
    // set border to encuestas
    //encuestas.style.border = `1px solid #c00`;
    console.clear();
    console.log(`alto: ${alto}`);
    console.log(`ancho: ${ancho}`);
    console.log(`porcentaje_arriba: ${porcentaje_arriba}`);
    console.log(`porcentaje_abajo: ${porcentaje_abajo}`);
    console.log(`altura_container: ${altura_container}`);
}

function ajustar(){
    protector();
    principal();
}

window.addEventListener("resize", function(event){
    ajustar();
});