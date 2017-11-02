USE `shopping_db` ;

INSERT INTO `admin` (`email`, `password`, `first-name`, `last-name`)
VALUES ("admin@email.com", "password", "FirstName", "LastName");

-- | admin             |
--     | id         | int(11)     | NO   | PRI | NULL    | auto_increment |
--     | email      | varchar(40) | NO   |     | NULL    |                |
--     | password   | varchar(45) | NO   |     | NULL    |                |
--     | first-name | varchar(45) | YES  |     | NULL    |                |
--     | last-name  | varchar(45) | YES  |     | NULL    |                |

INSERT INTO `users` (`first-name`, `last-name`, `email`, `password`, `city`, `state`, `zip`, `phone`)
VALUES ("Luca", "Canizzo", "luca.canizzo@email.com", "password", "Orlando", "FL", "32805", "407-973-4743");

-- | users             |
--     | id               | int(11)      | NO   | PRI | NULL    | auto_increment |
--     | first-name       | varchar(45)  | NO   |     | NULL    |                |
--     | last-name        | varchar(45)  | NO   |     | NULL    |                |
--     | email            | varchar(40)  | NO   |     | NULL    |                |
--     | last-active      | datetime     | YES  |     | NULL    |                |
--     | password         | varchar(45)  | NO   |     | NULL    |                |
--     | city             | varchar(90)  | YES  |     | NULL    |                |
--     | state            | varchar(20)  | YES  |     | NULL    |                |
--     | zip              | varchar(12)  | YES  |     | NULL    |                |
--     | emailVerified    | tinyint(4)   | YES  |     | NULL    |                |
--     | registrationDate | timestamp    | YES  |     | NULL    |                |
--     | verificationCode | varchar(20)  | YES  |     | NULL    |                |
--     | IP               | varchar(50)  | YES  |     | NULL    |                |
--     | phone            | varchar(20)  | YES  |     | NULL    |                |
--     | address          | varchar(100) | YES  |     | NULL    |                |
--     | address2         | varchar(50)  | YES  |     | NULL 

INSERT INTO `categories` (`name`)
VALUES  ("Baby"),
        ("Kitchen"),
        ("Home");
-- | categories        |
--     | id    | int(11)     | NO   | PRI | NULL    | auto_increment |
--     | name  | varchar(45) | NO   |     | NULL    |

INSERT INTO `products` (`name`, `material`, `price`, `categories_id`, `weight`, `cartDesc`, `longDesc`, `thumb`, `image`, `live`, `inStock`)
VALUES  ("Cutting Board", "Wood", 55.00, 2, 8.5, "Wood Cuttingboard", "Wood cuttingboard perfect for cutting things and doing stuff with it like knifes and food fruite vegetables hot cold, organic cat-free", "https://thumbimage.com", "https://othermainimage.com", 0, 0);
-- | products          |
--     | id            | int(11)      | NO   | PRI | NULL    | auto_increment |
--     | name          | varchar(255) | NO   |     | NULL    |                |
--     | material      | varchar(255) | NO   |     | NULL    |                |
--     | price         | decimal(6,2) | YES  |     | NULL    |                |
--     | purchases     | int(11)      | YES  |     | NULL    |                |
--     | views         | int(11)      | YES  |     | NULL    |                |
--     | categories_id | int(11)      | NO   | PRI | NULL    |                |
--     | SKU           | varchar(50)  | YES  |     | NULL    |                |
--     | weight        | float        | YES  |     | NULL    |                |
--     | cartDesc      | varchar(250) | YES  |     | NULL    |                |
--     | longDesc      | text         | YES  |     | NULL    |                |
--     | thumb         | varchar(100) | YES  |     | NULL    |                |
--     | image         | varchar(100) | YES  |     | NULL    |                |
--     | lastUpdate    | datetime     | YES  |     | NULL    |                |
--     | stock         | int(11)      | YES  |     | NULL    |                |
--     | live          | tinyint(4)   | YES  |     | NULL    |                |
--     | inStock       | tinyint(4)   | YES  |     | NULL

INSERT INTO `optiongroups` (`name`)
VALUES  ("Woods"),
        ("Size"),
        ("Quantity");
-- | optiongroups      |
--     | id    | int(11)     | NO   | PRI | NULL    | auto_increment |
--     | name  | varchar(50) | YES  |     | NULL

INSERT INTO `options` (`optionGroups_id`,`name`)
VALUES  ("1", "Wenge"),
        ("1", "African Walnut"),
        ("1", "Walnut"),
        ("1", "Pine"),
        ("2", 'Small (8"x10")'),
        ("2", 'Medium (10"x12")'),
        ("2", 'Large (12"x16")');
-- | options           |
--     | id              | int(11)     | NO   | PRI | NULL    | auto_increment |
--     | name            | varchar(50) | YES  |     | NULL    |                |
--     | optionGroups_id | int(11)     | NO   | PRI | NULL 

