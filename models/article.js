import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const articleSchema = new mongoose.Schema({
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
  categories:{
    type: Object,
    required: false,
  },
  urls: {
    type: Array,
    required: false,
  }
});

articleSchema.plugin(autopopulate);

export default mongoose.model("Article", articleSchema);
