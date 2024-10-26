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

  mainSend = async ({ to, subject, message }) => {
    try {
      const response = await this.transport.sendMail({
        to: to,
        from: process.env.SMTP_FROM,
        subject: subject,
        html: message,

        // bcc,
        // cc,
        // attachments,
      });
      console.log(response);
      return;
    } catch (exception) {
      console.log(exception);
      throw {
        message: "Error sending email",
        data: exception,
        status: "EMAIL_SENDING_ERROR",
      };
    }
  };
}

const mailServ = new MailServices();
module.exports = mailServ;
