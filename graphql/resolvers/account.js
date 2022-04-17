import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import validateCaptcha from "../../functions/captcha/validateCaptcha.js";
import loggerConfig from "../../config/logger.js"
const logger = loggerConfig({label: 'courses-resolver'})
import {
  sendContactMail,
} from "../../services/email/sendEmail.js";
export default {
  resetPassword: async (args, req) => {
    await validateCaptcha(args.captchaToken);
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-doesnt-exist");
    }

    logger.info(`User: ${user.email} used reset password function from my account`)

    const isEqual = await bcrypt.compare(args.oldPassword, user.password);
    if (!isEqual) {
      throw new Error("wrong-old-password");
    }
    const hashedPassword = await bcrypt.hash(args.newPassword, 10);
    await user.updateOne({ password: hashedPassword });
    return {
      email: user._doc.email,
    };
  },
  changeAccountLevel: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);

    logger.info(`User: ${user.email} changed their account level to: ${args.newAccountLevel}`)

    if (!user) {
      throw new Error("user-doesnt-exist");
    }
    await user.updateOne({ accountLevel: args.newAccountLevel });
    return {
      accountLevel: args.newAccountLevel 
    };
  },
  getUserInfo: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-doesnt-exist");
    }
    logger.info(`Getting info of user: ${user.email}`)

    return (user._doc)
  },
  sendContactMessage: async ({email, subject, content, captchaToken}) => {
    await validateCaptcha(captchaToken);
    sendContactMail({
      sender: email, 
      subject,
      content
    });
    return {resultStatus: 'ok'}
  }
};
