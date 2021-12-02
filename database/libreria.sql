-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-12-2021 a las 20:05:35
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `nombre`, `usuario`, `contraseña`) VALUES
(1, 'Carmen Castellanos', 'admin1', '$2a$08$1M5sEwbaaJYLvCfPpI88NOpcQwT/gz4a7dxwN8XtUUC6zgor2WBqK'),
(2, 'Wilmer Villarreal', 'admin2', '$2a$08$TL/kJN7uthH90/vJ2vblheQGx0S3YAnj1qKtx8eo0fHYcJWnwLqe6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `autor` varchar(70) NOT NULL,
  `area` varchar(100) NOT NULL,
  `imgURL` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `autor`, `area`, `imgURL`) VALUES
(1, 'Harry Potter y la Piedra Filosofal', 'J. K. Rowling', 'Literatura - Fantasia', 'https://librosgratisparaleer.com/harry-potter-y-la-piedra-filosofal-pdf/'),
(2, 'Harry Potter y la Cámara Secreta', 'J. K. Rowling', 'Literatura - Fantasia', 'https://librosgratisparaleer.com/wp-content/uploads/2021/08/2.-Harry-Potter-y-la-camara-secreta.pdf'),
(3, 'Harry Potter y el Prisionero de Azcaban', 'J. K. Rowling', 'Literatura - Fantasia', 'https://librosgratisparaleer.com/wp-content/uploads/2021/08/Harry-Potter-y-el-prisionero-de-Azkaban.pdf'),
(4, 'Harry Potter y el Caliz de Fuego', 'J. K. Rowling', 'Literatura - Fantasia', 'https://librosgratisparaleer.com/wp-content/uploads/2021/08/Harry-Potter-y-el-caliz-de-fuego.pdf'),
(5, 'Harry Potter y la Orden del Fenix', 'J. K. Rowling', 'Literatura - Fantasia', 'https://librosgratisparaleer.com/wp-content/uploads/2021/08/Harry-Potter-y-la-Orden-del-Fenix.pdf'),
(6, 'Harry Potter y el Misterio del Principe', 'J. K. Rowling', 'Literatura - Fantasia', 'https://librosgratisparaleer.com/wp-content/uploads/2021/08/Harry-Potter-y-el-misterio-del-principe.pdf'),
(7, 'Harry Potter y las Reliquias de la Muerte', 'J. K. Rowling', 'Literatura - Fantasia', 'https://librosgratisparaleer.com/wp-content/uploads/2021/08/Harry-Potter-y-las-Reliquias-de-la-Muerte.pdf'),
(8, 'Calculo diferencial e integral, con aplicaciones', 'Elsie Hernandez S.', 'Matematicas', 'https://drive.google.com/uc?export=download&id=1AajwvgrAaMEaPWf-DyKpCv0MzZg-J4gp'),
(9, 'Ejercicios resueltos de calculo', 'Hector Rojas Luna', 'Matematicas', 'https://drive.google.com/uc?export=download&id=1vW8NBgR0TdwrqCyKZGfyzdNyaaU0XbFa'),
(10, 'Ecuaciones diferenciales parciales', 'Salomon Alarcon Araneda', 'Matematicas', 'http://salarcon.mat.utfsm.cl/PDF/Alarcon-APUNTES-EDP.pdf'),
(11, 'Logica y Teoria de Conjuntos', 'Carlos Ivorra Castillo', 'Logica - Matematicas', 'https://drive.google.com/uc?export=download&id=1vEEy0ScuAsia8Jdv54WMY2XzeMfQbnyb'),
(12, 'Historia de las representaciones gráficas', 'Vicente Casas Cañas', 'Logica', 'https://drive.google.com/uc?export=download&id=1SGN7jQ2a2cCeJmip5M_DZWAVf9UlX-Rz'),
(13, 'Teoria de Grafos', 'Marcelino Álvarez - Jonathan Parra ', 'Logica', 'https://drive.google.com/uc?export=download&id=1STJJMTDgMyrZPvdaihxVEdXt1iRxb6Pa'),
(14, 'Computación Gráfica Introducción ', 'M.C. Rivara', 'Computacion', 'https://www.u-cursos.cl/ingenieria/2010/2/CC3501/1/material_docente/bajar%3Fid_material%3D306628');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `nombre`, `usuario`, `contraseña`) VALUES
(12, 'Carlos Fernandez', 'carfer', '$2a$08$v9nloUQ4JTKX6w6Vt5IwS.H6I3UGhFm3Gf9bWuWHD8hwAcZP9u3HC'),
(13, 'Yuri Nuñez', 'yuricaro', '$2a$08$j3ZW9N46b5MYD4zB.6m7MumqzAMcggGNLsysU0.U/LWxGJrTNqW6e'),
(14, 'Reinaldo Barreto', 'reycas', '$2a$08$xqvN/wCeR9hpZDFfBTdpxeI3MYW6HKrA7jMORsF9FeZnaLMJmjrXS'),
(15, 'Wilmer Villarreal', 'chiaki00', '$2a$08$THZWmKaP6qhgwcsCeAHtJuEXxAgiCw.2ePx891fIzBECX74X0KjEa'),
(16, 'Eduardo Villarreal', 'eduburu', '$2a$08$aBrw4.k3Pt3IlNlXpIeZ2O/17Xpmw7A/XE25jANcEnMamCoVp3QOC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
