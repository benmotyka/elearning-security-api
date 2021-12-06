import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const courseSchema = new mongoose.Schema({
  header: {
    type: Object,
    required: true,
  },
  description: {
    type: Object,
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
    max: 3
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

courseSchema.plugin(autopopulate);

export default mongoose.model("Course", courseSchema);
