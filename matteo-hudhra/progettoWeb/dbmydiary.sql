-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: mydiary
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materia` (
  `ID_MATERIA` int NOT NULL AUTO_INCREMENT,
  `NOME_MATERIA` varchar(30) NOT NULL,
  `NOME_DOCENTE` varchar(30) NOT NULL,
  `COLORE_MATERIA` varchar(30) NOT NULL,
  `COD_UTENTE` int NOT NULL,
  PRIMARY KEY (`ID_MATERIA`),
  KEY `materia_ibfk_1` (`COD_UTENTE`),
  CONSTRAINT `materia_ibfk_1` FOREIGN KEY (`COD_UTENTE`) REFERENCES `utente` (`ID_UTENTE`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (11,'Inglese','rdthdrh','rgb(211, 39, 153)',1),(12,'rtheth','ewq','rgb(102, 31, 69)',1),(13,'rtheth','ewq','rgb(38, 231, 221)',1),(14,'dryjkikiuse','WAERSYSU5AW4RE','rgb(38, 231, 221)',1),(15,'terronese','ciro','rgb(38, 231, 221)',16),(16,'hjdkam','btnrystrhetn','rgb(211, 39, 153)',1),(17,'etshrmysje','ilyodyrd','rgb(38, 231, 221)',1),(18,'java','armandovic','rgb(129, 229, 36)',1),(19,'fbfgnfdgsbfdg','gmfdjshrdngfhg','rgb(37, 222, 167)',1);
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS `utente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utente` (
  `ID_UTENTE` int NOT NULL AUTO_INCREMENT,
  `NOME_UTENTE` varchar(15) NOT NULL,
  `PASSWORD_UTENTE` varchar(15) NOT NULL,
  PRIMARY KEY (`ID_UTENTE`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente`
--

LOCK TABLES `utente` WRITE;
/*!40000 ALTER TABLE `utente` DISABLE KEYS */;
INSERT INTO `utente` VALUES (1,'Matteo','Psw123'),(2,'Lollo','12345'),(3,'albinovic','hhhqqq'),(4,'albinovicric','wubfhwbiabeviw'),(5,'rswgv','aaweg'),(6,'reehestrawr','rgawgwg'),(7,'wargesh','awgawg'),(8,'trombami','ciccipicci'),(9,'asdfghjk','lkjhgfds'),(10,'troianovic','licci'),(11,'afasefv','btrymtrer'),(12,'aefretbersv','u,iyuktjyrg'),(13,'fyuiliyut','set6yrt'),(14,'rgtisana','cassoboy'),(15,'youtube','youtube'),(16,'terronazzo','terronazzo');
/*!40000 ALTER TABLE `utente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voto`
--

DROP TABLE IF EXISTS `voto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voto` (
  `ID_VOTO` int NOT NULL AUTO_INCREMENT,
  `VALORE` int NOT NULL,
  `DESCRIZIONE_VOTO` varchar(20) DEFAULT NULL,
  `COD_MATERIA` int DEFAULT NULL,
  PRIMARY KEY (`ID_VOTO`),
  KEY `COD_MATERIA` (`COD_MATERIA`),
  CONSTRAINT `voto_ibfk_1` FOREIGN KEY (`COD_MATERIA`) REFERENCES `materia` (`ID_MATERIA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voto`
--

LOCK TABLES `voto` WRITE;
/*!40000 ALTER TABLE `voto` DISABLE KEYS */;
/*!40000 ALTER TABLE `voto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-16 23:47:28
