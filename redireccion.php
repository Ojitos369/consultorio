<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <script>
        setTimeout(()=>{
            location.href ="./index.php";
        }, 40000);
    </script>
    <script src="./js/redirect.js"></script>
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/redirect.css">
    <link rel="stylesheet" href="./css/fondo.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="icon" href="./imagenes/logo-simple.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body onload="logo();">
    <img src="./imagenes/fondo.jpeg" alt="" class="img-fondo" id="img_fondo">
    <div class="main-container" id="main-container">
        <div class="container container-qr" id="footer">
            <p id="insta_text" class="insta_text">Te invito a seguirme en Instagram, donde encontraras beneficios e informaci&oacute;n relevante cada semana</p>
            <br>
            <img src="./imagenes/qr.png" alt="" class="instagram qr" id="img-qr">
        </div>
        <div id="logo" class="logo">
            <?php require('logo.php'); ?>
        </div>
    </div>
</body>
</html>