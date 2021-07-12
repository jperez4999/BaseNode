//const config = require("config");
const mysql = require("mysql2");
const local = true;

const configMysqlRemote = {
  host: local ? "localhost" : "remotemysql.com",
  user: local ? "root" : "yHDxYSNPJo",
  password: local ? "root" : "qigF0A8VSF",
  port: local ? "8889" : "3306",
  database: local ? "node" : "yHDxYSNPJo",
};

function connection() {
  try {
    const pool = mysql.createPool({
      ...configMysqlRemote,
    });

    const promisePool = pool.promise();

    return promisePool;
  } catch (error) {
    return console.log(`Could not connect - ${error}`);
  }
}

const pool = connection();

module.exports = pool;
