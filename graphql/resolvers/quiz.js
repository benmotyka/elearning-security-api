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
    return (quiz._doc);
    },
};
