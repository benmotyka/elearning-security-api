import User from "../../models/user.js";
import UserActions from "../../models/userActions.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  sendConfirmRegistrationEmail,
  sendForgotPasswordEmail,
} from "../../services/email/sendEmail.js";
import { v4 as uuidv4 } from "uuid";
import validateCaptcha from "../../functions/captcha/validateCaptcha.js";
import loggerConfig from "../../config/logger.js"
const logger = loggerConfig({label: 'auth-resolver'})

export default {
  login: async (args) => {
    await validateCaptcha(args.userInput.captchaToken);

    logger.info(`Logging user: ${args.userInput.email}`)
    const TOKEN_EXP = 6000;
    const user = await User.findOne({ email: args.userInput.email });

    if (!user || !user.emailVerified) {
      logger.info(`User: ${args.userInput.email} doesn't exist or is not verified`)
      throw new Error("invalid-user-or-password");
    }
    const isEqual = await bcrypt.compare(
      args.userInput.password,
      user.password
    );
    if (!isEqual) {
      logger.info(`User: ${args.userInput.email} entered wrong password`)
      throw new Error("invalid-user-or-password");
    }

    if (args.userInput.rememberMe) {
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET
      );
    return { userId: user.id, name: user.name, token: token, accountLevel: user.accountLevel };
    } else {
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: TOKEN_EXP }
      );
    return { userId: user.id, email: user.email, name: user.name, token: token, tokenExpiration: TOKEN_EXP, accountLevel: user.accountLevel };
    }
  },
  register: async (args) => {
    await validateCaptcha(args.captchaToken);
    const isDuplicate = await User.findOne({ email: args.email });
    logger.info(`Registering new user: ${args.email}`)

    if (isDuplicate) {
      logger.info(`User email: ${args.email} already exists`)
      throw new Error("user-exists");
    }
    const hashedPassword = await bcrypt.hash(args.password, 10);
    let token = uuidv4();
    const user = new User({
      email: args.email,
      name: args.name,
      emailVerified: false,
      password: hashedPassword,
      accountLevel: args.accountLevel
    });
    const result = await user.save();
    const newAction = new UserActions({
      userId: user.id,
      verificationToken: token,
    });
    await newAction.save();
    logger.info(`Sending confirm registration email from user: ${args.email}`)
    sendConfirmRegistrationEmail({
      receiver: args.email, 
      verificationToken: token,
      language: args.language
    });
    return {email: result.email};
  },
  confirmEmail: async ({ token }) => {
    const action = await UserActions.findOne({ verificationToken: token });
    if (!action) {
      throw new Error("action-doesnt-exist");
    }
    const user = await User.findOne({ _id: action.userId });
    logger.info(`User: ${user.email} has just confirmed their account`)

    await user.updateOne({ emailVerified: true });
    await action.deleteOne({ verificationToken: token });
    return {
      email: user._doc.email,
    };
  },
  forgotPassword: async ({ email, captchaToken, language }) => {
    await validateCaptcha(captchaToken);
    const user = await User.findOne({ email: email });
    logger.info(`User: ${email} used forgot password function`)

    if (!user || !user.emailVerified) {
      throw new Error("user-not-found");
    }
    let token = uuidv4();
    const alreadySent = await UserActions.findOne({ userId: user.id });
    if (alreadySent) {
      throw new Error("email-sent-already");
    }
    const newAction = new UserActions({
      userId: user.id,
      forgotPasswordToken: token,
    });
    await newAction.save();
    sendForgotPasswordEmail({
      receiver: email, 
      verificationToken: token,
      language
    });
    return {
      email: user._doc.email,
    };
  },
  forgotPasswordChange: async ({ token, password, captchaToken }) => {
    await validateCaptcha(captchaToken);
    const action = await UserActions.findOne({ forgotPasswordToken: token });
    if (!action) {
      throw new Error("link-doesnt-exist");
    }
    const user = await User.findOne({ _id: action.userId });
    logger.info(`Changing password for user: ${user.email} with forgot password change mechanism`)
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.updateOne({ password: hashedPassword });
    await action.deleteOne({ forgotPasswordToken: token });
    return {
      email: user._doc.email,
    };
  },
};
