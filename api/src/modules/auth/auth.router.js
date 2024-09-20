const authCtrl = require("./auth.controller");
const { registerDTO, loginDTO } = require("./auth.contract");
const {bodyValidator} = require("../../middleware/validator.middleware")

const authRouter = require("express").Router();

//registration
authRouter.post("/register",bodyValidator(registerDTO) ,authCtrl.register);

//activation
authRouter.get("/activate/:token", authCtrl.activate);

//login
authRouter.post("/login", bodyValidator(loginDTO),authCtrl.login);

//logout
authRouter.delete("/logout", authCtrl.logout);

//forget password
authRouter.post("/forget-password", authCtrl.forgetPassword);

//reset password
authRouter.patch("/reset-password/:token", authCtrl.resetPassword);

module.exports = authRouter;
