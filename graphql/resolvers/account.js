import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import validateCaptcha from "../../functions/captcha/validateCaptcha.js";

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
    return (user._doc)
  }
};
