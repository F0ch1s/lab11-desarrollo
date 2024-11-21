const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    mensaje: "Esta es la Data de Clientes",
  });
});

app.post("/api/posts", (req, res) => {
  res.json({
    mensaje: "Post Creado..",
  });
});

app.listen(5000, () =>
  console.log("Servidor está ejecutándose en el puerto 5000")
);
