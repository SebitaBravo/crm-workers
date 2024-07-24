-- Insertar roles
INSERT INTO rol (nombre) VALUES ('admin');
INSERT INTO rol (nombre) VALUES ('hr');
INSERT INTO rol (nombre) VALUES ('worker');

-- Insertar trabajadores
INSERT INTO trabajador (rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario) 
VALUES 
('12345678-9', 'Juan', 'Pérez', 'm', 'Calle Falsa 123', '987654321', '1985-01-01', 'Gerente', '2022-01-01', 'Administración', 1500),
('98765432-1', 'María', 'Gómez', 'f', 'Avenida Siempre Viva 742', '123456789', '1990-02-02', 'Jefe de Recursos Humanos', '2022-02-01', 'Recursos Humanos', 1300),
('12398745-6', 'Pedro', 'Sánchez', 'm', 'Pasaje Sin Nombre 456', '789123456', '1995-03-03', 'Trabajador', '2022-03-01', 'Operaciones', 1000);
('11223344-5', 'Carlos', 'Mendoza', 'm', 'Calle Norte 123', '789456123', '1988-05-10', 'Supervisor', '2021-05-01', 'Producción', 1200),
('22334455-6', 'Lucía', 'Fernández', 'f', 'Calle Sur 456', '456123789', '1992-07-15', 'Contador', '2020-07-01', 'Contabilidad', 1100),
('33445566-7', 'Andrés', 'González', 'm', 'Avenida Este 789', '321654987', '1985-11-20', 'Analista', '2019-10-01', 'Sistemas', 1400),
('44556677-8', 'Patricia', 'López', 'f', 'Avenida Oeste 101', '987321654', '1990-01-25', 'Recepcionista', '2021-01-01', 'Administración', 900);


-- Insertar usuarios con contraseñas en texto plano (para el ejemplo, en la práctica usa contraseñas hash)
INSERT INTO usuario (username, password, trabajador_id, rol_id) 
VALUES 
('admin_user', 'admin_password', 1, 1),
('hr_user', 'hr_password', 2, 2),
('worker_user', 'worker_password', 3, 3);
('supervisor_user', 'supervisor_password', 4, 3),
('contador_user', 'contador_password', 5, 3),
('analista_user', 'analista_password', 6, 3),
('recepcionista_user', 'recepcionista_password', 7, 3);

-- Insertar contactos de emergencia
INSERT INTO contacto_emergencia (nombre, apellido, relacion, telefono, trabajador_id) 
VALUES 
('Ana', 'Pérez', 'Esposa', '987654321', 1),
('Carlos', 'Gómez', 'Padre', '123456789', 2),
('Laura', 'Sánchez', 'Madre', '789123456', 3);
('Marta', 'Mendoza', 'Esposa', '789456123', 4),
('José', 'Fernández', 'Padre', '456123789', 5),
('Laura', 'González', 'Madre', '321654987', 6),
('Javier', 'López', 'Hermano', '987321654', 7);

-- Insertar cargas familiares
INSERT INTO carga_familiar (nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id) 
VALUES 
('Lucas', 'Pérez', 'Hijo', 'm', '2010-04-05', 1),
('Lucía', 'Gómez', 'Hija', 'f', '2012-06-07', 2),
('Martín', 'Sánchez', 'Hijo', 'm', '2014-08-09', 3);
('Javier', 'Mendoza', 'Hijo', 'm', '2012-08-05', 4),
('Ana', 'Fernández', 'Hija', 'f', '2014-10-10', 5),
('Camila', 'González', 'Hija', 'f', '2015-12-15', 6),
('Diego', 'López', 'Hijo', 'm', '2016-02-20', 7);