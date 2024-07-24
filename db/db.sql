CREATE DATABASE IF NOT EXISTS gestor_trabajadores;

-- Crear tabla de roles
CREATE TABLE IF NOT EXISTS rol (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Crear tabla de trabajadores
CREATE TABLE IF NOT EXISTS trabajador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rut_trabajador VARCHAR(12) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    sexo ENUM('f', 'm') NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    cargo VARCHAR(255) NOT NULL,
    fecha_ingreso DATE NOT NULL,
    departamento VARCHAR(255) NOT NULL,
    salario INT NOT NULL
);

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    trabajador_id INT NOT NULL,
    rol_id INT NOT NULL,
    FOREIGN KEY (trabajador_id) REFERENCES trabajador(id),
    FOREIGN KEY (rol_id) REFERENCES rol(id)
);

-- Crear tabla de contactos de emergencia
CREATE TABLE IF NOT EXISTS contacto_emergencia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    relacion VARCHAR(50) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    trabajador_id INT NOT NULL,
    FOREIGN KEY (trabajador_id) REFERENCES trabajador(id)
);

-- Crear tabla de cargas familiares
CREATE TABLE IF NOT EXISTS carga_familiar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    parentesco VARCHAR(50) NOT NULL,
    sexo ENUM('f', 'm') NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    trabajador_id INT NOT NULL,
    FOREIGN KEY (trabajador_id) REFERENCES trabajador(id)
);