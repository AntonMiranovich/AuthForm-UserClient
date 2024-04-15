function buildResponse(response, code, message) {
  response.status(code);
  response.send(message);
}

module.exports = buildResponse;