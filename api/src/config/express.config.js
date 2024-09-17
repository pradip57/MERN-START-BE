const express = require("express");
const mainRouter = require("./router.config");

const app = express();

app.use("/api/v1",mainRouter);

module.exports = app;
