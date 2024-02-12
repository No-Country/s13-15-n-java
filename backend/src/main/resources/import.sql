INSERT INTO roles(nombre, descripcion) VALUES('PROPIETARIO', 'Rol de PROPIETARIO del jardin');
INSERT INTO roles(nombre, descripcion) VALUES('JARDINERO', 'Rol de JARDINERO');

INSERT INTO usuarios (nombre, apellido, correo, clave, fecha_registro, rol_id) VALUES ('Andres','Fonseca', 'andres@gmail.com', '$2a$12$jrk350scTSD6wlmAtLfF1OeRPkVXCGtL7/33BkJwzXPaTJWYbVQeW', current_timestamp, 1);
INSERT INTO usuarios (nombre, apellido, correo, clave, fecha_registro, rol_id) VALUES ('Jarlin','Fonseca', 'jarlinfonseca@gmail.com', '$2a$12$jrk350scTSD6wlmAtLfF1OeRPkVXCGtL7/33BkJwzXPaTJWYbVQeW', current_timestamp, 2);

