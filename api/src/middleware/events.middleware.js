const EventEmitter = require("events");
const mailServ = require("../services/mail.services");

const myEvent = new EventEmitter();

const EventName = {
  REGISTER_EMAIL: "registerEmail",
};

myEvent.on(EventName.REGISTER_EMAIL, async (data) => {
  try {
    await mailServ.mainSend({
      to: data.email,
      subject: "Activate your account",
      message: `Dear ${data.name}, <br>
            <p>Your account has been succesfully created.Please click link below or copy paste  url to activate your account</p> <br/>
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
    console.log("Email register event succesfull");
  } catch (exception) {
    console.log(exception);
    process.exit(1);
  }
});

module.exports = { myEvent, EventName };
