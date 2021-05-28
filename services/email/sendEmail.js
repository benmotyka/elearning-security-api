import sendgrid from "@sendgrid/mail";

export const sendConfirmRegistrationEmail = (receiver, verificationToken) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  const mail = {
    to: receiver,
    from: process.env.SENDGRID_EMAIL_FROM,
    subject: "Confirm your registration",
    html: `<br>Hello,<br><br>Thank you for registering at our site. <br><br>Please confirm your registration at: http://localhost:3000/registration/confirm/${verificationToken} <br><br>Best regards,<br>Team`,
  };

  sendgrid
    .send(mail)
    .then(() => {
      console.log(`${new Date().toISOString()} Confirm registration email sent to ${receiver}`);
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
    html: `<br>Hello,<br><br>In order to reset your password, visit: http://localhost:3000/forgot-password/${verificationToken} <br><br>Best regards,<br>Team`,
  };

  sendgrid
    .send(mail)
    .then(() => {
      console.log(`${new Date().toISOString()} Forgot password email sent to ${receiver}`);
    })
    .catch((error) => {
      console.error(error);
    });
};
