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
    accountLevel: {
      type: String,
      required: true,
    },
    coursesFinished: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      autopopulate: true,
    }],
    coursesStarted: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      autopopulate: true,
    }],
    quizesFinished: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      autopopulate: true,
    }],
  },
  { timestamps: true }
);


userSchema.plugin(autopopulate);

export default mongoose.model("User", userSchema);
