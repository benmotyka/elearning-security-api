import QuizQuestion from "../../models/quizQuestion.js";
import Course from "../../models/course.js";
import User from "../../models/user.js";

export default {
  getQuizQuestions: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const course = await Course.findOne({ link: args.courseLink });
    return await QuizQuestion.find({ course: course._id });
  },
  finishQuiz: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-not-found");
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
