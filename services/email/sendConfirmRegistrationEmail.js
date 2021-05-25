import sendgrid from '@sendgrid/mail'

const sendConfirmRegistrationEmail = (receiver, verificationToken) => {

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const mail = {
  to: receiver,
  from: 'benmotykaw@gmail.com', 
  subject: 'Confirm your registration',
  html: `<br>Hello,<br><br>Thank you for registering at our site. <br><br>Please confirm your registration at: http://localhost:3000/registration/confirm/${verificationToken} <br><br>Best regards,<br>Team`,
}

sendgrid
  .send(mail)
  .then(() => {
    console.log(`Confirm registration email sent to ${receiver}`)
  })
  .catch((error) => {
    console.error(error)
  })

}

export default sendConfirmRegistrationEmail;