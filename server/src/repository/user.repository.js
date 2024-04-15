const pool = require("../db");


async function authUserDB(login, pwd) {
  const client = await pool.connect();
  const sql = "select * from users where login=$1 and pwd =$2";
  const data = (await client.query(sql, [login, pwd])).rows;
  client.release();
  return data;
}

module.exports = { authUserDB };
