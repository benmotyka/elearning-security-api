import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const quizSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    autopopulate: true,
  },
  items: [
    {
      question: {
        type: String,
        required: true,
      },
      answers: [
        {
          text: {
              type: String,
              required: true,
          },
          isCorrect: {
              type: Boolean,
              required: true,
          }
        },
      ],
    },
  ],
});

quizSchema.plugin(autopopulate);

export default mongoose.model("Quiz", quizSchema);
