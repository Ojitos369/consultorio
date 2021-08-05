DROP DATABASE IF EXISTS `consultorio`;
CREATE DATABASE `consultorio`;
USE `consultorio`;

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `encuesta`;
CREATE TABLE `encuesta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `descripcion` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `seccion`;
CREATE TABLE `seccion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_encuesta` int NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `descripcion` varchar(5000) NOT NULL,
  `clase` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_encuesta` (`id_encuesta`),
  CONSTRAINT `seccion_ibfk_1` FOREIGN KEY (`id_encuesta`) REFERENCES `encuesta` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `preguntas`;
CREATE TABLE `preguntas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_seccion` int NOT NULL,
  `pregunta` varchar(5000) NOT NULL,
  `tipo` varchar(500) NOT NULL,
  `clase` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_seccion` (`id_seccion`),
  CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`id_seccion`) REFERENCES `seccion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `respuestas`;
CREATE TABLE `respuestas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pregunta` int NOT NULL,
  `respuesta` varchar(5000) NOT NULL,
  `clase` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pregunta` (`id_pregunta`),
  CONSTRAINT `respuestas_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `contestado`;
CREATE TABLE `contestado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_encuesta` int NOT NULL,
  `id_pregunta` int NOT NULL,
  `respuesta` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_encuesta` (`id_encuesta`),
  KEY `id_pregunta` (`id_pregunta`),
  CONSTRAINT `contestado_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `contestado_ibfk_2` FOREIGN KEY (`id_encuesta`) REFERENCES `encuesta` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `contestado_ibfk_3` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);


LOCK TABLES `encuesta` WRITE;
INSERT INTO `encuesta` (nombre, descripcion) VALUES ('entrada','encuesta de entrada'),('salida','encuesta de salida');
UNLOCK TABLES;

LOCK TABLES `seccion` WRITE;
INSERT INTO `seccion` (id_encuesta, nombre, descripcion, clase) VALUES (1,'personales','datos personales', 'seccion-1'),(1,'direccion','datos de la direccion','seccion-2'),(1,'contacto','datos de contacto','seccion-3'),(1,'medico','datos medicos','seccion-4'),(1,'enterado','dato de enterarse','seccion-5'),(2,'datos','datos de satisfaccion','seccion-6'), (2,'satisfaccion','preguntas de satisfacion','seccion-7');
UNLOCK TABLES;

LOCK TABLES `preguntas` WRITE;
INSERT INTO `preguntas` (id_seccion, pregunta, tipo, clase) VALUES (1,'Nombre y Apellido','text','iniciales pregunta-1'),(1,'Fecha de Nacimiento','date','pregunta-2'),(1,'Estado Civil','radio','pregunta-3'),(2,'País','text','direccion pregunta-4'),(2,'Ciudad','text','direccion pregunta-5'),(2,'Código Postal','text','direccion pregunta-6'),(2,'Calle','text','direccion pregunta-7'),(2,'Número Interior y/o Exterior','text','direccion pregunta-8'),(3,'Teléfono','text','pregunta-9'),(3,'Correo Electrónico','text','pregunta-10'),(4,'Tipo de Cirugía Realizada','text','pregunta-11'),(4,'Fecha de Cirugía','date','pregunta-12'),(4,'¿Se Ha Realizado Cirugías Previas?','radio','pregunta-13 especial'),(4,'Protocolo Postquirúrgico','radio','pregunta-14'),(5,'¿Cómo Te Enteraste de Plastic Surgery Recovery?','textarea','opinion pregunta-15'), (6,'Nombre y Apellido','text','iniciales pregunta-16'), (7,'¿Cómo Calificarías el Servicio Brindado por la Dermotherapist Lorena Gómez?','radio','pregunta-17'),(7,'¿Cómo Calificarías el Servicio Dentro de Plastic Surgery Recovery?','radio','pregunta-18'),(7,'¿Qué Te Gustaría que Implementemos o Mejoremos?','textarea','opinion pregunta-19');
UNLOCK TABLES;

LOCK TABLES `respuestas` WRITE;
INSERT INTO `respuestas` (id_pregunta, respuesta, clase) VALUES (3,'Casada (o)','respuesta-1'),(3,'Soltera (o)','respuesta-2'),(13,'Si','respuesta-3'),(13,'No','respuesta-4'),(14,'Fast Recovery','respuesta-5'),(14,'Full Recovery','respuesta-6'),(14,'Experiencia St Regis','respuesta-7'), (17,'5','5'), (17,'4','4'), (17,'3','3'), (17,'2','2'), (17,'1','1'), (18,'5','5'), (18,'4','4'), (18,'3','3'), (18,'2','2'), (18,'1','1');
UNLOCK TABLES;
