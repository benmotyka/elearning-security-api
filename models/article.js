import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const articleSchema = new mongoose.Schema({
  header: {
    type: String,
    required: true,
    unique: "article-exists",
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: "article-exists",
  }
});

articleSchema.plugin(autopopulate);

export default mongoose.model("Article", articleSchema);
