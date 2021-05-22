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
      throw new Error("User not found.");
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
      throw new Error("User doesn't exist!");
    }
    const isEqual = await bcrypt.compare(args.oldPassword, user.password);
    if (!isEqual){
        throw new Error("Incorrect password!");
    }
    const hashedPassword = await bcrypt.hash(args.newPassword, 10);
    const update = {password: hashedPassword};
    await user.updateOne(update);
    return {
      email: user._doc.email
    }
  },
};
