const pool = require("../db");


async function getUserByNameDB(name) {
    const client = await pool.connect();
    const sql = "select * from clients where responsible=$1";
    const data = (await client.query(sql, [name])).rows;
    client.release();
    return data;
}

module.exports = { getUserByNameDB };
