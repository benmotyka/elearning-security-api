import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const courseRatingSchema = new mongoose.Schema(
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
      type: String,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
      },
  },
  { timestamps: true }
);

courseRatingSchema.plugin(autopopulate);

export default mongoose.model("CourseRating", courseRatingSchema);
