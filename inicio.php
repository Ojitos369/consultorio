<?php
header("Content-Type: text/html; charset=iso-8859-1");
require('./php/conexion.php');
$conexion = conectar('./json/datos.json');
$query = "select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=1)";
$preguntas = $conexion->query($query);
// array "acentuadas" in php with vocals accented
$simbolos = array("á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "¿");
// array "simbolos_codif" with simbols in $simbolos to html codified start with &
$simbolos_codif = array("&aacute;", "&eacute;", "&iacute;", "&oacute;", "&uacute;", "&Aacute;", "&Eacute;", "&Iacute;", "&Oacute;", "&Uacute;", "&iquest;");
?>

<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <script>
        let checar = true;
        let inicio = '1';
        let encuesta = 'inicial';
        let fin = '<?= $preguntas->num_rows ?>';
        let flecha = true;
    </script>
    <script src="./js/encuesta.js"></script>
    <script src="./js/encuesta_inicial.js"></script>
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/encuesta.css">
    <link rel="stylesheet" href="./css/encuesta_inicial.css">
    <link rel="stylesheet" href="./css/fondo.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="icon" href="./imagenes/logo-simple.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body onload="animaciones(); tamanios();">
    <img src="./imagenes/fondo.jpeg" alt="" class="img-fondo" id="img_fondo">
    <div class="main-container" id="main-container">
        <!-- <form action="r_inicio.php" method="POST" id="formulario" class="formulario container" autocomplete="off"> -->
        <form action="index.php" method="POST" id="formulario" class="formulario container" autocomplete="off">
            <?php
                while($pregunta = $preguntas->fetch_assoc()):
                    $query = "select * from respuestas";
                    $respuestas = $conexion->query($query);
                    if($pregunta["tipo"] == 'date'){
            ?>
                    <label for="pregunta-<?= $pregunta["id"] ?>" id="cont_<?= $pregunta["id"] ?>" class="pregunta <?= $pregunta["clase"] ?>">
                        <?= str_replace($simbolos, $simbolos_codif, $pregunta["pregunta"]) ?> <br>
                        <input id="pregunta-<?= $pregunta["id"] ?>" class="input_<?= $pregunta["id"] ?> input input-fecha"  name="input_<?= $pregunta["id"] ?>" type="<?= $pregunta["tipo"] ?>" required="">
                    </label>
                <?php
                    }else if($pregunta["tipo"] == 'checkbox' || $pregunta["tipo"] == 'radio'){
                ?>
                    <div id="cont_<?= $pregunta["id"] ?>" class="eleccion pregunta <?= $pregunta["clase"] ?>">
                    <?= str_replace($simbolos, $simbolos_codif, $pregunta["pregunta"]) ?>
                    <br>
                    <br>
                    <?php 
                        while($respuesta = $respuestas->fetch_assoc()):
                            if($respuesta["id_pregunta"] == $pregunta["id"]){
                    ?>
                                <label for="respuesta<?= $respuesta["id"] ?>" id="labelR<?= $respuesta["id"] ?>" class="cont_eleccion" onclick="leerOpciones(<?= $respuesta['id'] ?>);">
                                    <input class="input_<?= $pregunta["id"] ?> input input-eleccion" id="respuesta<?= $respuesta["id"] ?>" type="<?= $pregunta["tipo"] ?>" value="<?= str_replace($simbolos, $simbolos_codif, $respuesta["respuesta"]) ?>" name="input_<?= $pregunta["id"] ?>" required="">
                                    <span><?= str_replace($simbolos, $simbolos_codif, $respuesta["respuesta"]) ?></span>
                                </label>
                                <br>
                    <?php
                            }
                        endwhile
                    ?>
                    </div>
                <?php
                    }else if($pregunta["tipo"] == 'textarea'){
                ?>
                    <textarea id="cont_<?= $pregunta["id"] ?>" class="input_<?= $pregunta["id"] ?> pregunta input input-textarea <?= $pregunta["clase"] ?>" name="input_<?= $pregunta["id"] ?>" placeholder="<?= str_replace($simbolos, $simbolos_codif, $pregunta["pregunta"]) ?>" type="<?= $pregunta["tipo"] ?>" required=""></textarea>
                    
                <?php
                    }else{
                ?>
                    <input id="cont_<?= $pregunta["id"] ?>" class="pregunta input input-texto <?= $pregunta["clase"] ?>" name="input_<?= $pregunta["id"] ?>" placeholder="<?= str_replace($simbolos, $simbolos_codif, $pregunta["pregunta"]) ?>" type="<?= $pregunta["tipo"] ?>" required=""></input>
                <?php
                    }
                ?>
                <?php 
                if($pregunta["clase"] == "pregunta-13 especial"):?>
                    <label for="cuantos" id="cuantos_cont" class="pregunta">
                        <br>
                        <input type="text" id="cuantos" class="input input-fecha <?= $pregunta["clase"] ?>" name="input_<?= $pregunta["id"] ?>" placeholder="Cuantas: "></input>
                    </label>
                <?php endif ?>
                <div class="flechas" id="flechas">
                    <?php if($pregunta["id"] != 1): ?>
                        <img src="./imagenes/anterior.png" alt="" class="anterior <?= $pregunta["clase"] ?>" id="anterior_<?= $pregunta["id"] ?>" onclick="anterior('<?= $pregunta["id"] ?>');">
                    <?php endif ?>
                    <img src="./imagenes/siguiente.png" alt="" class="siguiente <?= $pregunta["clase"] ?>" id="siguiente_<?= $pregunta["id"] ?>" onclick="siguiente('<?= $pregunta["id"] ?>');">
                </div>
            <?php
                endwhile
            ?>
            <input name="id_encuesta" type="hidden" value="1" required="">
            <!-- <input id="enviar" class="pregunta input enviar" type="submit" title="enviar"> -->
            <button id="enviar" class="pregunta input enviar" title="enviar" onclick="alert('Servicio no disponible por falta de pago')">
                        Enviar
            </button>
        </form>
        <div id="logo" class="logo">
            <?php require('logo.php'); ?>
        </div>
    </div>
    <script>animaciones(); tamanios();</script>
</body>
</html>
<?php
$conexion->close();
?>