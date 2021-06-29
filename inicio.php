<?php require('./php/conexion.php') ?>
<?php $conexion = conectar('./json/datos.json'); ?>

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/encuesta.css">
    <link rel="stylesheet" href="/css/fondo.css">
    <link rel="stylesheet" href="/css/encuesta_fin.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="icon" href="/imagenes/logo-simple.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/js/encuesta_fin.js"></script>
    <script src="/js/encuesta.js"></script>
    <script>
        console.log('<%= preguntas.length + 15 %>');
        let checar = false;
        let inicio = '16';
        let encuesta = 'final';
        let fin = '<%= preguntas.length + 15 %>';
    </script>
</head>

<body onload="animaciones()">
    <img src="/imagenes/fondo.jpeg" alt="" class="img-fondo">
    <div class="main-container" id="main-container">
        <div id="logo" class="logo">
            <%- include('logo') %>
        </div>
        <form action="<%= accion %>" method="POST" id="formulario" class="formulario container" autocomplete="off">
            <% for(i=0; i<preguntas.length; i++){ %>
                <% if(preguntas[i].tipo == 'checkbox' || preguntas[i].tipo == 'radio'){ %>
                    <div id="cont_<%= preguntas[i].id %>" class="caritas pregunta <%= preguntas[i].clase %>">
                    <%= preguntas[i].pregunta %>
                    <br>
                    <div class="eleccion">
                    <% for(j=0; j<respuestas.length; j++){ %>
                        <% if(respuestas[j].id_pregunta == preguntas[i].id){ %>
                                <label id="cont_<%= preguntas[i].id %>" class="label-seleccion" for="respuesta<%= respuestas[j].id %>"><input class="input input-eleccion" id="respuesta<%= respuestas[j].id %>" type="<%= preguntas[i].tipo %>" value="<%= respuestas[j].respuesta %>" name="<%= preguntas[i].id %>" required=""><img class="img-res" src="/imagenes/<%= respuestas[j].respuesta %>.png" alt="<%= respuestas[j].respuesta %>" onclick="cambio('<%= preguntas[i].id %>')"></label>
                        <% } %>
                    <% } %>
                    </div>
                    </div>
                <% }else if(preguntas[i].tipo == 'textarea'){%>
                    <textarea id="cont_<%= preguntas[i].id %>" class="pregunta input input-textarea <%= preguntas[i].clase %>" name="<%= preguntas[i].id %>" placeholder="<%= preguntas[i].pregunta %>" type="<%= preguntas[i].tipo %>" required=""></textarea>
                    <br>
                <% }else{ %>
                    <input id="cont_<%= preguntas[i].id %>" class="pregunta input input-texto <%= preguntas[i].clase %>" name="<%= preguntas[i].id %>" placeholder="<%= preguntas[i].pregunta %>" type="<%= preguntas[i].tipo %>" required=""></input><br>
                <% } %>
                <br>
            <% } %>
            <input name="id_encuesta" type="hidden" value="<%= seccion %>">
            <input id="enviar" class="pregunta input enviar" type="submit" title="enviar">
        </form>
        <div class="container container-qr" id="footer">
            <p class="insta_text">"Te invito a seguirme en Instagram, donde encontraras beneficios e información relevante cada semana"</p>
            <img src="/imagenes/qr.png" alt="" class="instagram qr">
        </div>
    </div>
    
</body>
</html>