const mysql = require('mysql2');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Lamborghini13/05',
    database:'barbershop'
});

con.connect((err)=> {
    if(err){
        throw err;
    }
    console.log("Conectado exitosamente a la BD");
});

module.exports = con;