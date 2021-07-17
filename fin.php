<?php
header("Content-Type: text/html; charset=iso-8859-1");
require('./php/conexion.php');
$conexion = conectar('./json/datos.json');
$query = "select * from preguntas where preguntas.id_seccion in (select id from seccion where seccion.id_encuesta=2)";
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
        let flecha = false;
    </script>
</head>

<body onload="animaciones(); tamanios();">
    <img src="./imagenes/fondo.jpeg" alt="" class="img-fondo">
    <div class="main-container" id="main-container">
        <div id="logo" class="logo">
            <?php require('logo.php'); ?>
        </div>
        <form accept-charset="utf-8" action="r_fin.php" method="POST" id="formulario" class="formulario container" autocomplete="off">
            <?php 
                while($pregunta = $preguntas->fetch_assoc()):
                    $query = "select * from respuestas";
                    $respuestas = $conexion->query($query);
            ?>
                <?php if($pregunta["tipo"] == 'checkbox' || $pregunta["tipo"] == 'radio'){ ?>
                    <div id="cont_<?= $pregunta["id"] ?>" class="caritas pregunta <?= $pregunta["clase"] ?>">
                    <?= str_replace($simbolos, $simbolos_codif, $pregunta["pregunta"]) ?>
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
                    <textarea id="cont_<?= $pregunta["id"] ?>" class="pregunta input input-textarea <?= $pregunta["clase"] ?>" name="<?= $pregunta["id"] ?>" placeholder="<?= str_replace($simbolos, $simbolos_codif, $pregunta["pregunta"]) ?>" type="<?= $pregunta["tipo"] ?>" required=""></textarea>
                    <br>
                <?php }else{ ?>
                    <input id="cont_<?= $pregunta["id"] ?>" class="pregunta input input-texto <?= $pregunta["clase"] ?>" name="<?= $pregunta["id"] ?>" placeholder="<?= str_replace($simbolos, $simbolos_codif, $pregunta["pregunta"]) ?>" type="<?= $pregunta["tipo"] ?>" required=""></input><br>
                <?php } ?>
                <br>
                <script>
                    console.log("<?= str_replace($simbolos, $simbolos_codif, $pregunta["pregunta"]) ?>");
                </script>
            <?php
                endwhile
            ?>
            <input name="id_encuesta" type="hidden" value="2">
            <input id="enviar" class="pregunta input enviar" type="submit" title="enviar">
            <div class="container container-qr" id="footer">
            <p class="insta_text">"Te invito a seguirme en Instagram, donde encontraras beneficios e información relevante cada semana"</p>
            <br>
            <img src="./imagenes/qr.png" alt="" class="instagram qr" id="img-qr">
        </div>
        </form>
    </div>
    
</body>
</html>

<?php $conexion->close(); ?>