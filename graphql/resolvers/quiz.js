import Course from "../../models/course.js";
import Quiz from "../../models/quiz.js"
import User from "../../models/user.js";
import QuizAttempts from "../../models/quizAttempts.js";

export default {
    getQuizData: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-not-found");
    }
    const course = await Course.findOne({ link: args.courseLink });
    const quiz = await Quiz.findOne({
        courseId: course._id
    })
    if (!quiz) {
        throw new Error("quiz-not-found")
    }
    if (
      user.quizesFinished.some(
        (alreadyFinished) =>
          alreadyFinished.courseId._id.toString() === course._id.toString()
      )
    ) {
      throw new Error("quiz-finished");
    }
    return (quiz._doc);
    },
    finishQuiz: async (args, req) => {
      if (!req.isAuth) {
        throw new Error("unauthenticated");
      }
      const user = await User.findById(req.userId);
      if (!user) {
        throw new Error("user-not-found");
      }
      const course = await Course.findOne({ link: args.courseLink });
      const quiz = await Quiz.findOne({
          courseId: course._id
      })

      let userScore = 0;
      const userAnswers = JSON.parse(args.userAnswers)
      quiz.items.forEach(quizItem => {
        userAnswers.forEach(userItem => {
          if(quizItem.question === userItem.question) {
            quizItem.answers.forEach(quizAnswer => {
              if((quizAnswer.text === userItem.answer.text) && quizAnswer.isCorrect) userScore++;
            })
          }
        })
      })
      
      if (!user.quizesFinished.some(quiz => quiz._id.toString() === quiz.id)) {
        user.quizesFinished.push(quiz.id);
      }

      const quizAttempt = new QuizAttempts({
        quizId: quiz.id,
        userId: user.id,
        userAnswers: args.userAnswers,
        scorePercentage: Math.round((userScore / quiz.items.length)*1e2)/1e2
      });
      await quizAttempt.save();
      await user.save();
      return ({correctAnswers: userScore, numberOfQuestions: quiz.items.length});
    },
    getQuizSummaryData: async (args, req) => {
      if (!req.isAuth) {
        throw new Error("unauthenticated");
      }
      const user = await User.findById(req.userId);
      if (!user) {
        throw new Error("user-not-found");
      }
      
      const course = await Course.findOne({ link: args.courseLink });
      if (!course) {
        throw new Error("course-not-found");
      }
      const quiz = await Quiz.findOne({
        courseId: course._id
      })
      const quizAttempt = await QuizAttempts.findOne({
        quizId: quiz.id,
        userId: user.id
      }).sort({ createdAt: -1 })
      return ({
        quizName: quiz.courseId.header,
        userAnswers: quizAttempt.userAnswers,
        quizData: quiz.items,
        scorePercentage: quizAttempt.scorePercentage
      })
    }
};
