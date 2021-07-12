const express = require("express"); // se importa express para poder utilizarlo

const cors = require("cors"); // sirve para poder consumir las apis desde un sitio web

const routeUsuarios = require("../routes/usuarios");
const db = require("../db/connection");

class Server {
  //consutructor
  constructor() {
    // app tiene las caracteristicas de express
    this.app = express();

    // puerto donde se levanta el servidor
    this.port = 8082;

    this.usuariosPath = "/api/usuarios";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.getConnection();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.log("error", error.message);
      //  console.error("Unable to connect to the database:", error);
    }
  }

  middlewares() {
    //cors
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, routeUsuarios);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
