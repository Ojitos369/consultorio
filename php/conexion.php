<?php
function conectar($ruta){
    $data = @file_get_contents($ruta);
    $datos = json_decode($data, true);
    $user = $datos["username"];
    $password = $datos["passwd"];
    $server = $datos["host"];
    $database = $datos["database"];
    $conexion = new mysqli($server, $user, $password, $database);
    #$conexion = mysqli_connect($server, $user, $password, $database);
    if($conexion->connect_errno){
        echo $conexion->connect_errno,"error";
        exit();
    }#else{
        #echo "Conectado correctamente";
    #}
    mysqli_set_charset($conexion,'utf8');
    return $conexion;
}
conectar('datos.json')
?>