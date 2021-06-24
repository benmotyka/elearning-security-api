import Quiz from "../../models/quizQuestion.js";
import Course from "../../models/course.js";
import User from "../../models/user.js";

export default {
  getQuizQuestions: async (args) => {
    const course = await Course.findOne({ link: args.courseName });
    return await Quiz.find({ course: course._id });
  },
};
