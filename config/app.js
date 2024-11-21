const express = require("express");
const app = express();
const cors = require("cors");
const bookRouter = require("./books"); // Asegúrate de que la ruta es correcta

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usa el enrutador para las rutas de libros
app.use("/api", bookRouter);

// Inicia el servidor
app.listen(3000, () => {
  console.log("Servidor en ejecución en el puerto 3000");
});
