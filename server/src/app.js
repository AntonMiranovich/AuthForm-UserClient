const express = require("express");
const bodyParser = require("body-parser");
const routerUser = require("./controller/user.controller");
const routerClient=require('./controller/client.controller')
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,POST,PUT,DELETE,PATCH",
  })
);


app.use(bodyParser.json());
app.use("/auth", routerUser);
app.use("/client", routerClient);

app.use((error, req, res, _next) => {
  res.send(error.message);
});

module.exports = app;
