import User from "../../models/user.js";
import UserActions from "../../models/userActions.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {sendConfirmRegistrationEmail, sendForgotPasswordEmail} from "../../services/email/sendEmail.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default {
  registerUser: async (args) => {
    try {
      const captcha = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${args.userInput.captchaToken}`)
      if(!captcha.data.success || captcha.data.score <= 0.3){
        throw new Error("Coś poszło nie tak. Spróbuj ponownie później.");
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 10);
      let token = uuidv4();
      const user = new User({
        email: args.userInput.email,
        emailVerified: false,
        verificationToken: token,
        password: hashedPassword,
      });
      const result = await user.save();
      // sendConfirmRegistrationEmail(args.userInput.email, token);
      return { ...result._doc, password: null, _id: result.id };
    } catch (error) {
      throw error;
    }
  },
  loginUser: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user || !user.emailVerified) {
      throw new Error("Użytkownik nie istnieje!");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Błędne hasło!");
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: 600 }
    );
    return { userId: user.id, token: token, tokenExpiration: 600 };
  },
  confirmEmail: async ({ token }) => {
    const user = await User.findOne({ verificationToken: token });
    if(!user){
        throw new Error("Błędny link!");
    }
    console.log(`${new Date().toISOString()} User ${user.email} has just confirmed their account.`)
    await user.updateOne({ emailVerified: true, verificationToken: "" });
    return {
      email: user._doc.email,
    };
  },
  forgotPassword: async ({email}) => {
    const user = await User.findOne({email: email});
    if(!user || !user.emailVerified){
      throw new Error("Konto nie istnieje!")
    }
    let token = uuidv4();
    const alreadySent = await UserActions.findOne({userId: user.id})
    if(alreadySent){
      throw new Error("Email ze zmianą hasła został już wysłany!")
    }
    const newAction = new UserActions({
      userId: user.id,
      forgotPasswordToken: token
    })
    await newAction.save();
    sendForgotPasswordEmail(email, token);
    return {
      email: user._doc.email,
    };
  },
  forgotPasswordChange: async({token, password}) => {
    const action = await UserActions.findOne({forgotPasswordToken: token})
    if(!action){
      throw new Error("Link nie istnieje!")
    }
    const user = await User.findOne({_id: action.userId})
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.updateOne({password: hashedPassword});
    await action.deleteOne({forgotPasswordToken: token})
    return {
      email: user._doc.email,
    };
  }
};
