import Course from "../../models/course.js";
import { coursesData } from "./courses.data.js";

const seedCourses = () => {
  Course.collection.drop();
  console.log("Seeding courses!")
  coursesData.map(async (course) => {
    try {
      const newCourse = await new Course({
        header: course.header,
        description: course.description,
        link: course.link,
      }).save();
      console.log(`${newCourse.header} course added!`);
    } catch (error) {
      console.log(error);
    }
  });
};

export default seedCourses;
