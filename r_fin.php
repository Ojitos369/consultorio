<?php
require('./php/conexion.php');
$conexion = conectar('./json/datos.json');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $nombre = $_POST['16'];
    $encuesta = $_POST['id_encuesta'];
    $query = "insert into usuario (nombre) values ('$nombre')";
    $conexion->query($query);
    $id_usuario = $conexion->insert_id;
    var_dump($_POST);
    for($i=16; $i<20; $i++){
        $respuesta = $_POST["$i"];
        $query = "insert into contestado (id_usuario, id_encuesta, id_pregunta, respuesta) values ($id_usuario, $encuesta, $i, '$respuesta')";
        $conexion->query($query);
    }
}

$conexion->close();
header('location: index.php');
?>