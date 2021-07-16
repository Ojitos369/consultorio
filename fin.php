<?php
require('./php/conexion.php');
$conexion = conectar('./json/datos.json');
$query = "select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=2)";
$preguntas = $conexion->query($query);
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/encuesta.css">
    <link rel="stylesheet" href="./css/fondo.css">
    <link rel="stylesheet" href="./css/encuesta_fin.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="icon" href="./imagenes/logo-simple.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/encuesta_fin.js"></script>
    <script src="./js/encuesta.js"></script>
    <script>
        console.log('<?= $preguntas->num_rows + 15 ?>');
        let checar = false;
        let inicio = '16';
        let encuesta = 'final';
        let fin = '<?= $preguntas->num_rows + 15 ?>';
    </script>
</head>

<body onload="animaciones(); tamanios();">
    <img src="./imagenes/fondo.jpeg" alt="" class="img-fondo">
    <div class="main-container" id="main-container">
        <div id="logo" class="logo">
            <?php require('logo.php'); ?>
        </div>
        <form action="r_fin.php" method="POST" id="formulario" class="formulario container" autocomplete="off">
            <?php 
                while($pregunta = $preguntas->fetch_assoc()):
                    $query = "select * from respuestas";
                    $respuestas = $conexion->query($query);
            ?>
                <?php if($pregunta["tipo"] == 'checkbox' || $pregunta["tipo"] == 'radio'){ ?>
                    <div id="cont_<?= $pregunta["id"] ?>" class="caritas pregunta <?= $pregunta["clase"] ?>">
                    <?= $pregunta["pregunta"] ?>
                    <br>
                    <div class="eleccion">
                    <?php
                    while($respuesta = $respuestas->fetch_assoc()):
                    ?>
                        <?php if($respuesta["id_pregunta"] == $pregunta["id"]){ ?>
                                <label id="cont_<?= $pregunta["id"] ?>" class="label-seleccion" for="respuesta<?= $respuesta["id"] ?>"><input class="input input-eleccion" id="respuesta<?= $respuesta["id"] ?>" type="<?= $pregunta["tipo"] ?>" value="<?= $respuesta["respuesta"] ?>" name="<?= $pregunta["id"] ?>" required=""><img class="img-res" src="./imagenes/<?= $respuesta["respuesta"] ?>.png" alt="<?= $respuesta["respuesta"] ?>" onclick="cambio('<?= $pregunta["id"] ?>')"></label>
                        <?php } ?>
                    <?php
                        endwhile
                    ?>
                    </div>
                    </div>
                <?php }else if($pregunta["tipo"] == 'textarea'){?>
                    <textarea id="cont_<?= $pregunta["id"] ?>" class="pregunta input input-textarea <?= $pregunta["clase"] ?>" name="<?= $pregunta["id"] ?>" placeholder="<?= $pregunta["pregunta"] ?>" type="<?= $pregunta["tipo"] ?>" required=""></textarea>
                    <br>
                <?php }else{ ?>
                    <input id="cont_<?= $pregunta["id"] ?>" class="pregunta input input-texto <?= $pregunta["clase"] ?>" name="<?= $pregunta["id"] ?>" placeholder="<?= $pregunta["pregunta"] ?>" type="<?= $pregunta["tipo"] ?>" required=""></input><br>
                <?php } ?>
                <br>
            <?php
                endwhile
            ?>
            <input name="id_encuesta" type="hidden" value="2">
            <input id="enviar" class="pregunta input enviar" type="submit" title="enviar">
            <div class="container container-qr" id="footer">
            <p class="insta_text">"Te invito a seguirme en Instagram, donde encontraras beneficios e información relevante cada semana"</p>
            <img src="./imagenes/qr.png" alt="" class="instagram qr">
        </div>
        </form>
    </div>
    
</body>
</html>

<?php $conexion->close(); ?>