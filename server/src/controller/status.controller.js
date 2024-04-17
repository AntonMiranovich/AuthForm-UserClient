const express = require("express");
const { updateStatus } = require("../service/status.service");
const buildResponse = require('../helper/buildResponse');

const routerStatus = express.Router();


routerStatus.post("/", async (req, res) => {
  try {
    const { id, status } = req.body;
    const data = await updateStatus(id, status);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = routerStatus;