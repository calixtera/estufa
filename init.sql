-- MySQL Script generated by MySQL Workbench
-- 09/26/14 16:06:45
-- Model: New Model    Version: 1.0
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema projeto_estufa
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projeto_estufa` DEFAULT CHARACTER SET latin1 ;
USE `projeto_estufa` ;

-- -----------------------------------------------------
-- Table `projeto_estufa`.`condutividade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto_estufa`.`condutividade` (
  `idCondutividade` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `valorCondutividade` INT(10) UNSIGNED NULL DEFAULT NULL,
  `data/hora` DATETIME NULL,
  PRIMARY KEY (`idCondutividade`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `projeto_estufa`.`energia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto_estufa`.`energia` (
  `idEnergia` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `valorEnergia` INT(10) UNSIGNED NULL DEFAULT NULL,
  `data/hora` DATETIME NULL,
  PRIMARY KEY (`idEnergia`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `projeto_estufa`.`iluminacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto_estufa`.`iluminacao` (
  `idIluminacao` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `valorIluminação` INT(10) UNSIGNED NULL DEFAULT NULL,
  `data/hora` DATETIME NULL,
  PRIMARY KEY (`idIluminacao`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `projeto_estufa`.`ph`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto_estufa`.`ph` (
  `idPH` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `valorPH` INT(10) UNSIGNED NULL DEFAULT NULL,
  `data/hora` DATETIME NULL,
  PRIMARY KEY (`idPH`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `projeto_estufa`.`temperatura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto_estufa`.`temperatura` (
  `idTemperatura` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `valorTemperatura` INT(10) UNSIGNED NULL DEFAULT NULL,
  `data/hora` DATETIME NULL,
  PRIMARY KEY (`idTemperatura`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `projeto_estufa`.`umidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto_estufa`.`umidade` (
  `idUmidade` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `valorUmidade` INT(10) UNSIGNED NULL DEFAULT NULL,
  `data/hora` DATETIME NULL,
  PRIMARY KEY (`idUmidade`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `projeto_estufa`.`vazao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto_estufa`.`vazao` (
  `idVazao` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `valorVazao` INT(10) UNSIGNED NOT NULL,
  `data/hora` DATETIME NOT NULL,
  PRIMARY KEY (`idVazao`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
