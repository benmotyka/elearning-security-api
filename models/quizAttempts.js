import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const quizAttemptsSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    autopopulate: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    autopopulate: true,
  },
  userAnswers: {
      type: String,
      required: true
  },
  scorePercentage: {
      type: Number,
      required: true,
      default: 0
  }
}, {
  timestamps: true
});

quizAttemptsSchema.plugin(autopopulate);

export default mongoose.model("QuizAttempts", quizAttemptsSchema);
