<?php
require('./php/conexion.php');
$conexion = conectar('./json/datos.json');
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/consulta.css">
    <link rel="stylesheet" href="./css/fondo.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./imagenes/logo-simple.png">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

    <script>
        let dato;
        let datos = [];
        <?php
            $query = "select us.nombre, enc.nombre as encuesta, pre.pregunta, con.respuesta from  contestado as con inner join usuario as us on con.id_usuario=us.id inner join encuesta as enc on enc.id=con.id_encuesta inner join preguntas as pre on pre.id=con.id_pregunta inner join usuario as us2 on us2.id=con.id_usuario";
            $consulta = $conexion->query($query);
            while($dato = $consulta->fetch_assoc()):
        ?>
            dato = {
                    "nombre": '<?= $dato["nombre"] ?>',
                    "encuesta": '<?= $dato["encuesta"] ?>',
                    "pregunta": '<?= $dato["pregunta"] ?>',
                    "respuesta": '<?= $dato["respuesta"] ?>'
                }
            console.log(dato)
            datos.push(dato)
        <?php
            endwhile
        ?>
        console.log(datos);
        let paso = JSON.stringify(datos);
        console.log(paso);
    </script>
    <script src="./js/consulta.js"></script>
    <title>consulta</title>
</head>
<body onload="tablaCompleta(paso);">
    <img src="./imagenes/fondo.jpeg" alt="" class="img-fondo">
    <div class="">
        <input placeholder="Buscar" class="buscar d-inline w-75 form-control border border-dark rounded-pill" type="text" id="buscar-pal" onkeyup="autocompletado(paso);">
        <button class="btn btn-secondary" onclick="bajarCsv('table','datos');">Descargar datos</button>
    </div>
    <div>
        <table id="table" class="table">
        </table>
    </div>
</body>
</html>
<?php
$conexion->close();
?>