import Course from "../../models/course.js";
import Quiz from "../../models/quiz.js";
import User from "../../models/user.js";
import QuizAttempts from "../../models/quizAttempts.js";
import CourseRating from "../../models/courseRating.js";
import loggerConfig from "../../config/logger.js";
const logger = loggerConfig({ label: "quiz-resolver" });

export default {
  getQuizData: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-not-found");
    }
    logger.info(`Getting ${args.courseLink} quiz data for user: ${user.email}`);

    const course = await Course.findOne({ link: args.courseLink });
    const quiz = await Quiz.findOne({
      courseId: course._id,
    });
    if (!quiz) {
      throw new Error("quiz-not-found");
    }
    if (
      user.quizesFinished.some(
        (alreadyFinished) =>
          alreadyFinished.courseId._id.toString() === course._id.toString()
      )
    ) {
      throw new Error("quiz-finished");
    }
    return {
      _id: quiz.id,
      items: quiz.items,
    };
  },
  finishQuiz: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-not-found");
    }

    logger.info(`Finishing quiz: ${args.courseLink} for user: ${user.email}`);

    const course = await Course.findOne({ link: args.courseLink });
    const quiz = await Quiz.findOne({
      courseId: course._id,
    });

    let userScore = 0;
    const userAnswers = JSON.parse(args.userAnswers);
    quiz.items.forEach((quizItem) => {
      userAnswers.forEach((userItem) => {
        if (
          Object.values(userItem.question).every((item) =>
            Object.values(quizItem.question).includes(item)
          )
        ) {
          quizItem.answers.forEach((quizAnswer) => {
            if (
              Object.values(userItem.answer.text).every((item) =>
                Object.values(quizAnswer.text).includes(item)
              ) &&
              quizAnswer.isCorrect
            )
              userScore++;
          });
        }
      });
    });

    if (!user.quizesFinished.some((quiz) => quiz._id.toString() === quiz.id)) {
      user.quizesFinished.push(quiz.id);
    }

    const quizAttempt = new QuizAttempts({
      quizId: quiz.id,
      userId: user.id,
      userAnswers: args.userAnswers,
      scorePercentage: Math.round((userScore / quiz.items.length) * 1e2) / 1e2,
    });
    await quizAttempt.save();
    await user.save();
    return { correctAnswers: userScore, numberOfQuestions: quiz.items.length };
  },
  getQuizSummaryData: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-not-found");
    }

    logger.info(
      `Getting quiz: ${args.courseLink} summary data for user: ${user.email}`
    );

    const course = await Course.findOne({ link: args.courseLink });
    if (!course) {
      throw new Error("course-not-found");
    }
    const quiz = await Quiz.findOne({
      courseId: course._id,
    });
    const quizAttempt = await QuizAttempts.findOne({
      quizId: quiz.id,
      userId: user.id,
    }).sort({ createdAt: -1 });

    const courseRate = await CourseRating.findOne({
      courseId: course.id,
      userId: user.id,
    });

    const userRated = courseRate ? true : false;

    return {
      quizName: quiz.courseId.header,
      userAnswers: quizAttempt.userAnswers,
      quizData: quiz.items,
      scorePercentage: quizAttempt.scorePercentage,
      showRateButton: !userRated,
    };
  },
  getOverallQuizesData: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("unauthenticated");
      }
      const user = await User.findById(req.userId);
      if (!user) {
        throw new Error("user-not-found");
      }

      logger.info(`Getting overall quizes data for user: ${user.email}`);

      const quizes = await Quiz.find();

      const rawQuizAttempts = await Promise.all(
        quizes.map(async (quiz) => {
          const quizAttempt = await QuizAttempts.findOne({
            quizId: quiz.id,
            userId: user.id,
          }).sort({ createdAt: -1 });
          return quizAttempt ? quizAttempt : null;
        })
      );
      const quizAttempts = rawQuizAttempts.filter((item) => item);

      const overallPercentage = quizAttempts.reduce(
        (prev, curr) => prev + curr.scorePercentage,
        0
      );

      if (!overallPercentage) return null;

      const finishedQuizes = quizAttempts.map((quizAttempt) => ({
        scorePercentage: quizAttempt.scorePercentage * 100,
        header: quizAttempt.quizId.courseId.header,
        link: quizAttempt.quizId.courseId.link,
      }));

      // round numbers to 100
      const overallSuccess = Math.round(
        (overallPercentage / quizAttempts.length) * 100
      );

      return {
        overallScore: [
          { value: overallSuccess },
          { value: 100 - overallSuccess },
        ],
        finishedQuizes
      };
    } catch (error) {
      logger.error(`Error in getting overall quizes data: ${error}`);
    }
  },
};
