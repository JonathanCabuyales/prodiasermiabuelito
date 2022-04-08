CREATE TABLE usuarios(
  id_usu INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombres_usu varchar(250) NOT NULL,
  apellidos_usu varchar(250) NOT NULL,
  direccion_usu TEXT NOT NULL,
  numero_usu varchar(250) NOT NULL,
  cedula_usu varchar(250) NOT NULL,
  correo_usu varchar(250) NOT NULL,
  password_usu TEXT NOT NULL,
  rol_usu varchar(100) NOT NULL,
  cursos_usu TEXT NOT NULL,
  cedulapdf_usu TEXT NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE abuelitos(
  id_usu INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombres_usu varchar(250) NOT NULL,
  apellidos_usu varchar(250) NOT NULL,
  direccion_usu TEXT NOT NULL,
  numero_usu varchar(250) NOT NULL,
  cedula_usu varchar(250) NOT NULL,
  correo_usu varchar(250) NOT NULL,
  password_usu TEXT NOT NULL,
  cedulapdf_usu TEXT NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE cursos(
  id_cur INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  id_usu INT NOT NULL,
  nombre_cur TEXT NOT NULL,
  descripcion_cur TEXT NOT NULL,
  videos_cur TEXT NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE preguntas(
  id_preg INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  id_usu INT NOT NULL,
  id_cur INT NOT NULL,
  preguntas_preg TEXT NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;