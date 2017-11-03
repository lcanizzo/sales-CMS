DROP DATABASE IF EXISTS `shopping_db`;

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema shopping_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema shopping_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `shopping_db` DEFAULT CHARACTER SET utf8 ;
USE `shopping_db` ;

-- -----------------------------------------------------
-- Table `shopping_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `material` VARCHAR(255) NOT NULL,
  `price` DECIMAL(6,2) DEFAULT 0,
  `purchases` INT NULL DEFAULT 0,
  `categories_id` INT NOT NULL,
  `SKU` VARCHAR(50) NULL DEFAULT 'No SKU Assigned', 
  `weight` FLOAT NULL DEFAULT 0,
  `cartDesc` VARCHAR(250) NULL DEFAULT 'No cart description added',
  `longDesc` TEXT NULL DEFAULT 'No description added',
  `thumb` VARCHAR(255) NULL DEFAULT 'https://cdn.shopify.com/s/files/1/2159/0319/products/160701-O-ZZ999-001_30bb7a46-ec57-452b-8d8e-ebfb7d906d45_480x480.png?v=1501409481',
  `image` VARCHAR(255) NULL DEFAULT 'https://cdn.shopify.com/s/files/1/2159/0319/products/160701-O-ZZ999-001_30bb7a46-ec57-452b-8d8e-ebfb7d906d45_480x480.png?v=1501409481',
  `lastUpdate` DATETIME NULL,
  `stock` INT NULL DEFAULT 0,
  `live` TINYINT NULL DEFAULT 0,
  `inStock` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`, `categories_id`),
  INDEX `fk_products_categories_idx` (`categories_id` ASC),
  CONSTRAINT `fk_products_categories`
    FOREIGN KEY (`categories_id`)
    REFERENCES `shopping_db`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first-name` VARCHAR(45) NOT NULL,
  `last-name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `last-active` DATETIME NULL,
  `password` VARCHAR(45) NOT NULL,
  `city` VARCHAR(90) NULL,
  `state` VARCHAR(20) NULL,
  `zip` VARCHAR(12) NULL,
  `emailVerified` TINYINT NULL DEFAULT 0,
  `registrationDate` TIMESTAMP NULL,
  `verificationCode` VARCHAR(20) NULL,
  `IP` VARCHAR(50) NULL,
  `phone` VARCHAR(20) NULL,
  `address` VARCHAR(100) NULL,
  `address2` VARCHAR(50) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdDate` DATE NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_id`),
  INDEX `fk_cart_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_cart_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `shopping_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`cartItems`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`cartItems` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productId` INT NOT NULL,
  `quantity` INT NOT NULL,
  `createdDate` DATE NOT NULL,
  `cart_id` INT NOT NULL,
  `cart_users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cart_id`, `cart_users_id`),
  INDEX `fk_cartItems_cart1_idx` (`cart_id` ASC, `cart_users_id` ASC),
  CONSTRAINT `fk_cartItems_cart1`
    FOREIGN KEY (`cart_id` , `cart_users_id`)
    REFERENCES `shopping_db`.`cart` (`id` , `users_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `total` DECIMAL(6,2) NOT NULL,
  `shipName` VARCHAR(100) NOT NULL,
  `shipAddress` VARCHAR(100) NOT NULL,
  `shipAddress2` VARCHAR(100) NULL DEFAULT 'NoInput',
  `shipCity` VARCHAR(50) NOT NULL,
  `shipState` VARCHAR(45) NOT NULL,
  `shipZip` VARCHAR(20) NOT NULL,
  `shipCountry` VARCHAR(50) NULL DEFAULT 'NoInput',
  `phone` VARCHAR(20) NULL DEFAULT 'NoInput',
  `shippingCost` DECIMAL(16,2) NULL DEFAULT 0,
  `email` VARCHAR(100) NULL DEFAULT 'NoInput',
  `date` TIMESTAMP NULL,
  `shipped` TINYINT NULL DEFAULT 0,
  `trackingNum` VARCHAR(80) NULL,
  PRIMARY KEY (`id`, `users_id`),
  INDEX `fk_orders_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_orders_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `shopping_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`ordersToProducts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`ordersToProducts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orders_id` INT NOT NULL,
  `orders_users_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `products_categories_id` INT NOT NULL,
  `product_name` VARCHAR(250) NOT NULL,
  `product_price` DECIMAL(16,2) NOT NULL,
  `product_SKU` VARCHAR(50) NULL DEFAULT 'No SKU Assigned',
  `quantity` INT(11) NULL,
  PRIMARY KEY (`id`, `orders_id`, `orders_users_id`, `products_id`, `products_categories_id`),
  INDEX `fk_orderDetails_orders1_idx` (`orders_id` ASC, `orders_users_id` ASC),
  INDEX `fk_orderDetails_products1_idx` (`products_id` ASC, `products_categories_id` ASC),
  CONSTRAINT `fk_orderDetails_orders1`
    FOREIGN KEY (`orders_id` , `orders_users_id`)
    REFERENCES `shopping_db`.`orders` (`id` , `users_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orderDetails_products1`
    FOREIGN KEY (`products_id` , `products_categories_id`)
    REFERENCES `shopping_db`.`products` (`id` , `categories_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`optionGroups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`optionGroups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`options`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`options` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `optionGroups_id` INT NOT NULL,
  PRIMARY KEY (`id`, `optionGroups_id`),
  INDEX `fk_options_optionGroups1_idx` (`optionGroups_id` ASC),
  CONSTRAINT `fk_options_optionGroups1`
    FOREIGN KEY (`optionGroups_id`)
    REFERENCES `shopping_db`.`optionGroups` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`productsToOptions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`productsToOptions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_id` INT NOT NULL,
  `products_categories_id` INT NOT NULL,
  `options_id` INT NOT NULL,
  PRIMARY KEY (`id`, `products_id`, `products_categories_id`, `options_id`),
  INDEX `fk_options_products1_idx` (`products_id` ASC, `products_categories_id` ASC),
  INDEX `fk_productsToOptions_options1_idx` (`options_id` ASC),
  CONSTRAINT `fk_options_products1`
    FOREIGN KEY (`products_id` , `products_categories_id`)
    REFERENCES `shopping_db`.`products` (`id` , `categories_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productsToOptions_options1`
    FOREIGN KEY (`options_id`)
    REFERENCES `shopping_db`.`options` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(40) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `first-name` VARCHAR(45) NOT NULL,
  `last-name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_db`.`productsUpdates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_db`.`productsUpdates` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_id` INT NOT NULL,
  `admin_id` INT NOT NULL,
  `property` VARCHAR(45) NOT NULL,
  `initial` VARCHAR(45) NOT NULL,
  `update` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`id`, `products_id`, `admin_id`),
  INDEX `fk_productsUpdates_products1_idx` (`products_id` ASC),
  INDEX `fk_productsUpdates_admin1_idx` (`admin_id` ASC),
  CONSTRAINT `fk_productsUpdates_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `shopping_db`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productsUpdates_admin1`
    FOREIGN KEY (`admin_id`)
    REFERENCES `shopping_db`.`admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
