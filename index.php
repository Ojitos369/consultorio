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
</head>
<body onload="inicio()">
    <img src="./imagenes/fondo.jpeg" alt="" id="img_fondo" class="img-fondo">
    <div id="protector" class="protector" onclick="ocultar()">
    <?php require('logo.php'); ?>
    </div>
    <div class="container">
        <?php require('logo.php'); ?>
        <div class="encuestas">
            <a href="./inicio.php" class="encuesta inicial">Encuesta Inicial</a><br>
            <a href="./fin.php" class="encuesta final">Encuesta Final</a>
        </div>
    </div>
</body>
</html>