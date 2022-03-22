import sendgrid from "@sendgrid/mail";
import loggerConfig from "../../config/logger.js";
const logger = loggerConfig({label: 'courses-resolver'})
import defaultTemplate from "./templates/default.js";

export const sendConfirmRegistrationEmail = (receiver, verificationToken) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  
  const mail = {
    to: receiver,
    from: process.env.SENDGRID_EMAIL_FROM,
    subject: "Confirm your registration",
    html: defaultTemplate({textContent: `Thank you for registering on our site.<br/><br/>Please confirm your registration by clicking <a href="${process.env.WEBSITE_URL}/register/confirm/${verificationToken}">here</a><br><br>If the link doesn't work properly, please copy the following URL address and paste it to your browser: <br/><br/> ${process.env.WEBSITE_URL}/register/confirm/${verificationToken}`}),
  };

  sendgrid
    .send(mail)
    .then(() => {
      logger.info(`Confirm registration email sent to user: ${receiver}`)
    })
    .catch((error) => {
      console.error(error.response.body.errors);
    });
};

export const sendForgotPasswordEmail = (receiver, verificationToken) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  const mail = {
    to: receiver,
    from: process.env.SENDGRID_EMAIL_FROM,
    subject: "Reset your password",
    html: defaultTemplate({textContent: `In order to reset your password, please click <a href="${process.env.WEBSITE_URL}/forgot-password/${verificationToken}">here</a>.<br><br>If the link doesn't work properly, please copy the following URL address and paste it to yor browser: <br/><br/> ${process.env.WEBSITE_URL}/forgot-password/${verificationToken}`}),
  };

  sendgrid
    .send(mail)
    .then(() => {
      logger.info(`Forgot password email sent to user: ${receiver}`)
    })
    .catch((error) => {
      console.error(error);
    });
};
