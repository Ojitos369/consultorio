<?php
function conectar(){
    $datos = json_decode("./datos.json");
    $user = $datos["username"];
    $password = $datos["passwd"];
    $server = $datos["host"];
    $database = $datos["database"];
    $conexion = new mysqli($server, $user, $password);
    if($conexion->connect_errno){
        echo $conexion->connect_errno;
        exit();
    }else{
        echo "Conectado correctamente";
        echo $datos["username"];
    }
    mysqli_set_charset($conexion,'utf8');
    $db = mysqli_select_db($conexion, $database);
    return $db;
}

conectar()
?>