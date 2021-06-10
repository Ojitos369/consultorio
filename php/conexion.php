<?php
function conectar($ruta){
    /* $data = @file_get_contents($ruta);
    $datos = json_decode($data, true);
    $user = $datos["root"];
    $password = $datos[""];
    $server = $datos["locahost"];
    $database = $datos["database"]; */
    $conexion = new mysqli('localhost', 'root', '', 'consultorio');
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
?>