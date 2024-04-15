const { authUserDB } = require("../repository/user.repository");


async function authUser(login, pwd) {
  const data = await authUserDB(login, pwd);
  if (!data.length) throw new Error("The user is not registered");
  return data;
}

module.exports = { authUser };
