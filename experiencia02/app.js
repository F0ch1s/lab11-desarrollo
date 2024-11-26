const express = require('express');
const app = express();
const cors = require('cors');
const con = require('./config/conexion'); // Importa la conexión

app.use(cors());
app.use(express.json());

const bookRouter = require('./routes/books'); // Importa el enrutador
app.use('/api', bookRouter); // Define la ruta base como '/api'

app.listen(3000, () => {
    console.log("Servidor en ejecución");
});
