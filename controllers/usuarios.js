const { response, request } = require("express");
const { sqlGetUsuarios, sqlPostUsuario } = require("../models/usuario");

const getUsuarios = async (req = request, res = response) => {
  const { success, data } = await sqlGetUsuarios();
  res.json({
    message: "exito get",
    success,
    data,
  });
};

const postUsuarios = async (req, res = response) => {
  const { nombre } = req.body;
  const { success } = await sqlPostUsuario(nombre);

  res.json({
    message: "exito post",
    success,
  });
};

const putUsuarios = async (req, res = response) => {
  const { id } = req.params;
  res.json({
    message: "exito put",
    id,
  });
};

const deleteUsuarios = async (req, res = response) => {
  const { id } = req.params;
  res.json({
    message: "exito delete",
    id,
  });
};

module.exports = {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
};
