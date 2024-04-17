const pool = require("../db");


async function updateStatusDB(id, status) {
    const client = await pool.connect();
    const sql = "select * from clients where id=$1";
    const oldObj = (await client.query(sql, [id])).rows;

    const newObj = { ...oldObj[0], status: status };
    const resSql = 'update clients set accnum=$1,surname=$2,name=$3,patronymic=$4,data=$5,inn=$6,responsible=$7,status=$8 where id=$9 returning *'
    const result = (await client.query(resSql, [newObj.accnum, newObj.surname, newObj.name, newObj.patronymic, newObj.data, newObj.inn, newObj.responsible, newObj.status, id])).rows;
    client.release();
    return result;
}


module.exports = { updateStatusDB };