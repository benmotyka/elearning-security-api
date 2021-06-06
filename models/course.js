import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  brief: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
    min: 1,
    max: 3,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  // comments: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Comment",
  //     autopopulate: true,
  //   },
  // ],
});

courseSchema.plugin(autopopulate);

export default mongoose.model("Course", courseSchema);
