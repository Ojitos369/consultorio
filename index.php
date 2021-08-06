<!DOCTYPE html>
<html>

<head>
    <title>PLASTIC SURGERY RECOVERY</title>
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./css/fondo.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="icon" href="./imagenes/logo-simple.png">
    <meta charset="utf-8"> 
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/fondo.js"></script>
    <script src="./js/index.js"></script> 
</head>
<body onload="inicio(); ajustar();">
    <img src="./imagenes/fondo.jpeg" alt="" id="img_fondo" class="img-fondo">
    <div id="protector" class="protector" onclick="ocultar()">
        <?php require('logo.php'); ?>
    </div>
    <div id="container" class="container">
        <div class="encuestas" id="encuestas" >
            <a href="./inicio.php" id="encuesta_inicial" class="encuesta inicial">
                <p>Encuesta</p>
                <p>Inicial</p>
            </a><br>
            <a href="./fin.php" id="encuesta_final" class="encuesta final">
                <p>Encuesta</p>
                <p>Final</p>
            </a>
        </div>
    </div>
</body>
</html>