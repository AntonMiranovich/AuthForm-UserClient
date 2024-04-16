const express = require("express");
const { authUser } = require("../service/user.service");
const buildResponse = require('../helper/buildResponse');

const routerUser = express.Router();


routerUser.post("/", async (req, res) => {
  try {
    const { login, pwd } = req.body;
    const data = await authUser(login, pwd);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = routerUser;
