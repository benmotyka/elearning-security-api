import QuizQuestion from "../../models/quizQuestion.js";
import Course from "../../models/course.js";
import User from "../../models/user.js";

export default {
  getQuizQuestions: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const course = await Course.findOne({ link: args.courseName });
    return await QuizQuestion.find({ course: course._id });
  },
  finishQuiz: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("Użytkownik nie istnieje!");
    }
    const course = await Course.findOne({link: args.courseName})
    const quizQuestions = await QuizQuestion.find({course: course._id})
    const userAnswers = JSON.parse(args.userAnswers);
    let userScore = 0;
    let correct = false;
    userAnswers.map(answer => {
      quizQuestions.map(question => {
        if(toString(answer.question) === toString(question._id)) {
          if(answer.answer === question.correctAnswerIndex) correct = true;
        }
      })
      if(correct) userScore += 1;
    })
    return { correctAnswers: userScore, numberOfQuestions: quizQuestions.length};
  }
};
