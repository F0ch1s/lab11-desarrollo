//Importacion de objetos de paquetes
var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");

//Conexion a la base de datos
var connection = mysql.createConnection({
  host: "localhost",
  database: "barbershop",
  user: "root",
  password: "root",
  port: "3307",
});

//Verificacion de conexion
connection.connect(function (err) {
  if (err) throw err;
  console.log("Se ha conectado a la base de datos");
});

//Convierte las tablas a formato JSON
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Crea el servidor Nodejs
var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;
});

//Crear la api que extrae los registros
app.get("/books", function (req, res) {
  connection.query("select * from books", function (error, results) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

//api que extrae los libros por ID
// Api que me traera los libros por ID
app.get("/books/:id", function (req, res) {
  connection.query(
    "select * from books where id=?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});
