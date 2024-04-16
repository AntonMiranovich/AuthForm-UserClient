const { getUserByNameDB } = require("../repository/client.repository");


async function getUserByName(name) {
  const data = await getUserByNameDB(name);
  if (!data.length) throw new Error("No such customers were found");
  return data;
}

module.exports = { getUserByName };