CREATE DATABASE barbershop;
USE barbershop;

CREATE TABLE books(
id INT NOT NULL AUTO_INCREMENT,
book_title VARCHAR(30),
book_author VARCHAR(15),
book_published DATE,
PRIMARY KEY(id)
);

INSERT INTO books(book_title,book_author,book_published) VALUES
('Coronavirus La Cura', 'Paolo','2020-03-21'),
('Lecturas Clasicas', 'Jose', null);

delimiter $$
CREATE PROCEDURE usp_listar_books()
BEGIN
SELECT * FROM books;
END;

delimiter $$
CREATE PROCEDURE usp_insertar_books(
title VARCHAR(30),
autor VARCHAR(15),
publicado DATE)
BEGIN
INSERT INTO books(book_title,book_author,book_published)
VALUES (title,valor,publicado);
END;