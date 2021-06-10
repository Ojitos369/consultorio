<?php
function conectar($ruta){
    
    $conexion = new mysqli('localhost', 'root', '', 'consultorio');
   
    if($conexion->connect_errno){
        echo $conexion->connect_errno,"error";
        exit();
    }
    mysqli_set_charset($conexion,'utf8');
    return $conexion;
}
?>