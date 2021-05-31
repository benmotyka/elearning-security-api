import User from "../../models/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export default {
  getAccountInfo: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("Nie znaleziono użytkownika!");
    }
    return {
      email: user._doc.email,
      createdAt: user._doc.createdAt.toISOString(),
    };
  },
  resetPassword: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const user = await User.findById(req.userId);
    if(!user){
      throw new Error("Użytkownik nie istnieje!");
    }
    const isEqual = await bcrypt.compare(args.oldPassword, user.password);
    if (!isEqual){
        throw new Error("Błędne hasło!");
    }
    const hashedPassword = await bcrypt.hash(args.newPassword, 10);
    await user.updateOne({password: hashedPassword});
    return {
      email: user._doc.email
    }
  },
};
