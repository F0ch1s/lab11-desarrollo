const mysql = require('mysql2');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Conectado exitosamente a la BD");
});

module.exports = con;
