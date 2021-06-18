function hola(datos){
    let consulta = JSON.parse(datos);
    console.log('consulta desde js\n');
    console.log(consulta.length);
    console.log(consulta[0].nombre);
}