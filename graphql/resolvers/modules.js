import course from "../../models/course";
import jwt from "jsonwebtoken";

export default {
  courses: async (args, req) => {
    try {
      return course.map(() => {
        return {
          ...course._doc,
        };
      });
    } catch (error) {
      throw error;
    }
  },
};
