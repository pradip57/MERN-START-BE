const authRouter = require("express").Router();

//registration
authRouter.post("/register", (req, res, next) => {
  const data = req.body;
  console.log(req.body)
  res.status(201).json({
    result: data,
    message: "This is register page",
    meta: null,
    status: "SUCCESS",
  });
});

//activation
authRouter.get("/activate/:token", (req, res, next) => {
  res.status(200).json({
    result: "",
    message: "This is activation page",
    meta: null,
    status: "SUCCESS",
  });
});

//login
authRouter.post("/login", (req, res, next) => {
  res.status(200).json({
    result: "",
    message: "This is login page",
    meta: null,
    status: "SUCCESS",
  });
});

//logout
authRouter.delete("/logout", (req, res, next) => {
  res.status(200).json({
    result: "",
    message: "Logout page",
    meta: null,
    status: "SUCCESS",
  });
});

//forget password
authRouter.post("/forget-password", (req, res, next) => {
  res.status(200).json({
    result: "",
    message: "This is forget password",
    meta: null,
    status: "SUCCESS",
  });
});

//reset password
authRouter.patch("/reset-password/:token", (req, res, next) => {
  res.status(200).json({
    result: "",
    message: "This is reset password",
    meta: null,
    status: "SUCCESS",
  });
});

module.exports = authRouter;
