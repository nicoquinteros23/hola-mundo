
const crearUsuario = (req, res) => {    
   res.send("usuario registredo");
};

const loginUsuario = (req, res) => {
    res.send("usuario logueado");
};

module.exports = {
    crearUsuario,
    loginUsuario
};