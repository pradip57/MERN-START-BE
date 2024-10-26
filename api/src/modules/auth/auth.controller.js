const mailServ = require("../../services/mail.services");
const {
  cloudFileUpload,
  generateRandomString,
} = require("../../utilities/helper");
const bcryptJs = require("bcryptjs");

class AuthController {
  register = async (req, res, next) => {
    try {
      const data = req.body;
      // console.log(req.file);
      if (req.file) {
        data.image = await cloudFileUpload(req.file);
      }
      const passwordEncrypt = bcryptJs.hashSync(data.password, 10);
      data.password = passwordEncrypt;
      data.activationToken = generateRandomString(50);
      data.tokenExpires = new Date(Date.now() + 60 * 60 * 3 * 1000);

      await mailServ.mainSend({
        to: data.email,
        subject: "Activate your account",
        message: `Dear ${data.name}, <br>
        <p>Your account has been succesfully created.Please click link below or copy paste the url to activate your account</p> <br/>
        <a href = "${process.env.FRONTEND_URL}/activate/${data.activationToken}">
        ${process.env.FRONTEND_URL}/activate/${data.activationToken}
        </a>
        <br/>
        <p><strong>Note: </strong>Please donot reply to this email</p>
        <p>Regards,</p>
        <p>System Administration</p>
        <p>${process.env.SMTP_FROM}</p>
        `,
      });

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
