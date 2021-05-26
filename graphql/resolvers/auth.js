import User from "../../models/user.js";
import UserActions from "../../models/userActions.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {sendConfirmRegistrationEmail, sendForgotPasswordEmail} from "../../services/email/sendEmail.js";
import { v4 as uuidv4 } from "uuid";

export default {
  registerUser: async (args) => {
    try {
      const hashedPassword = await bcrypt.hash(args.userInput.password, 10);
      let token = uuidv4();
      const user = new User({
        email: args.userInput.email,
        emailVerified: false,
        verificationToken: token,
        password: hashedPassword,
      });
      const result = await user.save();
      sendConfirmRegistrationEmail(args.userInput.email, token);
      return { ...result._doc, password: null, _id: result.id };
    } catch (error) {
      throw error;
    }
  },
  loginUser: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user || !user.emailVerified) {
      throw new Error("User doesn't exist!");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Incorrect password!");
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
        throw new Error("Invalid link!");
    }
    console.log(`User ${user.email} has just confirmed their account.`)
    await user.update({ emailVerified: true, verificationToken: "" });
    return {
      email: user._doc.email,
    };
  },
  forgotPassword: async ({email}) => {
    const user = await User.findOne({email: email});
    if(!user || !user.emailVerified){
      throw new Error("Account doesn't exist!")
    }
    let token = uuidv4();
    const alreadySent = await UserActions.findOne({userId: user.id})
    if(alreadySent){
      throw new Error("Forgot password email already sent!")
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
  forgotPasswordChanged: async({token, password}) => {
    const action = await UserActions.findOne({forgotPasswordToken: token})
    if(!action){
      throw new Error("Forgot password link doesn't exist!")
    }
    const user = await User.findOne({_id: action.userId})
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.updateOne({password: hashedPassword});
    await action.updateOne({forgotPasswordToken: ""})
    return {
      email: user._doc.email,
    };
  }
};
