<?php
echo phpversion();
include ('../php/conexion.php');
$conexion = conectar('../php/datos.json');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $sql = "SELECT pregunta FROM preguntas WHERE id_seccion = 1";
    $resultado = $conexion->query($sql);
    while($consulta = $resultado->fetch_array()){
        echo "<p> $consulta[0] </p>";
    }
    $conexion->close();
?>
</body>
</html>