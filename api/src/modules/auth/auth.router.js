const authCtrl = require("./auth.controller");
const { registerDTO, loginDTO } = require("./auth.contract");
const { bodyValidator } = require("../../middleware/validator.middleware");
const { setPath, uploader } = require("../../middleware/uploader.middleware");
const { tmpUpload } = require("../../config/cloudinary.config");

const authRouter = require("express").Router();

//registration
authRouter.post(
  "/register",

  setPath("users/"),
  uploader.single("image"),

  bodyValidator(registerDTO),
  authCtrl.register
);

//activation
authRouter.get("/activate/:token", authCtrl.activate);

//login
authRouter.post("/login", bodyValidator(loginDTO), authCtrl.login);

//logout
authRouter.delete("/logout", authCtrl.logout);

//forget password
authRouter.post("/forget-password", authCtrl.forgetPassword);

//reset password
authRouter.patch("/reset-password/:token", authCtrl.resetPassword);

module.exports = authRouter;
