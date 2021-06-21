DROP DATABASE IF EXISTS `consultorio`;
CREATE DATABASE `consultorio`;
USE `consultorio`;
----------USUARIO---------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

----------ENCUESTA---------
DROP TABLE IF EXISTS `encuesta`;
CREATE TABLE `encuesta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `descripcion` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

----------SECCION---------
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

----------PREGUNTAS---------
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

----------RESPUESTAS---------
DROP TABLE IF EXISTS `respuestas`;
CREATE TABLE `respuestas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pregunta` int NOT NULL,
  `respuesta` varchar(5000) NOT NULL,
  `clase` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pregunta` (`id_pregunta`),
  CONSTRAINT `respuestas_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

----------CONTESTADO---------
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `encuesta` WRITE;
INSERT INTO `encuesta` (nombre, descripcion) VALUES ('entrada','encuesta de entrada'),('salida','encuesta de salida');
UNLOCK TABLES;

LOCK TABLES `seccion` WRITE;
INSERT INTO `seccion` (id_encuesta, nombre, descripcion, clase) VALUES (1,'personales','datos personales', 'seccion-1'),(1,'direccion','datos de la direccion','seccion-2'),(1,'contacto','datos de contacto','seccion-3'),(1,'medico','datos medicos','seccion-4'),(1,'enterado','dato de enterarse','seccion-5'),(2,'datos','datos de satisfaccion','seccion-6'), (2,'satisfaccion','preguntas de satisfacion','seccion-7');
UNLOCK TABLES;

LOCK TABLES `preguntas` WRITE;
INSERT INTO `preguntas` (id_seccion, pregunta, tipo, clase) VALUES (1,'Nombre y apellido','text','pregunta-1'),(1,'Fecha de nacimiento','date','pregunta-2'),(1,'Estado civil','radio','pregunta-3'),(2,'País','text','direccion pregunta-4'),(2,'Ciudad','text','direccion pregunta-5'),(2,'Código Postal','number','direccion pregunta-6'),(2,'Calle','text','direccion pregunta-7'),(2,'Número interior y/o exterior','text','direccion pregunta-8'),(3,'Teléfono','number','pregunta-10'),(3,'Correo electrónico','email','pregunta-11'),(4,'Tipo de cirugía realizada','text','pregunta-12'),(4,'Cirugías previas (si/no(0)): cuantas','number','pregunta-13'),(4,'Fecha de cirugía','date','pregunta-14'),(4,'Protocolo postquirúrgico','radio','pregunta-15'),(5,'¿Cómo te enteraste de Plastic Surgery Recovery?','textarea','opinion pregunta-16'), (6,'Nombre','text','pregunta-17'), (7,'¿Cómo calificarías el servicio brindado por la dermotherapist Lorena Gómez?','radio','pregunta-18'),(7,'¿Cómo calificarías el servicio dentro de Plastic Surgery Recovery?','radio','pregunta-19'),(7,'¿Qué te gustaría que implementemos o mejoremos?','textarea','opinion pregunta-20');
UNLOCK TABLES;

LOCK TABLES `respuestas` WRITE;
INSERT INTO `respuestas` (id_pregunta, respuesta, clase) VALUES (3,'Casada','respuesta-1'),(3,'Soltera','respuesta-2'),(14,'Fast recovery','respuesta-3'),(14,'Full recovery','respuesta-4'),(14,'Experiencia st regis','respuesta-5'), (17,'5','5'), (17,'4','4'), (17,'3','3'), (17,'2','2'), (17,'1','1'), (18,'5','5'), (18,'4','4'), (18,'3','3'), (18,'2','2'), (18,'1','1');
UNLOCK TABLES;
