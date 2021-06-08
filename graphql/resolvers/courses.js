import Course from "../../models/course.js";

export default {
  coursesPreview: async () => {
    const courses = await Course.find()
    return courses.map(course => (
      {
        ...course._doc,
      }
    ))
  },
};
