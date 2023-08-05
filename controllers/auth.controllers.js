const crearUsuario = (req, res) => {
  const { nombre, edad } = req.body;
  console.log(nombre);

  res.json({
    msg: "usuario creado",
    nombre,
  });
};

const loginUsuario = (req, res) => {
  res.json({
    msg: "usuario logueado",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
};
