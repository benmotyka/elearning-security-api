import loggerConfig from "../../config/logger.js";
const logger = loggerConfig({ label: "courses-resolver" });
import defaultEnTemplate from "./templates/default.en.js";
import defaultPlTemplate from "./templates/default.pl.js";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
    ssl: true,
  },
  logger: true,
  requireTLS: true,
});

export const sendConfirmRegistrationEmail = ({
  receiver,
  verificationToken,
  language,
}) => {
  const mail = {
    to: receiver,
    from: process.env.SMTP_EMAIL,
  };

  if (language === "pl") {
    mail.subject = "Potwierdź konto";
    mail.html = defaultPlTemplate({
      textContent: `Dziękujemy za rejestrację na stronie.<br/><br/>Potwierdź swój adres email klikając <a href="${process.env.WEBSITE_URL}/register/confirm/${verificationToken}">tutaj</a>.<br><br>Jeśli link nie działa, skopiuj poniższy adres URL i wklej go do przeglądarki: <br/><br/> ${process.env.WEBSITE_URL}/register/confirm/${verificationToken}`,
    });
  } else {
    mail.subject = "Confirm your registration";
    mail.html = defaultEnTemplate({
      textContent: `Thank you for registering on our site.<br/><br/>Please confirm your registration by clicking <a href="${process.env.WEBSITE_URL}/register/confirm/${verificationToken}">here</a>.<br><br>If the link doesn't work properly, please copy the following URL address and paste it to your browser: <br/><br/> ${process.env.WEBSITE_URL}/register/confirm/${verificationToken}`,
    });
  }

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      logger.info(`Confirm registration email sent to user: ${receiver}`);
    }
  });
};

export const sendForgotPasswordEmail = ({
  receiver,
  verificationToken,
  language,
}) => {
  const mail = {
    to: receiver,
    from: process.env.SMTP_EMAIL,
  };

  console.log(transporter.transporter.auth)
  console.log(transporter.auth)
  if (language === "pl") {
    mail.subject = "Zmiana hasła";
    mail.html = defaultPlTemplate({
      textContent: `Aby zmienić hasło, kliknij <a href="${process.env.WEBSITE_URL}/forgot-password/${verificationToken}">tutaj</a>.<br><br>Jeśli link nie działa, skopiuj poniższy adres URL i wklej go do przeglądarki: <br/><br/> ${process.env.WEBSITE_URL}/forgot-password/${verificationToken}`,
    });
  } else {
    mail.subject = "Reset your password";
    mail.html = defaultEnTemplate({
      textContent: `In order to reset your password, please click <a href="${process.env.WEBSITE_URL}/forgot-password/${verificationToken}">here</a>.<br><br>If the link doesn't work properly, please copy the following URL address and paste it to yor browser: <br/><br/> ${process.env.WEBSITE_URL}/forgot-password/${verificationToken}`,
    });
  }

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      logger.info(`Forgot password email sent to user: ${receiver}`);
    }
  });
};

export const sendContactMail = ({ sender, subject, content }) => {
  const mail = {
    to: "benmotykax@gmail.com",
    from: process.env.SMTP_EMAIL,
    subject: `Contact mail from ${sender}`,
    html: `<p>Subject: ${subject}</p><p>Content: ${content}</p>`,
  };

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      logger.info(`Contact email sent`);
    }
  });
};
