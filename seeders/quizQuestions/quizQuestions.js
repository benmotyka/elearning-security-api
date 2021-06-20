import QuizQuestion from "../../models/quizQuestion.js";
import Course from "../../models/course.js";
import { quizQuestionsData } from "./quizQuestions.data.js";

const seedQuizQuestions = () => {
  QuizQuestion.collection.drop();
  console.log("Seeding quiz questions!")
  quizQuestionsData.map(async (quizQuestion) => {
    try {
      const course = await Course.findOne({ title: quizQuestion.courseTitle });
      const newQuizQuestion = await new QuizQuestion({
          course: course._id,
          question: quizQuestion.question,
          answers: quizQuestion.answers,
          correctAnswerIndex: quizQuestion.correctAnswerIndex,
      }).save();
      console.log(`${newQuizQuestion.question} quiz question added!`);
    } catch (error) {
      console.log(error);
    }
  });
};

export default seedQuizQuestions;
