import User from "../../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export default {
    registerUser: async ( args ) => {
        try {
            const hashedPassword = await bcrypt.hash(args.userInput.password, 10);
            const user = new User({
                email: args.userInput.email,
                password: hashedPassword,
            })
            const result = await user.save();
            return {...result._doc, password: null, _id: result.id}
        } catch (error) {
            throw error;
        }
    },
    loginUser: async ({email, password}) => {
        const user = await User.findOne({email: email});
        if(!user){
            throw new Error("User doesn't exist!");
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual){
            throw new Error("Incorrect password!");
        }
        const token = jwt.sign({userId: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: 600,})
        return {userId: user.id, token: token, tokenExpiration: 600};
    }
}