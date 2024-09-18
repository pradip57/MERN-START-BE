const express = require("express");
const authRouter = require("../modules/auth/auth.router");

const mainRouter = express.Router();

mainRouter.use("/health", (req, res) => {
  res.send("This is health check success");
});

mainRouter.use("/auth",authRouter);

mainRouter.use("/", (req, res) => {
  res.send("This is main page");
});

module.exports = mainRouter;
