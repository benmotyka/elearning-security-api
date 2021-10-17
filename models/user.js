import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: "This user is already registered",
    },
    emailVerified: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    actions: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserActions",
      autopopulate: true,
    },
    coursesFinished: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      autopopulate: true,
    }],
  },
  { timestamps: true }
);


userSchema.plugin(autopopulate);

export default mongoose.model("User", userSchema);
