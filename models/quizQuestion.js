import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const quizQuestionSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
        autopopulate: true,
    },
    question: {
        type: String,
        required: true,
    },
    answers: [{
        type: String,
        required: true,
    }],
    correctAnswerIndex: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
})

quizQuestionSchema.plugin(autopopulate);

export default mongoose.model("QuizQuestion", quizQuestionSchema);