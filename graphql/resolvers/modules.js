import module from "../../models/module";
import jwt from "jsonwebtoken";

export default {
  modules: async (args, req) => {
    try {
      return modules.map(() => {
        return {
          ...module._doc,
        };
      });
    } catch (error) {
      throw error;
    }
  },
};
