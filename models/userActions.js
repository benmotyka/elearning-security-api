import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const userActionsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
    verificationToken: {
      type: String,
    },
    forgotPasswordToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserActions", userActionsSchema);
