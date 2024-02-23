INSERT INTO roles(nombre, descripcion) VALUES('PROPIETARIO', 'Rol de PROPIETARIO del jardin');
INSERT INTO roles(nombre, descripcion) VALUES('JARDINERO', 'Rol de JARDINERO');


INSERT INTO paises (nombre) VALUES ('Argentina');

INSERT INTO departamentos (nombre, pais_id) VALUES ('Buenos Aires', 1);
INSERT INTO departamentos (nombre, pais_id) VALUES ('Mendoza', 1);


INSERT INTO ciudades (nombre, departamento_id) VALUES ('La Plata', 1);
INSERT INTO ciudades (nombre, departamento_id) VALUES ('Mendoza', 2);


INSERT INTO usuarios (nombre, apellido, correo, clave, fecha_registro, perfil_id, ciudad_id, rol_id) VALUES ('Andres','Fonseca', 'andres@gmail.com', '$2a$12$jrk350scTSD6wlmAtLfF1OeRPkVXCGtL7/33BkJwzXPaTJWYbVQeW', current_timestamp, null, 1, 1);
INSERT INTO usuarios (nombre, apellido, correo, clave, fecha_registro, perfil_id, ciudad_id, rol_id) VALUES ('Jarlin','Fonseca', 'jarlinfonseca@gmail.com', '$2a$12$jrk350scTSD6wlmAtLfF1OeRPkVXCGtL7/33BkJwzXPaTJWYbVQeW', current_timestamp,null,1, 2);
