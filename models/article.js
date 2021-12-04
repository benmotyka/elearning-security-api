import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const articleSchema = new mongoose.Schema({
  header: {
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
  language: {
    type: String,
    required: true,
  },
});

articleSchema.plugin(autopopulate);

export default mongoose.model("Article", articleSchema);