INSERT INTO `productstooptions` (`products_id`,`products_categories_id`, `options_id`)
VALUES (1, 2, 1);
-- | productstooptions |
--     | id                     | int(11) | NO   | PRI | NULL    | auto_increment |
--     | products_id            | int(11) | NO   | PRI | NULL    |                |
--     | products_categories_id | int(11) | NO   | PRI | NULL    |                |
--     | options_id             | int(11) | NO   | PRI | NULL 

INSERT INTO `cart` (`createdDate`, `users_id`)
VALUES  ('2008-11-11', 1);
-- | cart              |
--     | id          | int(11) | NO   | PRI | NULL    | auto_increment |
--     | createdDate | date    | NO   |     | NULL    |                |
--     | users_id    | int(11) | NO   | PRI | NULL    |                |

INSERT INTO `cartitems` (`productId`, `quantity`, `createdDate`, `cart_id`, `cart_users_id`)
VALUES  (1, 4, '2017-11-24', 1, 1);
-- | cartitems         |
--     | id            | int(11) | NO   | PRI | NULL    | auto_increment |
--     | productId     | int(11) | NO   |     | NULL    |                |
--     | quantity      | int(11) | NO   |     | NULL    |                |
--     | createdDate   | date    | NO   |     | NULL    |                |
--     | cart_id       | int(11) | NO   | PRI | NULL    |                |
--     | cart_users_id | int(11) | NO   | PRI | NULL    |

INSERT INTO `orders` (`users_id`, `total`, `shipName`, `shipAddress`, `shipAddress2`, `shipCity`, `shipState`, `shipZip`, `shipCountry`, `phone`, `shippingCost`, `email`, `date`, `shipped`, `trackingNum`)
VALUES (1, 55.00, "Luca Canizzo", "640 Ramona Ln.", "Unit B", "Orlando", "FL", "32805", "United States", "407-973-4743", "15.00", "luca.canizzo@email.com", '2017-11-24', 0, "251961fdsde8");
-- | orders            |
--     | id           | int(11)       | NO   | PRI | NULL    | auto_increment |
--     | users_id     | int(11)       | NO   | PRI | NULL    |                |
--     | total        | decimal(6,2)  | YES  |     | NULL    |                |
--     | shipName     | varchar(100)  | YES  |     | NULL    |                |
--     | shipAddress  | varchar(100)  | YES  |     | NULL    |                |
--     | shipAddress2 | varchar(100)  | YES  |     | NULL    |                |
--     | shipCity     | varchar(50)   | YES  |     | NULL    |                |
--     | shipState    | varchar(45)   | YES  |     | NULL    |                |
--     | shipZip      | varchar(20)   | YES  |     | NULL    |                |
--     | shipCountry  | varchar(50)   | YES  |     | NULL    |                |
--     | phone        | varchar(20)   | YES  |     | NULL    |                |
--     | shippingCost | decimal(16,2) | YES  |     | NULL    |                |
--     | email        | varchar(100)  | YES  |     | NULL    |                |
--     | date         | timestamp     | YES  |     | NULL    |                |
--     | shipped      | tinyint(4)    | YES  |     | 0       |                |
--     | trackingNum  | varchar(80)   | YES  |     | NULL    |                |

INSERT INTO `orderstoproducts` (`orders_id`, `orders_users_id`, `products_id`, `products_categories_id`, `product_name`, `product_price`, `quantity`)
VALUES (1, 1, 1, 2, "Cuttingboard", "55.00", 2);
-- | orderstoproducts  |
--     | id                     | int(11)       | NO   | PRI | NULL    | auto_increment |
--     | orders_id              | int(11)       | NO   | PRI | NULL    |                |
--     | orders_users_id        | int(11)       | NO   | PRI | NULL    |                |
--     | products_id            | int(11)       | NO   | PRI | NULL    |                |
--     | products_categories_id | int(11)       | NO   | PRI | NULL    |                |
--     | product_name           | varchar(250)  | YES  |     | NULL    |                |
--     | product_price          | decimal(16,2) | YES  |     | NULL    |                |
--     | product_SKU            | varchar(50)   | YES  |     | NULL    |                |
--     | quantity               | int(11)       | YES  |     | NULL

INSERT INTO `productsUpdates` (`products_id`, `admin_id`, `property`, `initial`, `update`, `date`)
VALUES (1, 1, "Weight", "55.00", "54.00", '2008-11-11');
-- | productsUpdates  |
-- | id          | int(11)     | NO   | PRI | NULL    | auto_increment |
-- | products_id | int(11)     | NO   | PRI | NULL    |                |
-- | admin_id    | int(11)     | NO   | PRI | NULL    |                |
-- | property    | varchar(45) | NO   |     | NULL    |                |
-- | initial     | varchar(45) | NO   |     | NULL    |                |
-- | update      | varchar(45) | NO   |     | NULL    |                |
-- | date        | date        | NO   |     | NULL    |                |
