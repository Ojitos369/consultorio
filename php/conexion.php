<?php

function conectar($ruta){
    $data = file_get_contents($ruta);
    $datos = json_decode($data);

    $host = $datos->{'host'};
    $user = $datos->{'user'};
    $passwd = $datos->{'passwd'};
    $database = $datos->{'database'};

    echo "host: " . $host . "<br>";
    echo "usuario: " . $user . "<br>";
    echo "contra: " . $passwd . "<br>";
    echo "database: " . $database . "<br>";
    echo phpversion();
    $conexion = new mysqli($host, $user, $passwd, $database);
    if(!$conexion){
        echo 'error';
    }else{
        var_dump($conexion);
    }
    return $conexion;
}
?>