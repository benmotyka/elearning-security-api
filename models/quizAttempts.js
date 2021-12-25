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
  }
}, {
  timestamps: true
});

quizAttemptsSchema.plugin(autopopulate);

export default mongoose.model("QuizAttempts", quizAttemptsSchema);
