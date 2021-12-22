import Course from "../../models/course.js";
import Quiz from "../../models/quiz.js"
import User from "../../models/user.js";

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
      user.quizesFinished.push(quiz);
      await user.save();
      return ({correctAnswers: userScore, numberOfQuestions: quiz.items.length});
    }
};
