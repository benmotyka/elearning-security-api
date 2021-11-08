import Course from "../../models/course.js";
import User from "../../models/user.js";

export default {
  courses: async (args) => {
    const courses = await Course.find();
    const response = courses.map(course => ({...course._doc}));
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
    const course = await Course.findOne({ link: args.courseName });
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
};
