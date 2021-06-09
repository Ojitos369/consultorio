<?php
function conectar(){
    $data = @file_get_contents('datos.json');
    $datos = json_decode($data, true);
    
    $user = $datos["username"];
    $password = $datos["passwd"];
    $server = $datos["host"];
    $database = $datos["database"];
    $conexion = new mysqli($server, $user, $password);
    if($conexion->connect_errno){
        echo $conexion->connect_errno,"error";
        exit();
    }else{
        echo "Conectado correctamente";
    }
    mysqli_set_charset($conexion,'utf8');
    $db = mysqli_select_db($conexion, $database);
    return $db;
}

conectar()
?>