CREATE TABLE `Alojamientos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `imagePrincipal` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `pais` varchar(255) NOT NULL,
  `departamento` varchar(255) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `numberPhone` varchar(255),
  `whattsap` varchar(255) NOT NULL,
  `habitaciones_type_id_fk` int NOT NULL,
  `alojamientos_type_id_fk` int NOT NULL
);

CREATE TABLE `typeOfHabitacion` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `numberHabitacions` int NOT NULL,
  `nameOfHabitacion` VARCHAR(255) NOT NULL;
  `numbersCama` int NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL
);

CREATE TABLE `typeOfAlojamiento` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL
);

CREATE TABLE `User` (
   `id` INT AUTO_INCREMENT PRIMARY KEY,
  `Name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `dateBirth` varchar(255) NOT NULL,
  `historySearch` varchar(255),
  `identificacion` varchar(255) NOT NULL,
  `email` varchar(255),
  `hotels_id_fk` int,
  `photo` varchar(255),
  `reserva_id_fk` int,
  
);

CREATE TABLE `reserva` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `alojamiento_id_fk` INT NOT NULL,
  `user_id_fk` INT NOT NULL, //estoNoSirve
  `payment` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
  `birthCheking` INT NOT NULL,
  `birthCheckout` INT NOT NULL,
  `daysAlojamientos` INT NOT NULL,
  `paymentTotal` DECIMAL(10, 2) NOT NULL
);

---- relacion de tablas ----- 
---User ->alojamientos
alter table User add foreign key (hotels_id_fk) references Alojamientos (id);
---User -> reserva
alter table User add foreign key (reserva_id_fk) references reserva (id);

--- Reserva ->  Alojamiento
alter table reserva add foreign key (alojamiento_id_fk) references Alojamientos (id);
--- Alojamientos ->  habitaciones
alter table Alojamientos add foreign key (alojamientos_type_id_fk) references typeOfAlojamiento (id);

--- Alojamientos ->  habitaciones
alter table Alojamientos add foreign key (habitaciones_type_id_fk) references typeOfHabitacion (id);





                    -----------------------------------------
                          /*          QUERYS           */
                    -----------------------------------------

INSERT INTO Alojamientos(title, description, imagePrincipal, images, ubicacion, pais, departamento, ciudad, numberPhone, whattsap, habitaciones_type_id_fk, alojamientos_type_id_fk  ) VALUES ('hotel golden','hotel economico y muy pero muy barato',"","", 'calle 24 a sur', 'colombia', 'meta', 'villavicencio', 3204621623, 3143173736, 1,2);



INSERT INTO typeOfAlojamiento(id, title) VALUES ('1','hotel');
INSERT INTO typeOfAlojamiento(id, title) VALUES ('2','motel');
INSERT INTO typeOfAlojamiento(id, title) VALUES ('3','Casa campestre');


INSERT INTO typeOfHabitacion(id, numberHAbitacions, nameOfHabitacion, numbersCama, price) VALUES (1,5,'suite',2,25000);
INSERT INTO typeOfHabitacion(id, numberHAbitacions, nameOfHabitacion, numbersCama, price) VALUES (2,4,'sencilla',2,60000);

-------------------------------