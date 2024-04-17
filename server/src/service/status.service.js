const { updateStatusDB } = require("../repository/status.repository");


async function updateStatus(id, status) {
  const data = await updateStatusDB(id, status);
  if (!data.length) throw new Error("No such customers were found");
  return data;
}

module.exports = { updateStatus };