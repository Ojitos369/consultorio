<?php
require('./php/conexion.php');
$conexion = conectar('./json/datos.json');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    var_dump($_POST);
    $nombre = $_POST['input_1'];
    $encuesta = $_POST['id_encuesta'];
    $query = "insert into usuario (nombre) values ('$nombre')";
    $conexion->query($query);
    $id_usuario = $conexion->insert_id;
    
    for($i=1; $i<16; $i++){
        $respuesta = $_POST["input_$i"];
        $query = "insert into contestado (id_usuario, id_encuesta, id_pregunta, respuesta) values ($id_usuario, $encuesta, $i, '$respuesta')";
        $conexion->query($query);
    }
}

$conexion->close();
header('location: redireccion.php');
?>