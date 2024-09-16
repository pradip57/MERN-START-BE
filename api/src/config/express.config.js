const express = require("express");

const app = express();

app.use("/health", (req, res) => {
  res.send("This is health");
});

app.use("/", (req, res) => {
  res.send("This is main");
});

module.exports = app;
