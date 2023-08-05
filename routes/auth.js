const express = require("express");
const router = express.Router();
const { crearUsuario, loginUsuario } = require("../controllers/auth.controllers");

router.get("/", crearUsuario);

router.post("/", loginUsuario);

router.put("/editar", (req, res) => {
  res.send("peticion put recibida");
});

router.delete("/", (req, res) => {
  res.send("peticion delete recibida");
});

module.exports = router;
