<?php
require('./php/conexion.php');
$conexion = conectar('./json/datos.json');
$query = "select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=1)";
$preguntas = $conexion->query($query);
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/encuesta.css">
    <link rel="stylesheet" href="./css/encuesta_inicial.css">
    <link rel="stylesheet" href="./css/fondo.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="icon" href="./imagenes/logo-simple.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/encuesta.js"></script>
    <script src="./js/encuesta_inicial.js"></script>
    <script>
        let checar = true;
        let inicio = '1';
        let encuesta = 'inicial';
        let fin = '<?= $preguntas->num_rows ?>';
    </script>
</head>

<body onload="animaciones(); tamanios();">
    <img src="./imagenes/fondo.jpeg" alt="" class="img-fondo">
    <div class="main-container" id="main-container">
        <div id="logo" class="logo">
            <?php require('logo.php'); ?>
        </div>
        <form action="r_inicio.php" method="POST" id="formulario" class="formulario container" autocomplete="off">
            <?php
                while($pregunta = $preguntas->fetch_assoc()):
                    $query = "select * from respuestas";
                    $respuestas = $conexion->query($query);
                    if($pregunta["tipo"] == 'date'){
            ?>
                    <label for="pregunta-<?= $pregunta["id"] ?>" id="cont_<?= $pregunta["id"] ?>" class="pregunta <?= $pregunta["clase"] ?>">
                        <?= $pregunta["pregunta"] ?> <br>
                        <input id="pregunta-<?= $pregunta["id"] ?>" class="input_<?= $pregunta["id"] ?> input input-fecha"  name="input_<?= $pregunta["id"] ?>" type="<?= $pregunta["tipo"] ?>" required="">
                    </label>
                <?php
                    }else if($pregunta["tipo"] == 'checkbox' || $pregunta["tipo"] == 'radio'){
                ?>
                    <div id="cont_<?= $pregunta["id"] ?>" class="eleccion pregunta <?= $pregunta["clase"] ?>">
                    <?= $pregunta["pregunta"] ?>
                    <br>
                    <br>
                    <?php 
                        while($respuesta = $respuestas->fetch_assoc()):
                            if($respuesta["id_pregunta"] == $pregunta["id"]){
                    ?>
                                <label for="respuesta<?= $respuesta["id"] ?>" class="cont_eleccion">
                                    <input class="input_<?= $pregunta["id"] ?> input input-eleccion" id="respuesta<?= $respuesta["id"] ?>" type="<?= $pregunta["tipo"] ?>" value="<?= $respuesta["respuesta"] ?>" name="input_<?= $pregunta["id"] ?>" required="">
                                    <span><?= $respuesta["respuesta"] ?></span>
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
                    <textarea id="cont_<?= $pregunta["id"] ?>" class="input_<?= $pregunta["id"] ?> pregunta input input-textarea <?= $pregunta["clase"] ?>" name="input_<?= $pregunta["id"] ?>" placeholder="<?= $pregunta["pregunta"] ?>" type="<?= $pregunta["tipo"] ?>" required=""></textarea>
                    
                <?php
                    }else{
                ?>
                    <input id="cont_<?= $pregunta["id"] ?>" class="pregunta input input-texto <?= $pregunta["clase"] ?>" name="input_<?= $pregunta["id"] ?>" placeholder="<?= $pregunta["pregunta"] ?>" type="<?= $pregunta["tipo"] ?>" required=""></input>
                <?php
                    }
                ?>
                <div class="siguiente <?= $pregunta["clase"] ?>" id="siguiente_<?= $pregunta["id"] ?>" onclick="preguntas('<?= $pregunta["id"] ?>');">
                    <img src="./imagenes/siguiente.png" alt="">
                </div>
            <?php
                endwhile
            ?>
            <input name="id_encuesta" type="hidden" value="1" required="">
            <input id="enviar" class="pregunta input enviar" type="submit" title="enviar">
            <div class="container container-qr" id="footer">
                <p class="insta_text">"Te invito a seguirme en Instagram, donde encontraras beneficios e información relevante cada semana"</p>
                <br>
                <img src="./imagenes/qr.png" alt="" class="instagram qr">
            </div>
        </form>
    </div>
</body>
</html>
<?php
$conexion->close();
?>