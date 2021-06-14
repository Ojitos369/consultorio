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
INSERT INTO `seccion` (id_encuesta, nombre, descripcion, clase) VALUES (1,'personales','datos personales', 'seccion-1'),(1,'contacto','datos de contacto','seccion-2'),(1,'medico','datos medicos','seccion-3'),(1,'enterado','dato de enterarse','seccion-4'),(2,'satisfaccion','preguntas de satisfacion','seccion-5'),(1,'direccion','datos de la direccion','seccion-6');
UNLOCK TABLES;

LOCK TABLES `preguntas` WRITE;
INSERT INTO `preguntas` (id_seccion, pregunta, tipo, clase) VALUES (1,'NOMBRE Y APELLIDO','text','pregunta-1'),(1,'FECHA DE NACIMIENTO','date','pregunta-2'),(1,'ESTADO CIVIL','checkbox','pregunta-3'),(2,'DIRECCIÓN','array','pregunta-4'),(2,'TELÉFONO','number','pregunta-5'),(2,'CORREO ELECTRÓNICO','email','pregunta-6'),(3,'TIPO DE CIRUGÍA REALIZADA','text','pregunta-7'),(3,'CIRUGÍAS PREVIAS (SI NO) Y CUANTAS','number','pregunta-8'),(3,'FECHA DE CIRUGÍA','date','pregunta-9'),(3,'PROTOCOLO POSTQUIRÚRGICO','checkbox','pregunta-10'),(4,'¿CÓMO TE ENTERASTE DE PLASTIC SURGERY RECOVERY?','text','pregunta-11'),(5,'¿Cómo calificarías el servicio brindado por la dermotherapist Lorena Gómez?','checkbox','pregunta-12'),(5,'¿Cómo calificarías el servicio dentro de Plastic Surgery Recovery?','checkbox','pregunta-13'),(5,'¿Qué te gustaría que implementemos o mejoremos?','text','pregunta-14'),(6,'País','text','pregunta-15'),(6,'Ciudad','text','pregunta-16'),(6,'Código Postal','number','pregunta-17'),(6,'Calle','text','pregunta-18'),(6,'Número interior y/o exterior','text','pregunta-19');
UNLOCK TABLES;

LOCK TABLES `respuestas` WRITE;
INSERT INTO `respuestas` (id_pregunta, respuesta, clase) VALUES (3,'Casada','respuesta-1'),(3,'Soltera','respuesta-2'),(10,'FAST RECOVERY','respuesta-3'),(10,'FULL RECOVERY','respuesta-4'),(10,'EXPERIENCIA ST REGIS','respuesta-5');
UNLOCK TABLES;
