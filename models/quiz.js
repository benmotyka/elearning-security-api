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
        type: Object,
        required: true,
      },
      answers: [
        {
          text: {
              type: Object,
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
