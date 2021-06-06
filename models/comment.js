import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const commentSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
      autopopulate: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      autopopulate: true,
    },
    comment: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

commentSchema.plugin(autopopulate);

export default mongoose.model("Comment", commentSchema);
