const authCtrl = require("./auth.controller");

const authRouter = require("express").Router();

//registration
authRouter.post("/register", authCtrl.register);

//activation
authRouter.get("/activate/:token", authCtrl.activate);

//login
authRouter.post("/login", authCtrl.login);

//logout
authRouter.delete("/logout", authCtrl.logout);

//forget password
authRouter.post("/forget-password", authCtrl.forgetPassword);

//reset password
authRouter.patch("/reset-password/:token", authCtrl.resetPassword);

module.exports = authRouter;
