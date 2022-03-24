import sendgrid from "@sendgrid/mail";
import loggerConfig from "../../config/logger.js";
const logger = loggerConfig({label: 'courses-resolver'})
import defaultEnTemplate from "./templates/default.en.js";
import defaultPlTemplate from "./templates/default.pl.js";

export const sendConfirmRegistrationEmail = ({
  receiver, verificationToken, language}) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  
  const mail = {
    to: receiver,
    from: process.env.SENDGRID_EMAIL_FROM
  };

  if (language === 'pl') {
    mail.subject = "Potwierdź konto"
    mail.html = defaultPlTemplate({textContent: `Dziękujemy za rejestrację na stronie.<br/><br/>Potwierdź swój adres email klikając <a href="${process.env.WEBSITE_URL}/register/confirm/${verificationToken}">tutaj</a>.<br><br>Jeśli link nie działa, skopiuj poniższy adres URL i wklej go do przeglądarki: <br/><br/> ${process.env.WEBSITE_URL}/register/confirm/${verificationToken}`})
  } else {
      mail.subject = "Confirm your registration"
      mail.html = defaultEnTemplate({textContent: `Thank you for registering on our site.<br/><br/>Please confirm your registration by clicking <a href="${process.env.WEBSITE_URL}/register/confirm/${verificationToken}">here</a>.<br><br>If the link doesn't work properly, please copy the following URL address and paste it to your browser: <br/><br/> ${process.env.WEBSITE_URL}/register/confirm/${verificationToken}`})
  }

  sendgrid
    .send(mail)
    .then(() => {
      logger.info(`Confirm registration email sent to user: ${receiver}`)
    })
    .catch((error) => {
      console.error(error.response.body.errors);
    });
};

export const sendForgotPasswordEmail = ({receiver, verificationToken, language}) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  const mail = {
    to: receiver,
    from: process.env.SENDGRID_EMAIL_FROM
  };

  if (language === 'pl') {
    mail.subject = "Zmiana hasła"
    mail.html = defaultPlTemplate({textContent: `Aby zmienić hasło, kliknij <a href="${process.env.WEBSITE_URL}/forgot-password/${verificationToken}">tutaj</a>.<br><br>Jeśli link nie działa, skopiuj poniższy adres URL i wklej go do przeglądarki: <br/><br/> ${process.env.WEBSITE_URL}/forgot-password/${verificationToken}`})
  } else {
      mail.subject = "Reset your password"
      mail.html = defaultEnTemplate({textContent: `In order to reset your password, please click <a href="${process.env.WEBSITE_URL}/forgot-password/${verificationToken}">here</a>.<br><br>If the link doesn't work properly, please copy the following URL address and paste it to yor browser: <br/><br/> ${process.env.WEBSITE_URL}/forgot-password/${verificationToken}`})
  }

  sendgrid
    .send(mail)
    .then(() => {
      logger.info(`Forgot password email sent to user: ${receiver}`)
    })
    .catch((error) => {
      console.error(error);
    });
};
