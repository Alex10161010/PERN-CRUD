CREATE DATABASE tareasdb

CREATE TABLE tareas(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) UNIQUE,
    descripcion VARCHAR(255)
);

conectarme a postgres con commando
>psql -U postgres

listar la base de datos
>\l

creamos la base de datos
>CREATE DATABASE tareasdb

entrar a la base de datos que creamos
>\c tareasdb


