require("dotenv").config();

const nodemailer = require("nodemailer");

class MailServices {
  transport;

  constructor() {
    try {
      let connectionOptions = {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,

        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      };

      if (process.env.SMTP_PROVIDER === "gmail") {
        connectionOptions = {
          ...connectionOptions,
          service: "gmail",
        };
      }
      this.transport = nodemailer.createTransport(connectionOptions);
      console.log("Succesfully connected mail services");
    } catch (exception) {
      console.log("Error connecting email services", exception);
      throw exception;
    }
  }

  mainSend = ({}) => {
    try {
    } catch (exception) {}
  };
}

const mailServ = new MailServices();
module.exports = mailServ;
