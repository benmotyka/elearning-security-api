import Course from "../../models/course.js";
import Quiz from "../../models/quiz.js"
import User from "../../models/user.js";
import CourseRating from "../../models/courseRating.js"
import validateCaptcha from "../../functions/captcha/validateCaptcha.js";

export default {
  courses: async (args) => {
    const lang = args.language
    const courses = await Course.find();
    const response = courses.map(course => 
      ({...course._doc, description: course.description[lang], header: course.header[lang]})
  );
    if (args.quantity) return response.slice(0, args.quantity)
    return response
},
addCourseToFinished: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-not-found");
    }
    const course = await Course.findOne({ link: args.courseName });
    if (!course) {
      throw new Error("course-not-found");
    }
        
    await user.coursesStarted.pull({ _id: course._id })

    if (
      !user.coursesFinished.some(
        (alreadyFinished) =>
          alreadyFinished._id.toString() === course._id.toString()
      )
    ) {
      user.coursesFinished.push(course);
      await user.save();
    }
    return (course._doc);
  },
  checkIfCourseFinished: async (args, req) => {
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
    if (
      !user.coursesFinished.some(
        (alreadyFinished) =>
          alreadyFinished._id.toString() === course._id.toString()
      )
    ) {
      throw new Error("course-not-finished");
    }
    return (course._doc);
  },
  addCourseToStarted: async (args, req) => {
    if (!req.isAuth) throw new Error("unauthenticated");
    
    const user = await User.findById(req.userId);
    if (!user) throw new Error("user-not-found");
    
    const course = await Course.findOne({ link: args.courseName });

    if (!course) throw new Error("course-not-found");
    
    if (
      user.coursesFinished.some(
        (alreadyStarted) =>
        alreadyStarted._id.toString() === course._id.toString()
      )
    ) throw new Error("course-already-finished")
    if (
      !user.coursesStarted.some(
        (alreadyStarted) =>
        alreadyStarted._id.toString() === course._id.toString()
      )
    ) {
      user.coursesStarted.push(course);
      await user.save();
    }
    return (course._doc);
  },
  restartCourseAndQuiz: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-not-found");
    }
    const course = await Course.findOne({ link: args.courseName });
    if (!course) {
      throw new Error("course-not-found");
    }
    const quiz = await Quiz.findOne({ courseId: course._id });
    if (!quiz) {
      throw new Error("quiz-not-found");
    }

    await user.coursesFinished.pull({ _id: course._id })
    await user.quizesFinished.pull({ _id: quiz._id })

    if (
      !user.coursesStarted.some(
        (alreadyFinished) =>
          alreadyFinished._id.toString() === course._id.toString()
      )
    ) {
      user.coursesStarted.push(course);
      await user.save();
    }
    return (course._doc);
  },
  rateCourse: async (args, req) => {
    const {courseName, rate, comment, captchaToken} = args
    await validateCaptcha(captchaToken);
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("user-not-found");
    }
    const course = await Course.findOne({ link: courseName });
    if (!course) {
      throw new Error("course-not-found");
    }
    
    const newCourseRating = new CourseRating({
      courseId: course.id,
      userId: user.id,
      comment,
      rating: rate
    });
    await newCourseRating.save();
    return ({resultStatus: 'ok'})
  },
  getCourseRating: async (args) => {
    const course = await Course.findOne({ link: args.courseLink });
    if (!course) {
      throw new Error("course-not-found");
    }
    const rates = await CourseRating.find({courseId: course.id})
    const comments = rates.filter(rate => 
      (rate.comment)
    ).map(rate => ({
      username: rate.userId.name,
      comment: rate.comment,
      createdAt: rate.createdAt
    }))
    const averageRate = rates.length ? rates.reduce(function (acc, rate) { return acc + rate.rating; }, 0) / rates.length : 0;
    return ({
      averageRate, 
      votes: rates.length,
      comments
    })
  }
};
