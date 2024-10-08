const { cloudFileUpload } = require("../../utilities/helper");
const bcryptJs = require("bcryptjs");

class AuthController {
  register = async (req, res, next) => {
    try {
      const data = req.body;
      console.log(req.file);
      if (req.file) {
        data.image = await cloudFileUpload(req.file);
      }
      const passwordEncrypt = bcryptJs.hashSync(data.password, 10);
      data.password = passwordEncrypt;

      res.status(201).json({
        result: data,
        message: "This is register page",
        meta: null,
        status: "SUCCESS",
      });
    } catch (exception) {
      next(exception);
    }
  };

  activate = (req, res, next) => {
    try {
      res.status(200).json({
        result: "",
        message: "This is activation page",
        meta: null,
        status: "SUCCESS",
      });
    } catch (exception) {
      next(exception);
    }
  };

  login = (req, res, next) => {
    try {
      res.status(200).json({
        result: "",
        message: "This is login page",
        meta: null,
        status: "SUCCESS",
      });
    } catch (exception) {
      next(exception);
    }
  };

  logout = (req, res, next) => {
    try {
      res.status(200).json({
        result: "",
        message: "Logout page",
        meta: null,
        status: "SUCCESS",
      });
    } catch (exception) {
      next(exception);
    }
  };

  forgetPassword = (req, res, next) => {
    try {
      res.status(200).json({
        result: "",
        message: "This is forget password",
        meta: null,
        status: "SUCCESS",
      });
    } catch (exception) {
      next(exception);
    }
  };

  resetPassword = (req, res, next) => {
    try {
      res.status(200).json({
        result: "",
        message: "This is reset password",
        meta: null,
        status: "SUCCESS",
      });
    } catch (exception) {
      next(exception);
    }
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;
