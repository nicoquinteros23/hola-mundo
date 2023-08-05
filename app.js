const express = require("express");
require("dotenv").config();

//crear el servidor express
const app = express();

//rutas
app.use("/auth", require("./routes/auth"));
app.use("/admin", require("./routes/admin"));

//puero
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto " + process.env.PORT);
});
