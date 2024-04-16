const express = require("express");
const { getUserByName } = require("../service/client.service");
const buildResponse = require('../helper/buildResponse');

const routerClient = express.Router();


routerClient.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const data = await getUserByName(name);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = routerClient;