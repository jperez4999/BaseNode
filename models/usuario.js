const queryTemplate = require("../helpers/queryTemplate");

const sqlGetUsuarios = async () => {
  let query = `SELECT * FROM  usuarios`;
  const data = await queryTemplate(query);

  return data;
};

const sqlPostUsuario = async (nombre) => {
  let query = `INSERT INTO usuarios(${nombre})
           VALUES('Learn how to insert a new row')`;
  const data = await queryTemplate(query);

  return data;
};

module.exports = { sqlGetUsuarios, sqlPostUsuario };
