const mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "barbershop",
  port: "3307",
});

con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conectado exitosamente a la BD");
});

module.exports = con;
