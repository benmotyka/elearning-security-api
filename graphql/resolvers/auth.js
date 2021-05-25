import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendConfirmRegistrationEmail from "../../services/email/sendConfirmRegistrationEmail.js";
import { v4 as uuidv4 } from "uuid";

export default {
  registerUser: async (args) => {
    try {
      const hashedPassword = await bcrypt.hash(args.userInput.password, 10);
      let userVerificationToken = uuidv4();
      const user = new User({
        email: args.userInput.email,
        emailVerified: false,
        verificationToken: userVerificationToken,
        password: hashedPassword,
      });
      const result = await user.save();
      sendConfirmRegistrationEmail(args.userInput.email, userVerificationToken);
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
};
