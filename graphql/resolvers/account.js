import User from "../../models/user.js"
import jwt from "jsonwebtoken"

export default {
    getAccountInfo: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!");
          }
          console.log(req.userId);
          const user = await User.findById(req.userId);
          if (!user) {
            throw new Error("User not found.");
          }
            return {
                email: user._doc.email,
                createdAt: user._doc.createdAt.toISOString(),
            }
        }
}