<?php

function conectar($ruta){
    $data = file_get_contents($ruta);
    $datos = json_decode($data);

    $host = $datos->{'host'};
    $user = $datos->{'user'};
    $passwd = $datos->{'passwd'};
    $database = $datos->{'database'};
    $conexion = new mysqli($host, $user, $passwd, $database);
    if(!$conexion){
        echo 'error';
    }
    return $conexion;
}
?>