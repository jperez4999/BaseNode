const db = require("../db/connection");

const queryTemplate = async (query) => {
  let res;
  try {
    let conn = await db.getConnection();
    let [data] = await conn.execute(query);
    conn.release();

    res = { data, success: true };
  } catch (error) {
    console.log(error);
    res = { success: false };
  }

  return res;
};

module.exports = queryTemplate;
