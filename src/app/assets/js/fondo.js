function ocultar(){
    let fondo = document.getElementById('container-fondo');
    fondo.style.display = 'none';
    setTimeout(()=>{
        let fondo = document.getElementById('container-fondo');
        fondo.style.display = 'block';
    },10000);
}